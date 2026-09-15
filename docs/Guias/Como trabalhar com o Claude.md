---
tags: [guia]
atualizado_em: 2026-09-13
---

# Como trabalhar com o Claude

Voltar ao [[00 Índice]].

## Como o segundo cérebro funciona
- O arquivo `CLAUDE.md` na raiz do projeto instrui o Claude a ler o [[00 Índice]] e as notas relacionadas antes de decidir qualquer coisa.
- **Decisões** ficam em `docs/Decisões/`. Uma decisão só muda com um motivo novo, e a mudança vira uma nota DEC nova, que aponta para a antiga.
- **Pendências** ficam em [[Pendências]]. O Claude não preenche pendência com suposição; ele pergunta.
- **Registro:** ao fim de cada sessão, o Claude escreve o que foi feito em `docs/Registro/AAAA-MM-DD.md` e atualiza o [[Progresso]].
- O [[README]] continua sendo o documento formal para a banca. As notas de `docs/` são o registro de trabalho.

## Dicas para pedir coisas
- Cite a nota: "segue a [[DEC-005 O modelo nunca recebe o identificador do usuário]]" ou "resolve a pendência do modelo do Groq".
- Quando uma pendência for resolvida fora da conversa (ex.: a orientadora definiu as metas), escreva a resposta em [[Pendências]] ou conte ao Claude para registrar.
- Quando quiser mudar uma decisão, diga qual DEC e por quê.

## O que o Claude não faz por você
- Criar contas, aceitar termos ou colar chaves de API e senhas. Veja o [[Passo a passo de configuração]].
- Fazer commit ou push sem você pedir.
