import { useCallback, useMemo, useSyncExternalStore } from "react";
import { parseAcademicContext, type AcademicContext } from "./academic-context";

const STORAGE_KEY = "sac-contexto-academico";
const CHANGE_EVENT = "sac-contexto-academico";

// Usado quando o armazenamento do navegador está indisponível (ex.: navegação privada).
let memoryValue: string | null = null;

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? memoryValue;
  } catch {
    return memoryValue;
  }
}

// No servidor não há escolha salva: o seletor começa vazio e é preenchido na hidratação.
function getServerSnapshot(): string | null {
  return null;
}

// Câmpus e curso escolhidos no chat, lembrados neste navegador.
export function useAcademicContext(): [AcademicContext, (next: AcademicContext) => void] {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const context = useMemo<AcademicContext>(() => {
    if (!raw) return {};
    try {
      return parseAcademicContext(JSON.parse(raw));
    } catch {
      return {};
    }
  }, [raw]);

  const setContext = useCallback((next: AcademicContext) => {
    memoryValue = JSON.stringify(next);
    try {
      localStorage.setItem(STORAGE_KEY, memoryValue);
    } catch {
      // Armazenamento indisponível: a escolha vale só enquanto a página estiver aberta.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return [context, setContext];
}
