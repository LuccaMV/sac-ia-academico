---
tags: [marca]
versao: v0.1
atualizado_em: 2026-09-14
---

# Brand kit

Voltar ao [[00 Índice]]. Decisão: [[DEC-011 Identidade visual endossada pela UNIFENAS]].

![[brand-kit-sac-ia.png]]

Fonte editável do painel: `docs/Marca/brandkit.html`. Para exportar de novo, rode o comando da seção "Como atualizar" no fim desta nota.

## Pesquisa de referência (consultada em 2026-09-14)

| Instituição  | Cores oficiais                                                                   | Tipografia                     | Lógica da marca                                                                       | Fonte                                        |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| **UNIFENAS** | Logo: ciano `#00ABC5` e marinho `#04436E`. Site: `#1969A9`, `#2295F0`, `#0B2F4C` | Manrope (site)                 | "U" com corte diagonal dobrado, órbita em ciano, "UNIVERSIDADE" com espaçamento largo | `unifenas.br` (logo.svg e style.css do tema) |
| **USP**      | Azul primário `#1094AB`, azul secundário `#64C4D2`, amarelo `#FCB421`            | Univers; alternativa Open Sans | Respiro medido pela letra P                                                           | scs.usp.br/identidadevisual                  |
| **Unicamp**  | Vermelho Pantone 485 e preto                                                     | Microgramma Bold               | Símbolo desenhado da planta do câmpus, com módulo de construção                       | unicamp.br/logotipo                          |
| **UFRJ**     | Azul UFRJ `#003366` (Pantone 654C)                                               | Montserrat                     | Guia de identidade de 2022                                                            | Guia de identidade visual UFRJ (PDF)         |
| **UFMG**     | Vermelho `#C8102E` (Pantone 186) e preto                                         | Não especificada no manual     | Módulo = altura da barra do M; respiro de 4x                                          | ufmg.br/marca                                |
| **Unesp**    | Ciano e preto                                                                    | Swiss 721 e Charter            | Manual com grade modular                                                              | Manual de identidade visual Unesp            |

Ranking usado para escolher as "maiores": QS e THE colocam USP, Unicamp, UFRJ, Unesp e UFMG entre as primeiras do país.

## O que foi extraído das referências
- **Azul é a cor da confiança institucional:** USP, UFRJ, Unesp e UNIFENAS usam azuis.
- **Um acento quente, usado com parcimônia:** o amarelo da USP e o vermelho da Unicamp e da UFMG. No SAC, âmbar e coral ficam restritos a estados de interface.
- **Marca construída sobre módulo:** a Unicamp (planta do câmpus) e a UFMG (barra do M). O símbolo do SAC é todo medido pelo lado da dobra.
- **Fontes sans livres:** Open Sans e Montserrat; a UNIFENAS já usa Manrope.
- **Versões positiva, negativa e monocromática:** regra comum a todos os manuais.

## Estratégia
- **Categoria:** assistente de atendimento acadêmico com IA
- **Público:** alunos, docentes e funcionários da UNIFENAS; banca da IC
- **Personalidade:** claro, confiável, próximo, preciso, discreto
- **Metáfora central:** uma página que conversa. O balão representa a dúvida respondida e a dobra, o documento entregue.
- **Relação com a UNIFENAS:** marca endossada. Herda marinho, ciano, Manrope e a assinatura com espaçamento largo, mas tem símbolo próprio. **Não reproduz o logo da UNIFENAS.**
- **Assinatura:** "Resposta com fonte." Remete à citação da base em cada resposta ([[DEC-001 Base de conhecimento no contexto, sem RAG]]).
- **Evitar:** robôs, cérebros, faíscas de IA genéricas, gradientes roxos, brasões.

## Símbolo
- Balão de conversa com o canto superior direito dobrado a 45°. A dobra dialoga com o corte diagonal do logo da UNIFENAS, sem copiá-lo.
- **Construção** (viewBox 120):
  - módulo m = 34, o lado da dobra;
  - raio dos cantos ≈ 0,65 m;
  - largura ≈ 3 m;
  - respiro mínimo = m;
  - tamanho mínimo de 16 px.
- **Cores:** corpo em marinho `#04436E` (ou branco sobre fundo escuro), dobra sempre em ciano `#00ABC5`.
- **Arquivos:**
  - `public/brand/sac-ia-simbolo.svg` (positivo)
  - `public/brand/sac-ia-simbolo-negativo.svg` (sobre fundo escuro)

