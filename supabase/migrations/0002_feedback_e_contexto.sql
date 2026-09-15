-- Streaming, feedback por resposta e contexto de câmpus e curso (DEC-016).

-- ===================== LOG: IDENTIFICADOR E CONTEXTO =====================
-- interaction_id é gerado pelo servidor e enviado ao navegador, para o feedback apontar para a resposta.
alter table interaction_logs
  add column interaction_id    uuid unique,
  add column academic_context  jsonb;          -- ex.: {"campus": "Alfenas", "curso": "Ciência da Computação"}

-- ===================== FEEDBACK POR RESPOSTA =====================
-- Sem chave estrangeira: o voto pode chegar mesmo quando o log da interação não foi ao banco.
create table interaction_feedback (
  id               bigserial primary key,
  created_at       timestamptz not null default now(),
  interaction_id   uuid not null,
  conversation_id  uuid not null,
  helpful          boolean not null
);
create index interaction_feedback_interaction_idx on interaction_feedback (interaction_id);

alter table interaction_feedback enable row level security;
-- Sem políticas: apenas o servidor, com a service role key, acessa a tabela.
