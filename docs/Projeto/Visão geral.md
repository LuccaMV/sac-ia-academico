---
tags: [projeto]
atualizado_em: 2026-09-13
---

# Visão geral

Voltar ao [[00 Índice]].

## O que é
MVP introdutório de um chat web que responde dúvidas acadêmicas e administrativas da UNIFENAS (câmpus Alfenas-MG) e, quando o usuário pede um documento, localiza e entrega o arquivo por link temporário. Detalhes formais em [[README#1. Sobre o projeto]].

## Equipe
- Pesquisadores: Lucca Valladão e Marchetti e Rafael Costa Monte Alegre
- Orientador do TCC: Prof. Celso de Ávila Ramos (desde 2026-09-15)
- Orientadora da IC: Profª. Dra. Flávia Aparecida Oliveira Santos. Continua citada no TCC porque ajudou a desenvolver o projeto; se será coorientadora ainda não foi definido ([[Pendências]])
- Programa: Iniciação Científica em Ciência da Computação, UNIFENAS, continuada como TCC do Lucca e do Rafael ([[DEC-017 Repositório público no GitHub]])

## Prazos
- 2 semanas até a apresentação parcial
- 2 meses até a entrega final
- Datas exatas: ver [[Pendências]]
- Plano dia a dia: [[README#15. Roadmap de desenvolvimento]] e andamento em [[Progresso]]

## Comportamentos centrais
1. Responder dúvidas a partir de uma base curada ([[DEC-001 Base de conhecimento no contexto, sem RAG]]).
2. Entregar arquivos do Supabase Storage por link assinado ([[DEC-010 Documentos entregues por link assinado em bucket privado]]).
3. Com mais de um arquivo compatível, listar as opções e perguntar qual o usuário quer. Isso vem das diretrizes do prompt, não de lógica programada ([[DEC-005 O modelo nunca recebe o identificador do usuário]]).
4. Recusar dados pessoais sensíveis e encaminhar ao atendimento humano ([[Segurança e privacidade]]).
5. Registrar cada interação em log estruturado, base das métricas ([[DEC-003 Avaliação por cenários, sem testes com humanos]]).

## Fora do escopo
Autenticação real ([[DEC-004 Sessão simulada por seletor de perfil]]), transações financeiras, testes com humanos, RAG, painel administrativo, WhatsApp. Lista completa em [[README#3. Escopo do MVP]].

## Stack
Next.js + TypeScript na Vercel ([[DEC-002 Next.js único na Vercel]]), Gemini com Groq de fallback ([[DEC-007 Gemini 2.5 Flash como modelo inicial]]), Supabase para banco e arquivos, tudo em planos gratuitos ([[DEC-006 Apenas serviços gratuitos]]).
