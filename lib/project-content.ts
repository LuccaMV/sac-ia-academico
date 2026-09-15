// Conteúdo da página do projeto (/).
// Fontes: docs/relatorio-ic.pdf (relatório de Iniciação Científica) e README.md.
// Ao atualizar o relatório ou o README, revise este arquivo. Não inclua dados que não estejam nesses documentos.

export const project = {
  titulo: "SAC IA Acadêmico",
  subtitulo: "Assistente virtual inteligente",
  programa: "Iniciação Científica",
  curso: "Ciência da Computação",
  instituicao: "Universidade Professor Edson Antônio Velano (UNIFENAS)",
  campus: "Alfenas-MG",
  ano: "2026",
  pesquisadores: ["Lucca Valladão e Marchetti", "Rafael Costa Monte Alegre"],
  orientacao: [
    { papel: "Orientador do TCC", nome: "Prof. Celso de Ávila Ramos" },
    { papel: "Orientadora da IC", nome: "Profª. Dra. Flávia Aparecida Oliveira Santos" },
  ],
  resumo:
    "Um assistente baseado em Inteligência Artificial que compreende, contextualiza e responde dúvidas sobre processos acadêmicos e administrativos em universidades, a partir de uma base curada de documentos institucionais.",
};

// Relatório, Introdução e seção 3.2. README, seção 1.
export const context = {
  titulo: "As mesmas perguntas chegam todos os dias às secretarias",
  intro:
    "No contexto universitário, a demanda por eficiência comunicacional é particularmente evidente. Tornou-se premente a necessidade de um ponto de contato primário que forneça respostas rápidas e precisas sobre processos acadêmicos fundamentais.",
  cards: [
    {
      titulo: "Dúvidas recorrentes",
      texto:
        "Matrículas, horários de aula, programas de intercâmbio e serviços estudantis concentram perguntas que se repetem ao longo do semestre.",
    },
    {
      titulo: "Secretarias sobrecarregadas",
      texto:
        "O suporte informativo a docentes e funcionários, envolvendo dados administrativos e recursos internos, também sobrecarrega as secretarias acadêmicas.",
    },
    {
      titulo: "Distância burocrática",
      texto:
        "O sucesso dos agentes conversacionais está em reduzir a distância burocrática entre a instituição e os estudantes, com interações fluidas e centralizadas.",
    },
  ],
  relevancia: {
    titulo: "Mais que um produto",
    texto:
      "O projeto não se limita a um produto comercial: é um campo de pesquisa sobre como agentes conversacionais modernos podem transformar a interação entre usuários e instituições de ensino. As bases da arquitetura têm viabilidade teórica para adaptação em outros setores, como comércio, hotelaria, saúde e serviços públicos.",
  },
};

// Relatório, seção 1.1.1. README, seção 2.1.
export const researchProblem =
  "De que maneira a implementação de um assistente virtual baseado em Inteligência Artificial pode otimizar o atendimento inicial e o acesso à informação no ambiente universitário?";

// Relatório, notas de rodapé das seções 2 e 3 (autores indicados como base de cada afirmação).
export const groundwork = {
  titulo: "O que sustenta a proposta",
  intro:
    "A pertinência científica da abordagem encontra respaldo na literatura recente sobre chatbots e assistentes virtuais no ensino superior.",
  argumentos: [
    {
      titulo: "Da palavra-chave à intenção",
      texto:
        "Com os Modelos de Linguagem de Grande Escala, os sistemas deixaram de depender de lógicas rígidas de palavras-chave e passaram a interpretar intenções complexas com fluidez e precisão contextual.",
      fonte: "BARTELLE, 2025",
    },
    {
      titulo: "Atendimento disponível o dia todo",
      texto:
        "A automação do suporte inicial assegura disponibilidade de 24 horas para a resolução de dúvidas e impacta indicadores institucionais, como a retenção de alunos.",
      fonte: "CASTOR et al., 2021",
    },
    {
      titulo: "Equipes livres para o que é complexo",
      texto:
        "Automatizar o suporte burocrático libera funcionários de secretaria e coordenadores para tarefas de maior complexidade analítica e pedagógica.",
      fonte: "BRASIL, A., 2025",
    },
    {
      titulo: "Conhecimento estruturado gera precisão",
      texto:
        "A eficácia de chatbots está ligada a uma modelagem lógica dos dados, semelhante a bases ontológicas, que permite extrair sentido, contexto e precisão dos documentos.",
      fonte: "SILVA et al.",
    },
    {
      titulo: "Mapear antes de automatizar",
      texto:
        "O levantamento prévio e detalhado dos fluxos de atendimento é premissa para que o agente conversacional aprimore, de fato, a experiência do usuário.",
      fonte: "OLIVEIRA, 2024",
    },
    {
      titulo: "Rapidez sem perder confiabilidade",
      texto:
        "A mensuração constante evita que a celeridade do atendimento prejudique a confiabilidade da informação repassada ao aluno.",
      fonte: "CASTOR et al., 2021",
    },
  ],
};

