// Câmpus e cursos de graduação para o seletor do chat.
// Fonte: knowledge-base/cursos-graduacao.md (consultado em 2026-09-14). Ao mudar os cursos da base, atualize esta lista.
export const CAMPUS_OPTIONS = ["Alfenas", "Belo Horizonte", "Campo Belo", "Divinópolis", "Varginha", "EAD"] as const;

export type Campus = (typeof CAMPUS_OPTIONS)[number];

export const CAMPUS_LABELS: Record<Campus, string> = {
  Alfenas: "Alfenas",
  "Belo Horizonte": "Belo Horizonte",
  "Campo Belo": "Campo Belo",
  Divinópolis: "Divinópolis",
  Varginha: "Varginha",
  EAD: "EAD (a distância)",
};

export const COURSES_BY_CAMPUS: Record<Campus, readonly string[]> = {
  Alfenas: [
    "Administração",
    "Agronomia",
    "Arquitetura e Urbanismo",
    "Biomedicina",
    "Ciência da Computação",
    "Ciências Contábeis",
    "Direito",
    "Educação Física",
    "Enfermagem",
    "Engenharia Civil",
    "Estética e Cosmética",
    "Farmácia",
    "Fisioterapia",
    "Gastronomia",
    "Medicina",
    "Medicina Veterinária",
    "Nutrição",
    "Odontologia",
    "Psicologia",
    "Terapia Ocupacional",
    "Zootecnia",
  ],
  "Belo Horizonte": ["Direito", "Medicina", "Psicologia"],
  "Campo Belo": ["Direito"],
  Divinópolis: [
    "Biomedicina",
    "Direito",
    "Educação Física",
    "Farmácia",
    "Fisioterapia",
    "Nutrição",
    "Odontologia",
    "Psicologia",
    "Terapia Ocupacional",
  ],
  Varginha: [
    "Biomedicina",
    "Direito",
    "Farmácia",
    "Fisioterapia",
    "Nutrição",
    "Odontologia",
    "Psicologia",
    "Terapia Ocupacional",
  ],
  EAD: [
    "Administração",
    "Análise e Desenvolvimento de Sistemas",
    "Ciências Contábeis",
    "Comunicação Institucional",
    "Gestão Comercial",
    "Gestão da Tecnologia da Informação",
    "Gestão de Recursos Humanos",
    "Gestão do Agronegócio",
    "Gestão Financeira",
    "Gestão Pública",
    "Inteligência Artificial",
    "Logística",
    "Marketing",
    "Processos Gerenciais",
    "Sistemas para Internet",
    "Tecnologia em Secretariado",
  ],
};

export type AcademicContext = {
  campus?: Campus;
  curso?: string;
};

export function isCampus(value: unknown): value is Campus {
  return typeof value === "string" && (CAMPUS_OPTIONS as readonly string[]).includes(value);
}

export function isCourseOffered(campus: Campus, curso: string): boolean {
  return COURSES_BY_CAMPUS[campus].includes(curso);
}

// Aceita só combinações que existem na lista; qualquer outra coisa vira contexto vazio.
export function parseAcademicContext(value: unknown): AcademicContext {
  if (typeof value !== "object" || value === null) return {};
  const { campus, curso } = value as Record<string, unknown>;
  if (!isCampus(campus)) return {};
  return typeof curso === "string" && isCourseOffered(campus, curso) ? { campus, curso } : { campus };
}

// Texto que entra no system prompt no lugar de {contexto}.
export function describeAcademicContext(context?: AcademicContext): string {
  if (!context?.campus) return "não informado";
  const place = context.campus === "EAD" ? "modalidade EAD" : `câmpus ${context.campus}`;
  return context.curso ? `${place}, curso ${context.curso}` : `${place}, curso não informado`;
}
