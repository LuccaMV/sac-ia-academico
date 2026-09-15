---
tags: [projeto, progresso]
atualizado_em: 2026-09-14
---

# Progresso

Voltar ao [[00 Índice]]. Plano de referência: [[README#15.1 Dias 1 a 14: até a apresentação parcial]].

Legenda: ✅ feito · 🟡 parcial · ⬜ não iniciado

## Dias 1 a 14

| Dia | Entrega | Situação | Observação |
|---|---|---|---|
| 1 | Projeto Next.js com TypeScript e Tailwind | ✅ | Next.js 16.3.5, dentro do vault ([[DEC-008 Projeto dentro do vault do Obsidian]]) |
| 1 | Repositório no GitHub | ✅ | Público em 2026-09-15 ([[DEC-017 Repositório público no GitHub]]) |
| 1 | Primeiro deploy na Vercel | ⬜ | Depende do GitHub |
| 1 | Projeto no Supabase | ⬜ | Ver [[Passo a passo de configuração]] |
| 2 | Migração SQL | 🟡 | Arquivo `supabase/migrations/0001_init.sql` escrito, ainda não aplicado |
| 2 | Bucket privado e seed fictício | ⬜ | Depende do projeto no Supabase |
| 2 | Cliente Supabase `server-only` | ✅ | `lib/server/supabase.ts` |
| 3 | Seletor de perfil e sessão | ⬜ | [[DEC-004 Sessão simulada por seletor de perfil]] |
| 4 | Leitura da base, system prompt, Gemini, `/api/chat` | ✅ | Testado com a chave em 2026-09-14, com respostas reais e fonte citada ([[DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash]]) |
| 5 | Tela de chat | ✅ | Com a identidade do brand kit e o modo dia e noite ([[DEC-013 Modo dia e noite com data-theme]]) |
| 6 | Ferramentas de documento e link assinado | ⬜ | [[DEC-010 Documentos entregues por link assinado em bucket privado]] |
| 7 | Desambiguação no prompt | ⬜ | Depende do dia 6 |
| 8 | Anonimização | 🟡 | CPF, e-mail e telefone feitos; matrícula pendente |
| 8 | Regra de sensíveis | ⬜ | Hoje só o prompt recusa |
| 9 | Log estruturado | 🟡 | Logger pronto; grava no console até existir sessão e Supabase |
| 10 | Fallback Groq | 🟡 | Fallback entre modelos do Gemini feito em 2026-09-14; Groq ainda não |
| 11 | Script da bateria de cenários | ⬜ | |
| 12 | Testes unitários | ⬜ | Vitest ainda não instalado |
| 13 | Deploy final e execução preliminar | ⬜ | |
| 14 | Apresentação parcial | ⬜ | |

## Fora do roadmap original

| Entrega | Situação | Observação |
|---|---|---|
| Brand kit v0.1 | ✅ | [[Brand kit]], [[DEC-011 Identidade visual endossada pela UNIFENAS]] |
| Identidade visual aplicada no app | ✅ | Falta o chip de recusa, que depende da regra de sensíveis (dia 8) |
| Modo dia e noite | ✅ | [[DEC-013 Modo dia e noite com data-theme]] |
| Streaming da resposta (P2) | ✅ | NDJSON, com troca de modelo até o primeiro trecho ([[DEC-016 Streaming, feedback por resposta e contexto de câmpus e curso]]) |
| Seletor de câmpus e curso | ✅ | Prompt v0.3 usa o contexto sem perguntar de novo ([[DEC-016 Streaming, feedback por resposta e contexto de câmpus e curso]]) |
| Feedback "Essa resposta ajudou?" | ✅ | Console hoje; tabela `interaction_feedback` quando o Supabase existir |
| Animações e transições | ✅ | Botões, chat, página do projeto e troca de tema em círculo; respeitam "reduzir movimento" ([[2026-09-14]]) |

## Frente de conteúdo

| Entrega | Situação | Observação |
|---|---|---|
| Base de conhecimento | 🟡 | 12 temas em rascunho, todos os câmpus, cerca de 31 mil tokens ([[DEC-015 Base ampliada com todos os câmpus e nomes com função]]); falta a conferência |
| Transcrição de imagens (`img_base_conhecimento/`) | 🟡 | Horário de Ciência da Computação transcrito; aguarda novas imagens |
| Documentos oficiais da secretaria | 🟡 | Regimento 2026 e calendários achados no site; FAQs, intercâmbio e contatos da secretaria faltam ([[Pendências]]) |
| Cenários de teste (`evaluation/cenarios.json`) | ⬜ | |

## Verificações feitas
- 2026-09-13: `tsc`, `eslint` e `next build` passando; anonimização testada; leitura da base testada, inclusive com valores entre aspas; chat testado no navegador até o ponto em que pede a chave do Gemini. Detalhes em [[2026-09-13]].
