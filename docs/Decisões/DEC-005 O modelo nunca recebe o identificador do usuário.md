---
tags: [decisao, seguranca]
status: aceita
data: 2026-09-13
---

# DEC-005 O modelo nunca recebe o identificador do usuário

Voltar ao [[00 Índice]].

**Decisão:** o modelo de linguagem apenas solicita ações (`buscar_documentos`, `gerar_link_documento`). O backend as executa com o identificador guardado na sessão.

**Regras que decorrem disso:**
- As ferramentas não têm parâmetro de usuário.
- Toda consulta filtra por `owner_user_id` igual ao usuário da sessão ou por documento institucional.
- O backend confirma a posse antes de gerar o link.
- Documento de outro usuário e documento inexistente recebem a mesma resposta (`nao_encontrado`).
- A URL assinada nunca passa pelo modelo nem vai para o log.

**Motivo:** o sistema fica arquiteturalmente incapaz de acessar dados de terceiros, mesmo sob prompt injection. Essa garantia depende da verificação de posse, que precisa de testes unitários e de cenários de acesso a terceiros.

**Desambiguação:** listar opções quando há mais de um arquivo vem das diretrizes do prompt, não de uma árvore de decisão. Por isso pode falhar e é medida nos cenários; a falha afeta a experiência, não a segurança.

**Relacionadas:** [[DEC-004 Sessão simulada por seletor de perfil]], [[DEC-010 Documentos entregues por link assinado em bucket privado]], [[Segurança e privacidade]]

**Onde aparece:** [[README#5.5 Princípio de segurança: o modelo nunca conhece o usuário]]
