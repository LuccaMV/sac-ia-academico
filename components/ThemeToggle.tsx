"use client";

import { useLayoutEffect, useSyncExternalStore, type MouseEvent } from "react";
import { applyTheme, DEFAULT_THEME, readStoredTheme, saveTheme, THEME_ATTRIBUTE, type Theme } from "@/lib/theme";

// View Transition API: ainda ausente em alguns navegadores, por isso o método é opcional.
type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

// O tema mora no atributo data-theme do <html>; o componente só observa e altera esse atributo.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: [THEME_ATTRIBUTE] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) === "dark" ? "dark" : "light";
}

// No servidor o tema é desconhecido: o indicador só aparece depois da hidratação.
function getServerSnapshot(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useLayoutEffect(() => {
    // Em desenvolvimento, o Strict Mode remonta o <html> e apaga o atributo aplicado pelo script inline.
    applyTheme(readStoredTheme() ?? DEFAULT_THEME);
  }, []);

  const isDark = theme === "dark";

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = isDark ? "light" : "dark";
    const commit = () => {
      saveTheme(next);
      applyTheme(next);
    };

    const doc = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof doc.startViewTransition !== "function" || reduceMotion) {
      commit();
      return;
    }

    // O círculo do novo tema nasce no centro do botão e cobre a tela inteira.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const root = document.documentElement;
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.classList.add("theme-transition");

    const transition = doc.startViewTransition(commit);
    transition.finished.finally(() => root.classList.remove("theme-transition"));
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Modo noite"
      title={isDark ? "Mudar para o modo dia" : "Mudar para o modo noite"}
      onClick={toggle}
      className="relative inline-flex h-[38px] w-[66px] shrink-0 items-center rounded-full border border-line bg-surface p-1 transition duration-200 hover:border-accent hover:shadow-[0_0_0_4px_rgba(0,171,197,0.12)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden
        className={`absolute left-1 top-1 size-7 rounded-full bg-accent shadow-sm transition-transform duration-300 ease-soft motion-reduce:transition-none ${
          theme === null ? "opacity-0" : ""
        } ${isDark ? "translate-x-7" : "translate-x-0"}`}
      />
      <span
        aria-hidden
        className={`relative z-10 grid size-7 place-items-center transition duration-500 ease-soft ${
          theme === "light" ? "rotate-0 text-tinta" : "-rotate-90 scale-90 text-muted"
        }`}
      >
        <SunIcon />
      </span>
      <span
        aria-hidden
        className={`relative z-10 grid size-7 place-items-center transition duration-500 ease-soft ${
          isDark ? "rotate-0 text-tinta" : "rotate-45 scale-90 text-muted"
        }`}
      >
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
