---
tags: [decisao, interface]
status: aceita
data: 2026-09-14
---

# DEC-014 Página do projeto na raiz e chat em /chat

Voltar ao [[00 Índice]].

**Contexto:** o Lucca pediu uma página que explique o projeto (motivação, problema, argumentação), aberta no endereço principal (`localhost:3000` hoje, e a URL definitiva depois). O chat segue sendo a parte mais importante e fica em uma aba própria.

**Decisão:**
- `/` passa a ser a página do projeto. Antes era só um redirecionamento para `/chat`.
- `/chat` continua sendo o chat.
- Um cabeçalho comum (`components/SiteHeader.tsx`) fica nas duas páginas, com a assinatura, as abas "Projeto" e "Chat" e o botão de dia e noite.
- O conteúdo da página vem **somente** do [[Relatório IC (texto extraído)]] e do [[README]], concentrado em `lib/project-content.ts`, com a origem de cada bloco comentada.
- Na seção "Cinco comportamentos centrais", cada item mostra a situação real ("Disponível", "Em parte" ou "Em desenvolvimento"), conforme o [[Progresso]], para a página não prometer o que ainda não existe.

**Conflito com decisão anterior:** a [[DEC-004 Sessão simulada por seletor de perfil]] e o README (seções 5.4, 11 e 12) reservavam `/` para o seletor de perfil. Com esta decisão, o seletor precisa de outra rota ([[Pendências]]).

**Consequências:**
- Quando o relatório de IC for atualizado (objetivo b, metodologia, Quadro 02), `lib/project-content.ts` precisa ser revisado junto.
- A situação dos comportamentos precisa ser atualizada conforme as entregas avançam.

**Relacionadas:** [[DEC-011 Identidade visual endossada pela UNIFENAS]], [[DEC-013 Modo dia e noite com data-theme]], [[Mapa do código]]
