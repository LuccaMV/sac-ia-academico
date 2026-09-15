import "server-only";
import { z } from "zod";

// Variáveis vazias no .env ou no painel da Vercel chegam como "". Aqui "" vale como
// ausente: a variável usa o valor padrão (ou continua opcional) em vez de falhar.
const unset = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => (value === "" ? undefined : value), schema);

const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, "Defina GEMINI_API_KEY no arquivo .env.local"),
  GEMINI_CHAT_MODEL: unset(z.string().min(1).default("gemini-3.6-flash")),
  // Tentados em ordem quando o modelo principal responde 429 ou 5xx (ex.: "high demand").
  GEMINI_FALLBACK_MODELS: unset(
    z
      .string()
      .default("gemini-3.5-flash,gemini-flash-lite-latest")
      .transform((value) =>
        value
          .split(",")
          .map((model) => model.trim())
          .filter(Boolean),
      ),
  ),
  LLM_TEMPERATURE: unset(z.coerce.number().min(0).max(2).default(0.2)),
  PROMPT_VERSION: unset(z.string().min(1).default("v0.3")),
  CHAT_HISTORY_TURNS: unset(z.coerce.number().int().min(0).max(20).default(4)),
  KB_ALLOW_DRAFTS: unset(
    z
      .enum(["true", "false"])
      .default("false")
      .transform((value) => value === "true"),
  ),

  // Supabase: opcional até a sessão simulada entrar. Sem ele, os logs vão para o console.
  SUPABASE_URL: unset(z.url().optional()),
  SUPABASE_SERVICE_ROLE_KEY: unset(z.string().min(1).optional()),
  LOG_HASH_SALT: unset(z.string().min(1).optional()),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

export function getEnv(): Env {
  if (cached) return cached;

  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    const problems = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");
    throw new Error(`Variáveis de ambiente inválidas. ${problems}`);
  }

  cached = parsed.data;
  return cached;
}
