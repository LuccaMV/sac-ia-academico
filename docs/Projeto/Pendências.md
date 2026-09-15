---
tags: [projeto, pendencias]
atualizado_em: 2026-09-13
---

# Pendências

Voltar ao [[00 Índice]]. A versão formal fica em [[README#18. Pendências e decisões em aberto]]. Esta nota é a lista de trabalho: quando algo for resolvido, marque, escreva a data e a resposta, e atualize o README se a seção for afetada.

## Com vocês (Lucca e Rafael)
- [x] Criar a chave do Gemini e testar o chat ([[Passo a passo de configuração]]). 2026-09-14: chave no `.env.local`, chat respondendo com fonte citada.
- [x] Criar o repositório no GitHub e decidir se ele é público ou privado, e a licença. 2026-09-15: público, sem licença por enquanto ([[DEC-017 Repositório público no GitHub]])
- [ ] Escolher a licença do repositório (hoje todos os direitos reservados)
- [ ] O projeto virou TCC: o Rafael continua como coautor? Qual o papel da Profª. Flávia no TCC (coorientadora ou só a IC)? Quais as datas do TCC? Depois disso, revisar os textos que dizem só "Iniciação Científica" no README, na página do projeto e no rodapé do chat
- [ ] Criar o projeto no Supabase, aplicar a migração e criar o bucket `documents`
- [ ] Conferir os 12 temas da base e aprovar os que estiverem corretos, começando pelas divergências listadas em [[Fontes da UNIFENAS]] ([[Como editar a base de conhecimento]])
- [ ] Horário de Ciência da Computação: informar o semestre, o período de cada turma e o que significam os números 2109, 2107, 2002 e 2003; enviar a imagem de sexta-feira, se houver ([[knowledge-base/horario-ciencia-da-computacao|horário]])
- [ ] Definir quem programa e quem cuida da frente de conteúdo
- [ ] Recarregar o vault no Obsidian para aplicar o filtro do `node_modules` ([[DEC-008 Projeto dentro do vault do Obsidian]])

## Com a orientadora
- [x] Datas da apresentação parcial e da entrega final
- [ ] Revisar a redação do objetivo específico b: sem testes com humanos, a aceitação deixa de ser medida ([[DEC-003 Avaliação por cenários, sem testes com humanos]])
- [ ] Atualizar o relatório de IC: metodologia, seção 2.1 e Quadro 02 ([[Relatório IC (texto extraído)]])
- [ ] Metas das métricas
- [ ] Critério de resolução de divergências entre avaliadores e uso do Kappa de Cohen
- [ ] Quantidade de cenários e distribuição entre categorias

## Com a UNIFENAS
- [ ] Autorização formal para usar documentos institucionais na base
- [ ] Autorização para usar o nome e, se desejado, o logo da UNIFENAS nos materiais do SAC IA ([[DEC-011 Identidade visual endossada pela UNIFENAS]])
- [ ] Documentos oficiais: FAQs das secretarias e informações de intercâmbio ([[Fontes da UNIFENAS]]). 2026-09-14: Regimento Geral 2026 e calendários 2026 de todos os tipos de curso foram achados no site pela API de mídia.
- [ ] Contatos e horários da Secretaria Acadêmica de cada câmpus e horários da Central de Atendimento
- [ ] Portaria 72 (abono de faltas) em texto: o PDF do site é escaneado
- [ ] Formato do número de matrícula (RA) para a anonimização

## Técnicas (o Claude resolve quando houver o insumo)
- [ ] Modelo do Groq: candidatos `llama-3.3-70b-versatile` e `openai/gpt-oss-120b`; confirmar suporte a ferramentas no plano gratuito
- [ ] Confirmar que `gemini-3.6-flash` atende à chamada de ferramentas antes do dia 6 ([[DEC-012 Gemini 3.6 Flash substitui o 2.5 Flash]])
- [x] Medir o tamanho da base em tokens frente à janela de contexto ([[DEC-001 Base de conhecimento no contexto, sem RAG]]). 2026-09-14: prompt com a base inteira (12 temas) = 31.056 tokens no `countTokens` do `gemini-3.6-flash`.
- [ ] Tipos de documento fictícios e usuários do seed
- [ ] Rota do seletor de perfil, já que `/` virou a página do projeto ([[DEC-014 Página do projeto na raiz e chat em barra chat]]). Sugestão a confirmar: mostrar o seletor dentro de `/chat` antes da primeira mensagem
- [ ] Duração do link assinado ([[DEC-010 Documentos entregues por link assinado em bucket privado]])
- [ ] Quantidade de turnos de histórico (hoje 4, valor provisório no código)
- [ ] Cota do Gemini: `gemini-3.6-flash` tem 20 requisições por dia no plano gratuito (medido em 2026-09-14). Implementar o Groq e definir qual modelo roda a bateria de cenários
- [ ] Validar a linha "Fonte:" no servidor contra os títulos reais dos temas
- [ ] Classificar a ação da resposta (recusa, fora da base, resposta) para o log e as métricas
- [ ] Anonimizar também as falas do assistente vindas do histórico enviado pelo navegador
- [ ] Limite de requisições por IP na rota `/api/chat` antes do deploy público
- [x] Encurtar o log de erro do Gemini (hoje imprime o JSON inteiro do 429). 2026-09-14: mensagem cortada em 160 caracteres e retry interno do SDK desligado ([[DEC-016 Streaming, feedback por resposta e contexto de câmpus e curso]])
- [ ] Aplicar a migração `0002_feedback_e_contexto.sql` junto com a `0001` quando o Supabase for criado
- [ ] Ajustar o script da bateria de cenários (quando existir) para ler o stream NDJSON de `/api/chat`
- [ ] Atualizar textos que citam só Alfenas ou temas antigos: descrição do site, rodapé do chat, exemplo da capa, escopo com intercâmbio

## Ajustes no README
- [ ] Seção 7.3: mencionar `KB_ALLOW_DRAFTS` (rascunhos só em desenvolvimento)
- [ ] Seção 12: incluir `docs/` como segundo cérebro e `.obsidian/` na estrutura
- [ ] Seção 13.3: citar a chave secreta nova do Supabase (`sb_secret_...`)
- [x] Seção 7.2: temas reais da base. 2026-09-14: árvore trocada pelos 12 temas; seção 2.5 ajustada para nomes com função ([[DEC-015 Base ampliada com todos os câmpus e nomes com função]])
- [ ] Seções 4 e 6: registrar a identidade visual e o modo dia e noite, entregues fora da lista P0 ([[DEC-011 Identidade visual endossada pela UNIFENAS]], [[DEC-013 Modo dia e noite com data-theme]])
- [ ] Seção 6.1: trocar a fonte do app para Manrope e IBM Plex Mono e citar o modelo `gemini-3.6-flash`
- [ ] Seções 5.4, 11 e 12: `/` é a página do projeto e `/chat` o chat; o seletor de perfil muda de rota ([[DEC-014 Página do projeto na raiz e chat em barra chat]])

## Resolvidas
- 2026-09-13: submissão ao Comitê de Ética deixou de ser aplicável ([[DEC-003 Avaliação por cenários, sem testes com humanos]])
