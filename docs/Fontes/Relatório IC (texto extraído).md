---
tags: [fonte, relatorio]
origem: docs/relatorio-ic.pdf
extraido_em: 2026-09-13
---

# Relatório IC (texto extraído)

Texto extraído automaticamente de [[relatorio-ic.pdf]] com pdftotext, para busca no Obsidian e consulta pelo Claude. A formatação de tabelas e rodapés pode estar quebrada: em caso de dúvida, confira no PDF.

Voltar ao [[00 Índice]].

```text
       UNIVERSIDADE PROFESSOR EDSON ANTÔNIO VELANO
       PROGRAMA DE CURSO DE CIÊNCIA DA COMPUTAÇÃO

                      LUCCA VALLADÃO E MARCHETTI
                       RAFAEL COSTA MONTE ALEGRE
SAC IA ACADÊMICO - ASSISTENTE VIRTUAL INTELIGENTE

                                      ALFENAS-MG
                                             2026
                               LUCCA VALLADÃO E MARCHETTI
                                RAFAEL COSTA MONTE ALEGRE
​

         SAC IA ACADÊMICO - ASSISTENTE VIRTUAL INTELIGENTE

​
​

                                  Relatório de pesquisa apresentado à Universidade Professor Edson Antônio Velano,
                                  referente às atividades estudadas no programa de Iniciação Científica.
                                  Profª. Orientadora: Dra. Flávia Aparecida Oliveira Santos

​
​
​
​
​
​

                                               ALFENAS-MG
                   LISTA DE TABELAS E QUADROS

Quadro 1 - ​ ​  ​  ​  ​  ​  ​  ​               ​  ​  10

Quadro 2 - ​ ​  ​  ​  ​  ​  ​  ​               ​  ​  17
                              LISTA DE ABREVIATURAS E SIGLAS
MVP – Minimum Viable Product / Produto Mínimo Viável
LGPD – Lei Geral de Proteção de Dados
API – Application Programming Interface
                                  SUMÁRIO

1 INTRODUÇÃO​                                                            6

   1.1 DELINEAMENTO DE PESQUISA​                                         8

   1.1.1 Problema de pesquisa​                                           8

   1.1.2 Objetivo geral​                                                 8

   1.1.3 Objetivos específicos​                                          8

   1.1.4 Limitações da Pesquisa​                                         8

   1.1.5 Sugestão de estrutura da dissertação​                           10

   1.2 CONSIDERAÇÕES SOBRE O USO DA INTELIGÊNCIA ARTIFICIAL​             11

2 PLANO METODOLÓGICO​                                                    11

   2.1 CRITÉRIOS DE SELEÇÃO DA BASE DE CONHECIMENTO E CENÁRIOS DE TESTE​ 13

3 REFERENCIAL TEÓRICO​                                                   14

   3.1 EVOLUÇÃO DA INTELIGÊNCIA ARTIFICIAL E PROCESSAMENTO DE LINGUAGEM

   NATURAL​                                                              14

   3.2 ASSISTENTES VIRTUAIS (CHATBOTS) NO AMBIENTE UNIVERSITÁRIO​        15

   3.3 PARÂMETROS DA LGPD E CONFORMIDADE TECNOLÓGICA​                    16

4 CONSIDERAÇÕES FINAIS PARCIAIS​                                         18

REFERÊNCIAS ​                                                            19

​
1​ INTRODUÇÃO

          A constituição desta pesquisa não decorre de um interesse episódico, mas é resultado
da trajetória acadêmica dos pesquisadores Lucca Valladão e Marchetti e Rafael Costa Monte
Alegre no curso de Ciência da Computação. O contato sistemático com metodologias de
desenvolvimento de software e a vivência no ecossistema universitário despertaram a
necessidade de investigar como inovações tecnológicas emergentes podem ser estruturadas
para resolver gargalos reais de gestão e de atendimento ao público. Consolidou-se, assim, um
olhar analítico voltado a compreender as intersecções entre a automação informacional e a
eficiência institucional.

          No contexto universitário, essa demanda por eficiência comunicacional é
particularmente evidente e crítica. A necessidade de um ponto de contato primário para
fornecer respostas rápidas e precisas sobre processos acadêmicos fundamentais, como
matrículas, horários de aula, programas de intercâmbio e serviços estudantis, tornou-se
premente. Adicionalmente, o suporte técnico e informativo a docentes e funcionários,
envolvendo dados administrativos e recursos internos, também configura uma área com
amplo potencial de melhoria e que frequentemente sobrecarrega as secretarias acadêmicas.

          Diante desse cenário institucional e das inquietações acadêmicas, surge o projeto de
Iniciação Científica "SAC IA Acadêmico - Assistente Virtual Inteligente". Esta iniciativa
busca desenvolver e validar uma solução de atendimento automatizado fundamentada em
Inteligência Artificial. A essência da proposta reside na estruturação de um assistente virtual
dotado da capacidade de compreender, contextualizar e responder a questionamentos de forma
autônoma, otimizando o suporte prestado e modernizando o fluxo de comunicação da
instituição.

          A relevância desta investigação fundamenta-se na criação de uma solução teórica
para o ecossistema educacional e, simultaneamente, na expansão do debate científico sobre a
automação inteligente. Cumpre ressaltar que o projeto transcende a formulação de um produto
meramente comercial. Ele consolida-se como um campo fértil para a pesquisa. Ao propor a
automação de respostas operacionais, o estudo analisa como agentes conversacionais
modernos podem transformar a interação entre usuários e instituições de ensino.

          A pertinência científica dessa abordagem encontra forte respaldo na literatura
contemporânea da área de computação. Estudos recentes exploram o desenvolvimento de
chatbots baseados em ontologia, ressaltando a centralidade do conhecimento estruturado para
a precisão destas ferramentas nas respostas aos usuários. De igual modo, investigações sobre
a integração de assistentes virtuais na gestão da aprendizagem e em ambientes acadêmicos
validam o impacto transformador de soluções autônomas para a liberação de recursos
humanos em prol de atividades mais complexas.

          Embora o foco empírico e analítico desta etapa da pesquisa recaia sobre o ambiente
acadêmico, as bases arquitetônicas do sistema concebido possuem grande escalabilidade
técnica. O modelo estruturado demonstra viabilidade teórica para futura implementação e
adaptação em diversos setores sociais e econômicos, tais como o comércio, a hotelaria, a área
da saúde e os serviços públicos, reforçando o impacto social amplo da tecnologia de
atendimento desenvolvida.

          A estruturação de um sistema autônomo que trafega dados de discentes e docentes
impõe, inegavelmente, discussões rigorosas sobre ética e governança informacional. A
operação do assistente virtual exige estrita conformidade com a Lei Geral de Proteção de
Dados (LGPD). Por conseguinte, a pesquisa abrange o delineamento de medidas técnicas de
segurança, a adoção do princípio de Privacy by Design e a reflexão sobre a mitigação de
vieses algorítmicos durante as interações com a comunidade universitária.

          Este panorama de necessidades institucionais e inovações tecnológicas define o
problema central que norteia a presente investigação: de que maneira a implementação de um
assistente virtual baseado em Inteligência Artificial pode otimizar o atendimento inicial e o
acesso à informação no ambiente universitário? A questão busca capturar a eficácia da
ferramenta frente às demandas operacionais reais do cotidiano acadêmico.

          O recorte adotado implica limitações operacionais que devem ser explicitadas. A
pesquisa delimita-se ao desenvolvimento de um Produto Mínimo Viável (MVP) operando via
interface web, concentrado estritamente no domínio informacional universitário. A integração
com ecossistemas de mensageria fechados, como o WhatsApp, e a implementação de
módulos financeiros, configuram-se como projeções para etapas vindouras de escalabilidade,
não compondo o escopo de análise desta iniciação científica.

          Para estruturar a discussão e delinear o percurso analítico, o documento organiza-se
de forma progressiva. Este primeiro capítulo situa o contexto, as motivações do estudo e os
parâmetros de pesquisa. As seções subsequentes detalharam o Plano Metodológico e a
estruturação ágil do protótipo. O referencial teórico promoverá uma discussão sobre a
evolução dos agentes conversacionais, integração tecnológica e aspectos legais de
conformidade. Por fim, as Considerações Finais evidenciarão as projeções de testes, validação
de segurança e os potenciais desdobramentos da implementação da inteligência artificial no
suporte universitário.

1.1​DELINEAMENTO DE PESQUISA

1.1.1​ Problema de pesquisa
          Busca-se responder ao seguinte problema de pesquisa: de que maneira a

implementação de um assistente virtual baseado em Inteligência Artificial pode otimizar o
atendimento inicial e o acesso à informação no ambiente universitário?

1.1.2​ Objetivo geral
          Analisar a viabilidade e a eficácia da implementação de forma teórica do SAC IA

Acadêmico, atuando como um assistente virtual autônomo, para otimizar o suporte
informacional em instituições de ensino.

1.1.3​ Objetivos específicos
    a)​ Desenvolver e estruturar de forma ágil o assistente virtual inteligente, viabilizando o
         processamento de linguagem natural e a geração de respostas contextuais.
    b)​ Avaliar a precisão das respostas e a aceitação do sistema por meio de métricas de uso e
         da aplicação de testes em ambiente controlado.
    c)​ Estruturar diretrizes de conformidade normativa e técnica, alinhadas à Lei Geral de
         Proteção de Dados (LGPD), para a operação ética e segura da ferramenta.

1.1.4 Limitações da Pesquisa
          O presente estudo delimita-se ao desenvolvimento e à análise de um protótipo

experimental de assistente virtual voltado ao suporte informacional. O escopo da base de
dados e a curadoria de conteúdo restringem-se ao contexto acadêmico e administrativo da
Universidade Professor Edson Antônio Velano (UNIFENAS), especificamente no campus de
Alfenas-MG. Dessa forma, a coleta de dados e a avaliação de desempenho da ferramenta
terão como foco as interações de um público amostral inserido nessa realidade institucional,
delimitando o campo de observação empírica da pesquisa a esse grupo demográfico.

          A decisão metodológica visa o isolamento de variáveis, permitindo concentrar os
esforços analíticos estritamente na validação do processamento de linguagem natural, na
orquestração dos fluxos de informação e na eficácia do modelo conversacional,
independentemente da plataforma final adotada para a interação com o usuário. A adição de
camadas de conectividade omnicanal introduziria ruídos técnicos e metodológicos que
poderiam desviar o foco do objeto central de investigação.

          Reconhece-se, adicionalmente, que o recorte empírico adotado impõe limites
epistemológicos à generalização dos resultados obtidos. Ainda que a base teórica e
tecnológica do assistente possua aplicabilidade em outras áreas do conhecimento, as métricas
de usabilidade e a taxa de precisão das respostas refletirão as particularidades e o
comportamento de busca informacional do ecossistema universitário local.
Consequentemente, as conclusões deste estudo validam o fenômeno da automação interativa
neste ambiente sociotécnico específico, em consonância com o percurso dos trabalhos
tomados como referência nesta pesquisa, igualmente circunscritos a recortes institucionais
delimitados, como a implementação de um chatbot em uma universidade pública, a análise de
impactos em uma universidade do Rio de Janeiro e a implantação de assistente virtual no
ensino superior a distância. À semelhança do que ocorre nesses estudos, os achados aqui
obtidos configuram evidência localizada, de modo que sua transposição a outras realidades
institucionais demanda novas validações científicas

          Por fim, a condução dos testes e a operação do modelo sujeitam-se às limitações
técnicas inerentes às infraestruturas de inteligência artificial baseadas em grandes modelos de
linguagem (LLMs). O desempenho analítico do assistente está condicionado a variáveis
computacionais externas, como a latência de rede e os limites de requisição estabelecidos
pelas Interfaces de Programação de Aplicações (APIs) utilizadas no processamento. Ademais,
assume-se a limitação intrínseca da inteligência artificial generativa quanto à possibilidade de
produção de vieses algorítmicos ou de respostas imprecisas, fenômeno tecnicamente
conceituado como alucinação. Tais características, amplamente registradas nos estudos que
fundamentam esta pesquisa, exigem protocolos de validação cruzada e de supervisão humana
sobre as respostas geradas pelo modelo. Considerando que a presente investigação se situa em
etapa teórica e propositiva, essas exigências são aqui incorporadas como parâmetros previstos
no delineamento do assistente, e não como procedimentos já verificados empiricamente,
alinhando-se à mesma cautela metodológica adotada pelos trabalhos tomados como referência
e configurando-se como restrição inerente aos estudos contemporâneos na área.

1.1.5 Sugestão de estrutura da dissertação

              Quadro 01 - Sugestão de estrutura da dissertação

Capítulo               Objetivo                                 Conteúdo

1 Introdução           Delinear a pesquisa, apresentando  Trajetória acadêmica dos
                       a fundamentação do problema,       pesquisadores; motivações
                       objetivos e limitações do estudo.  frente ao cenário
                                                          educacional; delimitação do
                                                          problema sobre agentes
                                                          conversacionais;
                                                          estruturação ágil do projeto;
                                                          objetivos geral e
                                                          específicos; justificativa e
                                                          limitações técnicas..

2 Plano metodológico   Fundamentar a abordagem de         Pesquisa de natureza
                       desenvolvimento e os               aplicada; desenvolvimento e
                       procedimentos adotados para a      prototipação ágil; curadoria
                       investigação técnica.              da base de conhecimento
                                                          institucional; engenharia de
                                                          prompts; plano de testes de
                                                          usabilidade e precisão do
                                                          assistente virtual.

3 Referencial teórico  Analisar os fundamentos teóricos   Evolução da Inteligência
                       que sustentam a pesquisa,          Artificial e dos Large
                       discutindo a evolução do           Language Models;
                       Processamento de Linguagem         processamento de
                        Natural, a aplicação de assistentes  linguagem natural; chatbots
                        virtuais no ecossistema              baseados em ontologia; IA
                        universitário, bem como os           na gestão educacional;
                        impactos da Inteligência Artificial  parâmetros da LGPD e
                        no suporte administrativo e          conformidade tecnológica.
                        acadêmico aos estudantes.

4 Considerações finais  Síntese das discussões               Articulação entre os
parciais                desenvolvidas, destacando a          fundamentos teóricos e a
                        relevância da pesquisa e suas        construção do MVP;
                        contribuições potenciais para o      apontamento das métricas
                        suporte acadêmico mediado por        esperadas de sucesso;
                        Inteligência Artificial.             indicação dos próximos
                                                             passos para validação e
                                                             testes de integração do
                                                             sistema.

1.2​CONSIDERAÇÕES SOBRE O USO DA INTELIGÊNCIA ARTIFICIAL

          Na elaboração deste projeto e durante as fases de estruturação do documento,
ferramentas baseadas em inteligência artificial foram empregadas como recursos de apoio
tecnológico à escrita acadêmica. O uso dessas soluções, contudo, ocorreu sob o rigor analítico
e a supervisão integral dos pesquisadores Lucca Valladão e Marchetti e Rafael Costa Monte
Alegre, atuando de forma instrumental para a organização lógica de ideias e o refinamento
textual.

          Cumpre destacar que a utilização de tais tecnologias não sobrepõe a autoria
intelectual, configurando-se apenas como um recurso acessório que assegura a fluidez e a
sistematização da redação, sem interferir na originalidade ou comprometer o rigor científico
inerente a esta Iniciação Científica. .

2​ PLANO METODOLÓGICO

          O presente estudo caracteriza-se como uma pesquisa de natureza aplicada, com o
intuito de gerar conhecimentos voltados para a utilização prática na resolução de problemas
específicos do fluxo de comunicação institucional. A metodologia adotada orienta-se pela
construção e análise de um Produto Mínimo Viável (MVP) do assistente virtual inteligente,
buscando compreender a eficácia da automação informacional no contexto universitário.

          Para alcançar os objetivos propostos, a investigação assume uma abordagem
quali-quantitativa. A dimensão quantitativa será empregada na mensuração técnica do
protótipo, avaliando métricas operacionais como tempo de processamento e a taxa de acerto
do sistema frente às requisições. Concomitantemente, a dimensão qualitativa focar-se-á na
percepção dos usuários, analisando o grau de satisfação e a usabilidade da interface,
garantindo uma compreensão holística do impacto da ferramenta tecnológica.

          O campo de observação empírica desta pesquisa concentra-se no ambiente
acadêmico da Universidade Professor Edson Antônio Velano (UNIFENAS), especificamente
no campus de Alfenas-MG. O público-alvo para a fase de levantamento de requisitos e testes
de interação é composto por uma amostra empírica de alunos, docentes e funcionários
administrativos, por configurarem os atores centrais das demandas informacionais cotidianas
da instituição.

          O percurso metodológico está estruturado em três fases sequenciais e
interdependentes. A primeira fase dedica-se ao mapeamento rigoroso dos processos
informacionais da universidade. Conforme evidenciado na literatura técnica recente, o
levantamento prévio e detalhado dos fluxos de atendimento é uma premissa indispensável
para que a implementação de agentes conversacionais aprimore, de fato, a experiência do
usuário nas instituições públicas e privadas de ensino superior1.

          Ainda nesta etapa inicial, ocorrerá a categorização das dúvidas mais frequentes da
comunidade acadêmica, dividindo-as em eixos primários, como processos de matrícula,
cronogramas letivos e serviços de secretaria. Análises sobre a implantação de assistentes
virtuais indicam que o sucesso do apoio direto ao estudante depende do alinhamento
estrutural entre o repertório de respostas do sistema e as lacunas informacionais reais
vivenciadas no cotidiano educacional2.

          A segunda fase compreende o desenvolvimento tecnológico e a prototipação ágil do
SAC IA Acadêmico. Nesta etapa, será estruturada a arquitetura do assistente virtual,
viabilizando a integração de modelos avançados de processamento de linguagem natural

1 Referência baseada em: IMPLEMENTAÇÃO DE UM CHATBOT EM UMA UNIVERSIDADE PÚBLICA: aprimorando a
experiência do atendimento.
2 Referência baseada em: INTELIGÊNCIA ARTIFICIAL NA EDUCAÇÃO SUPERIOR A DISTÂNCIA: UMA ANÁLISE DA
IMPLANTAÇÃO DE ASSISTENTE VIRTUAL COMO APOIO AO ESTUDANTE.
(LLM) com a interface web que será disponibilizada aos participantes do estudo. O foco recai
sobre a construção de um sistema responsivo, capaz de interpretar intenções textuais
complexas e lidar com variações linguísticas.

          O cerne tecnológico desta segunda fase reside na curadoria rigorosa da base de
conhecimento e na engenharia de prompts. Documentos institucionais, regulamentos internos
e guias de perguntas frequentes (FAQs) da universidade serão tratados e inseridos no modelo.
Estudos demonstram que a eficácia de chatbots no suporte ao cliente está intrinsecamente
ligada a uma modelagem lógica de dados, assemelhando-se a bases ontológicas que permitem
à inteligência artificial extrair sentido, contexto e precisão de grandes volumes documentais3.

          A terceira fase da pesquisa destina-se à validação empírica do MVP, por meio da
aplicação de testes de usabilidade e auditoria de precisão. Serão conduzidas baterias de testes
em um ambiente virtual controlado, onde os participantes selecionados interagirão com o
assistente virtual simulando cenários reais de busca por informações administrativas e
acadêmicas.

          Durante as simulações, proceder-se-á com a coleta sistemática de dados a partir dos
logs de interação gerados pelo sistema. Esta análise técnica permitirá verificar a assertividade
das respostas fornecidas pela inteligência artificial. A mensuração constante é fundamental
para avaliar os reais impactos da introdução da automação no ambiente universitário, evitando
que a celeridade do atendimento prejudique a confiabilidade da informação repassada ao
aluno4.

          Além da análise técnica de logs, a avaliação de resultados incluirá a aplicação de
questionários semiestruturados aos participantes logo após o término das interações. O
instrumento de coleta abordará critérios avaliativos como a clareza das respostas, a fluidez do
diálogo e a percepção geral de utilidade do SAC IA Acadêmico. O feedback direto guiará os
ajustes finos de calibração do sistema antes da elaboração das conclusões do estudo.

          Por fim, cumpre destacar que todos os procedimentos metodológicos, especialmente
as etapas de testes com usuários e armazenamento do histórico de conversas, serão
conduzidos em estrita observância às normativas éticas. A estruturação do banco de dados e o
tráfego de informações seguirão os parâmetros legais da Lei Geral de Proteção de Dados

3 Referência baseada em: Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a
Chamados de Suporte ao Cliente.
4 Referência baseada em: Chatbot: impactos no ambiente acadêmico de uma universidade do Rio de Janeiro.
(LGPD), assegurando a privacidade dos participantes e a conformidade institucional da
ferramenta desenvolvida.

2.1​CRITÉRIOS DE SELEÇÃO DA BASE DE CONHECIMENTO E CENÁRIOS DE
    TESTE

          Em investigações de cunho tecnológico voltadas ao desenvolvimento de assistentes
virtuais, a amostragem desloca-se de sujeitos humanos para o conjunto de dados (dataset) e
para os cenários de simulação que validaram o modelo. Desse modo, os critérios de seleção e
exclusão deste estudo aplicam-se diretamente à curadoria da base de conhecimento que
alimentará o SAC IA Acadêmico e aos parâmetros técnicos de testes do Produto Mínimo
Viável (MVP).

          Para a composição da base de conhecimento da Inteligência Artificial, adotam-se
como critérios de inclusão a utilização estrita de documentos institucionais oficiais e vigentes.
Serão selecionados para o treinamento e engenharia de prompts: manuais do aluno,
calendários acadêmicos, regulamentos internos e listas de perguntas frequentes (FAQs) de
secretarias. A estruturação rigorosa desses textos atua de forma análoga a uma base
ontológica, o que é fundamental para permitir que o modelo de linguagem processe o contexto
adequadamente e retorne respostas precisas diante de jargões universitários5.

          Em contrapartida, estabelecem-se critérios de exclusão rigorosos no tratamento dos
dados. Serão descartados documentos desatualizados, minutas não homologadas e,
imperativamente, quaisquer bases de dados que contenham informações pessoais sensíveis de
discentes, docentes ou funcionários. A exclusão de dados pessoais da base de treinamento
garante que o sistema seja desenvolvido em total conformidade com a Lei Geral de Proteção
de Dados (LGPD), aplicando o princípio de Privacy by Design e mitigando riscos de
exposição indevida de dados corporativos.

          Por fim, no que tange à avaliação do MVP, a validação ocorrerá por meio de baterias
de testes unitários e de integração baseados em cenários de uso simulados. Serão incluídos
nos testes comandos textuais (inputs) que reflitam as dúvidas administrativas mais
recorrentes. Cenários em que o sistema apresentar respostas fora de contexto, "alucinações
algorítmicas" ou falhas de direcionamento serão excluídos da versão final e utilizados

5 Citação referente ao artigo: Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a
Chamados de Suporte ao Cliente.
estritamente como métricas de erro para a recalibragem do código e das restrições do
modelo6.

3​ REFERENCIAL TEÓRICO

3.1​EVOLUÇÃO DA INTELIGÊNCIA ARTIFICIAL E PROCESSAMENTO DE
    LINGUAGEM NATURAL

A Inteligência Artificial (IA) e, mais especificamente, o Processamento de Linguagem
Natural (PLN), transitaram de modelos teóricos limitados para aplicações práticas capazes de
revolucionar a gestão da informação nas organizações7. Com o advento dos Modelos de
Linguagem de Grande Escala (LLMs), os sistemas computacionais deixaram de depender de
lógicas rígidas de palavras-chave, típicas das gerações anteriores de chatbots, para adotarem
redes neuronais que interpretam intenções complexas e geram linguagem com notável fluidez
e precisão contextual8.

Esta evolução tecnológica reflete-se de forma muito direta no ambiente universitário
contemporâneo. A implementação de assistentes virtuais modernos, construídos sobre estas
bases algorítmicas, permite não só compreender as dúvidas da comunidade académica de
forma empática e semântica9, como também democratizar o acesso a diretrizes e automatizar
o suporte burocrático. Deste modo, a adoção destas ferramentas otimiza o fluxo informacional
e liberta os profissionais (como funcionários das secretarias e coordenadores) para se
concentrarem em tarefas de maior complexidade analítica e pedagógica10.

3.2 ASSISTENTES VIRTUAIS (CHATBOTS) NO AMBIENTE UNIVERSITÁRIO
          A inserção de assistentes virtuais (chatbots) no ecossistema das Instituições de

Ensino Superior (IES) tem-se mostrado uma estratégia fundamental para otimizar os canais de
atendimento e comunicação. Estudos empíricos demonstram que a automatização do suporte
inicial não apenas assegura uma disponibilidade de 24 horas por dia para a resolução de
dúvidas, mas também impacta positivamente indicadores institucionais críticos, como os

6 Citação referente ao artigo: INTELIGÊNCIA ARTIFICIAL NA EDUCAÇÃO SUPERIOR A DISTÂNCIA: UMA ANÁLISE
DA IMPLANTAÇÃO DE ASSISTENTE VIRTUAL COMO APOIO AO ESTUDANTE.
7 Referência baseada no artigo: Chatbot: impactos no ambiente acadêmico de uma universidade do Rio de
Janeiro.
8 Referência baseada no artigo: INTELIGÊNCIA ARTIFICIAL NA EDUCAÇÃO SUPERIOR A DISTÂNCIA: UMA ANÁLISE
DA IMPLANTAÇÃO DE ASSISTENTE VIRTUAL COMO APOIO AO ESTUDANTE.
9 Referência baseada no artigo: Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a
Chamados de Suporte ao Cliente.
10 Referência baseada no artigo: A inteligência artificial na pesquisa e no fomento: desafios e oportunidades.
índices de retenção de alunos, ao fornecer respostas ágeis e práticas para as demandas do dia a
dia11. Esta reconfiguração do atendimento alivia a sobrecarga operacional das secretarias e
equipas de suporte humano, permitindo uma triagem e gestão de fluxos informacionais muito
mais eficiente no ambiente universitário12.

          No contexto específico da jornada académica, estes agentes conversacionais atuam
como ferramentas diretas de apoio ao estudante, mediando o acesso rápido a informações
sobre processos de matrículas, cronogramas letivos, e serviços pedagógicos. A literatura
destaca que o sucesso destas ferramentas reside na capacidade de reduzir a distância
burocrática entre a instituição e o corpo discente através de interações fluidas e centralizadas.
Assim, o desenvolvimento de soluções customizadas, como o SAC IA Acadêmico, alinha-se
diretamente com as tendências contemporâneas de transformação digital, focadas em
aprimorar a experiência do utilizador e garantir a eficiência na gestão educacional pública e
privada.

3.3 PARÂMETROS DA LGPD E CONFORMIDADE TECNOLÓGICA

          A adoção de tecnologias baseadas em Inteligência Artificial no contexto educacional
suscita debates rigorosos acerca da ética, da transparência e, sobretudo, da privacidade das
informações. Com a promulgação da Lei Geral de Proteção de Dados (LGPD - Lei nº
13.709/2018), as Instituições de Ensino Superior passaram a ser legalmente responsáveis por
garantir o tratamento seguro e consentido dos dados trafegados nas suas plataformas. No
desenvolvimento de assistentes virtuais baseados em Large Language Models (LLMs), a
atenção deve ser redobrada, visto que as interações ocorrem em linguagem natural e podem
conter informações sensíveis fornecidas de forma espontânea pelos utilizadores.

          Para assegurar a conformidade tecnológica do SAC IA Acadêmico, o projeto foi
concebido sob a premissa do Privacy by Design (Privacidade desde a Concepção). Isso
significa que as restrições de proteção de dados não são uma camada adicional, mas sim parte
inerente da arquitetura do software. Organismos internacionais e diretrizes éticas
contemporâneas destacam que o uso responsável da IA na educação exige a mitigação de

11 Referência baseada no artigo: Chatbot: impactos no ambiente acadêmico de uma universidade do Rio de
Janeiro.
12 Referência baseada no artigo: Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a
Chamados de Suporte ao Cliente.
riscos antes mesmo de a ferramenta entrar em produção, evitando o armazenamento de dados
desnecessários ou o envio de informações sigilosas para servidores externos de
processamento.

          Para ilustrar o fluxo de conformidade adotado neste Produto Mínimo Viável (MVP),
o Quadro 02 sistematiza as categorias de dados previstos nas interações com o assistente
virtual e as respectivas estratégias técnicas de mitigação implementadas.

Quadro 02 - Matriz de Tratamento e Mitigação de Dados no SAC IA Acadêmico

Categoria      da Classificação        Estratégia Tecnológica de
Informação             (LGPD)          Mitigação

Dúvidas      sobre     Dado Público /  Processamento nativo. Dados
                       Institucional   utilizados integralmente para a
regulamentos,                          geração de respostas, sem
                                       restrições de privacidade.
calendários         e

editais.

Nome, e-mail ou        Dado Pessoal    Anonimização de logs. Os dados
                                       de identificação não são inseridos
número         de                      no prompt enviado ao modelo de
                                       IA externo, ficando restritos apenas
matrícula do aluno.                    ao painel administrativo local do
                                       desenvolvedor.

Notas,       laudos    Dado Pessoal    Exclusão de escopo. O sistema
                       Sensível        está instruído (System Prompt) a
médicos,                               bloquear a interação, recusar a
                                       coleta e redirecionar o aluno
atestados      ou                      imediatamente para o atendimento
                                       humano da secretaria.
histórico escolar.
4​ CONSIDERAÇÕES FINAIS PARCIAIS

          O presente projeto de Iniciação Científica encontra-se numa fase de transição
estratégica entre a fundamentação teórica e a prototipagem tecnológica. Até ao momento, a
revisão da literatura confirmou que a implementação de assistentes virtuais no ensino superior
é uma resposta tecnológica altamente eficaz para a modernização do atendimento. A
evidência científica demonstra que automatizar o suporte inicial reduz a sobrecarga
operacional das secretarias e democratiza o acesso à informação, impactando positivamente a
jornada e a retenção dos estudantes. Ademais, a articulação destes conceitos com as diretrizes
de privacidade garantiu que o SAC IA Académico fosse desenhado, desde a sua conceção,
sob os mais rigorosos padrões da Lei Geral de Proteção de Dados (LGPD).

          No que concerne ao desenvolvimento do Produto Mínimo Viável (MVP), o
planeamento metodológico permitiu estruturar os alicerces de uma base de conhecimento
curada. A curadoria de documentos institucionais, associada à engenharia de prompts focada
no contexto universitário, perspetiva um sistema capaz de interagir com as dúvidas da
comunidade académica com elevada precisão semântica e fluidez, mitigando os riscos de
alucinações algorítmicas frequentes em modelos não parametrizados.

          Como próximos passos, a pesquisa avançará para a fase de testes empíricos em
ambiente simulado. Espera-se que a validação técnica, baseada na auditoria dos logs de
interação, combinada com a validação de usabilidade através de questionários de satisfação,
forneça os dados primários necessários para calibrar o algoritmo de Inteligência Artificial.

          Em suma, as perspetivas futuras deste estudo apontam para a entrega de uma
ferramenta de software robusta, que transcende a simples automação de fluxos de
comunicação. O SAC IA Académico propõe-se a enriquecer a experiência de suporte aos
alunos e docentes, alinhando a instituição com as melhores práticas de transformação digital
contemporânea na gestão educacional.

REFERÊNCIAS
BARTELLE, Liane Broilo. Inteligência artificial na educação superior a distância: uma
análise da implantação de assistente virtual como apoio ao estudante. 2025. Dissertação
(Mestrado Profissional em Educação e Novas Tecnologias) – Centro Universitário
Internacional UNINTER, Curitiba, 2025.
BRASIL, André. A inteligência artificial na pesquisa e no fomento: desafios e oportunidades.
Texto para Discussão. Brasília, DF: CAPES, 2025.
CASTOR, Emiliano Carlos Serpa; FERNANDES, Adriana Lopes; MOTTA, Ana Carolina de
Gouvêa Dantas; GARCIA, Rodrigo Batista. Chatbot: impactos no ambiente acadêmico de
uma universidade do Rio de Janeiro. Revista P2P & Inovação, Rio de Janeiro, v. 8, n. 1, p.
71-92, 2021.
OLIVEIRA, Amarildo Junior Duque de. Implementação de um chatbot em uma universidade
pública: aprimorando a experiência do atendimento. 2024. Dissertação (Mestrado Profissional
em Administração) – Universidade Federal Fluminense, Volta Redonda, 2024.
SILVA, Malcom F. B.; YAGUINUMA, Cristiane A.; SANTOS, Fábio J. J. dos; BOALIM,
Tales. Desenvolvimento de um Chatbot baseado em Ontologia para Atendimento a Chamados
de Suporte ao Cliente. Instituto Federal de São Paulo (IFSP) / JN Moura Informática,
Araraquara, SP.

```
