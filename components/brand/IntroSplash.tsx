"use client";

import { useEffect, useState, type AnimationEvent } from "react";
import { MARK_BODY_PATH, MARK_FLAP_PATH } from "./BrandMark";

// Tempo máximo na tela, caso o navegador não dispare o fim da animação.
const FALLBACK_MS = 2400;

// Abertura ao entrar na página do projeto ou no chat: o contorno do símbolo é desenhado, o balão se preenche,
// a dobra ciano encaixa e a legenda aparece. As animações ficam em app/globals.css (classes intro-*).
// Clicar pula a abertura.
export function IntroSplash({ label }: { label: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>) {
    // Só o fim da saída da própria camada encerra; as animações internas também sobem até aqui.
    if (event.target === event.currentTarget) setDone(true);
  }

  if (done) return null;

  return (
    <div className="intro-overlay" aria-hidden onClick={() => setDone(true)} onAnimationEnd={handleAnimationEnd}>
      <div className="intro-stage">
        <svg width={72} height={72} viewBox="0 0 120 120" focusable="false">
          <path className="intro-body-fill" d={MARK_BODY_PATH} />
          <path className="intro-body-line" d={MARK_BODY_PATH} pathLength={1} />
          <path className="intro-flap" d={MARK_FLAP_PATH} />
        </svg>
        <div className="intro-label flex items-center gap-2.5 font-mono text-xs text-muted">
          <span className="flex gap-1">
            {[0, 1, 2].map((index) => (
              <span key={index} className="intro-dot" style={{ animationDelay: `${index * 140}ms` }} />
            ))}
          </span>
          {label}
        </div>
      </div>
    </div>
  );
}
