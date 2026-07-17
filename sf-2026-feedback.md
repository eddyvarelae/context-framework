# SF 2026 — Feedback & revision inputs

Two sources feeding the SF 2026 edition of "Building with AI": feedback from the
online 2026 session (captured at the end of the v3 PDF) and a working list from
mentors with deep Replit experience.

---

## Source 1 — Online 2026 session feedback

- AI expenses went over $100 USD
- Context rot: conversations accumulate unuseful info; new chats are needed
- An architecture file is needed
- Students need better prompting lessons
- Error messages in student apps are too generic on the UI

## Source 2 — Replit & vibecoding mentor feedback

- **New tasks:** always create a new task to save on context
- **Prompting hygiene:** improve prompting, read the replies — we need to teach them to prompt
- **Explain backend and frontend:** DB, more frontend (artifacts of Replit)
- **Explain context:** start from the very basics of what AI needs
- **Explain ENV vars:** and cybersecurity in general — do's and don'ts of putting
  data into the chat, plus the infrastructure side
- **Establish budgets:** suggest buying the $100 USD monthly plan
- **How to collaborate correctly:** preference is one coder per team; if there are
  multiple programmers, teach the correct way to use Replit together
- **Launch blockers:** Stripe configuration pending, domain config, etc.
- **Replit walkthrough:** two one-shotters — one with good practices, one with bad
  practices — to show the difference clearly; then a part 2 with another mentor
  (a second Replit collab, so students see two vibe coders in action in real time)

---

## Where the two sources overlap

| Session feedback | Mentor list | Implication |
|---|---|---|
| Expenses went over $100 | Establish budgets ($100/mo plan) | Budget guidance belongs in the guide, not just verbal advice |
| Context rot, new chats needed | New tasks to save on context | "Start a new task per feature" should become a rule in the handout |
| Better prompting lessons | Prompting hygiene, read the replies | Needs both handout rules and live teaching time |
| Architecture file needed | Explain backend/frontend, DB | An architecture/overview artifact should be part of the day-one setup |
| Generic error messages | — | Candidate for the "rules people commonly need" list in Rule 2 |

## Handout vs. live session

Not everything belongs in the one-page guide. Rough split:

**Guide (handout) changes:**
- New rule: one task per feature — start fresh tasks to avoid context rot
- Budget section: expected costs, the $100/mo plan recommendation
- Extend the security block: ENV vars, never paste secrets/personal data into chat
- Add "ask for an architecture file" to the day-one first message
- Add error-message quality to the common-rules examples
- Reading the replies as part of the loop (don't fire-and-forget prompts)

**Live session (curriculum, not handout):**
- Context-from-basics explainer (what AI actually needs and why)
- Backend/frontend/DB explainer using Replit's artifacts
- Two one-shot walkthroughs: good practices vs. bad practices
- Part 2: two-mentor live Replit collab demo
- Collaboration ground rules: one coder per team preferred; correct multi-coder workflow otherwise

**Logistics / checklist material:**
- Launch-blocker checklist: Stripe configuration, domain config, etc.
