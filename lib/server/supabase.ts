import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getEnv } from "./env";

let client: SupabaseClient | null | undefined;

// Retorna null enquanto o Supabase não estiver configurado no .env.local.
// Usa a service role key: nunca importe este módulo em componentes de cliente.
export function getSupabaseAdmin(): SupabaseClient | null {
  if (client !== undefined) return client;

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = getEnv();
  client =
    SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
      ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
          auth: { persistSession: false, autoRefreshToken: false },
        })
      : null;

  return client;
}
