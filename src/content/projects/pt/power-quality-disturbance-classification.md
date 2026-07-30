---
title: "Modelagem e Classificação de Distúrbios de Qualidade de Energia"
title_en: "Power Quality Disturbance Modeling and Classification"
permalink: "power-quality-disturbance-classification"
code: "PQD"

status: "active"
pillars: ["P2", "P3"]
featured: true
language: "pt"
updated: 2026-07-30

areas:
  - "Processamento de sinais"
  - "Scientific machine learning"

methods:
  - "Modelagem de distúrbios conforme IEEE 1159-2019"
  - "Análise por wavelet packet"
  - "Extração de atributos de energia-entropia"
  - "FT-Transformer e benchmark comparativo de classificadores"

collaborators: []

team:
  - "Marcus Varanis"
  - "Rodrigo Carvalho"
---

## A pergunta

Uma rede elétrica raramente falha de uma vez. Ela afunda, sobretensiona, cintila,
acumula harmônicos e produz transitórios breves — cada um deixando assinatura
distinta na forma de onda de tensão. Essas assinaturas se sobrepõem, chegam
superpostas e são não estacionárias por natureza: um afundamento de três ciclos
não é fenômeno estacionário que se caracterize por um único espectro. Como
representar tal evento para que um classificador o distinga do distúrbio com que
mais se parece?

## Visão geral

Este projeto desenvolve um framework de processamento de sinais e scientific
machine learning para representar e classificar sinais de distúrbios de qualidade
de energia. Trata a representação como o problema substantivo, e não como etapa
de pré-processamento. O classificador importa, mas a decisão que determina o
desempenho é quais atributos se extraem de uma forma de onda não estacionária,
antes de tudo.

O framework parte das classes de distúrbio definidas na IEEE 1159-2019, que
fornece vocabulário padronizado e torna os resultados comparáveis entre estudos,
em vez de dependentes de conjuntos de dados gerados localmente. A extração de
atributos usa decomposição por wavelet packet com assinaturas de energia-entropia
— representação que o grupo desenvolveu em diagnóstico de falhas mecânicas, onde
o problema subjacente é formalmente análogo: identificar um evento transitório
embutido em sinal não estacionário.

A classificação é tratada comparativamente, e não como defesa de uma única
arquitetura. Fazer benchmark de vários classificadores sob conjuntos idênticos de
atributos separa ganhos atribuíveis à representação de ganhos atribuíveis à
capacidade do modelo — distinção frequentemente colapsada na literatura
aplicada, em que um classificador forte pode mascarar um conjunto de atributos
fraco.

O enquadramento honesto é que classificação de PQD é campo bastante povoado, com
muitos pipelines publicados reportando acurácia elevada. A contribuição aqui é de
transparência metodológica: classes padronizadas, representação de atributos com
interpretação física, e benchmark que torna a origem do desempenho atribuível.

## Abordagem e métodos

Os sinais de distúrbio são modelados parametricamente segundo as categorias da
IEEE 1159-2019, o que permite variação controlada de magnitude, duração e
conteúdo harmônico, e produz verdade de referência exatamente conhecida —
condição raramente disponível em registros de campo.

A decomposição por wavelet packet então distribui cada sinal por uma árvore
localizada em frequência. Em vez de usar coeficientes diretamente, o pipeline
calcula medidas de energia e entropia por nó: a energia indica onde no plano
tempo-frequência o distúrbio deposita seu conteúdo, e a entropia indica quão
ordenada é essa deposição. Juntas, comprimem uma forma de onda não estacionária
longa em um vetor de baixa dimensão que permanece fisicamente interpretável.

A classificação é então realizada com arquiteturas tabulares — entre elas o
FT-Transformer — avaliadas contra baselines convencionais sobre atributos
idênticos, de modo que a comparação isole o efeito do modelo em vez de
confundi-lo com escolhas de pré-processamento.

## Equipe

- **Marcus Varanis** — coordenação científica; representação tempo-frequência e
  projeto de atributos.
- **Rodrigo Carvalho** — mestrando em scientific machine learning;
  desenvolvimento do pipeline e benchmark de classificadores.

Outros integrantes do Nonlinear Dynamics and Signal Processing Group contribuem
nos componentes de processamento de sinais e machine learning.

## Publicações relacionadas

A base metodológica deste projeto assenta-se no trabalho publicado do grupo em
análise de sinais não estacionários por wavelets:

- Varanis, Pederiva. *Statements on wavelet packet energy-entropy signatures and
  filter influence in fault diagnosis of induction motor in non-stationary
  operations.* Journal of the Brazilian Society of Mechanical Sciences and
  Engineering, 2018.
- Varanis, Silva, Balthazar, Pederiva. *A tutorial review on time-frequency
  analysis of non-stationary vibration signals with nonlinear dynamics
  applications.* Brazilian Journal of Physics, 2021.

## Direções atuais

Consolidação do benchmark sobre o conjunto completo de classes da IEEE
1159-2019, incluindo distúrbios superpostos, em que a classificação de rótulo
único deixa de ser a formulação adequada. Segue em curso o estudo de até que
ponto os atributos de energia-entropia permanecem discriminativos conforme as
classes se combinam, e de quão sensível o pipeline é à taxa de amostragem e ao
piso de ruído.

## Para estudantes interessados

O projeto atravessa **P2 — Processamento de Sinais Não Estacionários** e
**P3 — Scientific Machine Learning**. Base útil: sinais e sistemas, análise de
Fourier e Python. Familiaridade com wavelets ajuda, mas normalmente é adquirida
dentro do projeto.

Um estudante aqui constrói o caminho completo, do sinal sintético à decisão de
classificação: gerar distúrbios padronizados, decompô-los, extrair atributos e
então testar se a acurácia de um classificador sobrevive a condições para as
quais ele não foi ajustado. A parte instrutiva costuma ser os casos de falha — os
pares de distúrbios que permanecem confundíveis, e o que isso diz sobre a
representação, mais do que sobre o modelo.
