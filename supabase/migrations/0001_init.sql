create extension if not exists pgcrypto;

-- ===================== USUÁRIOS SIMULADOS =====================
-- Substituem a identidade que, em produção, viria do servidor institucional.
-- Somente dados fictícios.
create table simulated_users (
  id            uuid primary key default gen_random_uuid(),
  display_name  text not null,
  profile       text not null check (profile in ('aluno','docente','funcionario')),
  created_at    timestamptz not null default now()
);

-- ===================== DOCUMENTOS (metadados do Storage) =====================
create table documents (
  id             uuid primary key default gen_random_uuid(),
  owner_user_id  uuid references simulated_users(id) on delete cascade, -- null = documento institucional
  title          text not null,
  doc_type       text not null,          -- [PENDENTE: tipos de documento do MVP]
  storage_path   text not null unique,
  issued_at      date,
  created_at     timestamptz not null default now()
);
create index documents_owner_idx on documents (owner_user_id);

-- ===================== EXECUÇÕES DA BATERIA =====================
create table test_runs (
  id              uuid primary key default gen_random_uuid(),
  prompt_version  text not null,
  kb_version      text not null,
  llm_model       text not null,
  notes           text,
  started_at      timestamptz not null default now(),
  finished_at     timestamptz
);

-- ===================== LOG ESTRUTURADO =====================
create table interaction_logs (
  id                          bigserial primary key,
  created_at                  timestamptz not null default now(),
  conversation_id             uuid not null,
  user_hash                   text not null,         -- hash com salt, nunca o ID em claro
  user_profile                text not null check (user_profile in ('aluno','docente','funcionario')),
  user_message_redacted       text not null,
  assistant_message_redacted  text,
  action                      text not null check (action in
                                ('answer','disambiguation','document_link',
                                 'document_not_found','refused_sensitive_rule','error')),
  guardrail_flags             text[] not null default '{}',   -- ex.: 'pii_redacted'
  tool_calls                  jsonb not null default '[]',    -- nome, argumentos e status de cada chamada
  documents_offered           uuid[],
  document_delivered          uuid references documents(id) on delete set null,
  llm_provider                text,
  llm_model                   text,
  used_fallback               boolean not null default false,
  prompt_version              text not null,
  kb_version                  text not null,
  latency_ms                  int,
  error_message               text,
  run_id                      uuid references test_runs(id) on delete cascade, -- null fora da bateria
  scenario_id                 text
);
create index interaction_logs_run_idx on interaction_logs (run_id, scenario_id);

-- ===================== AVALIAÇÃO INDEPENDENTE =====================
create table scenario_reviews (
  id           bigserial primary key,
  run_id       uuid not null references test_runs(id) on delete cascade,
  scenario_id  text not null,
  reviewer     text not null check (reviewer in ('lucca','rafael')),
  verdict      text not null check (verdict in ('correta','parcial','incorreta')),
  notes        text,
  reviewed_at  timestamptz not null default now(),
  unique (run_id, scenario_id, reviewer)
);

-- ===================== SEGURANÇA =====================
alter table simulated_users   enable row level security;
alter table documents         enable row level security;
alter table test_runs         enable row level security;
alter table interaction_logs  enable row level security;
alter table scenario_reviews  enable row level security;
-- Sem políticas: apenas o servidor, com a service role key, acessa as tabelas.
