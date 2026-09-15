---
tags: [arquitetura, codigo]
atualizado_em: 2026-09-14
---

# Mapa do código

Voltar ao [[00 Índice]]. Como as peças se ligam: [[Fluxo do chat]].

## Existentes

| Arquivo | Responsabilidade |
|---|---|
| `app/page.tsx` | Página do projeto: motivação, problema, argumentação, objetivos, funcionamento, metodologia, LGPD, escopo, equipe e referências ([[DEC-014 Página do projeto na raiz e chat em barra chat]]) |
| `lib/project-content.ts` | Textos da página do projeto, tirados do relatório de IC e do README, com a origem comentada |
| `app/chat/page.tsx` | Página do chat: cabeçalho comum e chip de base em conferência |
| `components/SiteHeader.tsx` | Cabeçalho comum com assinatura, abas "Projeto" e "Chat" e botão de tema |
| `components/StatusChip.tsx` | Chips de estado (fonte, proteção, atenção, erro, neutro) e aviso de base em conferência |
| `lib/server/knowledge-status.ts` | Informa se a base usada ainda tem arquivos em rascunho |
| `app/api/chat/route.ts` | Rota POST: valida corpo e contexto e devolve a resposta em stream NDJSON ([[DEC-016 Streaming, feedback por resposta e contexto de câmpus e curso]]) |
| `app/api/feedback/route.ts` | Rota POST do "Essa resposta ajudou?", ligado ao `interactionId` |
| `components/ContextSelector.tsx` | Seletores de câmpus e curso acima da caixa de mensagem |
| `lib/academic-context.ts` | Lista de câmpus e cursos (tirada da base), validação e texto do contexto para o prompt |
| `lib/use-academic-context.ts` | Hook que guarda câmpus e curso escolhidos no navegador |
| `lib/chat-stream.ts` | Tipos dos eventos do stream e leitor de NDJSON no navegador |
| `supabase/migrations/0002_feedback_e_contexto.sql` | `interaction_id` e `academic_context` no log e tabela `interaction_feedback` |
| `app/layout.tsx` | Layout raiz: pt-BR, fontes Manrope e IBM Plex Mono, script de tema no `<head>`, `themeColor` |
| `app/globals.css` | Tokens de cor do brand kit para dia e noite ([[DEC-013 Modo dia e noite com data-theme]]) |
| `app/icon.svg` | Favicon com o símbolo |
| `components/ChatWindow.tsx` | Interface do chat: capa, balões com texto chegando em tempo real, chips de fonte e proteção, botões de feedback, seletor de contexto e caixa de envio |
| `components/ThemeToggle.tsx` | Botão de modo dia e noite |
| `components/brand/BrandMark.tsx` | Símbolo em SVG, com cores que acompanham o tema |
| `components/brand/BrandLockup.tsx` | Assinatura "SAC IA / ACADÊMICO" |
| `components/brand/HalftoneHorizon.tsx` | Horizonte em retícula da capa |
| `components/brand/IntroSplash.tsx` | Abertura com o símbolo sempre que a página do projeto ou o chat abrem |
| `lib/theme.ts` | Leitura, gravação e aplicação do tema; script inline |
| `lib/chat-format.ts` | Separa a linha "Fonte:" da resposta (e a esconde durante o streaming) e os marcadores `[CPF]`, `[EMAIL]` e `[TELEFONE]` |
| `lib/server/env.ts` | Valida variáveis de ambiente com Zod |
| `lib/server/chat.ts` | Orquestra anonimização, base, prompt e modelo; gera os eventos do stream e grava o log no fim |
| `lib/server/knowledge-base.ts` | Lê e valida a base, remove comentários, calcula `kb_version` |
| `lib/server/prompt.ts` | Preenche `{perfil}`, `{contexto}` e `{base_de_conhecimento}` no prompt |
| `lib/server/llm/provider.ts` | Interface `LLMProvider` (resposta em trechos) e `LLMError` |
| `lib/server/llm/gemini.ts` | Implementação com Gemini ([[DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash]]) |
| `lib/server/llm/index.ts` | Escolhe o provedor (futuro fallback) |
| `lib/server/guardrails/pii-redactor.ts` | Mascara CPF, e-mail e telefone |
| `lib/server/logger.ts` | Log estruturado e feedback: console ou tabelas `interaction_logs` e `interaction_feedback` |
| `lib/server/supabase.ts` | Cliente Supabase com chave secreta, só no servidor |
| `prompts/system-prompt.md` | System prompt v0.3: todos os câmpus, contexto de câmpus e curso escolhido no chat, nomes só com função ([[prompts/system-prompt]], [[DEC-015 Base ampliada com todos os câmpus e nomes com função]]) |
| `knowledge-base/*.md` | Base de conhecimento, 12 temas ([[Como editar a base de conhecimento]]) |
| `img_base_conhecimento/` | Fotos de documentos para transcrição; não vão para o modelo ([[img_base_conhecimento/README]]) |
| `supabase/migrations/0001_init.sql` | Tabelas, índices e RLS |
| `next.config.ts` | Inclui base e prompt no deploy |
| `public/brand/sac-ia-simbolo.svg`, `public/brand/sac-ia-simbolo-negativo.svg` | Símbolo da marca ([[Brand kit]]) |
| `docs/Marca/brandkit.html` | Fonte do painel do brand kit, exportado para `docs/Marca/brand-kit-sac-ia.png` |
| `.env.example` / `.env.local` | Variáveis de ambiente (o `.env.local` não vai para o Git) |

## Planejados ([[README#12. Estrutura de pastas]])

| Arquivo | Dia do roadmap |
|---|---|
| `app/api/session/route.ts`, `app/api/simulated-users/route.ts`, `lib/server/session.ts` | 3 |
| `lib/server/tools/buscar-documentos.ts`, `lib/server/tools/gerar-link-documento.ts`, `components/DocumentLinkCard.tsx` | 6 |
| `lib/server/guardrails/sensitive-rule.ts` | 8 |
| `lib/server/llm/groq.ts` | 10 |
| `evaluation/cenarios.json`, `evaluation/run-scenarios.ts` | 11 |
| `tests/unit/` | 12 |
| `supabase/seed.sql` | 2 |

Andamento em [[Progresso]].
