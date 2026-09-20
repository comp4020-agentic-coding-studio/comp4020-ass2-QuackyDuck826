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

## Visual palette

Every flat-colour image asset (`src/assets/banners/*.svg`,
`src/assets/avatars/*.svg`, `src/decks/assets/**/*.svg`) draws only from this
closed palette. Do not hand-pick a new hex — derive it from a base colour
below using the mix formula, and add the derived stop here before using it.

Base colours (3 come from the fixed platform's `astro-theme-slop/slop.css`;
`background` and `accent` are conventions this repo introduced on top of it):

| Name       | Hex       | Source                                  |
| ---------- | --------- | ---------------------------------------- |
| primary    | `#b97d1c` | platform (`--at-primary`)                |
| secondary  | `#8a5c13` | platform (`--at-secondary`)               |
| tertiary   | `#6b6154` | platform (`--at-tertiary`)                |
| background | `#f4ead9` | repo convention (warm cream page fill)    |
| accent     | `#1c58b9` | repo convention (true complement of primary, same S/L, for pop/contrast) |

Derivation formula — `tint(base, t)` = mix `base` with white by fraction `t`;
`shade(base, s)` = mix `base` with black by fraction `s`:

| Name                | Formula              | Hex       | Use                                    |
| ------------------- | -------------------- | --------- | --------------------------------------- |
| primary-tint-60     | tint(primary, .6)    | `#e3cba4` | light gold highlight (physical/analog)  |
| primary-tint-80     | tint(primary, .8)    | `#f0e2cd` | soft badge/pot fill                     |
| secondary-shade-35  | shade(secondary, .35)| `#5a3c0c` | mid ink (line work, shadow)             |
| secondary-shade-70  | shade(secondary, .7) | `#291c06` | near-black ink (outlines)               |
| accent-tint-70      | tint(accent, .7)     | `#bbcdea` | pale blue highlight (digital/signal); avatar pot fill |
| accent-shade-30     | shade(accent, .3)    | `#143e82` | deep blue ink                           |

`#ffffff` stays available unmixed as a neutral optical highlight (opacity-
modulated glints), same as it already was before the accent existed.

Convention for illustrations depicting a technique: gold-family highlights
(`primary`, `primary-tint-*`) read as physical/analog; accent-family
highlights (`accent`, `accent-tint-*`) read as digital/signal (screens,
sensors, projected light, LEDs, tracking). Pick the family that matches what
the illustration is actually showing, not by default.

## Process

- Run `pnpm check` after any content or config change before calling it
  done; run `pnpm check:evidence` before treating the repo as submittable.
- Don't hand-edit anything under `dist/` — it's generated.
- Prefer editing an existing content file over adding a new one-off page
  outside the four collections, unless the course genuinely needs a
  structure the collections don't have.
- stage commits often in places where it makes sense, push as you go.
