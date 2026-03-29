# /output/ — Generated artifacts

GENERATED.

Everything in this folder is produced by the system. It is the result of `/context/` + `/specs/` + `/input/` working together.

---

## What belongs here

Anything the system generates:

- Code
- Documents
- Designs
- Assets
- Data outputs
- Reports
- Prototypes

Organize by type if needed:

```
output/
  code/
  docs/
  design/
  assets/
```

---

## The one rule

Do not edit files in this folder manually.

If the output is wrong, the problem is in `/context/` or `/specs/`. Fix it there and regenerate. Editing output directly breaks the system — the next regeneration will overwrite it, and more importantly, the root cause stays unfixed.

The output is a symptom. The system is the cause.
