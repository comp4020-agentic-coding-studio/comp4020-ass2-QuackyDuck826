---
title: "Rule system studio"
description:
  Extending a small rule system or game-loop with one interaction of your own
week: 8
date: 2027-04-19
teachers:
  - idris-fenn
spec:
  - a game-loop or rule system runs with an update step and a render step,
    on every tick
  - it includes at least one interaction you added yourself, not from the
    lecture's example
  - you can say where the line sits between "a system with rules" and "a
    scripted sequence" for your own example
related:
  - lectures/week-08
---

## Before the session

Bring the state machine from week 7, running.

## In the session

1. **Attend the lecture on rule systems, then move into tutorial time.**
   Today's material composes last week's individual state machines into
   something bigger — a system where several pieces of state interact
   under a consistent set of rules — and the tutorial is where you build a
   small piece of that composition yourself, rather than just watching the
   lecture's example run.
2. **Bring up the minimal game-loop structure from last week's state
   machine work.** An update step advances every piece of state by one
   tick, followed by a render step that only reads state and never changes
   it. Keeping those two strictly separate is what keeps the system honest
   as it grows: if rendering code is also allowed to change state, you get
   behaviour that depends on drawing order or frame timing rather than on
   the rules you actually wrote, and bugs like that are miserable to track
   down once more than one interaction is running.
3. **Design one new interaction of your own, not the lecture's example.**
   Pick something small enough to build this session but that genuinely
   changes how two pieces of state affect each other — a collision, a
   trigger, a condition that only matters when two other things are both
   true. It doesn't need to be elaborate; it needs to be yours, because
   it's the concrete thing you'll point to later when asked what you
   contributed versus what came from the lecture's example.
4. **Add that interaction to the game-loop: give it its own state (or its
   own state machine), and change that state only in the update step.**
   Compose it alongside the state machines already in your project rather
   than replacing them — the whole point of this week's material is that a
   rule system is built from several small, independent pieces of state
   that interact, not from one larger state machine rewritten to do more.
   If your new interaction needs to reach into another state machine's
   internals to work, that's usually a sign it should be reading that
   state rather than changing it directly.
5. **Be ready to say where the line sits between "a system with rules" and
   "a scripted sequence" for your own example.** A scripted sequence plays
   back a fixed order of events regardless of what the rest of the state is
   doing; a system with rules can produce outcomes and combinations you
   didn't explicitly author, because the rules interact rather than just
   play back in order. Look at your own interaction and be honest about
   which side of that line it actually sits on — it's a more useful answer
   than a confident one that doesn't hold up.
6. **Note that this is the last purely-programming session before the
   course turns back to physical media.** From week 9 the studios lean back
   into tracking and fabrication, the physical half of the round trip, so
   if there's a programming gap you know you're carrying, this is the last
   dedicated tutorial time to close it before it has to sit alongside
   physical work as well.

## Afterwards

You leave with a rule system extended by something you designed yourself —
worth naming explicitly when the final project asks what you contributed
versus what came from the lecture's example.
