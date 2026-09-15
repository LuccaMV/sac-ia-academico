import type { CSSProperties } from "react";

const CHIP_TONES = {
  source: "bg-accent-soft text-accent-ink",
  protect: "bg-protect text-protect-ink",
  warn: "bg-warn text-warn-ink",
  danger: "bg-danger text-danger-ink",
  neutral: "bg-page text-muted ring-1 ring-inset ring-line",
} as const;

const DOT_TONES = {
  source: "bg-ciano",
  protect: "bg-ciano",
  warn: "bg-ambar",
  danger: "bg-coral",
  neutral: "bg-muted",
} as const;

export type ChipTone = keyof typeof CHIP_TONES;

// Chips de estado do brand kit: fonte, proteção, atenção, recusa/erro e neutro.
export function StatusChip({
  tone,
  label,
  title,
  mono = false,
  className = "",
  style,
}: {
  tone: ChipTone;
  label: string;
  title?: string;
  mono?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      title={title}
      style={style}
      className={`inline-flex w-max max-w-full items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold ${
        mono ? "font-mono font-medium" : ""
      } ${CHIP_TONES[tone]} ${className}`}
    >
      <span className={`size-1.5 shrink-0 rounded-full ${DOT_TONES[tone]}`} aria-hidden />
      <span className="truncate">{label}</span>
    </span>
  );
}

// Aviso de que a base usada ainda tem arquivos em rascunho. Some em telas pequenas.
export function DraftKnowledgeChip() {
  return (
    <span className="hidden sm:block">
      <StatusChip
        tone="warn"
        label="Base em conferência"
        title="A base de conhecimento ainda está em rascunho e sendo conferida pela equipe."
      />
    </span>
  );
}
