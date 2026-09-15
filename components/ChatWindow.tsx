"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import { HalftoneHorizon } from "@/components/brand/HalftoneHorizon";
import { ContextSelector } from "@/components/ContextSelector";
import { StatusChip } from "@/components/StatusChip";
import { hideTrailingSourceLine, splitMaskedData, splitSources } from "@/lib/chat-format";
import { readChatEvents } from "@/lib/chat-stream";
import { useAcademicContext } from "@/lib/use-academic-context";

type Feedback = "helpful" | "not_helpful";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  // Mensagens que falharam aparecem na tela, mas não entram no histórico enviado ao modelo.
  failed?: boolean;
  // O servidor mascarou CPF, e-mail ou telefone antes de enviar ao modelo.
  protectedData?: boolean;
  // A resposta ainda está chegando do servidor.
  streaming?: boolean;
  // Identificador da interação no log, usado pelo feedback.
  interactionId?: string;
  feedback?: Feedback;
};

type ErrorBody = {
  error?: string;
  detail?: string;
};

const ERROR_TEXT = "Não foi possível obter uma resposta agora. Tente novamente em instantes.";
const MAX_INPUT_HEIGHT = 160;

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [context, setContext] = useAcademicContext();
  const conversationId = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const streaming = messages.some((message) => message.streaming);
  // Os três pontos ficam na tela até o primeiro trecho da resposta chegar.
  const waitingFirstChunk = loading && !messages.some((message) => message.streaming && message.content);

  useEffect(() => {
    // Durante o streaming a rolagem é imediata, para não brigar com o texto que cresce.
    bottomRef.current?.scrollIntoView({ behavior: streaming ? "auto" : "smooth", block: "end" });
  }, [messages, loading, streaming]);

  function updateMessage(id: string, patch: (message: Message) => Partial<Message>) {
    setMessages((prev) => prev.map((message) => (message.id === id ? { ...message, ...patch(message) } : message)));
  }

  function resizeInput(element: HTMLTextAreaElement) {
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, MAX_INPUT_HEIGHT)}px`;
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    conversationId.current ??= crypto.randomUUID();
    const history = messages
      .filter((message) => !message.failed && !message.streaming)
      .map(({ role, content }) => ({ role, content }));
    const userMessageId = crypto.randomUUID();
    const assistantMessageId = crypto.randomUUID();

    setMessages((prev) => [...prev, { id: userMessageId, role: "user", content: text }]);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setLoading(true);

    let started = false;
    let finished = false;
    let failure: string | null = null;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId: conversationId.current,
          message: text,
          history,
          context: context.campus ? context : undefined,
        }),
      });

      if (!response.ok || !response.body) {
        const data: ErrorBody | null = await response.json().catch(() => null);
        throw new Error(data?.detail ?? data?.error ?? ERROR_TEXT);
      }

      for await (const event of readChatEvents(response.body)) {
        if (event.type === "start") {
          started = true;
          updateMessage(userMessageId, () => ({ protectedData: event.protectedData }));
          setMessages((prev) => [
            ...prev,
            {
              id: assistantMessageId,
              role: "assistant",
              content: "",
              streaming: true,
              interactionId: event.interactionId,
            },
          ]);
        } else if (event.type === "delta") {
          updateMessage(assistantMessageId, (message) => ({ content: message.content + event.text }));
        } else if (event.type === "done") {
          finished = true;
        } else {
          failure = event.message;
        }
      }
    } catch (error) {
      console.error(error);
      failure = error instanceof Error && error.message ? error.message : ERROR_TEXT;
    } finally {
      if (finished) {
        updateMessage(assistantMessageId, () => ({ streaming: false }));
      } else {
        // Sem o evento "done", a resposta ficou incompleta: vira mensagem de erro.
        const reply = failure ?? ERROR_TEXT;
        updateMessage(userMessageId, () => ({ failed: true }));
        if (started) {
          updateMessage(assistantMessageId, () => ({ content: reply, failed: true, streaming: false }));
        } else {
          setMessages((prev) => [
            ...prev,
            { id: assistantMessageId, role: "assistant", content: reply, failed: true },
          ]);
        }
      }
      setLoading(false);
    }
  }

  function rateAnswer(message: Message, feedback: Feedback) {
    if (!message.interactionId || !conversationId.current || message.feedback) return;
    updateMessage(message.id, () => ({ feedback }));
    void fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        interactionId: message.interactionId,
        conversationId: conversationId.current,
        helpful: feedback === "helpful",
      }),
    }).catch((error) => console.error(error));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void send();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value);
    resizeInput(event.target);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      void send();
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <main className="flex-1 overflow-y-auto" aria-live="polite" aria-busy={streaming}>
        <h1 className="sr-only">Chat do SAC IA Acadêmico</h1>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
          {messages.length === 0 && <EmptyState />}

          {messages.map((message) => {
            if (message.role === "user") return <UserMessage key={message.id} message={message} />;
            // Enquanto nenhum trecho chegou, quem aparece é o indicador de digitação.
            if (message.streaming && !message.content) return null;
            return (
              <AssistantMessage
                key={message.id}
                message={message}
                onRate={(feedback) => rateAnswer(message, feedback)}
              />
            );
          })}

          {waitingFirstChunk && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </main>

      <footer className="shrink-0 border-t border-line bg-page/80 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl px-4 pb-4 pt-3">
          <ContextSelector value={context} onChange={setContext} />
          <div className="flex items-end gap-2 rounded-2xl border border-line bg-surface p-2 pl-4 shadow-[0_6px_18px_rgba(4,67,110,0.08)] transition focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/15">
            <label htmlFor="chat-input" className="sr-only">
              Sua mensagem
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              rows={1}
              maxLength={2000}
              placeholder="Digite sua dúvida..."
              className="min-h-10 flex-1 resize-none bg-transparent py-2 text-[15px] leading-6 text-ink outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              aria-label={loading ? "Enviando mensagem" : "Enviar mensagem"}
              disabled={loading || !input.trim()}
              className={`group grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-tinta transition duration-200 ease-soft enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_8px_18px_rgba(0,171,197,0.35)] enabled:hover:brightness-110 enabled:active:translate-y-0 enabled:active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed ${
                loading ? "" : "disabled:opacity-40"
              }`}
            >
              {loading ? (
                <span
                  className="size-4 rounded-full border-2 border-tinta/25 border-t-tinta motion-safe:animate-spin"
                  aria-hidden
                />
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  aria-hidden
                  className="transition-transform duration-200 ease-soft group-enabled:group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8 H12 M8.5 4.5 L12 8 L8.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2 flex flex-col gap-1 px-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <p className="shrink-0 font-mono text-[10.5px] tracking-wide text-muted">
              Iniciação Científica · UNIFENAS · Alfenas-MG
            </p>
            <p className="text-[11px] leading-snug text-muted sm:text-right">
              Respostas geradas por IA. Confirme informações importantes com a Central de Atendimento. Não
              informe CPF, notas ou dados de saúde.
            </p>
          </div>
        </form>
      </footer>
    </div>
  );
}

function EmptyState() {
  return (
    <section className="flex flex-col gap-5 motion-safe:animate-fade-up">
      <div className="relative overflow-hidden rounded-3xl bg-tinta text-white shadow-[0_18px_40px_rgba(6,26,43,0.22)]">
        <HalftoneHorizon className="absolute inset-0 h-full w-full" />
        <div className="relative flex min-h-60 flex-col justify-between gap-10 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/60">
              Assistente acadêmico
            </span>
            <BrandMark size={28} body="#FFFFFF" flap="#00ABC5" />
          </div>
          <div>
            <p className="text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-5xl">
              Resposta
              <br />
              <span className="text-ciano">com fonte.</span>
            </p>
            <p className="mt-3 font-mono text-[11px] text-white/70">
              Base oficial. Nada inventado. Dado protegido.
            </p>
          </div>
        </div>
      </div>
      <p className="px-1 text-[15px] leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
        Pergunte sobre matrícula, calendário, cursos, horários, biblioteca ou canais de atendimento da UNIFENAS.
        Para respostas mais certeiras, escolha seu câmpus e curso logo abaixo.
      </p>
    </section>
  );
}

function AssistantAvatar() {
  return (
    <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface">
      <BrandMark size={18} />
    </div>
  );
}

function AssistantMessage({ message, onRate }: { message: Message; onRate: (feedback: Feedback) => void }) {
  const { body, sources } = message.streaming
    ? { body: hideTrailingSourceLine(message.content), sources: [] as string[] }
    : splitSources(message.content);
  const canRate = !message.streaming && !message.failed && Boolean(message.interactionId);

  return (
    <div className="flex origin-bottom-left items-start gap-2.5 motion-safe:animate-message-in">
      <AssistantAvatar />
      <div className="flex min-w-0 max-w-[85%] flex-col items-start gap-1.5">
        <div
          className={`rounded-2xl rounded-bl-md border px-4 py-3 text-[15px] leading-relaxed ${
            message.failed ? "border-coral/30 bg-danger text-danger-ink" : "border-line bg-surface text-ink"
          }`}
        >
          {message.failed && <StatusChip tone="danger" label="Sem resposta" className="mb-2" />}
          <p className="whitespace-pre-wrap">
            <MaskedText text={body} />
            {message.streaming && (
              <span
                className="ml-0.5 inline-block h-[1.05em] w-0.5 translate-y-[0.2em] rounded-full bg-accent motion-safe:animate-pulse"
                aria-hidden
              />
            )}
          </p>
          {sources.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {sources.map((source, index) => (
                <StatusChip
                  key={source}
                  tone="source"
                  label={`Fonte: ${source}`}
                  mono
                  className="origin-left motion-safe:animate-pop"
                  style={{ animationDelay: `${200 + index * 80}ms` }}
                />
              ))}
            </div>
          )}
        </div>
        {canRate && <FeedbackButtons value={message.feedback} onRate={onRate} />}
      </div>
    </div>
  );
}

function FeedbackButtons({ value, onRate }: { value?: Feedback; onRate: (feedback: Feedback) => void }) {
  if (value) {
    return (
      <p className="flex origin-left items-center gap-1.5 px-1 text-[11px] text-muted motion-safe:animate-pop" role="status">
        <ThumbIcon down={value === "not_helpful"} className="text-accent-ink" />
        Obrigado pelo retorno.
      </p>
    );
  }

  const buttonClass =
    "grid size-7 place-items-center rounded-lg text-muted transition duration-200 ease-soft hover:bg-accent-soft hover:text-accent-ink active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <div className="flex items-center gap-0.5 px-1 motion-safe:animate-fade-up motion-safe:[animation-delay:300ms]">
      <span className="mr-1.5 text-[11px] text-muted">Essa resposta ajudou?</span>
      <button type="button" aria-label="Sim, a resposta ajudou" title="Ajudou" onClick={() => onRate("helpful")} className={buttonClass}>
        <ThumbIcon />
      </button>
      <button
        type="button"
        aria-label="Não, a resposta não ajudou"
        title="Não ajudou"
        onClick={() => onRate("not_helpful")}
        className={buttonClass}
      >
        <ThumbIcon down />
      </button>
    </div>
  );
}

function ThumbIcon({ down = false, className = "" }: { down?: boolean; className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`${down ? "-scale-y-100" : ""} ${className}`}
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function UserMessage({ message }: { message: Message }) {
  return (
    <div className="flex origin-bottom-right flex-col items-end gap-1.5 motion-safe:animate-message-in">
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-user px-4 py-2.5 text-[15px] leading-relaxed text-user-ink ${
          message.failed ? "opacity-60" : ""
        }`}
      >
        {message.content}
      </div>
      {message.protectedData && (
        <StatusChip
          tone="protect"
          label="dados pessoais protegidos"
          title="CPF, e-mail ou telefone foram mascarados antes de a mensagem sair do servidor."
          mono
        />
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex origin-bottom-left items-start gap-2.5 motion-safe:animate-message-in" role="status">
      <AssistantAvatar />
      <div className="flex items-center gap-2.5 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3">
        <span className="flex gap-1" aria-hidden>
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="size-1.5 rounded-full bg-accent motion-safe:animate-typing"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </span>
        <span className="font-mono text-[11px] text-muted">consultando a base</span>
      </div>
    </div>
  );
}

function MaskedText({ text }: { text: string }) {
  return splitMaskedData(text).map((part, index) =>
    part.kind === "masked" ? (
      <span
        key={index}
        className="mx-0.5 rounded bg-protect px-1 py-px font-mono text-[12px] text-protect-ink"
        title="Dado pessoal mascarado por segurança"
      >
        {part.value}
      </span>
    ) : (
      <span key={index}>{part.value}</span>
    ),
  );
}
