import "server-only";
import { getKnowledgeBase } from "./knowledge-base";

// Indica se a base usada pelo chat ainda tem arquivos em rascunho.
export async function usesDraftKnowledge(): Promise<boolean> {
  try {
    // Mesmo critério do chat. Lido direto do ambiente porque getEnv() exige a chave do Gemini.
    const knowledgeBase = await getKnowledgeBase(process.env.KB_ALLOW_DRAFTS === "true");
    return knowledgeBase.files.some((file) => file.status === "rascunho");
  } catch (error) {
    console.error("[knowledge-status] não foi possível ler a base de conhecimento:", error);
    return false;
  }
}
