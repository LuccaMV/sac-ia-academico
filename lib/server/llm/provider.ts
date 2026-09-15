export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

export type LLMRequest = {
  systemPrompt: string;
  history: ChatTurn[];
  message: string;
  temperature: number;
  // Cancela a chamada quando o navegador desiste da resposta.
  signal?: AbortSignal;
};

// Resposta em trechos. O modelo que respondeu já está definido quando o primeiro trecho chega.
export type LLMStream = {
  provider: string;
  model: string;
  chunks: AsyncIterable<string>;
};

export interface LLMProvider {
  readonly name: string;
  readonly model: string;
  stream(request: LLMRequest): Promise<LLMStream>;
}

export class LLMError extends Error {
  constructor(
    message: string,
    readonly provider: string,
    readonly status?: number,
    // Indica se vale tentar outro modelo ou provedor (limite de uso ou instabilidade).
    readonly retryable = false,
  ) {
    super(message);
    this.name = "LLMError";
  }
}
