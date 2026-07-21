# Building with AI — Part 2: Under the Hood
### Advanced syllabus — working draft

---

## The one-line

Part 1 taught students to build the **front** of an app with an AI builder.
Part 2 takes them **behind the dotted line** from the anatomy diagram — the
server, the database, the APIs, the cloud — and levels up their tooling from
browser copy-paste to agentic coding.

> **The organizing metaphor is already in the Part 1 deck.** Slide 5 draws
> `FRONT END | BACKEND (server ← database · API · secrets)` split by a dotted
> line. Part 1 lived on the **left**. Part 2 is the **right side of the line.**

---

## Why this shape (straight from the survey)

15 interested students, all beginner-to-intermediate, mentors excluded.

- **Top demand:** real backends & APIs **73%**, databases **67%**, auth **60%**,
  the Claude API **60%**, coding confidently without a builder **60%**.
- **The gap:** they can code a little and deploy a *frontend* (47%), but have
  **never built a backend (13%)**, **never touched cloud (0%)**, **never wrote
  a serverless function (0%)**.
- **The tooling:** 67% are still copy-pasting from the ChatGPT/Claude browser;
  only 40% have used an agentic tool like Claude Code.
- **The projects:** **4 of 7 teams are hardware/IoT** (sleep mask, dog
  heat-stroke sensor, zipper alarm, robotics tracking) that all need the same
  backbone: **device → cloud → app**. Their stated worries cluster on exactly
  that hand-off.

**Conclusion: teach the missing middle.** Everything they want, everything
they lack, and everything their products need points at the same layer.

---

## Who it's for · prerequisites

- Completed Part 1 (or equivalent comfort with an AI builder).
- Expected self-rated confidence ~2.5/5 — **we scaffold from there.** Not for
  absolute beginners; not a re-run of Part 1.
- Bring your team's product idea. The practice project builds a real backend
  slice for *your* product.

---

## Decisions to lock before finalizing *(your call — see notes at the end)*

1. **The vehicle** — Replit (continuity) vs. Claude Code + AWS (real tools) vs.
   **hybrid** *(recommended)*.
2. **Length & cadence** — how many sessions, how long.
3. **Grouping** — per-team vs. mixed; whether the 4 hardware teams get a
   dedicated "device → cloud" track.

---

## The arc (mirrors Part 1: I → II → III)

### I. Behind the line — the backend they've never built

| # | Module | What it covers | Why (demand · who needs it) |
|---|---|---|---|
| 1 | **The other half of the anatomy** | Recap the 5 parts from Part 1; today we build the **right** of the dotted line: server, database, API, secrets. | Anchors Part 2 in a diagram they already know. |
| 2 | **Data & databases** | What a database really is, modeling data (tables/collections, fields, relationships), storing & querying. Why *"just make it remember everything"* isn't a spec. | **67% want it · 0 feel comfortable.** Every team stores data. |
| 3 | **Backends & APIs** | Your own endpoints: request → server → response. What an API actually is, from both sides (calling one vs. building one). | **73% want it · 13% have built one.** The #1 gap. |
| 4 | **Authentication** | Real login (Google / managed auth), sessions, why you **never roll your own** password system. | **60% want it.** Several teams have real users. |
| 5 | **The pipeline** | The device/app → cloud → data → back-to-app loop. The backbone every hardware team is missing. | **The 4 IoT teams' explicit worry.** Sleep mask, sensor, alarm, tracking all live or die here. |

### II. Beyond the builder — real tools & real cloud

| # | Module | What it covers | Why (demand · who needs it) |
|---|---|---|---|
| 6 | **Claude Code** | From browser copy-paste to an agent working in your actual repo. Planning, one-task-at-a-time, reading the diff. (Extends Part 1's "new task / atomic tasks / read.") | **67% still copy-paste · only 40% on Claude Code · 47% want fluency.** |
| 7 | **Terminal & Git** | The command line without fear; version control, branches, checkpoints & rollback so you never lose a day's work. | Underpins everything; **60% used a terminal, only 40% use Git.** |
| 8 | **The cloud** | AWS basics — a function that runs in the cloud (Lambda), file/object storage (S3), a hosted database. Why "serverless." | **40% want cloud · 0% have touched it.** Powers the pipeline (module 5). |
| 9 | **Ship it for real** | Deploy a backend that stays up, secrets in production, and CI/CD — push to GitHub, it goes live. | **60% want to code confidently; 33% want DevOps.** Reuse the real `findthetrashcoder` GitHub→Hostinger pipeline as the worked example. |
| 10 | **AI inside your product** | Calling the Claude API from your own backend; agents & tools (function calling). **MCP as an elective** for the few who want it. | **Claude API 60% · agents 53% · MCP 27%.** |

### III. Practice — build the missing middle

Each team ships a **real backend slice** for their own product:

- a **database** that stores their core data,
- an **API** their app (or device) can call,
- **auth** so the right person sees the right data,
- wired to their **Part 1 frontend** (or their device).

**Stretch goals:** deploy it live · put one real **AI feature** in it · (hardware
teams) push a reading from a device through the cloud and back to the app.

---

## Demand → module coverage (nothing asked-for is dropped)

| Survey topic | Demand | Module |
|---|---|---|
| Building real backends & APIs | 73% | **3** |
| Databases | 67% | **2** |
| Authentication | 60% | **4** |
| The Claude API in apps | 60% | **10** |
| Coding confidently w/o a builder | 60% | **6, 7, 9** (throughline) |
| AI agents & tools | 53% | **10** |
| Claude Code / agentic coding | 47% | **6** |
| Cloud & serverless (AWS) | 40% | **8** |
| Computer vision & ML | 40% | *elective / office hours* |
| DevOps: Git, CI/CD | 33% | **7, 9** |
| MCP servers | 27% | **10** (elective) |

*Computer vision (40%) is the one strong ask that doesn't fit the backbone —
Shradha, Juhi, Ishayan, Raj want it. Options: a bonus module, an office-hours
track, or fold into module 10 for teams whose product needs it (none currently
core-depend on CV). Flagging rather than silently dropping.*

---

## Notes on the open decisions

**Vehicle — recommend hybrid.** Keep **Replit** as the familiar home base
(they already know its DB, Auth, Deployments, Secrets from Part 1 slides 8–11),
but drive it with **Claude Code** instead of copy-paste, and teach the real
concepts using Replit's managed pieces *first*, then show "here's how this works
on real cloud (AWS)" for depth — especially for the hardware teams who genuinely
need a cloud pipeline. Full AWS-from-scratch is likely too steep for a ~2.5/5
cohort; pure-Replit undersells the "beyond the builder" promise. Hybrid gets
both.

**Length.** The 10 modules split cleanly into **two blocks** (I: the backend
concepts; II: the tools & cloud) plus a practice build. Natural shapes: a
2-session intensive (concepts, then build), or a 3–4 session mini-course. Sizing
depends on session length — needs your call.

**Grouping & the hardware track.** 4 of 7 teams share the device→cloud→app need
(module 5 + 8). Worth considering a **dedicated hardware-pipeline breakout** so
the sleep-mask / sensor / alarm / robotics teams go deep on the hand-off while
the software teams (CRM, verification site, storefront) focus on
API+DB+auth+payments.

**Seat size.** 12 firm "yes" + 3 "maybe" = plan for **~15–18 seats.**

---

*Draft based on the Part 1 "Product Builder" deck (26 slides) and the Part 2
interest survey (15 students / 50 pool). Companion analysis:
`analysis/Building with AI Part 2 — Survey Insights.pdf`.*
