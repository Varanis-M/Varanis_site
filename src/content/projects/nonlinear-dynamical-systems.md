---
title: "Nonlinear Dynamical Systems"
title_pt: "Sistemas Dinâmicos Não Lineares"
permalink: "nonlinear-dynamical-systems"
code: "NLD"

status: "active"
pillars: ["P1"]
featured: true
language: "en"
updated: 2026-07-30

areas:
  - "Nonlinear dynamics"
  - "Mechanical vibrations"
  - "Applied mechanics"

methods:
  - "Analytical and numerical continuation of nonlinear responses"
  - "Bifurcation and stability analysis"
  - "Lyapunov exponents and basins of attraction"
  - "Experimental instrumentation with MEMS sensors and microcontrollers"
  - "Fractional-order damping formulations"

collaborators:
  - name: "Prof. J. M. Balthazar"
    affiliation: "Universidade Estadual Paulista (UNESP), Brazil"
  - name: "Prof. Grzegorz Litak"
    affiliation: "Lublin University of Technology, Poland"
  - name: "Prof. Américo Cunha Jr."
    affiliation: "Laboratório Nacional de Computação Científica (LNCC), Brazil"
  - name: "Prof. Angelo Tusset"
    affiliation: "Universidade Tecnológica Federal do Paraná (UTFPR), Brazil"
  - name: "Prof. Clivaldo Oliveira"
    affiliation: "Universidade Federal da Grande Dourados (UFGD), Brazil"

team:
  - "Marcus Varanis"
  - "Mateus Silva"
  - "Lívia"
  - "Paulo"
  - "João Dutka"
  - "Diogo"
  - "Eduardo Venturim"
---

## The question

A motor mounted on a flexible structure does not simply spin faster as more
power is supplied to it. Approaching a resonance, it can stall there — the
additional energy going into the structure's oscillation instead of into shaft
speed — and then jump abruptly past it. The excitation is not independent of the
response it produces. Once that coupling is admitted, most of the intuition
inherited from linear vibration theory stops applying. What replaces it?

## Overview

This project comprises analytical, computational and experimental studies of
nonlinear systems in mechanics and engineering, with emphasis on oscillations,
stability, bifurcations, chaos, synchronization, vibro-impact, nonideal
excitation, fractional-order effects and energy harvesting. It is the group's
foundational line and the one from which the other pillars derive their test
problems.

The organizing commitment is that the three modes of inquiry are held together
rather than pursued separately. A predicted bifurcation is verified numerically
and then sought experimentally in an instrumented structure; when the experiment
disagrees, the model is revised rather than the discrepancy attributed to noise.
This is slower than any of the three alone, and it is the reason the group's
models can be used as references elsewhere — including as ground truth for the
learned models in the scientific machine learning line.

Two threads deserve specific mention because they recur. **Nonideal excitation**
treats the energy source as having limited power, so the forcing is a dynamical
variable coupled to the response; the Sommerfeld effect — resonant capture and
the associated jump — is the canonical signature of this coupling.
**Fractional-order damping** introduces memory, so the dissipative term depends
on the history of the motion rather than on its instantaneous rate, which
changes stability boundaries in ways an equivalent viscous model does not
reproduce.

Instrumentation is treated as a research activity in its own right and not as
support work. Building measurement chains from MEMS accelerometers and
microcontrollers makes experimental nonlinear dynamics accessible at a cost that
permits student projects to be genuinely experimental — a line that has produced
a substantial part of the group's published output.

## Approach and methods

Analytical treatment establishes the structure of the response: equilibria,
their stability, and the parameter values at which that stability changes.
Numerical continuation then traces response branches through those transitions,
including the unstable branches that experiments cannot access but that
determine where jumps occur.

Characterization of complex regimes uses Lyapunov exponents to distinguish
chaotic from quasi-periodic motion, and basins of attraction to establish how
sensitive the final state is to initial conditions — which, in systems with
coexisting attractors, is frequently the more consequential result.

Experimental work uses instrumented structures — cantilever beams, portal
frames, adjacent shear buildings for vibro-impact studies, magneto-piezo-elastic
harvesters — with acquisition built on MEMS sensors, Arduino and Raspberry Pi
platforms. Non-stationary responses are then analyzed with the group's
time-frequency methods, which is where this pillar meets P2.

## Team

- **Marcus Varanis** — scientific coordination.
- **Mateus Silva** — graduate researcher; fractional-order systems and
  memory-effect dynamics.
- **Lívia** — Iniciação Científica; mechanical vibrations instrumentation.
- **Paulo** — Iniciação Científica; energy harvesting modeling and simulation.
- **João Dutka** — Iniciação Científica; numerical analysis of clock mechanism
  dynamics.
- **Diogo** — Iniciação Científica; symbolic analysis of clock mechanism
  dynamics.
- **Eduardo Venturim** — Iniciação Científica; nonlinear flutter modeling.

## Collaborations

- **Prof. J. M. Balthazar** — Universidade Estadual Paulista (UNESP), Brazil.
- **Prof. Grzegorz Litak** — Lublin University of Technology, Poland.
- **Prof. Américo Cunha Jr.** — Laboratório Nacional de Computação Científica
  (LNCC), Brazil.
- **Prof. Angelo Tusset** — Universidade Tecnológica Federal do Paraná (UTFPR),
  Brazil.
- **Prof. Clivaldo Oliveira** — Universidade Federal da Grande Dourados (UFGD),
  Brazil.

## Related publications

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

## Current directions

Mechanical clock escapements are being studied as a controlled instance of a
self-sustained nonlinear oscillator with impact, examined in parallel through
numerical and symbolic formulations. Work also continues on nonlinear flutter,
on energy harvesting under time-varying excitation frequency, and on how
fractional damping alters the stability boundaries of systems driven by limited
power sources.

## For prospective students

This project is **P1 — Nonlinear Dynamics & Mechanical Vibrations**, the
group's foundational line. Useful background: mechanical vibrations or classical
mechanics, differential equations, and Python or MATLAB. Interest in building and
measuring physical systems is valued as much as analytical facility.

A student here typically takes one system through the full sequence: derive its
equations, locate its bifurcations numerically, then instrument a physical
version and find out where the model and the measurement part company. That last
step is where the research actually happens, and it is the reason the
instrumentation work is treated as first-class rather than preparatory.
