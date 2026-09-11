# Assignment 2: "Round Trip" — SlopU course-site build

## Context

Assignment 2 (COMP4020, 20% of course, due Mon 21 Sep 2026 noon) requires designing
and building a fictional university course website on the SlopU Astro starter
(`~/comp4020/comp4020-ass2-QuackyDuck826`). The fixed platform (branding, four
content collections, build pipeline) stays; everything else — the course itself —
is the student's design. Through conversation, the course concept was developed
into a studio-art course that is deliberately dual-audience: takeable by either a
3rd-year programming student or a 3rd-year art student, with neither locked out
early. That dual-audience requirement, plus the marking split (35% response to
brief, 45% legibility of process, 20% working artefact), is why the plan below is
specific about *ordering* and *scaffolding*, not just topic coverage.

## Course identity

- **Title:** *Round Trip: Sending Matter Through the Machine and Back*
- **Code:** `SLOP3446` — level 3 (keep the fixed `446` suffix; only the leading
  digit changed from the starter's `1`).
- **Thesis:** the course's throughline is the round trip a piece of matter takes
  through digital process and back — captured (digitized), transformed (computed
  or driven), and returned to physical form or effect. That's what unifies the
  three technique-pillars into one idea rather than three units.
- **Tags (1–3):** e.g. `physical computing`, `creative technology`, `studio art`.
- **Description (80–300 chars):** state what the semester makes (a personal
  toolkit for sending work across the physical/digital line and back), that it
  assumes prior depth in *either* physical/studio-art practice *or* programming
  — not both — and cross-trains whichever half a student doesn't already have,
  and that it runs as a studio/crit, not a lecture-and-spec course.

## Three technique pillars (taught in this order, per the dual-audience decision)

1. **Digitizing physical media** (scanning, photogrammetry, projection) — placed
   *first* because it's the most balanced on-ramp: art-proficient students lean
   on craft/eye, programming-proficient students lean on tool literacy, so
   neither is starting from the domain they already know, and neither is fully
   lost.
2. **Programming I: Creative Coding Foundations** — a small, artist-friendly
   creative-coding on-ramp (p5.js-style: visual, immediate feedback), pitched at
   the student cross-training into programming rather than a bare
   general-purpose-language intro.
3. **Arduino / physical computing** — sensors then actuators, building on the
   Programming I base.
4. **Programming II: Interactive Systems** — state machines, input handling,
   small game engines / rule systems — the deeper technical pillar, now that
   both audiences have a shared base.
5. **Complex physical media** (later) — vision/camera-based tracking, and
   fabrication / digital-back-to-physical (3D printing, laser cutting) — the
   "round trip" pillar completing the loop, once the full toolkit exists.

## Week-by-week (1–12, mid-semester break between weeks 6 and 7)

| Wk | Topic |
|----|---|
| 1 | Orientation + Digitizing Media I — scanning/photogrammetry. Studio pairs deliberately mix an art-proficient and a programming-proficient student, each mentoring the other's weaker half. |
| 2 | Digitizing Media I cont. — projection mapping |
| 3 | Programming I: Creative Coding Foundations — scripting/interactivity on-ramp |
| 4 | Arduino / Physical Computing I — sensors — **Studio Brief 1 due** |
| 5 | Arduino / Physical Computing II — actuators |
| 6 | Bridging — serial comms, sensor data → digital systems |
| *(break)* | mid-semester break |
| 7 | Programming II: Interactive Systems I — state machines, input handling — **Studio Brief 2 due** |
| 8 | Programming II: Interactive Systems II — small game engines / rule systems |
| 9 | Complex Physical Media I — vision/camera tracking — **Final Planning & Ideation due** |
| 10 | Complex Physical Media II — fabrication / digital-back-to-physical |
| 11 | Studio week — parallel "code clinic" / "make clinic" tracks so either audience can shore up their weaker half before the final |
| 12 | Final crit / grand show — **Final Project due** |

## Assessments (sum to 100%)

| # | Title | Week | Weight | Marking | Brief |
|---|---|---|---|---|---|
| 1 | Studio Brief 1 | 4 | 25% | weighted | combine digitizing + Programming I techniques (wks 1–3) |
| 2 | Studio Brief 2 | 7 (post-break) | 25% | weighted | combine everything up to the bridging week (wks 1–6) |
| 3 | Final Planning & Ideation | 9 | 5% | holistic | small — propose the final's theme + which ≥3 techniques it will combine, with rationale |
| 4 | Final Project | 12 | 45% | holistic | build it — ≥3 techniques, open/self-proposed theme |

Each brief's own `spec:` list states only checkable submission mechanics
(submitted by deadline, in stated format, names which techniques were combined);
whether the response is *good* is a crit judgement, matching `spec/README.md`'s
existing stance.

## Dual-audience scaffolding (make this explicit in content, not just ordering)

- Course description/prerequisites state the course assumes prior depth in
  *either* physical/studio-art practice *or* programming, not both — it
  cross-trains whichever half a student doesn't already have, using their
  existing strength as the foundation.
- Week 1 session content describes deliberately mixed-skill studio pairing
  (an art-proficient student paired with a programming-proficient one, each
  mentoring the other's weaker half).
- Week 3 (Programming I: Creative Coding Foundations) explicitly frames the
  tool choice as artist-friendly/low-barrier, for the student cross-training
  into programming.
- Week 11 is two parallel clinic tracks, not one lecture — call this out on the
  session page.

## File-level implementation order

1. **`src/course-config.ts`** — replace `courseMeta` (title, code, level, dates,
   description, tags) first; every other date validates against `startDate`/
   `endDate` here. `startDate`/`endDate` must span all 12 weeks' dates including
   the break gap.
2. **`src/content/people/*`** — replace `idris-fenn.md`/`marisol-quaye.md` (and
   their `.avif` photos — `check-evidence.ts` hashes these against the starter
   images, so both must change or be removed) with the real teaching team.
3. **`src/content/lectures/*`** — replace `week-01.md`/`week-02.md`, add the rest
   through week 12 per the table above. Keep `week-01`'s `slides:` link (the one
   required real deck).
4. **`src/decks/week-01.deck.mdx`** — rewrite with real week-1 content
   (`astromotion` Reveal-style, `---` slide breaks).
5. **`src/content/sessions/*`** — replace the two placeholders and add sessions
   aligned to studio/crit weeks (roughly 1, 4, 7, 9, 11, 12).
6. **`src/content/assessments/*`** — replace `assignment-1.md`/`final-project.md`,
   add the four assessments from the table above (slugs settled before wiring
   `related:` refs elsewhere).
7. **`src/pages/policies/index.mdx`** — late work/extensions, AI-assisted studio
   work stance, lab/hardware safety for electronics + fabrication weeks.
8. **`src/pages/index.astro`** — replace "what you'll do / who it's for" copy and
   hero image/alt text.
9. **`src/assets/images/card.png`, `hero-home.avif`** — replace or delete (a
   deleted starter image is an accepted design choice per `check-evidence.ts`).
10. **`CLAUDE.md`** — write the student's own harness rules (ships empty by
    design; this is itself marked).
11. **`spec/course-shape.test.ts`** (new) — following the pattern in
    `spec/data-integrity.test.ts` (reads `dist/api/index.json`):
    - assessment weights sum to exactly 100
    - at least one lecture's `meta.slides` resolves to a built
      `dist/decks/<slug>/index.html`
    - course code still matches `/SLOP\d446$/` (regression guard on the fixed
      suffix)

## Verification

- `pnpm check` (typecheck + build + `spec/*.test.ts`, including the new
  `course-shape.test.ts`) must pass.
- `pnpm check:evidence` must pass: no `STARTER_CONTENT` markers left in `src/`,
  no starter image hashes remaining, `PROCESS.md` has its template comment gone
  and cites real commits, `CLAUDE.md` exists (no `reflections/` entry required —
  `comp4020-ass2-*` repos expect none).
- Manually load the built site at both marking viewports (desktop + phone) and
  check the home page, a few non-adjacent week pages, an assessment page, the
  deck, and the policies page — the marker's actual review pattern per the
  assignment brief.
