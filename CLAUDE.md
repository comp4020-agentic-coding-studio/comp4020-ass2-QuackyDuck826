# Harness rules for this repo

This is the SLOP3446 "Round Trip" course site. The platform (branding,
collections, build pipeline) is fixed — see `README.md`. Everything under
`src/content/`, `src/course-config.ts`, `src/pages/`, `src/decks/` and this
file is the course itself, and these are the rules I hold the agent to while
building it.

## Content

- Never leave a `STARTER_CONTENT` marker or generic placeholder prose
  ("replace this page") in a file that ships. If a file still carries one,
  it isn't done.
- Every date in `sessions`, `lectures` and `assessments` frontmatter must
  fall within `courseMeta.startDate`/`endDate` in `src/course-config.ts`.
  Changing the semester dates means checking every dated file, not just the
  ones that prompted the change.
- Assessment `weight` values must sum to exactly 100 across all
  `src/content/assessments/*` files. Check the sum by hand after adding,
  removing, or reweighting an assessment — don't assume it still holds.
- A `related:` ref is `<collection>/<slug>`; the build fails on one that
  doesn't resolve. Before renaming or deleting a content file, grep
  `src/content` for its slug and fix every reference, not just the file
  itself.
- Keep the dual-audience framing explicit, not just implied by ordering: it
  belongs in the course description, week 1 (studio pairing), week 3
  (creative-coding on-ramp framed as low-barrier), and week 11 (two clinic
  tracks named as such). Don't quietly drop this language when editing those
  pages.
- The home page and people photos are image-free by deliberate choice, not
  an oversight — don't re-add a hero image or portrait photo without a real
  reason to.

## Process

- Run `pnpm check` after any content or config change before calling it
  done; run `pnpm check:evidence` before treating the repo as submittable.
- Don't hand-edit anything under `dist/` — it's generated.
- Prefer editing an existing content file over adding a new one-off page
  outside the four collections, unless the course genuinely needs a
  structure the collections don't have.
