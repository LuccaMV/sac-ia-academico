import "server-only";
import { ApiError, GoogleGenAI, type Content, type GenerateContentResponse } from "@google/genai";
import { LLMError, type LLMProvider, type LLMRequest, type LLMStream } from "./provider";

export class GeminiProvider implements LLMProvider {
  readonly name = "gemini";
  private readonly client: GoogleGenAI;

  constructor(
    apiKey: string,
    readonly model: string,
    // Modelos alternativos do próprio Gemini, usados quando o principal está sobrecarregado ou sem cota.
    private readonly fallbackModels: string[] = [],
  ) {
    // Sem novas tentativas dentro do SDK: por padrão ele repete o 429 até 5 vezes, esperando até 60 s,
    // e o usuário ficava mais de um minuto sem resposta. A troca de modelo acima resolve mais rápido.
    this.client = new GoogleGenAI({ apiKey, httpOptions: { retryOptions: { attempts: 1 } } });
  }

  async stream(request: LLMRequest): Promise<LLMStream> {
    const models = [this.model, ...this.fallbackModels.filter((model) => model !== this.model)];
    let lastError: LLMError | null = null;

    for (const model of models) {
      try {
        return await this.streamWith(model, request);
      } catch (error) {
        if (!(error instanceof LLMError) || !error.retryable) throw error;
        lastError = error;
        console.warn(`[gemini] ${model} indisponível, tentando o próximo modelo: ${error.message}`);
      }
    }

    throw lastError ?? new LLMError("Nenhum modelo do Gemini configurado.", this.name);
  }

  private async streamWith(model: string, request: LLMRequest): Promise<LLMStream> {
    const { systemPrompt, history, message, temperature, signal } = request;
    const contents: Content[] = [
      ...history.map((turn) => ({
        role: turn.role === "assistant" ? "model" : "user",
        parts: [{ text: turn.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];
    const toError = (error: unknown) => this.toLLMError(model, error, signal);

    let responses: AsyncGenerator<GenerateContentResponse>;
    let first: IteratorResult<GenerateContentResponse>;
    try {
      responses = await this.client.models.generateContentStream({
        model,
        contents,
        config: { systemInstruction: systemPrompt, temperature, abortSignal: signal },
      });
      // Limite de uso e sobrecarga aparecem até o primeiro trecho: até aqui ainda dá para trocar de modelo.
      first = await responses.next();
    } catch (error) {
      throw toError(error);
    }

    async function* chunks(): AsyncGenerator<string> {
      try {
        let current = first;
        while (!current.done) {
          const text = current.value.text;
          if (text) yield text;
          current = await responses.next();
        }
      } catch (error) {
        throw toError(error);
      }
    }

    return { provider: this.name, model, chunks: chunks() };
  }

  private toLLMError(model: string, error: unknown, signal?: AbortSignal): LLMError {
    if (error instanceof LLMError) return error;
    if (signal?.aborted) {
      return new LLMError(`Chamada ao Gemini (${model}) cancelada pelo navegador.`, this.name);
    }
    if (error instanceof ApiError) {
      // A mensagem da API traz o JSON inteiro do erro; o log guarda só o começo.
      return new LLMError(
        `Gemini (${model}) respondeu com status ${error.status}: ${error.message.slice(0, 160)}`,
        this.name,
        error.status,
        error.status === 429 || error.status >= 500,
      );
    }
    return new LLMError(
      `Falha ao chamar o Gemini (${model}): ${error instanceof Error ? error.message : String(error)}`,
      this.name,
      undefined,
      true,
    );
  }
}
