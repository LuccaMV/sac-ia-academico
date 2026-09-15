---
tags: [decisao, llm]
status: substituída
data: 2026-09-13
---

# DEC-007 Gemini 2.5 Flash como modelo inicial

Voltar ao [[00 Índice]].

> **Substituída em 2026-09-14 por [[DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash]]:** o `gemini-2.5-flash` retornou 404 para novos usuários. Os detalhes do SDK abaixo continuam válidos.

**Contexto:** a documentação oficial consultada em 2026-09-13 lista vários modelos Flash com uso gratuito, entre eles `gemini-2.5-flash`, `gemini-2.5-flash-lite` e versões 3.x mais novas.

**Decisão:** começar com `gemini-2.5-flash`, configurado em `GEMINI_CHAT_MODEL`. A escolha é provisória.

**Motivos:** modelo estável, gratuito e bem documentado. Trocar de modelo é só mudar a variável de ambiente.

**A confirmar:**
- Suporte a chamada de ferramentas antes do dia 6.
- Limites do plano gratuito frente ao tamanho do prompt, já que a base vai inteira em cada requisição.

**Detalhes técnicos verificados no SDK `@google/genai` 2.22.0:**
- Chamada: `ai.models.generateContent({ model, contents, config: { systemInstruction, temperature } })`.
- Texto da resposta: `response.text`.
- Erros: `ApiError` com o campo `status`, usado para decidir o fallback (429 ou 5xx).
- A documentação também mostra uma API nova (`ai.interactions.create`), que não é usada no projeto.

**Relacionadas:** [[DEC-006 Apenas serviços gratuitos]], [[DEC-001 Base de conhecimento no contexto, sem RAG]], [[Pendências]]

**Onde aparece:** `lib/server/llm/gemini.ts`, `.env.local`
