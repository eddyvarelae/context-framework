# /specs/ — How to decide

EDITABLE.

This is the operating system of the project. It does not describe what to generate — it describes how to make decisions when generating.

---

## What belongs here

- Rules for tone, style, and format
- Decision criteria for ambiguous situations
- Workflow definition (what steps, in what order, with what validation)
- Output structure (what sections, what elements, what constraints)
- Any rule that should apply consistently across all outputs

## What does NOT belong here

- Business truth → that goes in `/context/`
- Generated outputs → those go in `/output/`
- One-off notes or feedback → log those in `/iterations/`

---

## How to fill this layer

Before starting, define the rules that will govern how the system operates. Some common files:

- `PRD.md` — what is being built, scope, out-of-scope
- `workflow.md` — the steps the system follows to produce an output
- `style.md` — tone, voice, format rules
- `validation.md` — criteria an output must meet before it is considered done

---

## The key rule

When an output is wrong, the fix goes here — not in the output itself.

Example:
- Copy is too technical for the audience → update `style.md` with a rule about language level
- A section is always missing → update `workflow.md` to require it
- The wrong metric is being optimized → update `PRD.md`

Every fix here improves all future outputs automatically.
