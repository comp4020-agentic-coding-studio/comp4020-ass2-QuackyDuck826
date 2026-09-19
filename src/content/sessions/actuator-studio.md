---
title: "Actuator studio"
description:
  Wiring a motor, servo, LED or speaker to your board and closing the loop
  with last week's sensor
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
spec:
  - a motor, servo, LED or speaker responds to code running on your board
  - it's driven by the sensor you wired in week 4, not a hard-coded value
  - you can name the one power-supply decision you had to make
related:
  - lectures/week-05
---

## Before the session

Bring the sensor and board from week 4, still wired and working.

## In the session

1. Attend the lecture on actuators, then move into tutorial time.
2. Pick a motor, servo, LED or speaker and wire it to your own board: an LED
   needs a current-limiting resistor in series, a small DC or vibration
   motor needs a transistor or H-bridge driver rather than a direct pin (the
   board can't supply that current on its own), a servo takes power, ground
   and a single PWM-capable signal pin, and a piezo speaker can run straight
   off a digital pin through a small resistor.
3. Reconnect the sensor you wired in week 4 so it's on the same board as the
   new actuator.
4. Before driving anything that draws more current than the board itself can
   supply, get a tutor to check your wiring — power supply is the part that
   catches people out.
5. Wire the actuator so it's driven by the sensor reading rather than a
   hard-coded value, closing a minimal input-to-output loop.

## Afterwards

You leave with a sensor-to-actuator loop running on your own board — the
minimal version of the physical-computing pillar, and the base week 6's
bridging session connects to the digitizing and programming pillars.
