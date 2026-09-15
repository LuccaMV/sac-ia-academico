// Protocolo da rota /api/chat: NDJSON, com um evento JSON por linha.
// start: a interação foi aceita · delta: trecho da resposta · done: resposta completa · error: falha.
export type ChatStreamEvent =
  | { type: "start"; interactionId: string; protectedData: boolean }
  | { type: "delta"; text: string }
  | { type: "done" }
  | { type: "error"; message: string };

export async function* readChatEvents(body: ReadableStream<Uint8Array>): AsyncGenerator<ChatStreamEvent> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let newline = buffer.indexOf("\n");
      while (newline !== -1) {
        const line = buffer.slice(0, newline).trim();
        buffer = buffer.slice(newline + 1);
        if (line) yield JSON.parse(line) as ChatStreamEvent;
        newline = buffer.indexOf("\n");
      }
    }

    buffer += decoder.decode();
    if (buffer.trim()) yield JSON.parse(buffer) as ChatStreamEvent;
  } finally {
    reader.releaseLock();
  }
}
