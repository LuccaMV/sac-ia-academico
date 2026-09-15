---
tags: [decisao, seguranca]
status: aceita
data: 2026-09-13
---

# DEC-004 Sessão simulada por seletor de perfil

Voltar ao [[00 Índice]].

**Contexto:** a autenticação real está fora do escopo.

**Decisão:** o MVP assume que a sessão chega validada pelo servidor institucional. Isso é simulado por uma tela que lista usuários fictícios (`simulated_users`); a escolha grava o identificador na sessão do servidor, em um cookie `httpOnly` criptografado (`iron-session`).

**Consequências:**
- Nenhuma rota aceita identificador de usuário vindo do corpo da requisição.
- Numa integração futura, basta trocar a tela de escolha pela validação institucional.
- Os documentos pessoais do MVP são fictícios.
- Situação atual: ainda não implementado ([[Progresso]]).
- **Atualização em 2026-09-14:** a rota `/` virou a página do projeto ([[DEC-014 Página do projeto na raiz e chat em barra chat]]), então o seletor não ficará mais em `/`. A nova rota está em [[Pendências]].

**Relacionadas:** [[DEC-005 O modelo nunca recebe o identificador do usuário]], [[DEC-003 Avaliação por cenários, sem testes com humanos]]

**Onde aparece:** [[README#5.4 Sessão simulada]], `app/page.tsx` (futuro seletor)
