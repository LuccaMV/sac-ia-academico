---
tags: [decisao, repositorio, seguranca]
status: aceita
data: 2026-09-15
---

# DEC-017 Repositório público no GitHub

Voltar ao [[00 Índice]].

**Contexto:** em 2026-09-15 o Lucca pediu para subir o projeto ao GitHub. O projeto passou a ser o TCC dele, com orientação do Prof. Celso de Ávila Ramos, mantendo a Profª. Flávia, orientadora da IC ([[Visão geral]]). A condição foi guardar tudo que possa prejudicar a segurança do projeto ou dele.

**Decisão:**
- Repositório **público** `LuccaMV/sac-ia-academico`, com a pasta `SAC-ACADEMICO` como raiz e o vault inteiro versionado (código, `docs/`, base de conhecimento, relatório e imagens).
- **Sem licença** por enquanto: todos os direitos reservados até a decisão ([[Pendências]]).
- Commits assinados com o e-mail noreply do GitHub, para o e-mail pessoal não aparecer no histórico. A identidade foi configurada só neste repositório.
- Ficam fora do Git (`.gitignore`): `.env*` exceto `.env.example`, `node_modules/`, `.next/`, `*.tsbuildinfo`, `next-env.d.ts`, o estado da interface do Obsidian (`workspace*.json`), os plugins de terceiros do Obsidian (`.obsidian/plugins/`), arquivos locais do Supabase CLI e `.claude/settings.local.json`.
- `.gitattributes` fixa LF no repositório, porque o Git desta máquina usa `core.autocrlf=true`.

**Verificações antes do primeiro push:**
- Busca por padrões de chave (Gemini, Groq, Supabase, JWT, chave privada) em todos os arquivos versionados: nenhuma ocorrência. As chaves só existem no `.env.local`.
- Busca por CPF, e-mail pessoal, telefone pessoal e matrícula no código, no `docs/` e no texto do relatório: nada além de contatos institucionais da UNIFENAS.
- As fotos de `img_base_conhecimento/` mostram apenas disciplina, turma e nome do docente, o que a [[DEC-015 Base ampliada com todos os câmpus e nomes com função]] permite.
- `tsc --noEmit`, `eslint`, `next build` e `npm audit` passando.

**Consequências:**
- O relatório de IC e o registro de trabalho em `docs/` ficam visíveis a qualquer pessoa.
- Se uma chave for commitada por engano, **revogue e gere outra** no painel do serviço: apagar o commit não basta, porque o histórico público pode ter sido copiado.
- A rota `/api/chat` continua sem limite por IP. Isso não expõe segredo, mas precisa ser resolvido antes do deploy público ([[Pendências]]).
- Os SVGs padrão do `create-next-app` em `public/` foram removidos por não serem usados.

**Relacionadas:** [[DEC-006 Apenas serviços gratuitos]], [[DEC-008 Projeto dentro do vault do Obsidian]], [[Segurança e privacidade]], [[Passo a passo de configuração]]