## Assinatura
- Linha 1: "SAC IA", em Manrope ExtraBold (800).
- Linha 2: "ACADÊMICO", em Manrope SemiBold (600), ciano, com espaçamento largo, ecoando o "UNIVERSIDADE" da UNIFENAS.
- Linha de endosso: "Iniciação Científica · UNIFENAS · Alfenas-MG".

## Cores

| Nome | HEX | Papel | Proporção de uso |
|---|---|---|---|
| Marinho | `#04436E` | Marca, balões do usuário, títulos | alta |
| Névoa | `#EFFDFF` | Superfícies claras | alta |
| Ciano | `#00ABC5` | Dobra do símbolo, destaques, fonte citada, botão de enviar | média |
| Noturno | `#0B2F4C` | Fundos escuros | baixa |
| Âmbar | `#F5B83D` | Atenção, rascunho | só em estados |
| Coral | `#E4574B` | Recusa, encaminhamento | só em estados |

Marinho, ciano e noturno vêm do logo e do site da UNIFENAS. Névoa, âmbar e coral são escolhas deste projeto.

## Tipografia
- **Manrope** (400, 600, 800): interface e títulos. É gratuita (Google Fonts).
- **IBM Plex Mono** (400, 500): rótulos técnicos, fontes citadas e `kb_version`.

## Estados de interface
| Estado | Chip | Uso |
|---|---|---|
| Fonte | ciano claro com ponto ciano | Resposta com base citada |
| Proteção | marinho com texto mono | Dado mascarado, como `[CPF]` |
| Recusa | coral claro | Pedido sensível encaminhado à secretaria ([[Segurança e privacidade]]) |
| Rascunho | âmbar claro | Conteúdo em conferência ([[DEC-009 Base inicial montada do site oficial como rascunho]]) |

## Regras de uso
- Não distorcer, girar nem trocar as cores do símbolo.
- A dobra é sempre ciano. O corpo é marinho ou branco.
- Não colocar o logo da UNIFENAS ao lado do símbolo sem autorização ([[Pendências]]).
- O QR do painel 07 é ilustrativo e não aponta para lugar nenhum.
- O domínio `sac-ia-academico.vercel.app` no painel 03 é ilustrativo até o deploy existir.

## Como atualizar
1. Edite `docs/Marca/brandkit.html`.
2. Exporte o PNG com o Chrome, a partir da pasta `docs/Marca`:

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --window-size=1600,1000 --virtual-time-budget=10000 --screenshot="$(pwd -W)/brand-kit-sac-ia.png" "file:///$(pwd -W)/brandkit.html"
```

## Aplicação no app (2026-09-14)

| Elemento do brand kit | Onde está no app |
|---|---|
| Símbolo | `components/brand/BrandMark.tsx`, avatar do assistente e favicon (`app/icon.svg`) |
| Assinatura "SAC IA / ACADÊMICO" | Cabeçalho (`components/brand/BrandLockup.tsx`) |
| Cores | Tokens de dia e noite em `app/globals.css` ([[DEC-013 Modo dia e noite com data-theme]]) |
| Manrope e IBM Plex Mono | `app/layout.tsx` via `next/font` |
| "Resposta com fonte." e horizonte em retícula | Capa do chat vazio (`components/brand/HalftoneHorizon.tsx`) |
| Chip de fonte | Linha "Fonte:" da resposta, separada por `lib/chat-format.ts` |
| Chip de proteção | Aparece quando o servidor mascarou CPF, e-mail ou telefone |
| Chip de rascunho | "Base em conferência", enquanto a base usada tiver arquivos em rascunho |
| Estado de erro (coral) | Balão "Sem resposta" |
| Endosso | Rodapé "Iniciação Científica · UNIFENAS · Alfenas-MG" |

**Ainda não aplicado:**
- Chip de **recusa** ("Encaminhado à secretaria"). Hoje as recusas são feitas pelo prompt, e o backend não sabe quando houve uma; o chip depende da regra de sensíveis do dia 8 ([[Progresso]]).
- Aplicações físicas do painel 07 (display de balcão, adesivo e crachá).

## Próximos passos possíveis
- Chip de recusa quando a regra de sensíveis existir.
- Slides da apresentação parcial com este sistema.
