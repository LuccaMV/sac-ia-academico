import "server-only";
import type { AcademicContext } from "@/lib/academic-context";
import { getSupabaseAdmin } from "./supabase";

export type InteractionAction =
  | "answer"
  | "disambiguation"
  | "document_link"
  | "document_not_found"
  | "refused_sensitive_rule"
  | "error";

export type InteractionLog = {
  // Identifica a resposta; o feedback do usuário aponta para ele.
  interactionId: string;
  conversationId: string;
  // Preenchidos quando a sessão simulada existir. Sem eles o log não vai ao banco,
  // porque a tabela exige usuário e perfil.
  userHash: string | null;
  userProfile: "aluno" | "docente" | "funcionario" | null;
  // Câmpus e curso escolhidos no seletor do chat, quando houver.
  academicContext: AcademicContext | null;
  userMessageRedacted: string;
  assistantMessageRedacted: string | null;
  action: InteractionAction;
  guardrailFlags: string[];
  llmProvider: string | null;
  llmModel: string | null;
  usedFallback: boolean;
  promptVersion: string;
  kbVersion: string;
  latencyMs: number;
  errorMessage: string | null;
};

export type FeedbackLog = {
  interactionId: string;
  conversationId: string;
  helpful: boolean;
};

export async function logInteraction(entry: InteractionLog): Promise<void> {
  const supabase = getSupabaseAdmin();

  if (!supabase || !entry.userHash || !entry.userProfile) {
    console.info("[interaction]", JSON.stringify(entry));
    return;
  }

  const { error } = await supabase.from("interaction_logs").insert({
    interaction_id: entry.interactionId,
    conversation_id: entry.conversationId,
    user_hash: entry.userHash,
    user_profile: entry.userProfile,
    academic_context: entry.academicContext,
    user_message_redacted: entry.userMessageRedacted,
    assistant_message_redacted: entry.assistantMessageRedacted,
    action: entry.action,
    guardrail_flags: entry.guardrailFlags,
    llm_provider: entry.llmProvider,
    llm_model: entry.llmModel,
    used_fallback: entry.usedFallback,
    prompt_version: entry.promptVersion,
    kb_version: entry.kbVersion,
    latency_ms: entry.latencyMs,
    error_message: entry.errorMessage,
  });

  // Falha de log não pode derrubar a resposta ao usuário.
  if (error) {
    console.error("[interaction] falha ao gravar no Supabase:", error.message);
  }
}

// Avaliação "essa resposta ajudou?" feita pelo usuário no chat.
export async function logFeedback(entry: FeedbackLog): Promise<void> {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    console.info("[feedback]", JSON.stringify(entry));
    return;
  }

  const { error } = await supabase.from("interaction_feedback").insert({
    interaction_id: entry.interactionId,
    conversation_id: entry.conversationId,
    helpful: entry.helpful,
  });

  if (error) {
    console.error("[feedback] falha ao gravar no Supabase:", error.message);
  }
}
