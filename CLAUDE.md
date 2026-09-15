@AGENTS.md

# SAC IA Acadêmico: instruções para o Claude

Este repositório também é o vault do Obsidian do projeto. A pasta `docs/` é o segundo cérebro: consulte antes de decidir e mantenha atualizada.

<!-- O next dev só regrava o bloco dentro do AGENTS.md; este arquivo não é sobrescrito enquanto o AGENTS.md existir. -->

## Antes de agir
- Leia `docs/00 Índice.md` e siga os links relevantes para a tarefa.
- Decisões tomadas estão em `docs/Decisões/`. Não reabra uma decisão sem motivo novo; se precisar mudar, crie uma nova nota DEC que substitua a anterior e diga isso ao usuário.
- Pendências abertas: `docs/Projeto/Pendências.md`. Nunca preencha pendência com suposição; pergunte.
- Andamento: `docs/Projeto/Progresso.md`. Mapa dos arquivos: `docs/Arquitetura/Mapa do código.md`.
- Base de conhecimento e fontes: `docs/Fontes/Fontes da UNIFENAS.md` e `knowledge-base/README.md`.
- O `README.md` é o documento formal para a banca; `docs/` é o registro de trabalho.

## Depois de agir
- Registre o que foi feito em `docs/Registro/AAAA-MM-DD.md` (crie a nota do dia se não existir, no formato das anteriores) e atualize `docs/Projeto/Progresso.md`.
- Decisão nova e relevante: crie `docs/Decisões/DEC-NNN Título.md` no formato das existentes e adicione o link em `docs/00 Índice.md`.
- Pendência resolvida: marque em `docs/Projeto/Pendências.md` com a data e a resposta; se afetar o README, atualize a seção correspondente.
- Arquivo de código novo: inclua em `docs/Arquitetura/Mapa do código.md`.
- Conecte as notas com wikilinks do Obsidian (`[[Nome da nota]]`, `[[README#Título da seção]]`). Nomes de nota devem ser únicos.
- Não use wikilinks dentro de `knowledge-base/` nem de `prompts/`: esse texto vai para o modelo.

## Convenções
- Português brasileiro. Não use travessão. Não invente dados, números, metas ou prazos: use `[PENDENTE: ...]`.
- Apenas serviços gratuitos.
- `knowledge-base/` só aceita informação de fontes oficiais da UNIFENAS (cuidado: a UNIFAL-MG também fica em Alfenas e aparece nas buscas).
- Nunca peça ao usuário para colar chaves de API ou senhas na conversa: elas vão no `.env.local`.
- Rode `npx tsc --noEmit`, `npm run lint` e `npm run build` antes de dar uma mudança de código como concluída.
