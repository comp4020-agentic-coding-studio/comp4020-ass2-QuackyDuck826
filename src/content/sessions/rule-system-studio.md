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

1. Attend the lecture on rule systems, then move into tutorial time.
2. Bring up the minimal game-loop structure from last week's state machine
   work: an update step that advances every piece of state by one tick,
   followed by a render step that only reads state and never changes it.
3. Design one new interaction of your own, not the lecture's example.
4. Add that interaction to the game-loop: give it its own state (or its own
   state machine) and change that state only in the update step, composing
   it alongside the state machines already in your project rather than
   replacing them.
5. Be ready to say where the line sits between "a system with rules" and "a
   scripted sequence" for your own example.
6. Note that this is the last purely-programming session before the course
   turns back to physical media.

## Afterwards

You leave with a rule system extended by something you designed yourself —
worth naming explicitly when the final project asks what you contributed
versus what came from the lecture's example.
