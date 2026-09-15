import "server-only";
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const KB_DIR = path.join(process.cwd(), "knowledge-base");

const frontmatterSchema = z.object({
  tema: z.string().min(1),
  titulo: z.string().min(1),
  fonte_oficial: z.string().min(1),
  consultado_em: z.string().optional(),
  versao: z.string().optional(),
  vigencia: z.string().optional(),
  status: z.enum(["rascunho", "aprovado"]),
});

export type KnowledgeFile = z.infer<typeof frontmatterSchema> & {
  arquivo: string;
  conteudo: string;
};

export type KnowledgeBase = {
  files: KnowledgeFile[];
  text: string;
  version: string;
};

function parseFile(raw: string, arquivo: string): KnowledgeFile {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`knowledge-base/${arquivo}: cabeçalho de metadados (---) ausente.`);
  }

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    // O editor de propriedades do Obsidian pode salvar valores entre aspas.
    data[line.slice(0, separator).trim()] = line
      .slice(separator + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, "$2");
  }

  const meta = frontmatterSchema.safeParse(data);
  if (!meta.success) {
    const fields = meta.error.issues.map((issue) => issue.path.join(".")).join(", ");
    throw new Error(`knowledge-base/${arquivo}: cabeçalho inválido nos campos ${fields}.`);
  }

  // Comentários HTML servem para notas de curadoria e não vão para o modelo.
  const conteudo = match[2].replace(/<!--[\s\S]*?-->/g, "").trim();
  return { ...meta.data, arquivo, conteudo };
}

async function loadKnowledgeBase(allowDrafts: boolean): Promise<KnowledgeBase> {
  const names = (await readdir(KB_DIR))
    .filter((name) => name.endsWith(".md") && name.toLowerCase() !== "readme.md")
    .sort();

  const files = await Promise.all(
    names.map(async (name) => parseFile(await readFile(path.join(KB_DIR, name), "utf8"), name)),
  );

  const usable = files.filter((file) => file.status === "aprovado" || allowDrafts);

  const text = usable
    .map(
      (file) =>
        `<<<TEMA: ${file.tema} | ${file.titulo} | fonte: ${file.fonte_oficial}>>>\n${file.conteudo}\n<<<FIM DO TEMA: ${file.tema}>>>`,
    )
    .join("\n\n");

  const version = createHash("sha256").update(text).digest("hex").slice(0, 12);
  return { files: usable, text, version };
}

let cached: Promise<KnowledgeBase> | null = null;

// Em desenvolvimento a base é relida a cada mensagem, para refletir edições na hora.
export function getKnowledgeBase(allowDrafts: boolean): Promise<KnowledgeBase> {
  if (process.env.NODE_ENV !== "production") return loadKnowledgeBase(allowDrafts);

  cached ??= loadKnowledgeBase(allowDrafts).catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
}
