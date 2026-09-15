import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";

const PROMPT_PATH = path.join(process.cwd(), "prompts", "system-prompt.md");

let cached: Promise<string> | null = null;

function loadTemplate(): Promise<string> {
  if (process.env.NODE_ENV !== "production") return readFile(PROMPT_PATH, "utf8");

  cached ??= readFile(PROMPT_PATH, "utf8").catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
}

export async function buildSystemPrompt(params: {
  knowledgeBase: string;
  profile: string;
  // Câmpus e curso escolhidos no seletor do chat (ver lib/academic-context.ts).
  context: string;
}): Promise<string> {
  const template = await loadTemplate();
  // Funções como substituto evitam que "$" no texto da base (ex.: "R$") seja
  // interpretado como padrão especial do String.replace.
  return template
    .replace("{perfil}", () => params.profile)
    .replace("{contexto}", () => params.context)
    .replace("{base_de_conhecimento}", () => params.knowledgeBase);
}
