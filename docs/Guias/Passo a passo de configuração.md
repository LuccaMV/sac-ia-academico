---
tags: [guia, configuracao]
atualizado_em: 2026-09-13
---

# Passo a passo de configuração

Voltar ao [[00 Índice]]. Andamento em [[Progresso]] e [[Pendências]].

Ordem sugerida: **hoje** etapas 1, 2 e 3; **amanhã** etapas 4 a 7.

> **Regra geral:**
> - Chaves e senhas vão só no `.env.local` (e, depois, nas variáveis da Vercel). Nunca no chat com o Claude, no Obsidian ou no Git.
> - O Obsidian esconde o `.env.local`, porque o nome começa com ponto. Abra esse arquivo no VS Code ou no Bloco de Notas.
> - Ao colar um valor, não use aspas nem deixe espaços.

---

## Etapa 1: chave do Gemini (5 minutos)
1. Acesse https://aistudio.google.com/apikey e entre com sua conta Google. Se a conta da universidade bloquear o AI Studio, use uma conta pessoal.
2. Leia e aceite os termos, se aparecerem.
3. Clique em **Create API key**. Se pedir um projeto do Google Cloud, crie um novo com o nome `sac-ia-academico`.
4. Copie a chave.
5. Abra `SAC-ACADEMICO/.env.local` e cole na linha `GEMINI_API_KEY=`.
6. Reinicie o servidor: no terminal onde ele roda, `Ctrl+C`, depois `npm run dev` dentro de `SAC-ACADEMICO`.
7. Abra http://localhost:3000 e teste as perguntas:
   - "Qual o telefone da Central de Atendimento?" (deve responder com a base)
   - "Quais documentos preciso para a matrícula?"
   - "Quando começa o semestre 2026/2 de Medicina?" (deve dizer que vale só para Medicina Alfenas)
   - "Qual o calendário de Ciência da Computação?" (deve dizer que não encontrou)
   - "Qual a minha nota em Cálculo?" (deve recusar e encaminhar)

**Cuidados:**
- No plano gratuito, o Google pode usar o que for enviado: não digite dados reais de ninguém ([[DEC-006 Apenas serviços gratuitos]]).
- Erro 429 significa limite gratuito atingido. Espere um pouco e tente de novo.
- Se a chave vazar, apague-a no AI Studio e gere outra.

## Etapa 2: conferir a base de conhecimento (30 a 60 minutos, pode ser o Rafael)
Siga [[Como editar a base de conhecimento]] para os 4 arquivos. O mais importante é conferir a lista de documentos da matrícula e os meses do calendário.

## Etapa 3: Git e GitHub (15 minutos)
1. Se nunca configurou o Git neste computador, rode (com seus dados):
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu-email@exemplo.com"
   ```
2. Dentro de `SAC-ACADEMICO`, inicialize o repositório e confira o que vai entrar:
   ```bash
   git init
   git add .
   git status
   ```
3. **Confira que `.env.local` e `node_modules` NÃO aparecem na lista.** Se aparecerem, pare e me avise.
4. Faça o primeiro commit:
   ```bash
   git commit -m "Chat inicial com base de conhecimento e segundo cérebro"
   ```
5. Em https://github.com/new, crie o repositório `sac-ia-academico` **sem** README, .gitignore ou licença (o projeto já tem). Feito em 2026-09-15 como **Public** ([[DEC-017 Repositório público no GitHub]]): https://github.com/LuccaMV/sac-ia-academico
6. Copie os comandos que o GitHub mostra em "push an existing repository". Eles são parecidos com:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/sac-ia-academico.git
   git branch -M main
   git push -u origin main
   ```
7. Para adicionar o Rafael: no repositório, **Settings → Collaborators → Add people**.

## Etapa 4: Supabase (20 minutos)
1. Acesse https://supabase.com, clique em **Start your project** e entre com o GitHub.
2. Crie a organização, se pedir, e depois **New project**:
   - Nome: `sac-ia-academico`
   - Senha do banco: gere uma forte e guarde num gerenciador de senhas. O projeto não usa essa senha, e ela não deve ser enviada ao Claude.
   - Região: a mais próxima do Brasil (South America, São Paulo)
   - Plano: Free
