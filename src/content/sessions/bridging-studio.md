---
title: "Bridging studio"
description:
  Getting serial data off the board and into the creative-coding or
  digitizing pipeline before the break
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
spec:
  - a sensor reading arrives over serial in either your week 3 sketch or a
    digitizing script
  - you can name your baud rate and one thing that goes wrong if it's
    mismatched
  - the full loop runs — physical input, through the board, into code, back
    out to an effect
related:
  - lectures/week-06
---

## Before the session

Bring the sensor-to-actuator loop from week 5, still working.

## In the session

1. **Attend the lecture on serial comms, then move into tutorial time.**
   Serial is the plumbing connecting the two pillars taught so far —
   physical computing on the microcontroller, and the code running on your
   laptop — and today's tutorial time is about getting one reading through
   that pipe before you worry about what happens to it on the other end.
2. **Set a baud rate on the microcontroller and match it exactly on the
   receiving code.** The baud rate is the speed both ends agree to talk at
   — `Serial.begin(9600)` is a safe default, or a higher rate if you need
   more throughput than a single sensor value per tick — and it has to
   match on both sides, or the connection doesn't just slow down, it
   produces garbled characters or nothing at all. A tutor is on hand for
   exactly this: baud-rate mismatches and framing errors, where the
   receiving end starts reading mid-message instead of at its start,
   account for most of what goes wrong in this step.
3. **Get a sensor reading off the microcontroller over USB, printed as
   plain comma- or newline-delimited text.** `Serial.println(value)` is
   enough — keeping the format this plain means the receiving code can
   parse it with nothing more than a split on that delimiter, rather than
   you writing a small parser before you've even proven the connection
   works. Resist the temptation to send anything more structured until this
   simplest version is reliable.
4. **Feed that serial data into either your week 3 creative-coding sketch
   or the digitizing pipeline from weeks 1–2.** This is the moment the
   sensor stops being an isolated circuit and starts driving the code
   pillar you already built — a value that used to come from the mouse or
   the clock in week 3 now comes from the physical world instead, with the
   rest of that sketch's logic untouched.
5. **Close the loop by sending an effect back out to the board.** Reading a
   sensor into code is only half the round trip; writing something back —
   even just a computed value into an LED or a motor from week 5's actuator
   work — is what makes this a genuine loop rather than a one-way stream of
   data disappearing into your laptop.
6. **Note that this is the last session before the break.** Nothing new
   starts before week 7, so treat any gap between what's on your board and
   what the spec asks for as unfinished business to close out now rather
   than later — Studio Brief 2, due in the first week back, draws on
   everything from weeks 1–6, including this loop.

## Afterwards

You leave with a complete physical-input-through-code-to-effect loop.
Nothing is due over the break, but Studio Brief 2 (due week 7, first week
back) draws on everything from weeks 1–6, including this session.
