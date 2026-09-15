---
tags: [decisao, base-de-conhecimento]
status: aceita
data: 2026-09-14
---

# DEC-015 Base ampliada com todos os câmpus e nomes com função

Voltar ao [[00 Índice]].

**Contexto:** o Lucca pediu para pegar todo o conteúdo do site da UNIFENAS (incluindo a página de cursos de graduação) e deixar a base o mais completa possível. Ele também vai trazer fotos de documentos para a pasta `img_base_conhecimento/`. A base inicial ([[DEC-009 Base inicial montada do site oficial como rascunho]]) tinha 4 temas, focados no câmpus Alfenas e sem nomes de pessoas.

**Decisão (respostas do Lucca em 2026-09-14):**
- **Todos os câmpus** (Alfenas, Belo Horizonte, Campo Belo, Divinópolis, Varginha) e o EAD entram na base. Cada informação diz a qual câmpus, unidade, curso, modalidade, turma ou semestre se aplica.
- **Nomes de pessoas só com a função institucional** (coordenação de curso, responsável por setor, docente de disciplina, gestão). Ficam de fora telefones celulares, e-mails pessoais e qualquer dado de aluno.
- **Fontes aceitas:** páginas de `unifenas.br`, a API pública do WordPress do site (`/wp-json/wp/v2/...`), PDFs institucionais publicados no site e imagens de documentos institucionais trazidas pelos pesquisadores.
- **12 temas condensados** em vez de uma página por arquivo, porque a base inteira vai no contexto a cada mensagem ([[DEC-001 Base de conhecimento no contexto, sem RAG]]).
- O system prompt foi para a **v0.2**: câmpus e curso sempre explícitos, pergunta de volta quando a resposta depende do câmpus, divergências entre fontes apresentadas como tal e nomes só com função.

**Mudança em relação ao README:** a seção [[README#2.5 Critérios da base de conhecimento]] excluía "qualquer conteúdo com dados pessoais" de docentes e funcionários. A regra passa a permitir nome com função institucional, e o README foi ajustado.

**Consequências:**
- A base passou de cerca de 8 mil para cerca de 100 mil caracteres. A contagem de tokens está no [[2026-09-14|registro do dia]].
- Continua tudo em rascunho: em produção o chat fica sem base até a conferência ([[Como editar a base de conhecimento]]).
- Nomes mudam com o tempo: a conferência precisa checar coordenações e responsáveis a cada semestre.
- Autorização formal da UNIFENAS para o uso segue pendente ([[Pendências]]).

**Relacionadas:** [[DEC-009 Base inicial montada do site oficial como rascunho]], [[DEC-005 O modelo nunca recebe o identificador do usuário]], [[Fontes da UNIFENAS]], [[Segurança e privacidade]]