3. Espere o projeto terminar de criar.
4. Menu **SQL Editor → New query**. Cole todo o conteúdo de `supabase/migrations/0001_init.sql` e clique em **Run**.
5. Menu **Table Editor**: devem aparecer 5 tabelas (`simulated_users`, `documents`, `test_runs`, `interaction_logs`, `scenario_reviews`).
6. Menu **Storage → New bucket**:
   - Nome: `documents`
   - Deixe **Public bucket desligado** ([[DEC-010 Documentos entregues por link assinado em bucket privado]])
7. Menu **Settings → API Keys**:
   - Copie a **secret key** (começa com `sb_secret_`) e cole em `SUPABASE_SERVICE_ROLE_KEY=`. Se só houver as chaves legadas, use a `service_role`.
   - Nunca use essa chave no navegador: ela ignora RLS.
8. Copie a **Project URL** (formato `https://xxxx.supabase.co`) e cole em `SUPABASE_URL=`. Ela aparece no botão **Connect** da página inicial do projeto.
9. Gere dois valores aleatórios, rodando o comando abaixo duas vezes:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Cole o primeiro em `SESSION_SECRET=` e o segundo em `LOG_HASH_SALT=`.
10. Avise o Claude que o Supabase está configurado. **Não envie as chaves:** basta dizer que estão no `.env.local`.

**Cuidado:** projetos gratuitos são pausados depois de um período sem uso. Se o chat parar de gravar logs, verifique no painel se o projeto está pausado.

## Etapa 5: chave do Groq (5 minutos, usada no dia 10)
1. Acesse https://console.groq.com e entre (Google ou GitHub).
2. Menu **API Keys → Create API Key**, com o nome `sac-ia-academico`.
3. Copie na hora (a chave só aparece uma vez) e cole em `GROQ_API_KEY=`.
4. Deixe `GROQ_CHAT_MODEL` vazio. O modelo ainda será escolhido ([[Pendências]]).

## Etapa 6: deploy na Vercel (15 minutos, depois da etapa 3)
1. Acesse https://vercel.com e entre com o GitHub.
2. **Add New → Project**, importe `sac-ia-academico`. O framework Next.js é detectado sozinho.
3. Em **Environment Variables**, cadastre as mesmas variáveis do `.env.local`, com duas diferenças:
   - `KB_ALLOW_DRAFTS`: em produção deve ser `false`. Enquanto nenhum arquivo da base estiver aprovado, o chat publicado fica sem base. Para demonstrar antes disso, use `true` e deixe claro que é conteúdo em conferência.
   - Não cadastre variáveis vazias.
4. Clique em **Deploy**. Cada push na branch `main` publica de novo.
5. Teste o endereço gerado com as mesmas perguntas da etapa 1.

## Etapa 7: pedidos fora do código
- **À orientadora:** datas, objetivo específico b, atualização do relatório, metas das métricas ([[Pendências]]).
- **À UNIFENAS:**
  - autorização para usar documentos institucionais;
  - Regimento Geral vigente;
  - calendário dos demais cursos de Alfenas;
  - contatos da Secretaria Acadêmica;
  - formato do número de matrícula.
  
  Veja [[Fontes da UNIFENAS]].

---

## Resumo das chaves

| Variável | Onde conseguir | Etapa | Obrigatória agora? |
|---|---|---|---|
| `GEMINI_API_KEY` | aistudio.google.com/apikey | 1 | Sim |
| `SUPABASE_URL` | Supabase, botão Connect | 4 | Para sessão e logs |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase, Settings → API Keys (secret) | 4 | Para sessão e logs |
| `SESSION_SECRET` | Gerar com o comando da etapa 4 | 4 | Para a sessão (dia 3) |
| `LOG_HASH_SALT` | Gerar com o comando da etapa 4 | 4 | Para logs no banco |
| `GROQ_API_KEY` | console.groq.com → API Keys | 5 | Dia 10 |
| `GROQ_CHAT_MODEL` | [PENDENTE] | 5 | Dia 10 |
| `SIGNED_URL_TTL_SECONDS` | [PENDENTE] | | Dia 6 |
