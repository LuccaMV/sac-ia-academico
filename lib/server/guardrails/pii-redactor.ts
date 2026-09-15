export type RedactionResult = {
  text: string;
  redacted: boolean;
};

// A ordem importa: e-mail e CPF antes do telefone.
// O telefone exige DDD ou celular iniciado por 9, para não mascarar anos como "2025-2026".
const RULES: { pattern: RegExp; token: string }[] = [
  { pattern: /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g, token: "[EMAIL]" },
  { pattern: /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, token: "[CPF]" },
  {
    pattern: /(?:\(\d{2}\)\s?|\b\d{2}\s)(?:9\d{4}|\d{4})-?\d{4}\b|\b9\d{4}-?\d{4}\b/g,
    token: "[TELEFONE]",
  },
  // [PENDENTE: formato da matrícula / RA da UNIFENAS]
];

export function redactPII(input: string): RedactionResult {
  let text = input;
  for (const { pattern, token } of RULES) {
    text = text.replace(pattern, token);
  }
  return { text, redacted: text !== input };
}
