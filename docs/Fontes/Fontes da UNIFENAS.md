---
tags: [fontes, base-de-conhecimento]
consultado_em: 2026-09-14
---

# Fontes da UNIFENAS

Voltar ao [[00 Índice]]. Decisões sobre o uso: [[DEC-009 Base inicial montada do site oficial como rascunho]] e [[DEC-015 Base ampliada com todos os câmpus e nomes com função]].

## ⚠️ Cuidado nas buscas
A **UNIFAL-MG** (Universidade Federal de Alfenas) também fica em Alfenas e aparece misturada nos resultados de busca sobre calendário e matrícula. Use apenas `unifenas.br`.

## Como a coleta foi feita (2026-09-14)
- **API pública do WordPress** do site: `https://www.unifenas.br/wp-json/wp/v2/<tipo>?per_page=100&page=N`. Tipos usados: `pages`, `graduacao`, `mestrado`, `doutorado`, `residencia-medica`, `especializacao`, `liga-academica`, `associacao-atletica`, `nucleo-estudo`, `projeto-extensao`, `nucleo`, `extensao`, `responsabilidade`, `historia`, `prova`.
- Taxonomia de câmpus na API: 9 Alfenas, 10 Belo Horizonte, 11 Campo Belo, 12 Divinópolis, 13 Varginha.
- **PDFs** encontrados pela busca de mídia da API (`/wp-json/wp/v2/media?search=...`) e convertidos com `pdftotext -layout`.
- **Imagens** da pasta `img_base_conhecimento/`, transcritas pelo Claude.
- Os scripts e os dados brutos ficaram na pasta temporária da sessão; não fazem parte do projeto.

## Fontes por tema

| Tema | Fontes principais |
|---|---|
| [[knowledge-base/instituicao\|instituição]] | Páginas Institucional, A UNIFENAS, Fale Conosco, CPA, Política de Privacidade |
| [[knowledge-base/canais-de-atendimento\|canais de atendimento]] | Fale Conosco, Ouvidoria, Pesquisa, Extensão, Financiamento, Residência Médica, editais |
| [[knowledge-base/cursos-graduacao\|cursos de graduação]] | `https://www.unifenas.br/cursos/graduacao/` e API `graduacao` (cada curso por câmpus) |
| [[knowledge-base/ingresso-e-matricula\|ingresso e matrícula]] | Formas de ingresso, Portal do Vestibulando, editais 2026/2 (presencial, demais cursos, EAD, vagas remanescentes) e Medicina 2027/1 |
| [[knowledge-base/financiamento-e-bolsas\|financiamento e bolsas]] | Página de financiamento, mestrado e doutorado, editais de monitoria e PIBIC |
| [[knowledge-base/calendario-academico-2026\|calendário 2026]] | PDFs semestral, modular, EAD, Medicina Alfenas (1-6 e 7-12) e Medicina BH (1-8 e 9-12) |
| [[knowledge-base/regras-academicas\|regras acadêmicas]] | Regimento Geral 2026 (versão de 09/03/2026), Resolução 03/2021 do Colegiado de Medicina BH |
| [[knowledge-base/pos-graduacao-e-residencia\|pós-graduação e residência]] | API `mestrado`, `doutorado`, `residencia-medica`; Edital DPPG 20/2026 |
| [[knowledge-base/pesquisa-e-extensao\|pesquisa e extensão]] | Pesquisa, Extensão, Editais, Edital PIBIC/PROBIC 01/2026, Edital PROACAD 02/2026 |
| [[knowledge-base/servicos-ao-estudante\|serviços ao estudante]] | Biblioteca (página, regulamento 2025, guia 2025, tutorial 2026), Núcleos (SOP), NAPEM Informa, Acessibilidade, Egresso |
| [[knowledge-base/ligas-nucleos-atleticas-e-projetos\|ligas, núcleos, atléticas e projetos]] | API `liga-academica`, `associacao-atletica`, `nucleo-estudo`, `projeto-extensao` |
| [[knowledge-base/horario-ciencia-da-computacao\|horário de Ciência da Computação]] | Imagens `img_base_conhecimento/horarioCoputacao/` (segunda a quinta) |

## Divergências encontradas
- **Horário da Biblioteca Central:** regulamento 2025 (7h às 22h, sábado 8h às 12h) contra tutorial 2026 (7h às 21h45, sem sábado). Os dois estão na base.
- **Mestrado em Sistemas de Produção na Agropecuária:** a página do programa e o edital da turma 2026/2 trazem vagas, datas e coordenação diferentes.
- **CEP de Alfenas:** 37132-440 (Fale Conosco) e 37130-000 (páginas de curso).
- **Telefones de extensão** de Campo Belo, Divinópolis e Varginha foram associados pela ordem do seletor da página.
- **Calendários:** nos PDFs de Alfenas os eventos não trazem o mês (remontados pela ordem e conferidos com datas fixas); nos de Medicina BH, datas do fim de cada semestre aparecem desalinhadas e ficaram de fora.

## Páginas e arquivos que falharam ou foram descartados

| Item | Problema |
|---|---|
| Regimento Geral 2025 e 2023 (URLs antigas em `/institucional/`) | 404. Resolvido: o Regimento 2026 foi achado pela API de mídia |
| Edital demais cursos 2026 (URL antiga) | 404. Resolvido pela API de mídia |
| Notícia de intercâmbio (`/noticia.asp?note=uni_3023`) | 404 |
| FAQ de TI (`tiu.unifenas.br/faq.asp`) | Domínio não existe mais |
| Portaria 72 (abono de faltas) | PDF escaneado, sem texto extraível |
| Itens de `especializacao` na API | Dados de teste; descartados |
| Páginas de especialização e pós-graduação médica | Vazias no site |
| Vagas de monitoria por curso (edital PROACAD 02/2026) | Tabela ilegível no PDF; só os totais entraram |

## O que ainda não foi encontrado
- Contatos e horários da Secretaria Acadêmica em cada câmpus
- Horários da Central de Atendimento
- Horários e contatos das bibliotecas fora de Alfenas
- Informações sobre intercâmbio
- FAQs das secretarias
- Valores de mensalidade (há links por câmpus no Portal do Vestibulando, não lidos)
- Semestre, período e salas do horário de Ciência da Computação

Esses itens estão em [[Pendências]].

## Dica técnica
PDFs com espaços na URL falham na busca automática. A API de mídia devolve a URL atual do arquivo; o texto sai com `pdftotext -layout` do arquivo salvo.
