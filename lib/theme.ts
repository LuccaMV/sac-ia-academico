export type Theme = "light" | "dark";

// O app abre sempre no modo dia; o modo noite só vale quando o usuário escolhe.
export const DEFAULT_THEME: Theme = "light";
export const THEME_STORAGE_KEY = "sac-theme";
export const THEME_ATTRIBUTE = "data-theme";

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Armazenamento indisponível (ex.: navegação privada): o tema vale só nesta visita.
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
}

// Roda no <head> antes da primeira pintura. O HTML já chega no modo dia; só troca se houver escolha salva.
export const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="dark")document.documentElement.setAttribute(${JSON.stringify(THEME_ATTRIBUTE)},"dark")}catch(e){}})()`;
