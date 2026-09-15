import { z } from "zod";
import { CAMPUS_OPTIONS, isCourseOffered } from "@/lib/academic-context";
import type { ChatStreamEvent } from "@/lib/chat-stream";
import { prepareChat } from "@/lib/server/chat";

const contextSchema = z
  .object({
    campus: z.enum(CAMPUS_OPTIONS),
    curso: z.string().min(1).max(80).optional(),
  })
  .refine((context) => !context.curso || isCourseOffered(context.campus, context.curso), {
    message: "Curso não oferecido no câmpus informado.",
  });

const bodySchema = z.object({
  conversationId: z.uuid(),
  message: z.string().trim().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(8000),
      }),
    )
    .max(50)
    .default([]),
  context: contextSchema.optional(),
});

// Converte os eventos em NDJSON (um JSON por linha). O stream é puxado sob demanda;
// se o navegador cancelar, o gerador é encerrado e grava o log.
function toNdjsonStream(events: AsyncGenerator<ChatStreamEvent>): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        const { value, done } = await events.next();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(encoder.encode(`${JSON.stringify(value)}\n`));
        }
      } catch (error) {
        console.error("[api/chat] falha no stream:", error);
        controller.error(error);
      }
    },
    async cancel() {
      await events.return(undefined);
    },
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corpo da requisição não é um JSON válido." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Requisição inválida." }, { status: 400 });
  }

  try {
    const chat = await prepareChat(parsed.data);
    return new Response(toNdjsonStream(chat.events(request.signal)), {
      headers: {
        "Content-Type": "application/x-ndjson; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        // Evita que proxies segurem os trechos até o fim da resposta.
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("[api/chat]", error);
    const detail =
      process.env.NODE_ENV !== "production" && error instanceof Error ? error.message : undefined;
    return Response.json(
      { error: "Erro interno ao processar a mensagem.", detail },
      { status: 500 },
    );
  }
}
