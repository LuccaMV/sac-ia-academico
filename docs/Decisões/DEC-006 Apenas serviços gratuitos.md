---
tags: [decisao]
status: aceita
data: 2026-09-13
---

# DEC-006 Apenas serviços gratuitos

Voltar ao [[00 Índice]].

**Decisão:** o projeto usa apenas planos gratuitos: Gemini API (free tier), Groq (free tier), Supabase Free, Vercel Hobby e GitHub.

**Consequências:**
- **Privacidade:** no plano gratuito do Gemini, o Google pode usar o conteúdo enviado para melhorar seus produtos. Por isso a anonimização é obrigatória e dados reais de pessoas nunca devem ser digitados no chat ([[Segurança e privacidade]]).
- **Limites de uso:** o Gemini tem limites de requisições e tokens; erro 429 significa limite atingido. É o motivo do fallback para o Groq.
- **Supabase:** pausa projetos inativos. É preciso reativar antes das execuções da bateria de testes.
- **Vercel Hobby:** plano para uso pessoal e não comercial.

**Relacionadas:** [[DEC-007 Gemini 2.5 Flash como modelo inicial]], [[Passo a passo de configuração]]

**Onde aparece:** [[README#6.2 Planos gratuitos: o que observar]]
