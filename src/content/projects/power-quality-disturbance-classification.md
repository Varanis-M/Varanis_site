---
title: "Power Quality Disturbance Modeling and Classification"
title_pt: "Modelagem e Classificação de Distúrbios de Qualidade de Energia"
permalink: "power-quality-disturbance-classification"
code: "PQD"

status: "active"
pillars: ["P2", "P3"]
featured: true
language: "en"
updated: 2026-07-30

areas:
  - "Signal processing"
  - "Scientific machine learning"

methods:
  - "IEEE 1159-2019 disturbance modeling"
  - "Wavelet packet analysis"
  - "Energy-entropy feature extraction"
  - "FT-Transformer and comparative classifier benchmarking"

collaborators: []

team:
  - "Marcus Varanis"
  - "Rodrigo Carvalho"
---

## The question

An electrical grid rarely fails all at once. It sags, swells, flickers,
accumulates harmonics, and produces brief transients — each leaving a distinct
signature in the voltage waveform. Those signatures overlap, arrive
superimposed, and are non-stationary by nature: a sag that lasts three cycles is
not a stationary phenomenon that can be characterized by a single spectrum. How
should such an event be represented so that a classifier can tell it apart from
the disturbance it most resembles?

## Overview

This project develops a signal processing and scientific machine learning
framework for representing and classifying power quality disturbance signals. It
treats representation as the substantive problem rather than a preprocessing
step. The classifier matters, but the decision that determines performance is
which features are extracted from a non-stationary waveform in the first place.

The framework is built on disturbance classes defined in IEEE 1159-2019, which
provides a standardized vocabulary and makes results comparable across studies
instead of dependent on locally generated datasets. Feature extraction uses
wavelet packet decomposition with energy-entropy signatures — a representation
the group has developed in mechanical fault diagnosis, where the underlying
problem is formally similar: identifying a transient event embedded in a
non-stationary signal.

Classification is treated comparatively rather than as an argument for a single
architecture. Benchmarking several classifiers under identical feature sets
separates gains attributable to representation from gains attributable to model
capacity — a distinction frequently collapsed in the applied literature, where a
strong classifier can mask a weak feature set.

The honest framing is that PQD classification is a well-populated field with
many published pipelines reporting high accuracy. The contribution here is
methodological transparency: standardized classes, a feature representation with
physical interpretation, and a benchmark that makes the source of performance
attributable.

## Approach and methods

Disturbance signals are modeled parametrically according to IEEE 1159-2019
categories, which allows controlled variation of magnitude, duration and
harmonic content, and produces ground truth that is exactly known — a condition
rarely available with field recordings.

Wavelet packet decomposition then splits each signal across a
frequency-localized tree. Rather than using coefficients directly, the pipeline
computes energy and entropy measures per node: energy indicates where in the
time-frequency plane the disturbance deposits its content, and entropy indicates
how ordered that deposition is. Together they compress a long non-stationary
waveform into a low-dimensional vector that remains physically interpretable.

Classification is then performed with tabular architectures — FT-Transformer
among them — evaluated against conventional baselines on identical features, so
that comparison isolates the effect of the model rather than confounding it with
preprocessing choices.

## Team

- **Marcus Varanis** — scientific coordination; time-frequency representation
  and feature design.
- **Rodrigo Carvalho** — master's researcher in scientific machine learning;
  pipeline development and classifier benchmarking.

Additional members of the Nonlinear Dynamics and Signal Processing Group
contribute to the signal processing and machine learning components.

## Related publications

The methodological foundation of this project rests on the group's published
work in wavelet-based analysis of non-stationary signals:

- Varanis, Pederiva. *Statements on wavelet packet energy-entropy signatures and
  filter influence in fault diagnosis of induction motor in non-stationary
  operations.* Journal of the Brazilian Society of Mechanical Sciences and
  Engineering, 2018.
- Varanis, Silva, Balthazar, Pederiva. *A tutorial review on time-frequency
  analysis of non-stationary vibration signals with nonlinear dynamics
  applications.* Brazilian Journal of Physics, 2021.

## Current directions

Consolidating the benchmark across the full set of IEEE 1159-2019 classes,
including superimposed disturbances, where single-label classification ceases to
be the appropriate formulation. Work continues on how far energy-entropy
features remain discriminative as disturbance classes are combined, and on how
sensitive the pipeline is to sampling rate and noise floor.

## For prospective students

This project spans **P2 — Nonstationary Signal Processing** and
**P3 — Scientific Machine Learning**. Useful background: signals and systems,
Fourier analysis, and Python. Familiarity with wavelets is helpful but is
normally acquired within the project.

A student working here builds the full path from synthetic signal to
classification decision: generating standardized disturbances, decomposing them,
extracting features, and then testing whether a classifier's accuracy survives
conditions it was not tuned for. The instructive part is usually the failure
cases — the disturbance pairs that remain confusable, and what that says about
the representation rather than about the model.
