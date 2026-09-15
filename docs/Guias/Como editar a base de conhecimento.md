---
tags: [guia, base-de-conhecimento]
atualizado_em: 2026-09-14
---

# Como editar a base de conhecimento

Voltar ao [[00 Índice]]. Regras completas: [[knowledge-base/README|regras de curadoria]]. Decisão sobre câmpus e nomes: [[DEC-015 Base ampliada com todos os câmpus e nomes com função]].

## Conferir e aprovar um arquivo
1. Abra o arquivo em `knowledge-base/` no Obsidian (ex.: [[knowledge-base/canais-de-atendimento|canais de atendimento]]).
2. Leia a nota de curadoria no topo, dentro de `<!-- -->`. Ela diz o que precisa ser conferido e quais fontes divergem.
3. Abra a fonte listada em `fonte_oficial` e confira cada informação. Guia das fontes: [[Fontes da UNIFENAS]].
4. Corrija o que estiver errado e apague o que não conseguir confirmar.
5. Troque `status: rascunho` por `status: aprovado`. Pode ser pelo painel de propriedades do Obsidian: o leitor aceita valores com ou sem aspas.
6. Atualize `consultado_em` com a data da conferência.
7. Registre a aprovação em [[Pendências]].

## Criar um tema novo
1. Crie `knowledge-base/<tema>.md`, com nome sem espaços e sem acentos (ex.: `intercambio.md`).
2. Copie o cabeçalho de um arquivo existente e preencha `tema`, `titulo` e `fonte_oficial`.
3. Escreva só o que está na fonte, de forma condensada. Diga a qual câmpus, curso ou modalidade cada informação se aplica.
4. Comece com `status: rascunho`.
5. Adicione o tema na tabela do [[knowledge-base/README|README da base]] e no [[00 Índice]].

## Trazer conteúdo de imagens
1. Coloque as fotos em uma subpasta de `img_base_conhecimento/` ([[img_base_conhecimento/README|como usar]]).
2. Peça ao Claude para transcrever. Ele grava o texto em um tema e marca como pendente o que a imagem não diz (semestre, sala, câmpus).
3. Confira a transcrição contra a imagem antes de aprovar.

## Não faça
- Wikilinks (`[[...]]`), porque o texto vai para o modelo.
- Nome de pessoa sem a função institucional, telefone celular, e-mail pessoal ou qualquer dado de aluno.
- Informação da UNIFAL-MG.
- Completar lacunas com suposições: o assistente foi instruído a dizer que não encontrou.

## Testar a mudança
- Em desenvolvimento, a base é relida a cada mensagem: salve o arquivo e pergunte no chat.
- Toda mudança altera o `kb_version` registrado no log ([[DEC-001 Base de conhecimento no contexto, sem RAG]]).
- Se o cabeçalho estiver errado, o chat mostra o erro com o nome do arquivo e o campo inválido.
- A base inteira vai em toda mensagem: temas muito longos deixam a resposta mais lenta e gastam mais da cota gratuita.
