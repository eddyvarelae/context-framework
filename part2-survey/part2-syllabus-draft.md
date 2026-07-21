# Building with AI — Part 2: Beyond the Builder
### Advanced syllabus — working draft

---

## The one-line

Part 1 built apps **inside an AI builder that holds your hand** (Replit).
Part 2 **leaves the sandbox**: students set up a real developer environment —
**VS Code + Claude Code + the terminal + Git** — and use it to build a real
backend, on real cloud, that they actually understand and control.

> Two shifts at once, and both are what the survey asked for:
> **1. The setup** — from browser copy-paste to Claude Code in a real editor.
> **2. Behind the line** — from the front of an app to the server, database,
> and cloud (the right side of Part 1's anatomy diagram).

*Hardware / device pipelines are **out of scope** for Part 2.*

---

## Why this shape (straight from the survey)

15 interested students, all beginner-to-intermediate, mentors excluded.

- **The tooling gap:** 67% are still copy-pasting from the ChatGPT/Claude
  browser; only 40% have touched an agentic tool like Claude Code; **60% flat
  out asked to "code confidently without an AI builder."** → Part 2 is that.
- **The knowledge gap:** they can code a little and deploy a *frontend* (47%),
  but have **never built a backend (13%)**, **never touched cloud (0%)**,
  **never wrote a serverless function (0%)**.
- **Top demand:** real backends & APIs **73%**, databases **67%**, auth **60%**,
  the Claude API **60%**, AI agents **53%**, Claude Code fluency **47%**,
  cloud/serverless **40%**, DevOps/CI-CD **33%**.

**Conclusion:** a real-tools, real-stack class. Not a deeper Replit — a
graduation *out* of it.

---

## Who it's for · prerequisites

- Completed Part 1 (or equivalent comfort building with an AI builder).
- Expected self-rated confidence ~2.5/5 — **we scaffold**, but this is a step
  up: real editor, real terminal, real cloud.
- **A laptop they can install software on** (VS Code, Node, Git, Claude Code).
  See logistics — this is the biggest gate.

---

## The arc (mirrors Part 1: I → II → III)

### I. The real setup — leaving the builder

| # | Module | What it covers | Why (survey) |
|---|---|---|---|
| 1 | **Your real workshop** | Install & wire up **VS Code + Claude Code + the terminal + Git + a GitHub account.** What each piece is and why devs use it instead of a builder. | 67% still copy-paste; the whole class rests on this working. |
| 2 | **Driving Claude Code** | Agentic coding in a real repo: plan → one task at a time → **read the diff** → checkpoint. The grown-up version of Part 1's "atomic tasks / read / specific." | **47% want Claude Code fluency; 60% want to code without a builder.** |
| 3 | **Terminal & Git** | The command line without fear; version control, branches, commits, rollback; push to GitHub. | Underpins everything — 60% have used a terminal, only 40% use Git. |

### II. The real stack — behind the line

| # | Module | What it covers | Why (survey) |
|---|---|---|---|
| 4 | **Data & databases** | What a database really is; modeling data (tables/fields/relationships); storing & querying. Why *"just make it remember"* isn't a spec. | **67% want it · 0 feel comfortable.** |
| 5 | **Backends & APIs** | Your own endpoints: request → server → response. What an API is from both sides — calling one and building one. | **73% want it · 13% have built one — the #1 gap.** |
| 6 | **Authentication** | Real login (Google / managed auth), sessions, why you **never roll your own** password system. | **60% want it.** |
| 7 | **The cloud** | AWS basics kept light: a function that runs in the cloud (Lambda), object storage (S3), a hosted database. Why "serverless." | **40% want cloud · 0% have touched it.** |
| 8 | **Ship it for real** | Deploy a backend that stays up; secrets in production; **CI/CD** — push to GitHub, it goes live. | **60% code-confidence · 33% DevOps.** Reuse a real GitHub→deploy pipeline as the worked example. |
| 9 | **AI inside your product** | Calling the Claude API from your **own** backend; agents & tools (function calling). **MCP as an elective.** | **Claude API 60% · agents 53% · MCP 27%.** |

### III. Practice — build a real app, end to end

In the real environment, driven by Claude Code, each student/team ships a small
but complete app:

- a **repo** on GitHub,
- a **backend** — database + API + auth,
- a **frontend** that talks to it,
- one real **AI feature** (Claude API),
- **deployed** via CI/CD.

Built around a **common reference app** (so no one is blocked by their own idea)
or the team's own software product — their choice.

---

## Demand → module coverage (nothing asked-for is dropped)

| Survey topic | Demand | Module |
|---|---|---|
| Building real backends & APIs | 73% | **5** |
| Databases | 67% | **4** |
| Authentication | 60% | **6** |
| The Claude API in apps | 60% | **9** |
| Coding confidently w/o a builder | 60% | **1, 2, 3** (the whole premise) |
| AI agents & tools | 53% | **9** |
| Claude Code / agentic coding | 47% | **2** |
| Cloud & serverless (AWS) | 40% | **7** |
| Computer vision & ML | 40% | *elective / office hours* |
| DevOps: Git, CI/CD | 33% | **3, 8** |
| MCP servers | 27% | **9** (elective) |

*Computer vision (40% — Shradha, Juhi, Ishayan, Raj) is the one strong ask
outside the backbone. Options: a bonus module, office-hours track, or a Claude-
API vision demo in module 9. Flagged, not dropped.*

---

## Logistics to lock (bigger now that we've left the builder)

**Machines — the #1 gate.** Every student needs a laptop they can install on
(VS Code, Node, Git, Claude Code). School-managed laptops often block installs;
check the OS mix (Mac/Windows) — setup steps differ and module 1 must cover
both. A pre-class "install checklist" sent ahead will save the first session.

**Claude Code access & cost.** Claude Code needs an Anthropic login (a Claude
subscription or API credits). Decide who provisions and pays — per-student
accounts, a shared class plan, or credits. This is the equivalent of Part 1's
"$100 Replit tier" conversation, and it needs an answer before day one.

**Cloud accounts.** AWS with minors + billing is a real consideration. Options:
a **shared teaching AWS account** with tight limits, per-student free-tier
accounts, or keep module 7 demo-only on the instructor's account. Recommend
shared/instructor-driven to avoid surprise bills.

**Stack choice — needs your call.** Standardize on one backend stack:
- **Node / TypeScript** — matches the AWS-serverless deployment path and their
  JS/TS familiarity (73%). Coherent all the way to the cloud module. *(Leans
  toward what you already build.)*
- **Python** — their strongest language (80% have written it), gentler syntax.
  Great for the API/DB modules; slightly more setup for the serverless deploy.

**Length & cadence.** Nine modules split into two blocks (setup+workflow, then
the stack) plus a build. Natural shapes: a longer multi-session mini-course, or
an intensive. Sizing depends on session length — your call.

**Seats.** 12 firm "yes" + 3 "maybe" → plan for **~15–18**, but the
laptop/install gate may lower who can actually participate.

---

*Draft based on the Part 1 "Product Builder" deck (26 slides) and the Part 2
interest survey (15 students / 50 pool). Companion analysis:
`analysis/Building with AI Part 2 — Survey Insights.pdf`.*
