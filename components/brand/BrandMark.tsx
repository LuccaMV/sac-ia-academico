// Símbolo do SAC IA Acadêmico: balão de conversa com canto dobrado (docs/Marca/Brand kit.md).
export const MARK_BODY_PATH = "M32 10 H76 L110 44 V74 Q110 96 88 96 H38 L10 116 V32 Q10 10 32 10 Z";
export const MARK_FLAP_PATH = "M76 10 L110 44 H82 Q76 44 76 38 Z";

type BrandMarkProps = {
  size?: number;
  className?: string;
  // Sem título, o símbolo é decorativo e fica oculto para leitores de tela.
  title?: string;
  // Por padrão acompanha o tema (marinho no dia, branco na noite); a dobra é sempre ciano.
  body?: string;
  flap?: string;
};

export function BrandMark({
  size = 32,
  className,
  title,
  body = "var(--mark-body)",
  flap = "var(--mark-flap)",
}: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={MARK_BODY_PATH} style={{ fill: body }} />
      <path d={MARK_FLAP_PATH} style={{ fill: flap }} />
    </svg>
  );
}
