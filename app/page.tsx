import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { BrandMark } from "@/components/brand/BrandMark";
import { HalftoneHorizon } from "@/components/brand/HalftoneHorizon";
import { IntroSplash } from "@/components/brand/IntroSplash";
import { SiteHeader } from "@/components/SiteHeader";
import { StatusChip, type ChipTone } from "@/components/StatusChip";
import {
  behaviors,
  context,
  groundwork,
  methodology,
  objectives,
  privacy,
  project,
  references,
  researchProblem,
  scope,
  securityPrinciple,
  type BehaviorStatus,
} from "@/lib/project-content";
import { usesDraftKnowledge } from "@/lib/server/knowledge-status";

// Cartões sobem levemente e ganham borda ciano no hover.
const CARD_HOVER =
  "transition duration-300 ease-soft hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_14px_30px_rgba(4,67,110,0.10)]";

// Botões principais: sobem no hover e afundam no clique; a seta desliza.
const BUTTON_MOTION = "group transition duration-200 ease-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]";

const STATUS: Record<BehaviorStatus, { tone: ChipTone; label: string }> = {
  disponivel: { tone: "source", label: "Disponível" },
  parcial: { tone: "warn", label: "Em parte" },
  desenvolvimento: { tone: "neutral", label: "Em desenvolvimento" },
};

