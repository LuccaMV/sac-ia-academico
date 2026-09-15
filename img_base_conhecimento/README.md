# Imagens para a base de conhecimento

Pasta de entrada para fotos e capturas de tela de documentos institucionais (horários, avisos, murais, editais impressos). As imagens **não** vão para o modelo: o Claude lê cada imagem, transcreve o conteúdo e grava o texto em um tema de `knowledge-base/`.

## Como usar

1. Crie uma subpasta por assunto (exemplo: `horarioCoputacao/`) e coloque as imagens dentro.
2. Se souber, anote no nome da pasta ou em um arquivo `info.txt` o câmpus, o curso, o período e o semestre a que o conteúdo se refere.
3. Peça ao Claude para transcrever a pasta. Ele cria ou atualiza o tema correspondente em `knowledge-base/` com `status: rascunho`.
4. Confira a transcrição contra a imagem e, se estiver correta, mude para `status: aprovado`.

## Cuidados

- Não coloque imagens com dados de alunos (listas de notas, frequência, nomes de alunos, documentos pessoais).
- Nomes de docentes e servidores entram só junto com a função (ver DEC-015).
- O que não estiver legível ou não estiver explícito na imagem (semestre, sala, câmpus) fica marcado como pendente no comentário de curadoria.

## Transcritas

| Pasta | Tema gerado | Data |
|---|---|---|
| `horarioCoputacao/` | `knowledge-base/horario-ciencia-da-computacao.md` | 2026-09-14 |
