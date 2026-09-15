"use client";

import type { ReactNode } from "react";
import {
  CAMPUS_LABELS,
  CAMPUS_OPTIONS,
  COURSES_BY_CAMPUS,
  isCampus,
  isCourseOffered,
  type AcademicContext,
} from "@/lib/academic-context";

// Seletor de câmpus e curso acima da caixa de mensagem. A escolha vai junto com cada pergunta.
export function ContextSelector({
  value,
  onChange,
}: {
  value: AcademicContext;
  onChange: (next: AcademicContext) => void;
}) {
  const courses = value.campus ? COURSES_BY_CAMPUS[value.campus] : [];

  function changeCampus(campus: string) {
    if (!isCampus(campus)) {
      onChange({});
      return;
    }
    // Mantém o curso só se ele também existir no novo câmpus.
    const curso = value.curso && isCourseOffered(campus, value.curso) ? value.curso : undefined;
    onChange({ campus, curso });
  }

  return (
    <div className="mb-2 flex flex-wrap items-center gap-2 px-1">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">Responder para</span>
      <PillSelect label="Câmpus" value={value.campus ?? ""} active={Boolean(value.campus)} onChange={changeCampus}>
        <option value="">Todos os câmpus</option>
        {CAMPUS_OPTIONS.map((campus) => (
          <option key={campus} value={campus}>
            {CAMPUS_LABELS[campus]}
          </option>
        ))}
      </PillSelect>
      <PillSelect
        label="Curso"
        value={value.curso ?? ""}
        active={Boolean(value.curso)}
        disabled={!value.campus}
        onChange={(curso) => onChange({ ...value, curso: curso || undefined })}
      >
        <option value="">{value.campus ? "Todos os cursos" : "Escolha o câmpus primeiro"}</option>
        {courses.map((curso) => (
          <option key={curso} value={curso}>
            {curso}
          </option>
        ))}
      </PillSelect>
    </div>
  );
}

function PillSelect({
  label,
  value,
  active,
  disabled = false,
  onChange,
  children,
}: {
  label: string;
  value: string;
  active: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="relative inline-flex min-w-0 max-w-full">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className={`h-8 min-w-0 max-w-[16rem] cursor-pointer appearance-none truncate rounded-full border pl-3 pr-8 text-xs font-semibold transition duration-200 ease-soft active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 ${
          active
            ? "border-accent bg-accent-soft text-accent-ink"
            : "border-line bg-surface text-ink enabled:hover:border-accent"
        }`}
      >
        {children}
      </select>
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
      >
        <path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
