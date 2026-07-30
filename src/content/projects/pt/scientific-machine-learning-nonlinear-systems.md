---
title: "Scientific Machine Learning para Sistemas Não Lineares"
title_en: "Scientific Machine Learning for Nonlinear Systems"
permalink: "scientific-machine-learning-nonlinear-systems"
code: "SciML"

status: "active"
pillars: ["P3", "P1"]
featured: true
language: "pt"
updated: 2026-07-30

areas:
  - "Scientific machine learning"
  - "Dinâmica não linear"
  - "Aplicações em ciência dos materiais"

methods:
  - "Hamiltonian Neural Networks"
  - "Lagrangian Neural Networks"
  - "Neural ODEs"
  - "Physics-informed neural networks"
  - "Toolchain PyTorch e Google Colab"

collaborators:
  - name: "Prof. Américo Cunha Jr."
    affiliation: "Laboratório Nacional de Computação Científica (LNCC), Brasil"
  - name: "Prof. J. M. Balthazar"
    affiliation: "Universidade Estadual Paulista (UNESP), Brasil"

team:
  - "Marcus Varanis"
  - "João Vitor de Oliveira Ribas"
  - "Antonio"
  - "Nickolas"
  - "Pablo"
---

## A pergunta

Uma rede neural treinada na trajetória de um pêndulo pode reproduzir essa
trajetória e, ainda assim, prever alguns segundos depois que o pêndulo ganhou
energia do nada. Ela ajusta os dados sem respeitar a estrutura que os gerou. Se a
física é conhecida — se o sistema é conservativo, se possui um hamiltoniano —
essa estrutura pode ser embutida na arquitetura, em vez de esperada do conjunto
de treinamento?

## Visão geral

Este projeto aplica Hamiltonian e Lagrangian Neural Networks à análise de
sistemas dinâmicos não lineares, com aplicações que se estendem à ciência dos
materiais. A premissa é arquitetural, não estatística: em vez de aprender um
mapeamento de estado para estado seguinte, a rede aprende uma função escalar — um
hamiltoniano ou um lagrangiano — a partir da qual a dinâmica é então derivada
analiticamente. As propriedades de conservação decorrem da construção, e não da
qualidade do ajuste.

A consequência prática está no comportamento de generalização. Um modelo que
preserva estrutura, restrito a uma classe fisicamente admissível, tende a
permanecer estável em horizontes muito além da janela de treinamento, onde uma
rede sem restrições deriva. Isso importa sobretudo nos regimes em que o grupo
trabalha — osciladores não lineares, movimento quase periódico e caótico,
sistemas com amortecimento fracionário —, em que a integração longa expõe
exatamente os erros que métricas de horizonte curto ocultam.

O escopo exige cuidado na formulação. Arquiteturas que preservam estrutura
constituem área de pesquisa ativa e bastante povoada, e este projeto contribui
para essa linha em vez de fundá-la. Seu ângulo distintivo é o pareamento com o
corpo de trabalho já existente do grupo em dinâmica não linear: os sistemas usados
como casos de teste são aqueles que o grupo já caracterizou analítica e
experimentalmente, o que permite avaliar um modelo aprendido contra estrutura de
bifurcação conhecida e resposta medida, e não apenas contra dados retidos.

A extensão a regimes hipercaóticos é tratada como questão dinâmica dentro deste
pilar — se o aprendizado com preservação de estrutura permanece viável quando o
atrator tem mais de um expoente de Lyapunov positivo — e não como linha de
pesquisa independente.

## Abordagem e métodos

O alvo do aprendizado é uma função escalar do estado do sistema. Na formulação
hamiltoniana, a rede representa $H(q, p)$ e a dinâmica decorre das equações
canônicas; na formulação lagrangiana, representa $L(q, \dot{q})$ e a dinâmica
decorre das equações de Euler-Lagrange, o que admite sistemas em que construir um
hamiltoniano diretamente é inconveniente.

Neural ODEs fornecem a camada de integração, de modo que o modelo é treinado
através do solver, e não sobre diferenças finitas, e a mesma trajetória pode ser
integrada com tolerâncias mais estritas após o treinamento.

Formulações physics-informed são empregadas quando as equações governantes são
conhecidas mas parcialmente parametrizadas, permitindo que resíduos das próprias
equações entrem na função de perda ao lado dos dados.

A derivação simbólica do hamiltoniano é mantida em paralelo ao modelo aprendido.
Isso é deliberado: um hamiltoniano obtido analiticamente fornece a referência
contra a qual um hamiltoniano aprendido é julgado, e construí-lo para sistemas
com múltiplos graus de liberdade e vínculos é, em si, parte substancial do
trabalho.

A implementação é em PyTorch, com Google Colab usado para treinamento e para o
ensino do mesmo conteúdo.

## Equipe

- **Marcus Varanis** — coordenação científica.
- **João Vitor de Oliveira Ribas** — doutorando, PPGCM/INFI; análise e modelagem
  de metamateriais com Hamiltonian e Lagrangian Neural Networks.
- **Antonio** — Iniciação Científica; modelagem e simulação dinâmica via
  formulação hamiltoniana.
- **Nickolas** — Iniciação Científica; physics-informed neural networks e
  implementação de redes neurais.
- **Pablo** — Iniciação Científica; formulação hamiltoniana simbólica.

## Colaborações

- **Prof. Américo Cunha Jr.** — Laboratório Nacional de Computação Científica
  (LNCC), Brasil.
- **Prof. J. M. Balthazar** — Universidade Estadual Paulista (UNESP), Brasil.

## Publicações relacionadas

- Ferraz, Longo, Varanis. *Geometry to dynamics via B&#8868;B assembly: a
  Hamiltonian-first tutorial for a 6-DOF supported cube.* European Journal of
  Physics, 2026. [doi:10.1088/1361-6404/ae9015](https://doi.org/10.1088/1361-6404/ae9015)

## Direções atuais

Aplicação de arquiteturas que preservam estrutura a metamateriais mecânicos, em
que a estrutura periódica produz band gaps e ressonância local fortemente não
linear, e em que um hamiltoniano aprendido deve reproduzir comportamento de
dispersão, e não uma trajetória isolada. Em paralelo, o grupo desenvolve
formulações hamiltonianas simbólicas para montagens com múltiplos graus de
liberdade, que fornecem a referência analítica dos modelos aprendidos.

## Para estudantes interessados

O projeto está ancorado em **P3 — Scientific Machine Learning**, com problemas de
teste extraídos de **P1**. Base útil: mecânica clássica no nível das formulações
lagrangiana e hamiltoniana, álgebra linear, equações diferenciais e Python.
Experiência prévia em deep learning é bem-vinda, mas não requisito — o machine
learning se aprende dentro do projeto, e a base física importa mais.

Um estudante aqui faz duas coisas que se reforçam: deriva as equações de
movimento de um sistema à mão e, depois, treina uma rede que deveria recuperá-las.
A comparação é o ponto. Ela torna visível o que a arquitetura de fato garante, e
onde um modelo que ajusta bem está, ainda assim, errado.