export default async function ProjectPage() {
  const drafts = await usesDraftKnowledge();

  return (
    <>
      <IntroSplash label="abrindo o projeto" />
      <SiteHeader active="projeto" />

      <main>
        <Hero />

        <Section id="contexto" number="01" eyebrow="Por que este projeto" title={context.titulo} intro={context.intro}>
          <div className="grid gap-4 md:grid-cols-3">
            {context.cards.map((card, index) => (
              <article key={card.titulo} className={`rounded-2xl border border-line bg-surface p-6 ${CARD_HOVER}`}>
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{card.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{card.texto}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border-l-4 border-ciano bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-bold text-ink">{context.relevancia.titulo}</h3>
            <p className="mt-2 max-w-4xl leading-relaxed text-muted">{context.relevancia.texto}</p>
          </div>
        </Section>

        <Section id="problema" number="02" eyebrow="Problema de pesquisa" title="A pergunta que guia o estudo">
          <figure className="relative overflow-hidden rounded-3xl bg-marinho p-8 text-white sm:p-12">
            <BrandMark
              size={220}
              body="rgba(255,255,255,0.06)"
              flap="rgba(0,171,197,0.35)"
              className="pointer-events-none absolute -right-10 -top-10"
            />
            <blockquote className="relative max-w-4xl text-2xl font-bold leading-snug tracking-[-0.015em] sm:text-[2rem]">
              “{researchProblem}”
            </blockquote>
            <figcaption className="relative mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
              Relatório de Iniciação Científica · UNIFENAS · {project.ano}
            </figcaption>
          </figure>
        </Section>

        <Section
          id="fundamentacao"
          number="03"
          eyebrow="Argumentação"
          title={groundwork.titulo}
          intro={groundwork.intro}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groundwork.argumentos.map((argument, index) => (
              <article key={argument.titulo} className={`flex flex-col rounded-2xl border border-line bg-surface p-6 ${CARD_HOVER}`}>
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{argument.titulo}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{argument.texto}</p>
                <StatusChip tone="source" label={argument.fonte} mono className="mt-5" />
              </article>
            ))}
          </div>
        </Section>

        <Section id="objetivos" number="04" eyebrow="Objetivos" title="O que a pesquisa pretende alcançar">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl bg-accent-soft p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">Objetivo geral</p>
              <p className="mt-4 text-xl font-bold leading-snug text-ink">{objectives.geral}</p>
            </div>
            <ol className="grid gap-3">
              {objectives.especificos.map((objective) => (
                <li key={objective.letra} className={`flex gap-4 rounded-2xl border border-line bg-surface p-5 ${CARD_HOVER}`}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-user font-mono text-sm font-medium text-user-ink">
                    {objective.letra}
                  </span>
                  <div>
                    <p className="leading-relaxed text-ink">{objective.texto}</p>
                    {objective.nota && <p className="mt-2 text-sm leading-relaxed text-muted">{objective.nota}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section
          id="como-funciona"
          number="05"
          eyebrow="O assistente"
          title="Cinco comportamentos centrais"
          intro="O MVP é um chat web que responde dúvidas acadêmicas e administrativas e, quando o usuário pede um documento, localiza e entrega o arquivo."
        >
          <ol className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            {behaviors.map((behavior, index) => (
              <li key={behavior.texto} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <p className="leading-relaxed text-ink">{behavior.texto}</p>
                  {behavior.detalhe && <p className="mt-1 text-sm text-muted">{behavior.detalhe}</p>}
                </div>
                <StatusChip tone={STATUS[behavior.status].tone} label={STATUS[behavior.status].label} />
              </li>
            ))}
          </ol>
          <div className="mt-4 flex gap-4 rounded-2xl border-l-4 border-ciano bg-surface p-6 sm:p-8">
            <BrandMark size={32} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-ink">Princípio de segurança</h3>
              <p className="mt-2 max-w-4xl leading-relaxed text-muted">{securityPrinciple}</p>
            </div>
          </div>
        </Section>

        <Section id="metodologia" number="06" eyebrow="Metodologia" title="Como o estudo é conduzido" intro={methodology.intro}>
          <ol className="grid gap-4 md:grid-cols-3">
            {methodology.fases.map((phase, index) => (
              <li key={phase.titulo} className={`relative rounded-2xl border border-line bg-surface p-6 ${CARD_HOVER}`}>
                <span className="grid size-9 place-items-center rounded-full bg-ciano font-mono text-sm font-medium text-tinta">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{phase.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{phase.texto}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-4xl rounded-2xl bg-surface p-6 leading-relaxed text-muted ring-1 ring-inset ring-line">
            <span className="font-semibold text-ink">Avaliação. </span>
            {methodology.avaliacao}
          </p>
        </Section>

        <Section
          id="privacidade"
          number="07"
          eyebrow="LGPD e Privacy by Design"
          title="Privacidade faz parte da arquitetura"
          intro={privacy.intro}
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="hidden grid-cols-[1.2fr_0.8fr_1.2fr] gap-6 border-b border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:grid">
              <span>Informação</span>
              <span>Classificação</span>
              <span>Tratamento</span>
            </div>
            {privacy.matriz.map((row) => (
              <div
                key={row.categoria}
                className="grid gap-2 border-b border-line px-6 py-5 last:border-b-0 md:grid-cols-[1.2fr_0.8fr_1.2fr] md:gap-6"
              >
                <p className="font-semibold text-ink">{row.categoria}</p>
                <p className="text-sm text-muted md:text-base">{row.classificacao}</p>
                <p className="leading-relaxed text-ink">{row.tratamento}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="escopo" number="08" eyebrow="Escopo do MVP" title="O que entra e o que fica para depois">
          <div className="grid gap-4 md:grid-cols-2">
            <ScopeList title="Dentro do escopo" items={scope.dentro} included />
            <ScopeList title="Fora do escopo" items={scope.fora} included={false} />
          </div>
        </Section>

        <Section id="equipe" number="09" eyebrow="Equipe" title="Quem desenvolve a pesquisa">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.pesquisadores.map((name) => (
              <PersonCard key={name} role="Pesquisador" name={name} />
            ))}
            {project.orientacao.map(({ papel, nome }) => (
              <PersonCard key={nome} role={papel} name={nome} />
            ))}
          </div>
          <p className="mt-6 text-muted">
            {project.programa} em {project.curso} · {project.instituicao} · câmpus {project.campus} · {project.ano}
          </p>
        </Section>

        <Section id="referencias" number="10" eyebrow="Referências" title="Base bibliográfica">
          <ol className="grid max-w-4xl gap-4">
            {references.map((reference) => (
              <li key={reference.destaque} className="text-[15px] leading-relaxed text-muted">
                {reference.antes}
                <strong className="font-semibold text-ink">{reference.destaque}</strong>
                {reference.depois}
              </li>
            ))}
          </ol>
        </Section>

        <section className="border-t border-line">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
            <div className="relative overflow-hidden rounded-3xl bg-tinta text-white">
              <HalftoneHorizon className="absolute inset-0 h-full w-full opacity-80" />
              <div className="relative flex flex-col items-start gap-6 p-8 sm:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/60">Experimente</p>
                <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.025em] sm:text-5xl">
                  Pergunte ao SAC IA Acadêmico.
                </h2>
                <Link
                  href="/chat"
                  className={`inline-flex items-center gap-2 rounded-xl bg-ciano px-5 py-3 font-semibold text-tinta hover:shadow-[0_10px_24px_rgba(0,171,197,0.35)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${BUTTON_MOTION}`}
                >
                  Abrir o chat <ArrowIcon />
                </Link>
                {drafts && (
                  <p className="max-w-xl text-sm text-white/70">
                    A base de conhecimento reúne páginas públicas da UNIFENAS e ainda está em conferência pela equipe.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <BrandLockup markSize={28} />
          <p className="font-mono text-[11px] tracking-wide text-muted">
            {project.programa} · UNIFENAS · {project.campus} · {project.ano}
          </p>
        </div>
      </footer>
    </>
  );
}

function Hero() {
  return (
    <section>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="motion-safe:animate-fade-up">
          <Eyebrow>
            {project.programa} · {project.curso} · UNIFENAS {project.campus}
          </Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl">
            {project.titulo}
            <span className="mt-2 block text-accent-ink">{project.subtitulo}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.resumo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/chat"
              className={`inline-flex items-center gap-2 rounded-xl bg-user px-5 py-3 font-semibold text-user-ink hover:shadow-[0_10px_24px_rgba(4,67,110,0.28)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${BUTTON_MOTION}`}
            >
              Experimentar o chat <ArrowIcon />
            </Link>
            <a
              href="#problema"
              className={`inline-flex items-center rounded-xl border border-line bg-surface px-5 py-3 font-semibold text-ink hover:border-accent hover:shadow-[0_10px_24px_rgba(4,67,110,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${BUTTON_MOTION}`}
            >
              Conhecer o problema
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {["Base de documentos oficiais", "Resposta com fonte citada", "LGPD desde a concepção"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ciano" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="motion-safe:animate-fade-up motion-safe:[animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-3xl bg-tinta text-white shadow-[0_24px_60px_rgba(6,26,43,0.25)]">
            <HalftoneHorizon className="absolute inset-0 h-full w-full" />
            <div className="relative flex min-h-[22rem] flex-col justify-between gap-8 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/60">
                  Resposta com fonte
                </span>
                <BrandMark size={28} body="#FFFFFF" flap="#00ABC5" />
              </div>
              <div className="space-y-3" aria-hidden>
                <p className="ml-auto w-fit max-w-[85%] origin-bottom-right rounded-2xl rounded-br-md bg-ciano px-4 py-2.5 text-sm font-medium text-tinta motion-safe:animate-message-in motion-safe:[animation-delay:500ms]">
                  Quando começa o semestre 2026/2?
                </p>
                <div className="w-fit max-w-[92%] origin-bottom-left rounded-2xl rounded-bl-md bg-white/95 px-4 py-3 text-sm leading-relaxed text-tinta motion-safe:animate-message-in motion-safe:[animation-delay:1000ms]">
                  Em 03/08, no calendário de Medicina Alfenas (1º ao 6º período).
                  <span className="mt-2 flex w-fit origin-left items-center gap-1.5 rounded-lg bg-[#BDEFF6] px-2 py-1 font-mono text-[11px] text-marinho motion-safe:animate-pop motion-safe:[animation-delay:1400ms]">
                    <span className="size-1.5 rounded-full bg-ciano" />
                    Fonte: Calendário Acadêmico 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Exemplo ilustrativo com base na base de conhecimento atual.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Section({
  id,
  number,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div className="reveal mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <Eyebrow>
          {number} · {eyebrow}
        </Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
      <span className="size-1.5 rounded-full bg-ciano" aria-hidden />
      {children}
    </p>
  );
}

function ScopeList({ title, items, included }: { title: string; items: string[]; included: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-muted">
            <span
              className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
                included ? "bg-accent-soft text-accent-ink" : "bg-page text-muted ring-1 ring-inset ring-line"
              }`}
              aria-hidden
            >
              {included ? <CheckIcon /> : <MinusIcon />}
            </span>
            <span className={included ? "text-ink" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonCard({ role, name }: { role: string; name: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-surface p-6 ${CARD_HOVER}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{role}</p>
      <p className="mt-3 text-lg font-bold leading-snug text-ink">{name}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden
      className="transition-transform duration-200 ease-soft group-hover:translate-x-1"
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
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden>
      <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden>
      <path d="M4 8 H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
