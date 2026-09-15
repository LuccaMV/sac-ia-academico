import "server-only";
import { getEnv } from "../env";
import { GeminiProvider } from "./gemini";
import type { LLMProvider } from "./provider";

let provider: LLMProvider | null = null;

// Por enquanto só o Gemini, com fallback entre modelos dele. O fallback para o Groq entra no dia 10 do roadmap.
export function getChatProvider(): LLMProvider {
  if (provider) return provider;
  const env = getEnv();
  provider = new GeminiProvider(env.GEMINI_API_KEY, env.GEMINI_CHAT_MODEL, env.GEMINI_FALLBACK_MODELS);
  return provider;
}
