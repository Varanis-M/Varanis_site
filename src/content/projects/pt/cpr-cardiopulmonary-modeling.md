---
title: "Modelagem Não Linear da Parede Torácica e da Dinâmica Cardiopulmonar na RCP"
title_en: "Nonlinear Chest Wall and Cardiopulmonary Modeling for CPR"
permalink: "cpr-cardiopulmonary-modeling"
code: "CPR"

status: "active"
pillars: ["P4", "P1"]
featured: true
language: "pt"
updated: 2026-07-30

areas:
  - "Modelagem biomédica"
  - "Dinâmica não linear"

methods:
  - "Mecânica viscoelástica não linear da parede torácica"
  - "Modelo de circulação cardiopulmonar em malha fechada"
  - "Hemodinâmica de Windkessel não linear"
  - "Osciladores de Van der Pol acoplados para ritmo cardíaco"
  - "Análise tempo-frequência de sinais fisiológicos"

collaborators:
  - name: "Prof. C. Nataraj"
    affiliation: "Villanova Center for Analytics of Dynamic Systems (VCADS), Villanova University"

team:
  - "Marcus Varanis"
  - "Barbara Oliveira"
  - "Dilson"
---

## A pergunta

As compressões torácicas na reanimação cardiopulmonar são aplicadas contra uma
parede torácica que não se comporta como uma mola. Ela endurece conforme é
comprimida, não recupera integralmente a forma entre compressões, e sua resposta
depende da velocidade com que é carregada. Cada compressão produz, portanto, um
fluxo sanguíneo diferente do que um modelo linear preveria. Se a resposta
mecânica é não linear, quanto do que chega à circulação está sendo mal
estimado — e o que um modelo fisicamente honesto altera nessa estimativa?

## Visão geral

Este projeto desenvolve um modelo computacional acoplado no qual a mecânica
viscoelástica não linear da parede torácica governa uma representação em malha
fechada da circulação cardiopulmonar. As duas metades são usualmente tratadas
em separado: estudos mecânicos caracterizam a complacência torácica sem
propagar o resultado para a hemodinâmica, enquanto modelos de circulação tomam a
compressão como forma de onda prescrita. Acoplá-las significa que a não
linearidade mecânica deixa de ser condição de contorno e passa a integrar a
dinâmica.

O compromisso de modelagem é que a complacência não é constante. Introduzir
complacência variável e dependência da taxa altera tanto a amplitude quanto o
instante das pressões geradas — o que importa porque a grandeza de interesse
clínico, a perfusão, depende da interação entre essas pressões e a impedância
vascular, não do pico de força isoladamente.

As limitações merecem ser ditas com clareza. Trata-se de uma descrição a
parâmetros concentrados, não espacialmente resolvida: captura como o sistema
responde globalmente, não onde as tensões se concentram no tórax. Os valores de
parâmetros vêm de caracterizações publicadas, e não de medições específicas de
sujeito, de modo que o modelo sustenta raciocínio comparativo e mecanístico, não
predição em nível de paciente. O trabalho contribui para uma linha consolidada de
modelagem cardiopulmonar ao relaxar uma hipótese de linearidade interna a ela;
não introduz um novo paradigma para modelagem em reanimação.

## Abordagem e métodos

A parede torácica é representada por elementos viscoelásticos não lineares, de
modo que a força restauradora depende do deslocamento e da taxa de compressão, e
a histerese entre carregamento e descarregamento é preservada em vez de
suavizada.

A circulação é um sistema multicompartimental em malha fechada, no qual cada
segmento vascular carrega complacência, resistência e inertância. Uma
formulação de Windkessel não linear permite que a complacência arterial varie com
a pressão — mecanismo pelo qual condições patológicas, em especial o
endurecimento arterial, entram no modelo como mudança de parâmetro e não como
modelo separado.

O ritmo cardíaco é gerado por osciladores de Van der Pol acoplados, cujo
comportamento autossustentado de ciclo limite reproduz a estrutura qualitativa
dos ritmos fisiológicos e sua perda de coerência, sem impor uma forma de onda
fixa ao sistema.

Os sinais resultantes são não estacionários por construção, de modo que a
análise emprega o conjunto de métodos tempo-frequência do grupo —
synchrosqueezing, synchroextracting, decomposição por wavelet packet — em
conjunto com análise de recorrência, para separar transições dinâmicas genuínas
de artefatos da transformada.

## Equipe

- **Marcus Varanis** — coordenação científica; formulação da parede torácica e do
  acoplamento cardiopulmonar; análise de sinais.
- **Barbara Oliveira** — mestranda; modelagem cardiovascular acoplada 0D–1D,
  efeitos de propagação de ondas e modelos não lineares de stent.
- **Dilson** — Iniciação Científica; apoio à modelagem cardiovascular acoplada
  0D–1D.

## Colaborações

**Prof. C. Nataraj** — Villanova Center for Analytics of Dynamic Systems
(VCADS), Villanova University. Trabalho conjunto em modelagem cardiopulmonar e
análise de dinâmicas fisiológicas.

## Publicações relacionadas

- Varanis, Ferraz, Longo, Balthazar. *A nonlinear Windkessel model for
  cardiovascular dynamics: variable compliance and pathological simulations.*
  Medical & Biological Engineering & Computing, 2026.
- Varanis, Balthazar, Ribeiro, Tusset, de Oliveira, Lima, Silva. *Recurrence
  analysis of nonlinear ECG signals modeled with coupled Van der Pol
  oscillators.* Springer, Mechanisms and Machine Science, vol. 142, 2025.
- Varanis, Hemmati, Filipus, de Abreu, Balthazar, Nataraj. *An overview on
  time-frequency effects of ECG signals using synchroextracting transform.*
  Springer, NODYCON Conference Proceedings, vol. 3, 2024.
- Ribeiro, Silva, Balthazar, de Lima, Varanis, Tusset. *Influence of a non-ideal
  external force on the complexity of the basins of attraction of coupled Van
  der Pol oscillators.* Brazilian Journal of Physics, 2026.

## Direções atuais

Estender a descrição arterial de compartimentos concentrados para representações
acopladas 0D–1D, de modo que a propagação e a reflexão de ondas ao longo da
árvore arterial sejam resolvidas em vez de absorvidas em um termo de
complacência. Nesse contexto, o grupo examina como modelos não lineares de
segmentos vasculares com stent alteram a impedância local e como essas mudanças
se propagam de volta às pressões geradas durante a compressão.

## Para estudantes interessados

O projeto situa-se sobretudo em **P4 — Modelagem Biomédica Computacional**, com
fundamento mecânico em **P1**. Base útil: equações diferenciais ordinárias,
integração numérica e domínio operacional de Python. Não se pressupõe formação
prévia em fisiologia — o conteúdo cardiovascular é aprendido junto com a
modelagem.

O que um estudante efetivamente faz aqui é construir e interrogar modelos:
implementar um compartimento, verificá-lo contra um caso limite de resposta
conhecida, introduzir uma não linearidade e então determinar se a mudança na
saída é fisicamente significativa ou artefato numérico. O trabalho é
quantitativo e iterativo, e as perguntas que responde são de origem clínica.
