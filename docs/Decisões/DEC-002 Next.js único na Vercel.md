---
tags: [decisao]
status: aceita
data: 2026-09-13
---

# DEC-002 Next.js único na Vercel

Voltar ao [[00 Índice]].

**Contexto:** o plano anterior separava React com Vite no frontend e Fastify no backend, hospedados em Vercel e Render.

**Decisão:** um único projeto Next.js com TypeScript. As páginas e as rotas de API (route handlers) ficam juntas, com deploy único na Vercel.

**Motivos:** menos serviços para configurar, mesma origem (sem CORS) e um deploy só.

**Consequências:**
- O projeto usa Next.js 16, que tem mudanças incompatíveis com versões antigas. Por exemplo, `middleware.ts` passou a se chamar `proxy.ts`. Antes de escrever código Next, consulte `node_modules/next/dist/docs/`.
- Arquivos lidos com `fs` em tempo de execução (base e prompt) precisam estar em `outputFileTracingIncludes` no `next.config.ts` para irem ao deploy.

**Relacionadas:** [[DEC-006 Apenas serviços gratuitos]], [[Mapa do código]]

**Onde aparece:** [[README#6. Stack tecnológica (100% gratuita)]], `next.config.ts`
