---
title: "Scientific Machine Learning for Nonlinear Systems"
title_pt: "Scientific Machine Learning para Sistemas Não Lineares"
permalink: "scientific-machine-learning-nonlinear-systems"
code: "SciML"

status: "active"
pillars: ["P3", "P1"]
featured: true
language: "en"
updated: 2026-07-30

areas:
  - "Scientific machine learning"
  - "Nonlinear dynamics"
  - "Materials science applications"

methods:
  - "Hamiltonian Neural Networks"
  - "Lagrangian Neural Networks"
  - "Neural ODEs"
  - "Physics-informed neural networks"
  - "PyTorch and Google Colab toolchain"

collaborators:
  - name: "Prof. Américo Cunha Jr."
    affiliation: "Laboratório Nacional de Computação Científica (LNCC), Brazil"
  - name: "Prof. J. M. Balthazar"
    affiliation: "Universidade Estadual Paulista (UNESP), Brazil"

team:
  - "Marcus Varanis"
  - "João Vitor de Oliveira Ribas"
  - "Antonio"
  - "Nickolas"
  - "Pablo"
---

## The question

A neural network trained on the trajectory of a pendulum can reproduce that
trajectory and still predict, a few seconds later, that the pendulum has gained
energy from nowhere. It fits the data without respecting the structure that
generated the data. If the physics is known — if the system is conservative, if
it has a Hamiltonian — can that structure be built into the architecture rather
than hoped for from the training set?

## Overview

This project applies Hamiltonian and Lagrangian Neural Networks to the analysis
of nonlinear dynamical systems, with applications extending into materials
science. The premise is architectural rather than statistical: instead of
learning a mapping from state to next state, the network learns a scalar
function — a Hamiltonian or a Lagrangian — from which the dynamics are then
derived analytically. Conservation properties follow from the construction, not
from the quality of the fit.

The practical consequence is generalization behavior. A structure-preserving
model constrained to a physically admissible class tends to remain stable over
horizons far beyond its training window, where an unconstrained network drifts.
This matters most for the regimes the group works in — nonlinear oscillators,
quasi-periodic and chaotic motion, systems with fractional damping — where long
integration exposes exactly the errors that short-horizon metrics conceal.

The scope requires care in how it is stated. Structure-preserving architectures
are an active and well-populated research area, and this project contributes to
that line rather than founding it. Its distinctive angle is the pairing with the
group's existing body of work in nonlinear dynamics: the systems used as test
cases are ones the group has already characterized analytically and
experimentally, which means a learned model can be assessed against known
bifurcation structure and measured response instead of against held-out data
alone.

Extension to hyperchaotic regimes is treated as a dynamical question within this
pillar — whether structure-preserving learning remains viable when the attractor
has more than one positive Lyapunov exponent — and not as a separate research
line.

## Approach and methods

The learning target is a scalar function of the system state. In the Hamiltonian
formulation the network represents $H(q, p)$ and the dynamics follow from the
canonical equations; in the Lagrangian formulation it represents $L(q, \dot{q})$
and the dynamics follow from the Euler-Lagrange equations, which admits systems
where a Hamiltonian is inconvenient to construct directly.

Neural ODEs supply the integration layer, so the model is trained through the
solver rather than on finite differences, and the same trajectory can be
integrated with tolerances tightened after training.

Physics-informed formulations are used where governing equations are known but
partially parameterized, allowing residuals of the equations themselves to enter
the loss alongside data.

Symbolic derivation of the Hamiltonian is maintained in parallel with the
learned model. This is deliberate: an analytically derived Hamiltonian provides
the reference against which a learned one is judged, and constructing it for
systems with multiple degrees of freedom and constraints is itself a substantial
piece of the work.

Implementation is in PyTorch, with Google Colab used for training and for
teaching the same material.

## Team

- **Marcus Varanis** — scientific coordination.
- **João Vitor de Oliveira Ribas** — doctoral candidate, PPGCM/INFI; analysis
  and modeling of metamaterials using Hamiltonian and Lagrangian Neural
  Networks.
- **Antonio** — Iniciação Científica; dynamical modeling and simulation via
  Hamiltonian formulation.
- **Nickolas** — Iniciação Científica; physics-informed neural networks and
  neural network implementation.
- **Pablo** — Iniciação Científica; symbolic Hamiltonian formulation.

## Collaborations

- **Prof. Américo Cunha Jr.** — Laboratório Nacional de Computação Científica
  (LNCC), Brazil.
- **Prof. J. M. Balthazar** — Universidade Estadual Paulista (UNESP), Brazil.

## Related publications

- Ferraz, Longo, Varanis. *Geometry to dynamics via B&#8868;B assembly: a
  Hamiltonian-first tutorial for a 6-DOF supported cube.* European Journal of
  Physics, 2026. [doi:10.1088/1361-6404/ae9015](https://doi.org/10.1088/1361-6404/ae9015)

## Current directions

Applying structure-preserving architectures to mechanical metamaterials, where
the periodic structure produces band gaps and strongly nonlinear local
resonance, and where a learned Hamiltonian must reproduce dispersion behavior
rather than a single trajectory. In parallel, the group is developing symbolic
Hamiltonian formulations for multi-degree-of-freedom assemblies, which supply
the analytical reference for the learned models.

## For prospective students

This project is anchored in **P3 — Scientific Machine Learning**, with its test
problems drawn from **P1**. Useful background: classical mechanics at the level
of Lagrangian and Hamiltonian formulations, linear algebra, differential
equations, and Python. Prior deep learning experience is welcome but not
required — the machine learning is learned within the project, and the physics
background matters more.

A student here does two things that reinforce each other: derive the equations
of motion for a system by hand, then train a network that is supposed to recover
them. The comparison is the point. It makes visible what the architecture
actually guarantees, and where a model that fits well is nonetheless wrong.
