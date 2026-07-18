# Conversation log — building the Part 2 Google Form

A record of how the advanced-session interest survey came together.

---

## 1. The request

**Eddy:** Class went well, there's a part 2 for more advanced users. Draft a
Google Form that asks students what they're versed in — only the ones
interested in an advanced class should answer, not everyone. Ask things like:
have they made a server, consumed an API, used Claude Code / Cursor / Codex,
etc. Reach into my `/Projects` and base the questions on what I actually use
and am able to teach — AWS, serverless, and so on.

**Kai:** Scanned ~60 projects to ground the questions in the real teachable
stack:

- **Frontend:** React + Vite (dominant), TypeScript, Tailwind, one Next
- **Backends:** AWS Lambda via the Serverless Framework (`boulder-grid`,
  `dasicasports`, `eddymx`), API Gateway HTTP APIs
- **AWS services actually used:** DynamoDB (heavy), S3 + presigned uploads,
  Cognito (real auth), SES (email), Lambda, RDS Data, IAM/STS
- **AI engineering:** Anthropic SDK, a real MCP server (`gworkspace-mcp` —
  Gmail/Calendar over stdio), Claude Code everywhere (9 CLAUDE.md configs)
- **Also teachable:** Python, YOLO computer vision, Git/GitHub, the
  CI/CD-to-Hostinger pipeline
- One Supabase project (SQL vs. DynamoDB contrast)

Delivered two files in `part2-survey/`:

- `part2-advanced-survey.md` — the full form as a reviewable spec
- `create-part2-survey.gs` — a Google Apps Script that builds the real form
  in one run (paste into script.google.com → Run → form appears in Drive)

Form flow: an **interest gate** first (Yes/Maybe continue, No jumps to submit),
then a "select everything you've actually done" checklist, an AI-tools
checklist, a self-rating grid, a "what you want to learn" checklist, and
free-text — all grounded in the real stack.

---

## 2. "What deployment type do I choose?"

**Eddy:** *(screenshot of the Apps Script Configuration / Deploy menu: Web app,
API Executable, Add-on, Library)* What deployment type do I choose?

**Kai:** None of them. That menu deploys the *script itself* as a service. Our
script isn't a service — it's a one-off function that creates a Form in your
Drive. Don't deploy it, **run** it:

1. Close the Deploy menu.
2. In the toolbar, select `createPart2Survey` in the function dropdown.
3. Click ▶ Run.
4. Authorize when prompted (Advanced → Go to project → Allow — it's your own
   unverified script).
5. Open View → Logs to get the edit + published URLs. The form also lands in
   your Drive.

**Run, don't Deploy.**

---

## 3. The `INTERNAL` error

**Eddy:**
```
5:59:09 PM  Notice  Execution started
5:59:09 PM  Error   We're sorry, there was an unexpected error while creating
                    the Cloud Platform project. Error code INTERNAL.
```

**Kai:** That's a Google-side error, not the script — Apps Script failing to
auto-create the hidden Cloud Platform project it needs for first-run
authorization. Nothing to fix in the code. In order:

1. **Just run it again** — `INTERNAL` is usually transient.
2. **Reload the script.google.com tab, run again.**
3. **Check the account.** If it's a school/Workspace account, the org may block
   auto-creating GCP projects — switch to a **personal @gmail.com** and paste
   the script there. Most common real cause.
4. If it still fails on personal, you may have hit the GCP project limit (rare).

No Deploy or Cloud Console setup needed — a personal Gmail account almost
always clears it. Fallback offered: build the ~11 questions by hand from the
spec (a 5-minute job).

---

## 4. Reframe for pre-build startup teams

**Eddy:** They haven't built anything, but they have an assigned number and are
part of a startup, planning on building something. Reiterate based on these
notes: what they want to build, ID number, and team number. Team number is 1–7.

**Kai:** Reframed the survey — students are pre-build startup teams, not people
with finished Part 1 projects:

- **Identity section** now captures the three requested fields: name, required
  **assigned ID number**, and **team number** as a 1–7 dropdown (required).
- **Removed** "What did you build in Part 1?" — replaced with a required
  **"What is your team planning to build?"** (their startup idea, rough is
  fine).
- **Added** "What part of building it worries you most, or you have no idea how
  to do yet?" — surfaces exactly which Part 2 topics each team needs.
- **Added** "None of these yet — I'm just starting out" to the skills checklist,
  so pre-build students aren't forced to tick something.

Result: each response ties a **team (1–7) + ID** to what they want to build and
where they feel stuck — so the advanced session can be grouped by team need,
not just individual curiosity.

---

## Files produced

| File | Purpose |
|---|---|
| `part2-advanced-survey.md` | The form as a readable spec |
| `create-part2-survey.gs` | Apps Script that builds the real form |
| `conversation.md` | This log |
