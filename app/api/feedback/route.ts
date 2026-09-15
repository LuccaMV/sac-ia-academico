import { z } from "zod";
import { logFeedback } from "@/lib/server/logger";

// "Essa resposta ajudou?": um voto por resposta, ligado ao interactionId do log.
const bodySchema = z.object({
  interactionId: z.uuid(),
  conversationId: z.uuid(),
  helpful: z.boolean(),
});

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

  await logFeedback(parsed.data);
  return new Response(null, { status: 204 });
}
