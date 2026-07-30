---
title: "Sistemas Dinâmicos Não Lineares"
title_en: "Nonlinear Dynamical Systems"
permalink: "nonlinear-dynamical-systems"
code: "NLD"

status: "active"
pillars: ["P1"]
featured: true
language: "pt"
updated: 2026-07-30

areas:
  - "Dinâmica não linear"
  - "Vibrações mecânicas"
  - "Mecânica aplicada"

methods:
  - "Continuação analítica e numérica de respostas não lineares"
  - "Análise de bifurcações e estabilidade"
  - "Expoentes de Lyapunov e bacias de atração"
  - "Instrumentação experimental com sensores MEMS e microcontroladores"
  - "Formulações de amortecimento de ordem fracionária"

collaborators:
  - name: "Prof. J. M. Balthazar"
    affiliation: "Universidade Estadual Paulista (UNESP), Brasil"
  - name: "Prof. Grzegorz Litak"
    affiliation: "Lublin University of Technology, Polônia"
  - name: "Prof. Américo Cunha Jr."
    affiliation: "Laboratório Nacional de Computação Científica (LNCC), Brasil"
  - name: "Prof. Angelo Tusset"
    affiliation: "Universidade Tecnológica Federal do Paraná (UTFPR), Brasil"
  - name: "Prof. Clivaldo Oliveira"
    affiliation: "Universidade Federal da Grande Dourados (UFGD), Brasil"

team:
  - "Marcus Varanis"
  - "Mateus Silva"
  - "Lívia"
  - "Paulo"
  - "João Dutka"
  - "Diogo"
  - "Eduardo Venturim"
---

## A pergunta

Um motor montado sobre uma estrutura flexível não simplesmente gira mais rápido
conforme se fornece mais potência. Ao aproximar-se de uma ressonância, ele pode
travar ali — a energia adicional indo para a oscilação da estrutura em vez de
para a rotação do eixo — e então saltar abruptamente para além dela. A excitação
não é independente da resposta que produz. Admitido esse acoplamento, a maior
parte da intuição herdada da teoria linear de vibrações deixa de valer. O que a
substitui?

## Visão geral

Este projeto compreende estudos analíticos, computacionais e experimentais de
sistemas não lineares em mecânica e engenharia, com ênfase em oscilações,
estabilidade, bifurcações, caos, sincronização, vibro-impacto, excitação não
ideal, efeitos de ordem fracionária e energy harvesting. É a linha fundacional do
grupo e aquela da qual os demais pilares extraem seus problemas de teste.

O compromisso organizador é que os três modos de investigação são mantidos
juntos, e não perseguidos separadamente. Uma bifurcação prevista é verificada
numericamente e depois procurada experimentalmente em estrutura instrumentada;
quando o experimento discorda, revisa-se o modelo, em vez de atribuir a
discrepância a ruído. Isso é mais lento que qualquer um dos três isoladamente, e é
a razão pela qual os modelos do grupo podem servir de referência em outras
frentes — inclusive como verdade de referência para os modelos aprendidos na
linha de scientific machine learning.

Dois fios merecem menção específica porque recorrem. A **excitação não ideal**
trata a fonte de energia como tendo potência limitada, de modo que o forçamento é
variável dinâmica acoplada à resposta; o efeito Sommerfeld — captura ressonante e
o salto associado — é a assinatura canônica desse acoplamento. O **amortecimento
de ordem fracionária** introduz memória, de modo que o termo dissipativo depende
da história do movimento e não de sua taxa instantânea, o que altera fronteiras de
estabilidade de maneira que um modelo viscoso equivalente não reproduz.

A instrumentação é tratada como atividade de pesquisa por direito próprio, e não
como trabalho de apoio. Construir cadeias de medição com acelerômetros MEMS e
microcontroladores torna a dinâmica não linear experimental acessível a um custo
que permite que projetos de estudantes sejam genuinamente experimentais — linha
que produziu parte substancial da produção publicada do grupo.

## Abordagem e métodos

O tratamento analítico estabelece a estrutura da resposta: equilíbrios, sua
estabilidade e os valores de parâmetro em que essa estabilidade muda. A
continuação numérica então traça os ramos de resposta através dessas transições,
inclusive os ramos instáveis que experimentos não acessam, mas que determinam
onde ocorrem os saltos.

