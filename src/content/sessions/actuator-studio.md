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

1. **Attend the lecture on actuators, then move into tutorial time.** Last
   week's board only read the world through a sensor; this week it writes
   back out to it, so the tutorial time is built around getting one motor,
   servo, LED or speaker moving under code before you worry about wiring it
   to anything upstream.
2. **Pick a motor, servo, LED or speaker and wire it to your own board.**
   Each of these actuators has its own wiring requirement, and skipping it
   is the fastest way to lose a part — or a session — to smoke rather than
   motion:
   - **An LED** needs a current-limiting resistor in series. Without one it
     draws as much current as the pin will give it and burns out in
     seconds — the resistor is cheap insurance, not an optional extra.
   - **A small DC or vibration motor** needs a transistor or H-bridge
     driver rather than a direct pin connection, because a microcontroller
     pin can only supply a few tens of milliamps and a motor wants far
     more. The driver lets the board switch a separate, higher-current
     supply instead of trying to push that current through itself.
   - **A servo** takes power, ground and a single PWM-capable signal pin —
     the width of the pulse on that one pin tells the servo which angle to
     hold, so once it's wired correctly the code side is close to one line.
   - **A piezo speaker** can run straight off a digital pin through a small
     resistor, with no driver needed at all, which makes it the quickest
     actuator here to get making a sound if you want an early win.
3. **Reconnect the sensor you wired in week 4 so it's on the same board as
   the new actuator.** You're not starting a new circuit — you're adding an
   output to last week's input on the same board, which is what makes the
   loop in step 5 possible. If the sensor stopped working over the week,
   fix that connection now, before the actuator is also wired, so you're
   only debugging one new thing at a time.
4. **Before driving anything that draws more current than the board can
   supply, get a tutor to check your wiring.** Power supply is the part
   that catches people out: a motor or a bright LED wants more current than
   the board's regulator is rated for, and a driver wired backwards, or a
   ground shared incorrectly between the board's supply and the actuator's
   supply, is a fast way to damage a board. A quick check before power goes
   on costs a minute and saves a rebuild.
5. **Wire the actuator so it's driven by the sensor reading rather than a
   hard-coded value, closing a minimal input-to-output loop.** A fixed
   value on the actuator only proves the wiring works; reading the sensor
   value in the same sketch and mapping it onto the actuator's output —
   brightness, angle, speed or pitch — is what turns two separately-working
   parts into the physical-computing loop the spec actually asks for.

## Afterwards

You leave with a sensor-to-actuator loop running on your own board — the
minimal version of the physical-computing pillar, and the base week 6's
bridging session connects to the digitizing and programming pillars.
