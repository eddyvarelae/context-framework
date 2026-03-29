# Project Template

A structured workspace for building any project with AI assistance.
Based on the Context-Driven Product Engineering framework.

---

## Core principle

The problem is never the model. The problem is the absence of structured context.

Without context, the system guesses.
With context, the system executes with intent.

---

## How to use this template

Before starting any project, fill in each layer in order:

1. **`/context/`** — Define the business/project reality. This is your source of truth. Fill it once and protect it.
2. **`/specs/`** — Define how decisions are made. This evolves as the system learns.
3. **`/input/`** — Drop any external documents, references, or data the system needs to consume.
4. **`/output/`** — Everything generated lives here. Never edit manually — fix the system instead.
5. **`/iterations/`** — Log every meaningful iteration. This is how the system learns over time.

---

## Layer rules

| Layer | Access | Who updates it |
|---|---|---|
| `/context/` | READ-ONLY | Only when the fundamental reality of the project changes |
| `/specs/` | EDITABLE | Updated based on feedback and learnings |
| `/input/` | READ-ONLY | External sources dropped in at project start or as needed |
| `/output/` | GENERATED | Never edited manually |
| `/iterations/` | APPEND-ONLY | A new folder per meaningful iteration |

---

## Agent instructions

When starting a session in this repo:

1. Read this README first.
2. Read all files in `/context/` — this is the ground truth. Do not contradict it.
3. Read all files in `/specs/` — these define how to decide, not what to generate.
4. Check `/iterations/` for the latest version to understand where the system is and what has been learned.
5. Check `/input/` for any source documents relevant to the current task.
6. Generate into `/output/`. Never modify `/context/`.
7. When a meaningful iteration is complete, create a new folder in `/iterations/` and document it.

If there is a conflict between what the user asks and what `/context/` says, flag it — do not silently override the context.

---

## Iteration rule

> Do not fix the output. Fix the system.

If something is wrong with what was generated:
- Do not edit `/output/` directly.
- Identify whether the problem is in `/context/` (wrong truth) or `/specs/` (wrong decision rule).
- Fix it there. Regenerate.
- Log the iteration.
