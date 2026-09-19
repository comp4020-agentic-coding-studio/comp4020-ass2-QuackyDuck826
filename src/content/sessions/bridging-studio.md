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

1. Attend the lecture on serial comms, then move into tutorial time.
2. Set a baud rate on the microcontroller (`Serial.begin(9600)`, or a higher
   rate if you need more throughput) and match it exactly on the receiving
   code — a tutor is on hand for the baud-rate and framing errors that
   account for most of what goes wrong here.
3. Get a sensor reading off the microcontroller over USB, printed as plain
   comma- or newline-delimited text (`Serial.println(value)`) so the
   receiving code can parse it with nothing more than a split on that
   delimiter.
4. Feed that serial data into either your week 3 creative-coding sketch or
   the digitizing pipeline from weeks 1–2.
5. Close the loop by sending an effect back out to the board.
6. Note that this is the last session before the break.

## Afterwards

You leave with a complete physical-input-through-code-to-effect loop.
Nothing is due over the break, but Studio Brief 2 (due week 7, first week
back) draws on everything from weeks 1–6, including this session.
