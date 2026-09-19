---
title: "Arduino / Physical Computing II — actuators"
description:
  Writing back out to the physical world — motors, light and sound driven
  by code
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
slides: /decks/week-05/
related:
  - sessions/actuator-studio
---

Last week the microcontroller read the world; this week it acts on it. Motors,
servos, LEDs and small speakers turn a computed decision back into physical
motion, light or sound — the second half of a round trip that starts with a
sensor and ends with an effect.

## Outline

- driving a motor or servo from code, and why power supply is its own problem
- combining a sensor from last week with an actuator this week: a minimal
  input-to-output loop
- what happens when the loop runs continuously rather than once — a preview
  of the bridging week
- studio time: get a sensor-to-actuator loop running on your own board
