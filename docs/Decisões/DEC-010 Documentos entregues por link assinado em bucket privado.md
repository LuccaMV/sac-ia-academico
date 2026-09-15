---
tags: [decisao, seguranca]
status: aceita
data: 2026-09-13
---

# DEC-010 Documentos entregues por link assinado em bucket privado

Voltar ao [[00 Índice]].

**Decisão:**
- Os arquivos ficam no bucket **privado** `documents` do Supabase Storage.
- O acesso é feito só por link assinado de curta duração (`createSignedUrl`), gerado pelo backend depois de confirmar que o arquivo pertence ao usuário da sessão.
- Consultar e entregar documento já emitido está no escopo; processar transações financeiras, não.

**Detalhes:**
- Caminhos no bucket: `institucional/<arquivo>` e `usuarios/<user_id>/<arquivo>`.
- `owner_user_id` nulo na tabela `documents` significa documento institucional.
- O modelo vê só título, tipo e data do arquivo, nunca o conteúdo.
- A chave secreta do Supabase (`sb_secret_...`) ignora RLS. Por isso fica apenas no servidor e todas as tabelas têm RLS ativo sem políticas públicas.

**Pendente:** a duração do link ([[Pendências]]).

**Situação atual:** ainda não implementado ([[Progresso]], dia 6).

**Relacionadas:** [[DEC-005 O modelo nunca recebe o identificador do usuário]], [[Segurança e privacidade]]

**Onde aparece:** [[README#10.2 Storage]], `supabase/migrations/0001_init.sql`
