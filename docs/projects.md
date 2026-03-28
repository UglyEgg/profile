---
title: Projects
description: Selected systems, reliability, and tooling work.
---

# Projects

**Selected Work — Systems, Reliability, and Tooling**

This is a selection of projects that reflect how I approach system design: deterministic behavior, explicit failure handling, and observable, debuggable systems.

## crushr — Deterministic Archive & Recovery System

A compression/archive system designed around verifiable integrity, deterministic behavior, and failure-aware recovery, rather than best-effort extraction.

### Why this exists

Most archive formats optimize for size and speed, but fail poorly under corruption. crushr explores an alternative: treat archives as verifiable systems with explicit recovery boundaries and introspection.

### What this demonstrates

- Systems design under adversarial and failure conditions
- Deterministic pipelines and reproducible outputs
- Strong contract enforcement and format evolution discipline
- Engineering bias toward correctness over convenience

### Key ideas

- Self-identifying blocks and recovery graphs
- Verified manifests and integrity-first design
- Explicit salvage modes without silent corruption handling
- Introspection tooling for info, fsck, and lab workflows

**Tech**  
Rust, zstd, BLAKE3, structured CLI tooling

**Links**  
[Project Site](https://crushr.entropy.quest) · [GitHub](https://github.com/UglyEgg/crushr)

---

## podCI — Deterministic Local CI

A reproducible local CI system using rootless containers and explicit execution control to eliminate environment drift.

### Why this exists

Teams routinely lose time to environment mismatch, shell drift, and CI glue that behaves differently under local and hosted execution. podCI treats the build environment itself as part of the product surface.

### What this demonstrates

- Platform and release engineering discipline
- Reproducible CI behavior under explicit constraints
- Container-first workflows without unnecessary abstraction layers
- Operational thinking focused on reducing ambiguity for teams

### Key ideas

- Rootless containerized execution
- Pinned build environments
- Deterministic local-first CI behavior
- Clear, inspectable execution boundaries

**Tech**  
Bash, Podman, Alpine-based containers, reproducible build orchestration

**Links**  
[Project Site](https://podci.entropy.quest) · [GitHub](https://github.com/UglyEgg/podci)

---

## termgrid-core — Deterministic Terminal Rendering Infrastructure

A vendorable Rust terminal grid engine for deterministic rendering and structured terminal interfaces.

### Why this exists

Terminal interfaces are often built against renderer quirks rather than stable contracts. termgrid-core separates logical grid state from output handling so interfaces can be reasoned about and reused.

### What this demonstrates

- Systems-oriented library design
- Structured abstractions for unstable runtime environments
- Clear display contracts for terminal UIs and game-like applications
- Product-minded engineering around reusable infrastructure

### Key ideas

- Stable grid-state abstraction
- Deterministic rendering model
- Backend-agnostic terminal display surface
- Foundation for vendorable UI runtimes and tooling

**Tech**  
Rust, terminal abstractions, deterministic rendering contracts

**Links**  
[Project Site](https://termgrid.entropy.quest) · [GitHub](https://github.com/UglyEgg/termgrid-core)

---

## clipkit — Vendored Snippet and Content Sync

A crate focused on synchronizing small content artifacts, starting with GitHub Gists, without hard-wiring the design to a single vendor.

### Why this exists

Small artifact sync is often treated as trivial until it becomes embedded in workflows. clipkit is built around portability, composability, and keeping the abstraction clean enough to support multiple backends over time.

### What this demonstrates

- API and abstraction design with future extensibility in mind
- Avoidance of premature vendor lock-in
- Bias toward small, reusable building blocks rather than overgrown tools

**Tech**  
Rust, GitHub APIs, modular sync abstractions

**Links**  
[GitHub](https://github.com/UglyEgg)
