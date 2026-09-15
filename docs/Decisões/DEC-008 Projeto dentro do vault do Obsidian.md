---
tags: [decisao, organizacao]
status: aceita
data: 2026-09-13
---

# DEC-008 Projeto dentro do vault do Obsidian

Voltar ao [[00 Índice]].

**Contexto:** o código foi criado primeiro em uma pasta separada (`sac-ia-academico`). A intenção era que a pasta `SAC-ACADEMICO`, aberta no Obsidian, tivesse tudo.

**Decisão:** `SAC-ACADEMICO` é a raiz do repositório e também o vault. A pasta `docs/` é o segundo cérebro do projeto.

**Consequências:**
- O `node_modules` fica escondido da busca, do grafo e do seletor rápido pelo filtro `userIgnoreFilters` em `.obsidian/app.json`. A pasta ainda pode aparecer no explorador de arquivos.
- O ESLint e o TypeScript ignoram `.obsidian/`, porque o plugin `surfing` traz JavaScript próprio.
- O Git ignora `.obsidian/workspace*.json` e `.trash/`.
- O Obsidian esconde arquivos que começam com ponto, como o `.env.local`. Edite-o em outro editor.
- Não use wikilinks dentro de `knowledge-base/`, porque esse texto vai para o modelo.
- Se usar o Obsidian Sync, exclua o `node_modules` nas configurações dele.
- Para rodar o projeto: `npm run dev` dentro de `SAC-ACADEMICO`.

**Relacionadas:** [[Como trabalhar com o Claude]], [[Como editar a base de conhecimento]]
