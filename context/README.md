# /context/ — Source of truth

READ-ONLY.

This layer contains the structural reality of the project. The agent reads this before doing anything else. Nothing here is a task or instruction — it describes what is true about the business, the project, the audience, and the constraints.

---

## What belongs here

- What is being built and why it matters
- Who it's for (audience, user, client)
- What success looks like (metrics, outcomes)
- What the product or company actually is (positioning, differentiators, voice)
- Any domain-specific knowledge the system needs to make good decisions

## What does NOT belong here

- Tasks, to-dos, or priorities → those go in `/specs/`
- Generated content → that goes in `/output/`
- External reference documents → those go in `/input/`

---

## How to fill this layer

Before starting the project, create the files you need here. There is no fixed structure — create what is true and relevant. Some common files:

- `project.md` — what this is, why it exists, what success looks like
- `audience.md` — who this is for and what they care about
- `product.md` — what the product is, its differentiators, its voice
- `constraints.md` — real constraints: time, budget, stack, non-negotiables
- `domain/` — subfolder if the project has distinct verticals or domains, each with their own context

---

## The only rule

Once filled, this layer does not change unless the fundamental reality of the project changes — a pivot, a new audience, a redefined success metric. It is not updated based on output feedback. That's what `/specs/` is for.
