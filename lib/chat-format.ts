// O system prompt pede que a resposta termine com "Fonte: <título do tema>".
const SOURCE_LINE = /^\s*fontes?\s*:\s*(.+?)\s*$/i;

export function splitSources(text: string): { body: string; sources: string[] } {
  const lines = text.split(/\r?\n/);
  const sources: string[] = [];
  let end = lines.length;

  while (end > 0) {
    const line = lines[end - 1];
    if (line.trim() === "") {
      end--;
      continue;
    }
    const match = line.match(SOURCE_LINE);
    if (!match) break;
    const found = match[1]
      .split(";")
      .map((source) => source.trim().replace(/\.$/, ""))
      .filter(Boolean);
    sources.unshift(...found);
    end--;
  }

  const body = lines.slice(0, end).join("\n").trimEnd();
  // Uma resposta que seja só a linha de fonte continua sendo exibida como texto.
  return body ? { body, sources } : { body: text.trim(), sources: [] };
}

// Durante o streaming, esconde a linha "Fonte:" enquanto ela chega; os chips aparecem quando a resposta termina.
export function hideTrailingSourceLine(text: string): string {
  const lines = text.trimEnd().split(/\r?\n/);
  const last = lines.at(-1)?.trim().toLowerCase() ?? "";
  if (last && ("fontes:".startsWith(last) || "fonte:".startsWith(last) || SOURCE_LINE.test(last))) {
    lines.pop();
  }
  return lines.join("\n").trimEnd();
}

export type TextPart = { kind: "text" | "masked"; value: string };

// Marcadores gerados pela anonimização no servidor (lib/server/guardrails/pii-redactor.ts).
const MASKED_TOKEN = /(\[(?:CPF|EMAIL|TELEFONE)\])/;

export function splitMaskedData(text: string): TextPart[] {
  return text
    .split(MASKED_TOKEN)
    .filter(Boolean)
    .map((value) => ({ kind: MASKED_TOKEN.test(value) ? "masked" : "text", value }));
}
