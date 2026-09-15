---
tags: [decisao, llm]
status: aceita
data: 2026-09-14
substitui: DEC-007
---

# DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash

Voltar ao [[00 Índice]]. Substitui [[DEC-007 Gemini 2.5 Flash como modelo inicial]].

**Contexto:** no primeiro teste com a chave do Lucca, a API respondeu 404: o `gemini-2.5-flash` não está mais disponível para novos usuários. A própria mensagem de erro recomenda o `gemini-3.6-flash`.

**Decisão:** o modelo padrão passa a ser `gemini-3.6-flash`. A mudança foi feita em `lib/server/env.ts`, `.env.example` e `.env.local`.

**Motivos:**
- É o modelo indicado pelo próprio Google no erro.
- Aparece com uso gratuito na página de preços consultada em 2026-09-13 ([[DEC-006 Apenas serviços gratuitos]]).

**Consequências:**
- O código continua usando `models.generateContent`. A mensagem de erro também recomenda a API nova (`interactions`); migrar só se `generateContent` deixar de funcionar.
- Suporte a chamada de ferramentas com este modelo precisa ser confirmado antes do dia 6 ([[Pendências]]).
- Modelos podem sair do plano gratuito sem aviso: se o erro 404 voltar, a mensagem da API indica o substituto.

**Fallback entre modelos do Gemini (2026-09-14):**
- No segundo teste, o `gemini-3.6-flash` respondeu **503 "high demand"**, uma sobrecarga temporária do Google.
- Foi criada a variável `GEMINI_FALLBACK_MODELS` (padrão: `gemini-3.5-flash,gemini-flash-lite-latest`). Esses modelos são tentados em ordem quando o principal responde 429 ou 5xx.
- O log grava o modelo que respondeu e `used_fallback`.
- Os três modelos foram conferidos na lista retornada pela API para a chave do projeto em 2026-09-14.
- O fallback para o Groq (dia 10) continua planejado para quando todos os modelos do Gemini falharem.

**Relacionadas:** [[Fluxo do chat]], [[Mapa do código]]

**Onde aparece:** `lib/server/env.ts`, `lib/server/llm/gemini.ts`, `.env.local`
