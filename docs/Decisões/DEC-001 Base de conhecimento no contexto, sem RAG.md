---
tags: [decisao]
status: aceita
data: 2026-09-13
---

# DEC-001 Base de conhecimento no contexto, sem RAG

Voltar ao [[00 Índice]].

**Contexto:** a primeira versão do README previa RAG completo (chunking, embeddings, pgvector, limiar de similaridade, reindexação). Isso não cabe no prazo de duas semanas.

**Decisão:** a base é um conjunto de arquivos markdown por tema em `knowledge-base/`, inseridos inteiros no system prompt a cada requisição.

**Motivos:**
- Reduz a complexidade.
- É adequada ao volume documental do MVP.
- Atualizar a base é editar um arquivo, sem mudar código.
- Mantém o fallback funcional: o Groq não gera embeddings compatíveis com os do Gemini.

**Consequências:**
- Mais tokens por requisição e dependência da janela de contexto.
- É preciso medir o tamanho da base ([[Pendências]]).
- RAG passa a ser evolução futura ([[README#16. Evoluções futuras (fora do escopo da IC)]]).

**Relacionadas:** [[DEC-007 Gemini 2.5 Flash como modelo inicial]], [[Como editar a base de conhecimento]], [[Fluxo do chat]]

**Onde aparece:** [[README#7. Base de conhecimento]], `lib/server/knowledge-base.ts`, `lib/server/prompt.ts`
