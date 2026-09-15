# Base de conhecimento

Cada arquivo `.md` desta pasta é um tema. Todo o conteúdo dos arquivos aprovados vai inteiro no contexto do modelo (ver seção 7 do README principal). Por isso, cada tema deve ser condensado: fatos, datas, valores, requisitos e links, sem texto de divulgação.

## Cabeçalho obrigatório

```markdown
---
tema: canais-de-atendimento
titulo: Canais de atendimento
fonte_oficial: https://...
consultado_em: 2026-09-14
versao: (opcional)
vigencia: (opcional)
status: rascunho
---
```

- `status: rascunho`: fora do chat em produção. Só entra no chat quando `KB_ALLOW_DRAFTS=true` (uso local).
- `status: aprovado`: entra no chat. Só mude para aprovado depois de conferir cada informação na fonte oficial.

## Temas

| Arquivo | Conteúdo |
|---|---|
| `instituicao.md` | Identificação, câmpus e endereços, estrutura, gestão, CPA, privacidade |
| `canais-de-atendimento.md` | Central de Atendimento, Ouvidoria, setores, portais e sistemas |
| `cursos-graduacao.md` | Cursos por câmpus e modalidade, duração, coordenação e contatos |
| `ingresso-e-matricula.md` | Formas de ingresso, editais 2026, documentos, matrícula e rematrícula |
| `financiamento-e-bolsas.md` | FIES, Alume, crédito privado, bolsas acadêmicas |
| `calendario-academico-2026.md` | Calendários semestral, modular, EAD e de Medicina (Alfenas e BH) |
| `regras-academicas.md` | Regimento Geral: matrícula, trancamento, frequência, avaliação, transferência |
| `pos-graduacao-e-residencia.md` | Mestrados, doutorados, defesa e Residência Médica |
| `pesquisa-e-extensao.md` | Iniciação científica, comitês de ética, monitoria, extensão |
| `servicos-ao-estudante.md` | Biblioteca, SOP, NAPEM, acessibilidade, egressos, certificados |
| `ligas-nucleos-atleticas-e-projetos.md` | Lista de entidades estudantis e projetos de extensão por câmpus |
| `horario-ciencia-da-computacao.md` | Horário de aulas transcrito das imagens em `img_base_conhecimento/` |

## Regras de curadoria

- Apenas informações de fontes oficiais da UNIFENAS (`unifenas.br`, API pública do site e documentos institucionais em PDF) e imagens de documentos institucionais trazidas pelos pesquisadores. Cuidado: a UNIFAL-MG também fica em Alfenas e aparece nas buscas.
- A base cobre todos os câmpus. Toda informação que vale só para um câmpus, unidade, curso, modalidade, turma ou semestre deve dizer isso no próprio texto.
- Pessoas: nome só junto com a função institucional (coordenação, responsável por setor, docente de uma disciplina). Nada de telefone celular, e-mail pessoal ou dado de aluno. Ver DEC-015 em `docs/Decisões/`.
- Notas de curadoria vão em comentários HTML (`<!-- ... -->`). Eles são removidos antes de o texto ir para o modelo.
- Informação que não foi encontrada fica de fora ou aparece como "não consta nas fontes consultadas". Não complete com suposições: o assistente foi instruído a dizer que não encontrou.
- Quando duas fontes oficiais divergem, registre as duas no texto e explique a divergência no comentário de curadoria.
- Não use wikilinks do Obsidian aqui: este texto vai para o modelo.

## Situação atual

A base foi ampliada em 2026-09-14 a partir do site da UNIFENAS (páginas, API pública e PDFs) e das primeiras imagens de `img_base_conhecimento/`. Todos os arquivos estão como **rascunho** e precisam ser conferidos pelos pesquisadores antes de serem aprovados.
