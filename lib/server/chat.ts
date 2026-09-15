import "server-only";
import { randomUUID } from "node:crypto";
import { describeAcademicContext, type AcademicContext } from "@/lib/academic-context";
import type { ChatStreamEvent } from "@/lib/chat-stream";
import { getEnv } from "./env";
import { redactPII } from "./guardrails/pii-redactor";
import { getKnowledgeBase } from "./knowledge-base";
import { getChatProvider } from "./llm";
import { LLMError, type ChatTurn } from "./llm/provider";
import { logInteraction, type InteractionAction } from "./logger";
import { buildSystemPrompt } from "./prompt";

export type ChatInput = {
  conversationId: string;
  message: string;
  history: ChatTurn[];
  context?: AcademicContext;
};

export type PreparedChat = {
  // Gera os eventos da resposta. O log é gravado ao final, inclusive quando o navegador cancela.
  events: (signal?: AbortSignal) => AsyncGenerator<ChatStreamEvent>;
};

const FALLBACK_REPLY =
  "Não consegui responder agora. Tente novamente em instantes. Se precisar com urgência, procure a Central de Atendimento da UNIFENAS.";

// Garante que o histórico comece pelo usuário e alterne os papéis, como o Gemini espera.
function normalizeHistory(history: ChatTurn[], maxTurns: number): ChatTurn[] {
  const merged: ChatTurn[] = [];
  for (const turn of history) {
    const last = merged.at(-1);
    if (last?.role === turn.role) {
      last.content = `${last.content}\n\n${turn.content}`;
    } else {
      merged.push({ ...turn });
    }
  }

  const recent = merged.slice(-maxTurns * 2);
  while (recent[0]?.role === "assistant") recent.shift();
  if (recent.at(-1)?.role === "user") recent.pop();
  return recent;
}

// Tudo o que pode falhar antes da resposta (variáveis, base, prompt) acontece aqui,
// para a rota ainda conseguir responder com erro 500 em vez de um stream quebrado.
export async function prepareChat(input: ChatInput): Promise<PreparedChat> {
  const env = getEnv();
  const startedAt = performance.now();
  const interactionId = randomUUID();

  const message = redactPII(input.message);
  // Só as mensagens do usuário passam pela anonimização: as do assistente foram
  // geradas a partir de texto já anonimizado.
  const history = normalizeHistory(input.history, env.CHAT_HISTORY_TURNS).map((turn) =>
    turn.role === "user" ? { ...turn, content: redactPII(turn.content).text } : turn,
  );

  const knowledgeBase = await getKnowledgeBase(env.KB_ALLOW_DRAFTS);
  const systemPrompt = await buildSystemPrompt({
    knowledgeBase: knowledgeBase.text,
    // [PENDENTE: vem da sessão simulada quando o seletor de perfil existir]
    profile: "não informado",
    context: describeAcademicContext(input.context),
  });
  const provider = getChatProvider();

  async function* events(signal?: AbortSignal): AsyncGenerator<ChatStreamEvent> {
    let reply = "";
    let action: InteractionAction = "error";
    let errorMessage: string | null = null;
    let answeredModel: string | null = null;

    try {
      yield { type: "start", interactionId, protectedData: message.redacted };

      const stream = await provider.stream({
        systemPrompt,
        history,
        message: message.text,
        temperature: env.LLM_TEMPERATURE,
        signal,
      });
      answeredModel = stream.model;

      for await (const text of stream.chunks) {
        reply += text;
        yield { type: "delta", text };
      }
      if (!reply.trim()) {
        throw new LLMError(`O modelo ${stream.model} retornou uma resposta vazia.`, provider.name);
      }

      action = "answer";
      yield { type: "done" };
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : String(error);
      console.error("[chat]", error instanceof LLMError ? errorMessage : error);
      // Se o navegador cancelou, ninguém mais lê o stream.
      if (!signal?.aborted) yield { type: "error", message: FALLBACK_REPLY };
    } finally {
      await logInteraction({
        interactionId,
        conversationId: input.conversationId,
        userHash: null,
        userProfile: null,
        academicContext: input.context ?? null,
        userMessageRedacted: message.text,
        assistantMessageRedacted: action === "answer" ? reply : null,
        action,
        guardrailFlags: message.redacted ? ["pii_redacted"] : [],
        llmProvider: provider.name,
        llmModel: answeredModel ?? provider.model,
        usedFallback: answeredModel !== null && answeredModel !== provider.model,
        promptVersion: env.PROMPT_VERSION,
        kbVersion: knowledgeBase.version,
        latencyMs: Math.round(performance.now() - startedAt),
        errorMessage: errorMessage ?? (action === "error" ? "Resposta interrompida antes do fim." : null),
      });
    }
  }

  return { events };
}
