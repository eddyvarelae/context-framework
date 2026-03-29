# /iterations/ — System memory

APPEND-ONLY.

This layer documents what happened in each meaningful iteration: what was requested, what was generated, what was wrong, what changed in the system, and what principle was extracted.

It is not a changelog. It is the memory that prevents the system from repeating the same mistakes.

---

## When to create a new iteration folder

Not every output needs an iteration log. Create one when:

- A meaningful output was generated and reviewed
- Feedback led to a change in `/specs/` or `/context/`
- A principle was learned that should apply to future iterations

---

## Folder convention

```
iterations/
  v1/
  v2/
  v3/
```

Each folder contains:

| File | What it captures |
|---|---|
| `manifest.md` | What was requested, what context was active, what workflow was used |
| `output/` | Snapshot of what was generated (frozen copy, not the live output) |
| `feedback.md` | What the human corrected or rejected, with as much detail as possible |
| `changes.md` | What changed in `/specs/` or `/context/` as a result |
| `learning.md` | The generalizable principle extracted — not "this was wrong" but "the rule that prevents this class of error" |

---

## What a good learning looks like

Bad: "The copy was too formal."

Good: "Copy for non-technical audiences must avoid acronyms and product-internal terminology. If a term requires explanation, it should either be removed or replaced with the plain-language equivalent."

The learning should be specific enough to update a rule in `/specs/`, and general enough to apply beyond this single case.
