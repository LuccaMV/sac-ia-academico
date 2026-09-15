import { BrandMark } from "./BrandMark";

// Assinatura: "SAC IA" em Manrope ExtraBold e "ACADÊMICO" espaçado em ciano.
// Em telas pequenas só o símbolo aparece; o nome acessível fica no link que envolve a assinatura.
export function BrandLockup({ markSize = 34 }: { markSize?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark size={markSize} />
      <span className="hidden leading-none sm:block" aria-hidden>
        <span className="block text-[19px] font-extrabold tracking-[-0.02em] text-brand">SAC IA</span>
        <span className="mt-1 block pl-px text-[9.5px] font-semibold tracking-[0.42em] text-accent">
          ACADÊMICO
        </span>
      </span>
    </span>
  );
}
