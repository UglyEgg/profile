---
title: Rich Majewski
description: Staff-level systems, platform, and reliability engineering.
---

# Rich Majewski

Senior / Staff-level systems, platform, and reliability engineer.

I build deterministic tooling, failure-aware systems, and reproducible infrastructure, with a focus on Rust, Linux, observability, and operational rigor.

My work sits at the intersection of systems engineering, platform reliability, and technical product building: the kind of work where correctness, recovery, and maintainability matter more than buzzwords.

<div class="hero-actions">
  <a class="cta-button" href="/projects/">View Work</a>
  <a class="cta-button cta-button-secondary" href="https://github.com/UglyEgg">GitHub</a>
  <a class="cta-button cta-button-secondary resume-request-link" href="#request-resume">Request Resume</a>
</div>

## Professional Snapshot

- 15+ years operating at Senior/Staff level in platform, systems, and reliability engineering
- Owned and operated production environments at multi-thousand node scale
- Reduced alert volume from 100–200/day to fewer than 10/day through SLO-driven observability and system design
- Designed and maintained private-cloud infrastructure (SDDC) as a primary operator
- Built deterministic tooling and pipelines focused on reproducibility, failure handling, and operational clarity
- Background spans three decades of infrastructure evolution, informing a bias toward durable, failure-aware system design

## What I Do

- Platform and infrastructure engineering
- Site reliability / production engineering
- Systems tooling and Rust-based infrastructure software
- Reproducible build and CI/CD systems
- Failure-aware architecture, observability, and recovery design

## What I’m Looking For

I operate most effectively at the **Staff level**, working on systems rather than symptoms.

I focus on roles centered around:

- Platform and infrastructure engineering
- Site reliability / production engineering
- Systems and tooling (Rust, Linux, internal platforms)

My work tends to emphasize:

- Designing systems that prevent failure modes, not just respond to them
- Reducing operational noise through better architecture and observability
- Building internal platforms and tooling that scale engineering effectiveness

I’m most effective in environments that value:

- clear system boundaries and contracts
- long-term system health over short-term patching
- ownership at the system level, not just the service level

## Selected Work

This is a selection of projects that reflect how I approach system design: deterministic behavior, explicit failure handling, and observable, debuggable systems.

### crushr — Deterministic Archive & Recovery System

A compression/archive system designed around verifiable integrity, deterministic behavior, and failure-aware recovery, rather than best-effort extraction.

**Why this exists**  
Most archive formats optimize for size and speed, but fail poorly under corruption. crushr explores an alternative: treat archives as verifiable systems with explicit recovery boundaries and introspection.

**What this demonstrates**
- Systems design under adversarial and failure conditions
- Deterministic pipelines and reproducible outputs
- Strong contract enforcement and format evolution discipline
- Engineering bias toward correctness over convenience

[Project Site](https://crushr.entropy.quest) · [GitHub](https://github.com/UglyEgg/crushr)

### podCI — Deterministic Local CI

A reproducible local CI system using rootless containers and explicit execution control to eliminate environment drift.

**Why this exists**  
Teams routinely lose time to "works here, fails there" build behavior. podCI pushes the environment into source-controlled, deterministic boundaries.

**What this demonstrates**
- Platform engineering discipline
- Reproducible build systems
- Containerized execution and environment control
- Practical reliability work that reduces ambiguity for teams

[Project Site](https://podci.entropy.quest) · [GitHub](https://github.com/UglyEgg/podci)

### termgrid-core — Deterministic Terminal Rendering Infrastructure

A vendorable Rust terminal grid engine for deterministic rendering and structured terminal interfaces.

**Why this exists**  
Terminal UI work often depends on quirks, assumptions, and uneven rendering behavior. termgrid-core provides a stable abstraction layer for building interfaces that behave consistently.

**What this demonstrates**
- Systems-oriented library design
- Interface infrastructure thinking instead of one-off UI coding
- Clean separation between display contracts and runtime behavior

[Project Site](https://termgrid.entropy.quest) · [GitHub](https://github.com/UglyEgg/termgrid-core)

## Writing

I write occasionally about systems design, reliability, deterministic tooling, and engineering tradeoffs.

This section will stay curated rather than high-volume. I’m more interested in writing things worth revisiting than feeding a content treadmill.

Planned topics:

- Approaching v1.0: what changes
- Determinism as an engineering value
- Why recovery boundaries matter more than happy-path speed
- Observability as a design property, not a bolt-on
- The difference between Senior and Staff engineering in practice

[View Writing](/writing/)
