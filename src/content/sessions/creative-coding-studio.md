---
title: "Creative coding studio"
description:
  Building a p5.js sketch by hand — the art half's on-ramp, the programming
  half's chance to probe the library's limits
week: 3
date: 2027-03-08
teachers:
  - idris-fenn
spec:
  - a sketch runs with a canvas, at least one shape, and a draw loop
  - mouse position or time drives something visible in it
  - you can say which line of your studio pair's code you didn't write, and
    what it does
related:
  - lectures/week-03
---

## Before the session

Nothing to prepare — just a laptop with the course's coding environment
installed and checked back in week 1.

## In the session

1. **Move into tutorial time straight after the lecture's p5.js on-ramp.**
   The lecture deliberately stays visual and immediate — draw something,
   change a number, see the change in the same second — and tutorial time
   is where that turns from a demonstration into your own sketch. Both
   halves of every studio pair build a sketch this week; what changes is
   what each of you is actually learning from doing it.
2. **If you're the art-proficient half of your studio pair, build the
   sketch from scratch.** Set up a canvas, draw at least one shape inside
   `setup()`/`draw()`, and drive something visible in it — position, size
   or colour — off the mouse or the clock. Go slow and lean on what you
   already know about composition and colour to decide what that shape
   does, rather than reaching for memorised syntax you don't have yet: a
   sketch that makes one deliberate visual choice well is a better outcome
   this week than one that copies more code without understanding it.
3. **Lean on your pair for mentoring rather than having them type the
   sketch for you.** It's faster in the moment to let your
   programming-proficient pair fix a broken line themselves, but that
   trades away exactly the skill this week is meant to build in you — ask
   them to point at what's wrong and explain it, and type the fix yourself.
4. **If you're the programming-proficient half, build your own sketch too —
   but treat it as scouting p5.js rather than a loop-writing exercise.** The
   `for` loop and the conditional aren't new to you, so today isn't really
   about them. Instead, push past the on-ramp shapes into whatever p5.js
   gives you that a general-purpose language doesn't hand you for free:
   an array of objects animated in the draw loop, a `p5.Vector` for motion,
   `noise()` for organic movement instead of pure randomness, or the
   `WEBGL` renderer for a first 3D primitive. The point is finding out
   where the library's conveniences stop and you'd have to write the maths
   yourself, not producing something polished.
5. **Mentor your pair alongside building your own sketch, not instead of
   it.** When your pair gets stuck, point at what's wrong and explain it
   rather than fixing it for them — and expect to be asked to walk through
   a line of your own sketch too; being able to explain a line of your
   pair's code you didn't write yourself is exactly what this week is
   checking for, in both directions.
6. **Note that the depth on this material comes back for you in
   Programming II (week 7).** Today's p5.js exploration is deliberately
   low-stakes compared to what's ahead — the real technical stretch for you
   is state machines and rule systems later in the course, so don't mistake
   today's easy pace for the level the course expects of you overall.

## Afterwards

Everyone leaves with a working sketch — a canvas, a draw loop, and
interactivity driven by mouse position or time — to extend into Studio Brief
1 (due week 4) alongside the digitizing work from weeks 1–2.
