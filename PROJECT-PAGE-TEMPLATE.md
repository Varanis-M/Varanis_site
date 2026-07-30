---
# =============================================================================
# STANDARD PROJECT PAGE TEMPLATE — Nonlinear Dynamics and Signal Processing Group
# Route: /projects/<permalink>/     File: src/content/projects/<permalink>.md
# PT-BR parallel:                   src/content/projects/pt/<slug>.md
# -----------------------------------------------------------------------------
# GOVERNANCE (non-negotiable)
#  - No manuscript status values. Allowed `status`: active | completed.
#    Never: in-preparation | submitted | under-review | in-press-as-status.
#  - No `target_venue` field. Never announce where work is being sent.
#  - No internal project codenames. Public technical names only.
#  - Collaborators: only those cleared for public visibility.
#  - No fixed headcounts in prose. Use level-based language.
#  - `team` holds display names, not slugs. There are no individual member
#    pages: members are represented through the projects they work on.
# =============================================================================

title: "Public technical title of the project"
title_pt: "Título técnico público do projeto"
permalink: "project-slug"
code: "CODE"                       # short badge used on cards (CPR, PQD, SciML, NLD)

status: "active"                   # active | completed
pillars: ["P1"]                    # P1-P5, primary first
featured: true
language: "en"                     # en | pt
updated: 2026-07-30

areas:
  - "Research area one"
  - "Research area two"

methods:
  - "Method, standard or toolchain"

collaborators:
  - name: "Prof. Full Name"
    affiliation: "Centre or department, Institution"

team:
  - "Marcus Varanis"
---

## The question

Entry layer. One short paragraph, accessible to an undergraduate with a
quantitative background. Anchors on a phenomenon, a problem or a concrete
question. No unexplained jargon, and no method named before the problem it
addresses.

## Overview

Sustaining layer, peer level. What the project models, why the modeling choice
matters, and what is genuinely at stake methodologically. Trade-offs are made
explicit. Limitations are stated rather than implied. Contribution is framed
against the state of the art without inflating novelty.

## Approach and methods

The modeling and analysis pipeline, in the order it is actually applied.
Equations are first-class content, not decoration — include them where they
carry the argument (KaTeX is available via remark-math/rehype-katex).

## Team

Named contributors and the specific part each one carries. Level-based
descriptors (doctoral, master's, Iniciação Científica), never headcounts.

## Collaborations

Publicly cleared partners only, with full institutional affiliation.

## Related publications

Published and accepted work only, with DOI where available. Entries link to
`src/content/papers/` where a dedicated page exists.

## Current directions

What the project is presently working through. Describes lines of
investigation, not promised results or pending editorial outcomes.

## For prospective students

Which pillar the project belongs to, what background helps, and what a student
would actually build or measure. Addressed to someone in formation and treated
as capable — not as a layperson to be simplified for.