// Relatório, seções 1.1.2 e 1.1.3. README, seções 2.2 e 2.3.
export const objectives = {
  geral:
    "Analisar a viabilidade e a eficácia da implementação do SAC IA Acadêmico como assistente virtual autônomo, capaz de otimizar o suporte informacional em instituições de ensino.",
  especificos: [
    {
      letra: "a",
      texto:
        "Desenvolver e estruturar de forma ágil o assistente virtual inteligente, viabilizando o processamento de linguagem natural e a geração de respostas contextuais.",
    },
    {
      letra: "b",
      texto:
        "Avaliar a precisão das respostas e a aceitação do sistema por meio de métricas de uso e da aplicação de testes em ambiente controlado.",
      nota: "No MVP, a avaliação é feita por cenários de teste, sem participação de usuários. A redação deste objetivo está em revisão.",
    },
    {
      letra: "c",
      texto:
        "Estruturar diretrizes de conformidade normativa e técnica, alinhadas à Lei Geral de Proteção de Dados (LGPD), para a operação ética e segura da ferramenta.",
    },
  ],
};

export type BehaviorStatus = "disponivel" | "parcial" | "desenvolvimento";

// README, seções 1, 4 e 5. Situação conferida em docs/Projeto/Progresso.md.
export const behaviors: { texto: string; status: BehaviorStatus; detalhe?: string }[] = [
  {
    texto: "Responde dúvidas institucionais a partir de uma base curada e cita a fonte usada.",
    status: "disponivel",
  },
  {
    texto: "Entrega documentos já emitidos por link temporário assinado, gerado pelo servidor.",
    status: "desenvolvimento",
  },
  {
    texto: "Quando encontra mais de um arquivo compatível, lista as opções e pergunta qual o usuário quer.",
    status: "desenvolvimento",
  },
  {
    texto: "Recusa pedidos com dados pessoais sensíveis e encaminha ao atendimento humano.",
    status: "parcial",
    detalhe: "Hoje pelas diretrizes do modelo; a regra no servidor está em desenvolvimento.",
  },
  {
    texto: "Registra cada interação em log estruturado, base das métricas da pesquisa.",
    status: "parcial",
    detalhe: "Registro no servidor; a gravação no banco de dados está em desenvolvimento.",
  },
];

// README, seção 5.5.
export const securityPrinciple =
  "O modelo de linguagem nunca recebe nem escolhe o identificador do usuário. Ele apenas solicita ações, e o servidor as executa com a sessão, o que torna o sistema incapaz, por arquitetura, de acessar dados de terceiros.";

// Relatório, seção 2. README, seção 2.4.
export const methodology = {
  intro:
    "Pesquisa de natureza aplicada, orientada pela construção e análise de um Produto Mínimo Viável (MVP) voltado ao atendimento em instituições de ensino. O campo de observação do estudo é o contexto acadêmico e administrativo da UNIFENAS, câmpus Alfenas-MG.",
  fases: [
    {
      titulo: "Mapeamento",
      texto:
        "Seleção dos documentos institucionais oficiais e vigentes, organização da base de conhecimento por tema e elaboração dos cenários de teste.",
    },
    {
      titulo: "Desenvolvimento ágil",
      texto:
        "Construção do chat, das ferramentas de documento, das diretrizes de segurança e do log estruturado das interações.",
    },
    {
      titulo: "Validação por cenários",
      texto:
        "Execução da bateria de testes, avaliação independente das respostas, calibração do assistente e nova execução para comparação.",
    },
  ],
  avaliacao:
    "A unidade de análise é o conjunto de cenários de teste. Os dois pesquisadores classificam cada resposta de forma independente em correta, parcial ou incorreta. Como não há coleta de dados com seres humanos, a submissão ao Comitê de Ética deixa de ser aplicável.",
};

