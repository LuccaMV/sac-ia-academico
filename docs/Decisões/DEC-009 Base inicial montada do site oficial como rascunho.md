---
tags: [decisao, base-de-conhecimento]
status: aceita
data: 2026-09-13
---

# DEC-009 Base inicial montada do site oficial como rascunho

Voltar ao [[00 Índice]].

**Contexto:** ainda não há documentos oficiais entregues pela secretaria. Foi pedido montar a base a partir do site da UNIFENAS.

**Decisão:** criar os temas com informações encontradas em páginas públicas de `unifenas.br`, todos com `status: rascunho` e notas de curadoria em comentários HTML.

**Regras seguidas:**
- Só entrou o que estava escrito na fonte.
- O que não foi encontrado ficou de fora, com uma frase dizendo que não consta.
- Informações de um curso específico foram marcadas como tal (o calendário é só de Medicina Alfenas, 1º ao 6º período).
- Rascunhos só entram no chat com `KB_ALLOW_DRAFTS=true`, usado em desenvolvimento.

**Consequências:**
- Em produção (`KB_ALLOW_DRAFTS=false`), o chat fica sem base até os arquivos serem conferidos e aprovados.
- A base não substitui os documentos oficiais pedidos em [[Pendências]].

**Relacionadas:** [[Fontes da UNIFENAS]], [[Como editar a base de conhecimento]], [[DEC-001 Base de conhecimento no contexto, sem RAG]]
