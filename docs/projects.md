---
title: Projects
description: Selected systems, reliability, and tooling work.
---

# Projects

This is a selection of projects that reflect how I tend to approach systems work: deterministic behavior, explicit boundaries, observable state, and failure handling that is designed in rather than added later.

Most of them sit somewhere between systems engineering, reliability work, and product design. They are less about collecting features and more about making behavior understandable, repeatable, and resilient over time.

## Crushr

**Deterministic archive and recovery system**

Crushr is an archive/compression project built around verifiable integrity, deterministic behavior, and explicit recovery boundaries.

It started from a simple observation: most archive tooling does well when everything is healthy, but the interesting design questions usually appear when data is damaged, metadata is incomplete, or recovery matters more than happy-path extraction.

### Why this exists

The project explores what happens when you treat an archive less like a passive file container and more like a system with contracts, invariants, and diagnosable failure states.

### What it demonstrates

- systems design under failure and corruption pressure
- deterministic pipelines and reproducible outputs
- format evolution with compatibility in mind
- a bias toward introspection, verification, and explicit recovery behavior

### Key ideas

- self-identifying blocks and recovery-oriented structure
- verified manifests and integrity-first design
- explicit salvage modes instead of silent guesswork
- tooling for introspection, validation, and experimentation

**Tech:** Rust, zstd, BLAKE3, structured CLI tooling

**Links**  
[Project Site](https://crushr.entropy.quest) · [GitHub](https://github.com/UglyEgg/crushr)

---

## podCI

**Deterministic local CI harness**

podCI is a reproducible CI harness built around rootless containers, pinned environments, and deterministic execution paths.

The problem it addresses is familiar to most infrastructure teams: local validation and CI often drift apart just enough to waste time, create ambiguity, and turn simple failures into environment archaeology.

### Why this exists

The project is meant to tighten the gap between local and CI behavior so that builds, checks, and packaging steps behave consistently and are easier to reason about.

### What it demonstrates

- reproducible tooling and environment control
- release hygiene and deterministic packaging
- operational thinking applied to developer workflows
- reducing ambiguity in build and validation paths

### Key ideas

- pinned containerized execution
- clean, explicit release checks
- predictable artifact handling
- minimizing glue logic in favor of clearer built-in behavior

**Tech:** Rust, Podman, Alpine, Bash, CI/CD tooling

**Links**  
[Project Site](https://podci.entropy.quest) · [GitHub](https://github.com/UglyEgg/podci)

---

## termgrid-core

**Deterministic terminal grid engine**

termgrid is a standalone Rust crate for deterministic terminal rendering, built to support consistent display behavior across different runtimes and frontends.

It grew out of a practical need: terminal applications often become harder to reason about once output, layout, and rendering behavior start getting mixed together.

### Why this exists

The goal is to make terminal state explicit and stable enough that higher-level applications can build on it without treating rendering as a pile of side effects.

### What it demonstrates

- clean separation between rendering state and runtime behavior
- systems-level thinking applied to UI surfaces
- contract-oriented design for reusable infrastructure
- attention to portability and predictable output

### Key ideas

- grid-state abstraction as the canonical display surface
- deterministic rendering behavior
- reusable engine design decoupled from any single app
- support for more complex terminal-facing systems over time

**Tech:** Rust, terminal rendering, UTF-8/UI infrastructure

**Links**  
[Project Site](https://termgrid.entropy.quest) · [GitHub](https://github.com/UglyEgg/termgrid-core)

---

## clipkit / strad

**Content synchronization and dotfile management**

clipkit is a vendorable crate for managing synchronized content snippets, while strad builds on similar principles for more opinionated dotfile management.

Both projects come from the same general concern: configuration and small synchronized artifacts tend to become messy quickly unless authenticity, storage boundaries, and change behavior are treated explicitly.

### Why this exists

These projects explore how to handle sync, authenticity, and private configuration in a way that remains understandable and maintainable instead of gradually turning into convenience-driven drift.

### What they demonstrate

- security-conscious systems design
- deterministic plan and manifest handling
- careful treatment of trust, encryption, and authenticity
- product thinking applied to low-level tooling

### Key ideas

- manifest-driven behavior
- explicit key and authenticity handling
- ciphertext-oriented storage boundaries
- minimizing magic in favor of inspectable behavior

**Tech:** Rust, age, BLAKE3, manifest/plan tooling

**Links**  
[GitHub](https://github.com/UglyEgg)

## What these projects have in common

The projects vary, but the through-line is usually the same: I’m interested in systems where behavior needs to stay understandable under stress, change, and long-term use.

That tends to lead me toward explicit contracts, observable state, deterministic behavior, and tooling that makes failure easier to diagnose instead of easier to ignore.