A caracterização de regimes complexos usa expoentes de Lyapunov para distinguir
movimento caótico de quase periódico, e bacias de atração para estabelecer quão
sensível é o estado final às condições iniciais — o que, em sistemas com
atratores coexistentes, é frequentemente o resultado de maior consequência.

O trabalho experimental emprega estruturas instrumentadas — vigas em
cantilever, pórticos, edifícios de cisalhamento adjacentes para estudos de
vibro-impacto, harvesters magneto-piezo-elásticos — com aquisição construída
sobre sensores MEMS e plataformas Arduino e Raspberry Pi. As respostas não
estacionárias são então analisadas com os métodos tempo-frequência do grupo, e é
aí que este pilar encontra o P2.

## Equipe

- **Marcus Varanis** — coordenação científica.
- **Mateus Silva** — pesquisador de pós-graduação; sistemas de ordem fracionária
  e dinâmica com efeito de memória.
- **Lívia** — Iniciação Científica; instrumentação em vibrações mecânicas.
- **Paulo** — Iniciação Científica; modelagem e simulação em energy harvesting.
- **João Dutka** — Iniciação Científica; análise numérica da dinâmica do
  mecanismo de relógio.
- **Diogo** — Iniciação Científica; análise simbólica da dinâmica do mecanismo de
  relógio.
- **Eduardo Venturim** — Iniciação Científica; modelagem de flutter não linear.

## Colaborações

- **Prof. J. M. Balthazar** — Universidade Estadual Paulista (UNESP), Brasil.
- **Prof. Grzegorz Litak** — Lublin University of Technology, Polônia.
- **Prof. Américo Cunha Jr.** — Laboratório Nacional de Computação Científica
  (LNCC), Brasil.
- **Prof. Angelo Tusset** — Universidade Tecnológica Federal do Paraná (UTFPR),
  Brasil.
- **Prof. Clivaldo Oliveira** — Universidade Federal da Grande Dourados (UFGD),
  Brasil.

## Publicações relacionadas

- Varanis, Tusset, Balthazar, Litak, Oliveira, Rocha, Nabarrete, Piccirillo.
  *Dynamics and control of periodic and non-periodic behavior of Duffing
  vibrating system with fractional damping and excited by a non-ideal motor.*
  Journal of the Franklin Institute, 2019.
- Varanis, Mereles, Silva, Barghouthi, Balthazar, Lopes, Bavastri. *Numerical and
  experimental investigation of the dynamic behavior of a cantilever beam driven
  by two non-ideal sources.* Journal of the Brazilian Society of Mechanical
  Sciences and Engineering, 2020.
- Varanis, Mereles, Silva, Balthazar, Tusset, Oliveira. *Modeling and
  experimental validation of two adjacent portal frame structures subjected to
  vibro-impact.* Latin American Journal of Solids and Structures, 2019.
- Brogin, Bueno, Santos, Varanis. *A new approach to suppressing the Sommerfeld
  effect in vibrating structures.* Journal of the Brazilian Society of Mechanical
  Sciences and Engineering, 2022.
- Ribeiro, Varanis, Tusset, Machado, Litak, Balthazar. *Performance analysis of a
  nonlinear energy harvester with subharmonic responses based on discrete Meyer
  wavelet filtering scheme.* Journal of the Brazilian Society of Mechanical
  Sciences and Engineering, 2024.

## Direções atuais

Escapamentos de relógios mecânicos vêm sendo estudados como instância controlada
de oscilador não linear autossustentado com impacto, examinada em paralelo por
formulações numérica e simbólica. Prossegue também o trabalho em flutter não
linear, em energy harvesting sob frequência de excitação variável no tempo, e em
como o amortecimento fracionário altera as fronteiras de estabilidade de sistemas
acionados por fontes de potência limitada.

## Para estudantes interessados

Este projeto é **P1 — Dinâmica Não Linear e Vibrações Mecânicas**, a linha
fundacional do grupo. Base útil: vibrações mecânicas ou mecânica clássica,
equações diferenciais e Python ou MATLAB. Interesse em construir e medir sistemas
físicos é valorizado tanto quanto facilidade analítica.

Um estudante aqui costuma conduzir um sistema pela sequência completa: derivar
suas equações, localizar numericamente suas bifurcações e então instrumentar uma
versão física para descobrir onde modelo e medição se separam. Esse último passo é
onde a pesquisa efetivamente acontece, e é a razão pela qual o trabalho de
instrumentação é tratado como primeira classe, não como preparação.
