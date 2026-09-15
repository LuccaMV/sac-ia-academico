---
tags: [decisao, chat, interface]
status: aceita
data: 2026-09-14
---

# DEC-016 Streaming, feedback por resposta e contexto de câmpus e curso

Voltar ao [[00 Índice]].

**Contexto:** na revisão geral de 2026-09-14 ([[2026-09-14]]), a espera de 3 a 10 s pela resposta inteira e as perguntas de volta sobre o câmpus foram apontadas como pontos fracos da experiência. O Lucca pediu três sugestões daquela revisão: streaming, "essa resposta ajudou?" e seletor de câmpus e curso.

**Decisão:**
- **Streaming em NDJSON:** `/api/chat` responde com um evento JSON por linha (`start`, `delta`, `done`, `error`). Foi escolhido em vez de Server-Sent Events porque a requisição é um POST com corpo e o formato é simples de ler com `fetch`. O Gemini é chamado com `generateContentStream`.
  - A troca para o modelo reserva só acontece até o primeiro trecho chegar; depois disso uma falha vira erro na tela.
  - Se o navegador cancelar, a chamada ao Gemini é abortada e o log é gravado assim mesmo.
  - O retry interno do SDK foi desligado (`retryOptions.attempts = 1`): com o padrão de 5 tentativas, um 429 deixava o usuário mais de um minuto esperando.
- **Feedback por resposta:** cada resposta recebe um `interactionId` gerado no servidor. Os botões de polegar enviam `{ interactionId, conversationId, helpful }` para `/api/feedback`. Um voto por resposta. Hoje vai para o console; com o Supabase, para a tabela `interaction_feedback` (migração `0002`).
- **Contexto de câmpus e curso:** seletores acima da caixa de mensagem, lembrados no navegador (`localStorage`). A lista vem de `knowledge-base/cursos-graduacao.md` e fica em `lib/academic-context.ts`. O servidor recusa combinações que não existem. O system prompt **v0.3** recebe o contexto em `{contexto}` e responde para ele sem perguntar de novo.

**Privacidade:** câmpus e curso não identificam a pessoa e não são dados pessoais sensíveis; o modelo continua sem receber identificador do usuário ([[DEC-005 O modelo nunca recebe o identificador do usuário]]). O voto não carrega texto livre.

**Consequências:**
- A lista de cursos do seletor precisa ser atualizada junto com a base.
- O feedback não é teste com usuários: serve para calibração e não entra como métrica de aceitação ([[DEC-003 Avaliação por cenários, sem testes com humanos]]).
- Streaming saiu da lista P2 e feedback por resposta saiu das evoluções futuras do [[README]].
- Um script da bateria de cenários precisa ler o NDJSON (ou juntar os eventos) em vez de um JSON único.

**Relacionadas:** [[Fluxo do chat]], [[Mapa do código]], [[DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash]], [[DEC-015 Base ampliada com todos os câmpus e nomes com função]]
