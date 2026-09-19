---
title: "Fabrication studio"
description:
  Supervised 3D printing and laser cutting — closing the loop from digital
  back to physical
week: 10
date: 2027-05-03
teachers:
  - marisol-quaye
spec:
  - a file is checked by a tutor and run on the printer or laser cutter
  - you can name one constraint (tolerance or material behaviour) you
    designed around rather than discovered after the job ran
  - you leave with a physical part, not just a digital model of one
related:
  - lectures/week-10
---

## Before the session

Bring a digital model or a computed decision ready to fabricate — from your
tracking, rule-system or sensor work — and know whether it needs the printer
or the laser cutter.

## In the session

1. **Attend the lecture on 3D printing and laser cutting, then move into
   tutorial time.** This week closes the round trip's other digital-to-
   physical leg — where week 1's scan turned matter into data, this session
   turns data back into matter — and the lecture's job is to explain what
   each machine is actually good at before you commit a design to either
   one.
2. **Confirm whether your digital model or computed decision needs the
   printer or the laser cutter.** The two machines solve different problems
   and a design suited to one is often unusable on the other: a laser
   cutter cuts a 2D path through flat sheet material, so it wants a design
   that's genuinely flat or built from flat pieces that fold or slot
   together, while a 3D printer builds up an actual solid volume layer by
   layer, so it wants a design that only makes sense as a 3D shape in the
   first place. Deciding this before you open the file with the tutor saves
   a session lost to redesigning on the spot.
3. **Have a tutor check your file before any job starts.** The fabrication
   lab runs supervised only, per the [lab safety policy](/policies/) — both
   machines can do real harm if a file is wrong or a setting is off, so
   this isn't a formality to rush through, it's the actual gate on running
   anything.
4. **Adjust your design for the machine's constraint the tutor flags.** 3D
   printing and laser cutting fail in different ways, and the point of this
   step is catching the failure on screen rather than discovering it after
   a job has already run and consumed material:
   - **A laser cut** needs its cut and score lines separated onto their own
     layers or colours, since the machine treats each differently, and
     needs a kerf allowance built into any slotted joint — the beam removes
     a sliver of material as it cuts, so a slot cut to its nominal width
     comes out too wide unless you've compensated for that loss up front.
   - **A print** needs enough wall thickness to hold its own shape, plus
     the right orientation and supports for any overhang, or it warps as it
     cools or collapses mid-print before the job even finishes.
5. **Run the checked file on the printer or laser cutter.** Stay for at
   least the first pass or first layer rather than walking away once the
   job starts — it's the point where a wrong setting is cheapest to catch,
   before more time and material go into a job that was already going
   wrong.
6. **Collect the fabricated part.** Check it against the digital model
   before calling the job finished: does a slot actually fit the way it did
   on screen, does a printed wall need support material cleaned off it —
   the constraint you designed around in step 4 is the one you should be
   able to point to here as having worked.

## Afterwards

You leave with a fabricated part — the physical end of a pipeline that
started with tracking, a rule system, or a sensor. Week 11's clinic is your
last chance to shore up whichever half of the toolkit this pipeline leaned
on less, before the final.
