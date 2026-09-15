---
tags: [referencia]
atualizado_em: 2026-09-13
---

# Glossário

Voltar ao [[00 Índice]].

| Termo | Significado no projeto |
|---|---|
| **MVP** | Produto Mínimo Viável: a menor versão que demonstra os comportamentos centrais ([[Visão geral]]) |
| **LLM** | Modelo de linguagem de grande escala, como o Gemini e os modelos do Groq |
| **System prompt** | Instruções fixas enviadas ao modelo em toda requisição ([[prompts/system-prompt]]) |
| **Base de conhecimento** | Arquivos markdown com informação institucional, enviados inteiros ao modelo ([[DEC-001 Base de conhecimento no contexto, sem RAG]]) |
| **RAG** | Busca de trechos relevantes antes de responder. Fora do MVP |
| **Rascunho / aprovado** | Status de um arquivo da base. Só aprovados entram em produção ([[DEC-009 Base inicial montada do site oficial como rascunho]]) |
| **kb_version** | Hash do conteúdo da base usada numa resposta, gravado no log |
| **prompt_version** | Versão do system prompt, definida em `PROMPT_VERSION` |
| **Fallback** | Refazer a requisição em outro provedor (Groq) quando o Gemini falha |
| **Free tier** | Plano gratuito com limites de uso ([[DEC-006 Apenas serviços gratuitos]]) |
| **429** | Código HTTP de limite de uso atingido |
| **Route handler** | Arquivo `route.ts` do Next.js que responde a requisições HTTP |
| **server-only** | Marca que impede um módulo de ser usado no navegador |
| **Sessão simulada** | Escolha de um usuário fictício que substitui o login institucional ([[DEC-004 Sessão simulada por seletor de perfil]]) |
| **Ferramenta (tool)** | Ação que o modelo pode pedir e o backend executa, como `buscar_documentos` ([[DEC-005 O modelo nunca recebe o identificador do usuário]]) |
| **Desambiguação** | Listar as opções e perguntar quando há mais de um arquivo compatível |
| **Link assinado** | URL temporária para um arquivo de bucket privado ([[DEC-010 Documentos entregues por link assinado em bucket privado]]) |
| **Bucket** | "Pasta" de arquivos no Supabase Storage |
| **RLS** | Row Level Security: regras de acesso por linha no Postgres. A chave secreta ignora essas regras |
| **Chave secreta (sb_secret_)** | Chave de servidor do Supabase, com acesso total |
| **Anonimização** | Troca de CPF, e-mail e telefone por marcadores antes do modelo e do log ([[Segurança e privacidade]]) |
| **Cenário de teste** | Pergunta ou conversa com comportamento esperado, usada na avaliação ([[DEC-003 Avaliação por cenários, sem testes com humanos]]) |
| **Prompt injection** | Tentativa do usuário de manipular o modelo para quebrar as regras |
| **Vault** | Pasta aberta pelo Obsidian ([[DEC-008 Projeto dentro do vault do Obsidian]]) |
