# Project Template — Context-Driven AI Workspace

A structured workspace for building any project with AI assistance. The core idea: **context replaces prompting** as the primary interface. Instead of iterating on output with the model, you iterate on the structured context that produces better outputs over time.

---

## Core principle

> The problem is never the model. The problem is the absence of structured context.

Without context, the system guesses. With context, the system executes with intent.

---

## The five layers

| Layer | Access | Purpose |
|---|---|---|
| `/context/` | **READ-ONLY** | The ground truth about what is being built and why. Source of business reality. |
| `/specs/` | **EDITABLE** | How decisions are made. Per-subject working documents (one project, one client, one campaign — whatever the unit is). |
| `/input/` | **READ-ONLY** | External documents and source material the system consumes. |
| `/output/` | **GENERATED** | Everything the system produces. Never edited manually. |
| `/iterations/` | **APPEND-ONLY** | Memory of meaningful changes — what was learned and what changed in the system as a result. |

Each folder has its own `README.md` describing exactly what belongs and what does not.

---

## Single-subject vs multi-subject pattern

This template supports both shapes:

- **Single-subject:** one project, one repo. Files live directly in each layer.
- **Multi-subject:** one repo handles many subjects (clients, campaigns, products). Each subject gets a subfolder in `/specs/`, `/input/`, `/output/` — same slug across all three.

Multi-subject is the default in the README examples. For single-subject, just skip the per-subject subfolder.

---

## How to use this template

1. **Start with `/context/`** — Define the business reality, voice, audience, constraints. This is the highest-leverage work and the slowest to change.

2. **For each new subject, copy `/specs/_template/`** to `/specs/{subject-slug}/` and fill the skeleton. Use the same slug in `/input/{subject-slug}/` and `/output/{subject-slug}/`.

3. **Drop client/source materials** into `/input/{subject-slug}/`. Never let them mix with `/context/`.

4. **Generate into `/output/{subject-slug}/`.** Never edit those files by hand.

5. **When something is wrong, fix the system, not the output.** Update `/specs/` or `/context/`. Regenerate.

6. **When a learning is generalizable** (applies beyond a single subject), log it in `/iterations/v{N}-{slug}/` using `/iterations/v-template/` as a starting point.

---

## Agent instructions

When starting a session in this repo:

1. Read this README.
2. Read all files in `/context/` — this is ground truth. Do not contradict it.
3. Read relevant files in `/specs/` for the subject you're working on.
4. Check `/iterations/` for the latest learnings.
5. Check `/input/{subject-slug}/` for source material.
6. Generate into `/output/{subject-slug}/`. Never modify `/context/` directly.
7. When you learn something generalizable, log it as a new iteration AND update the relevant rule in `/context/` so future generations benefit.

If a request conflicts with `/context/`, flag the conflict — do not silently override.

---

## The iteration rule

> Do not fix the output. Fix the system.

If something is wrong with what was generated:
- Do not edit `/output/` directly.
- Identify whether the problem is in `/context/` (wrong truth) or `/specs/` (wrong decision rule).
- Fix it there. Regenerate.
- If the learning generalizes beyond this subject, log it in `/iterations/`.

---

## Memory vs iterations

This template lives in a repo. The AI session may also have its own memory store (e.g., agent memory at `~/.claude/projects/.../memory/`).

| Use **memory** for | Use **iterations** for |
|---|---|
| Cross-session knowledge that doesn't fit in the repo (user preferences, contact info, project status snapshots) | Documented changes to the system itself (a rule changed, a template evolved, a pricing pattern was learned) |
| Things that decay quickly | Things you'd want a future contributor to find by reading the repo |

When in doubt: if the learning belongs in the repo so anyone reading it would benefit, log an iteration AND update the relevant `/context/` file.
