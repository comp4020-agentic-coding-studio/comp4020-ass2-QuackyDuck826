---
title: "Programming II: Interactive Systems II — rule systems"
description:
  Small game engines and rule systems — composing state machines into
  something that behaves like a system
week: 8
date: 2027-04-19
teachers:
  - idris-fenn
related:
  - sessions/rule-system-studio
---

State machines from last week compose into something larger: a small rule
system or game-engine loop, where several pieces of state interact under a
consistent set of rules. This is the last purely-programming week before the
course turns back to physical media for the round trip's second half.

## Outline

- a minimal game-loop structure: update, then render, on every tick
- composing several small state machines instead of one large one
- where the line sits between "a system with rules" and "a scripted
  sequence" — and why the difference matters for your final project
- studio time: extend a rule system with one new interaction of your own
