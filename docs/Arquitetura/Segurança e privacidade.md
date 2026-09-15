---
tags: [arquitetura, seguranca, lgpd]
atualizado_em: 2026-09-13
---

# Segurança e privacidade

Voltar ao [[00 Índice]]. Versão formal: [[README#8. LGPD e Privacy by Design]].

## Implementado
- Anonimização de CPF, e-mail e telefone antes do modelo e do log (`lib/server/guardrails/pii-redactor.ts`). Anos como "2025-2026" não são mascarados.
- Chaves de API só no servidor, em módulos marcados com `server-only`.
- System prompt com recusa de dados sensíveis, de dados de terceiros e de transações financeiras ([[prompts/system-prompt]]).
- Aviso de IA e orientação para não informar CPF, notas ou dados de saúde na tela do chat.
- Migração com RLS ativo em todas as tabelas, sem políticas públicas.

## Planejado
- Isolamento de identidade: [[DEC-005 O modelo nunca recebe o identificador do usuário]]
- Sessão em cookie criptografado: [[DEC-004 Sessão simulada por seletor de perfil]]
- Bucket privado e link assinado: [[DEC-010 Documentos entregues por link assinado em bucket privado]]
- Regra de sensíveis antes do modelo, para padrões de alta confiança (ex.: CID)
- Anonimização da matrícula, que depende do formato ([[Pendências]])
- Hash do usuário com salt nos logs (`LOG_HASH_SALT`)

## Cuidados no dia a dia
- Nunca digitar dados reais de pessoas no chat: o plano gratuito do Gemini pode usar o conteúdo ([[DEC-006 Apenas serviços gratuitos]]).
- Nunca fazer commit do `.env.local`. Antes do primeiro commit, confira com `git status`.
- A chave secreta do Supabase ignora RLS: nunca coloque em variável `NEXT_PUBLIC_` nem em componente de cliente.
- Se uma chave vazar, revogue no painel do serviço e gere outra.
