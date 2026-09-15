---
tags: [decisao, interface, marca]
status: aceita
data: 2026-09-14
---

# DEC-013 Modo dia e noite com data-theme

Voltar ao [[00 Índice]].

**Contexto:** foi pedido aplicar o brand kit no app e oferecer modo dia e noite.

**Decisão:**
- O tema fica no atributo `data-theme` do `<html>` (`light` ou `dark`).
- Todas as cores da interface são tokens CSS que mudam com esse atributo (`app/globals.css`).
- **O padrão é o modo dia**, por pedido do Lucca em 2026-09-14. O tema do sistema operacional é ignorado.
- O modo noite só vale quando o usuário escolhe no botão. A escolha fica salva no `localStorage` (`sac-theme`).

**Como evita a tela piscar (padrão do guia do Next.js 16, `preventing-flash-before-hydration`):**
1. O HTML já chega com `data-theme="light"`. Um script inline no `<head>` (`THEME_INIT_SCRIPT` em `lib/theme.ts`) troca para `dark` antes da primeira pintura, apenas se essa for a escolha salva.
2. O `<html>` tem `suppressHydrationWarning`, porque o script altera o atributo antes do React hidratar.
3. O `ThemeToggle` reaplica o tema em `useLayoutEffect`, já que o Strict Mode apaga o atributo ao remontar em desenvolvimento.
4. O botão lê o tema do DOM com `useSyncExternalStore`, sem `setState` em efeito (a regra `react-hooks/set-state-in-effect` está ativa).

**Mapeamento dos tokens:**

| Token | Dia | Noite |
|---|---|---|
| Página | `#F5F7F8` | `#061A2B` |
| Superfície | `#FFFFFF` | `#0B2F4C` |
| Balão do usuário | marinho `#04436E`, texto branco | ciano `#00ABC5`, texto `#061A2B` |
| Corpo do símbolo | marinho | branco |
| Dobra do símbolo | ciano | ciano |

A capa com o horizonte em retícula é escura nos dois temas, como uma fotografia ([[Brand kit]]).

**Verificado em 2026-09-14:** troca de tema, persistência após recarregar, ausência de erros de hidratação no console e layout de 375 px sem rolagem horizontal.

**Relacionadas:** [[DEC-011 Identidade visual endossada pela UNIFENAS]], [[Mapa do código]]