// Relatório, seção 3.3 e Quadro 02. README, seção 8.
export const privacy = {
  intro:
    "As restrições de proteção de dados não são uma camada adicional, mas parte inerente da arquitetura do software, em conformidade com a Lei nº 13.709/2018 e o princípio de Privacy by Design.",
  matriz: [
    {
      categoria: "Dúvidas sobre regulamentos, calendários e editais",
      classificacao: "Dado público / institucional",
      tratamento: "Respondidas normalmente a partir da base de conhecimento oficial.",
    },
    {
      categoria: "CPF, e-mail e telefone digitados no chat",
      classificacao: "Dado pessoal",
      tratamento: "Mascarados antes de irem ao modelo de linguagem e ao registro das interações.",
    },
    {
      categoria: "Notas, laudos, atestados e informações de saúde",
      classificacao: "Dado pessoal sensível",
      tratamento: "Recusa da coleta e encaminhamento ao atendimento humano da secretaria.",
    },
  ],
};

// README, seção 3.
export const scope = {
  dentro: [
    "Chat web com dúvidas sobre matrícula, calendário, horários, secretaria, intercâmbio e serviços estudantis",
    "Consulta e entrega de documentos já emitidos, mediante sessão",
    "Recusa de pedidos com dados pessoais sensíveis",
    "Log estruturado de todas as interações",
    "Bateria de cenários de teste para a avaliação da pesquisa",
  ],
  fora: [
    "Processamento de transações financeiras",
    "Autenticação real (simulada no MVP)",
    "Integração com WhatsApp e outros mensageiros",
    "Testes com usuários humanos",
    "Integração com o sistema acadêmico oficial",
  ],
};

// README, seção 20.
export const references: { antes: string; destaque: string; depois: string }[] = [
  {
    antes: "BARTELLE, Liane Broilo. ",
    destaque: "Inteligência artificial na educação superior a distância",
    depois:
      ": uma análise da implantação de assistente virtual como apoio ao estudante. 2025. Dissertação (Mestrado Profissional em Educação e Novas Tecnologias), Centro Universitário Internacional UNINTER, Curitiba, 2025.",
  },
  {
    antes: "BRASIL, André. ",
    destaque: "A inteligência artificial na pesquisa e no fomento",
    depois: ": desafios e oportunidades. Texto para Discussão. Brasília, DF: CAPES, 2025.",
  },
  {
    antes: "BRASIL. ",
    destaque: "Lei nº 13.709, de 14 de agosto de 2018",
    depois: ". Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018.",
  },
  {
    antes:
      "CASTOR, Emiliano Carlos Serpa; FERNANDES, Adriana Lopes; MOTTA, Ana Carolina de Gouvêa Dantas; GARCIA, Rodrigo Batista. Chatbot: impactos no ambiente acadêmico de uma universidade do Rio de Janeiro. ",
    destaque: "Revista P2P & Inovação",
    depois: ", Rio de Janeiro, v. 8, n. 1, p. 71-92, 2021.",
  },
  {
    antes: "OLIVEIRA, Amarildo Junior Duque de. ",
    destaque: "Implementação de um chatbot em uma universidade pública",
    depois:
      ": aprimorando a experiência do atendimento. 2024. Dissertação (Mestrado Profissional em Administração), Universidade Federal Fluminense, Volta Redonda, 2024.",
  },
  {
    antes: "SILVA, Malcom F. B.; YAGUINUMA, Cristiane A.; SANTOS, Fábio J. J. dos; BOALIM, Tales. ",
    destaque: "Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a Chamados de Suporte ao Cliente",
    depois: ". Instituto Federal de São Paulo (IFSP) / JN Moura Informática, Araraquara, SP.",
  },
];
