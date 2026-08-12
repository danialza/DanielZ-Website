---
title: "Article: AEGIS Age-Aware Safe-Action Layer"
description: "Companion page for AEGIS, an age-aware safe-action projection that combines RGB-D sensing with asynchronous vision-language monitoring on a Niryo NED3 Pro."
publishDate: "2026-08-12"
coverImage:
  src: "./img/aegis-age-aware-safe-action-cover-v2.webp"
  alt: "AEGIS age-aware safe-action layer deployed on a Niryo NED3 Pro with a fixed Intel RealSense camera"
tags: ["robotics", "python", "computer-vision"]
---

## Article

**AEGIS: An Age-Aware, Evidence-Guarded Safe-Action Layer Fusing RGB-D Sensing with Vision-Language Monitoring for Collision-Aware Robotic Manipulation**

Danial Zafaranchizadeh Moghaddam¹, Maryam Banitalebi Dehkordi¹, Hamed Rahimi Nohooji² and Abolfazl Zaraki¹\*

¹ School of Physics, Engineering and Computer Science (SPECS), University of Hertfordshire, Hatfield AL10 9AB, UK  
² Interdisciplinary Centre for Security, Reliability and Trust (SnT), University of Luxembourg, 1855 Luxembourg  
\* Corresponding author: `a.zaraki@herts.ac.uk`

**Status:** Submitted to *Sensors*, Sensing and Imaging section.

**DOI:** To be added  
**Journal page:** To be added  
**Paper PDF:** To be added

## One-Line Abstract

A safety margin derived from a vision-language verdict is only as valid as that verdict is recent, and AEGIS is the first safe-action projection whose hold radius is an explicit function of the age of the evidence that set it.

## Project Summary

AEGIS is evaluated on a low-cost Niryo NED3 Pro performing pick-and-place around an obstacle, using one fixed Intel RealSense D435i and no external safety scanner or motion-capture system. Its geometric layer checks each commanded step against eight forward-kinematics-coupled constraints at control rate and projects an unsafe proposal to the closest admissible command. Above it, an asynchronous on-device vision-language monitor decides whether the tracked intruder is a person or an object. The semantic verdict arrives only every few hundred milliseconds and becomes stale between updates. Trusting it without regard to age can leave an intermittently incorrect margin, while ignoring semantics forces a permanently conservative response. AEGIS resolves this by relaxing the semantic belief towards a cautious prior as its evidence ages, then converting that belief into a changing hold radius. The result is a policy-agnostic layer that can route, hold or modify a command without retraining the planner behind it.

## The Idea in One Figure

![AEGIS control loop from RGB-D sensing to safe-action projection](./img/aegis-control-loop.webp)

*The end-to-end loop couples calibrated sensing, timestamped semantic evidence, age-aware belief and geometric command projection.*

- **Sensing:** the fixed RGB-D camera localises the intruder in the robot base frame.
- **Semantic evidence:** the asynchronous monitor attaches a human-or-object verdict and timestamp to the same scene.
- **Age-aware margin:** the belief decays towards a cautious prior as the verdict ages, causing the hold radius to widen.
- **Safe action:** the geometric layer selects the closest admissible command, routes around the intruder or holds when no admissible route remains.

In words, the hold radius is the detected footprint plus mechanical clearance, the distance the hazard can cover during the robot's reaction, a semantic term scaled by the belief that the intruder is human and an epistemic buffer that never fully trusts a single verdict.

## Headline Results

| Quantity | Result |
| --- | --- |
| Per-step unsafe cost, sampling-based planner | 0.138 → 0.0086 (16×), Wilcoxon *p* = 1×10⁻⁶, *n* = 36 paired episodes |
| Task success, same comparison | 65% → 92%, exact McNemar *p* = 0.007 |
| Physical AEGIS runs | minimum moving clearance +19.7 mm, never negative |
| Physical trust-latest baseline | one run entered the detected footprint at −5.6 mm |
| Physical worst-case baseline | never commanded motion while a hazard was tracked |
| On-device semantic verdict | FastVLM-0.5B, 0.236 s mean, 0.238 s p95, 20 timed queries |
| Image-to-table calibration | 0.92 mm mean fitting residual over nine points |
| Hand-to-freeze reaction, hosted backend | 1.73 s mean, 2.67 s worst, *n* = 5 intrusions |

Task success rises because the projection removes boundary- and obstacle-grazing commands that were also causing the planner to fail, so safety and task performance move together rather than trading off.

## Visual Summary

**Laboratory rig**

![Niryo NED3 Pro, task object and fixed Intel RealSense camera in the laboratory rig](./img/aegis-setup-photo.webp)

*The physical platform: arm, task object and a single camera on a tripod across the table.*

**Control loop**

![AEGIS sensing, semantic monitoring, belief ageing and safe-action flow](./img/aegis-control-loop.webp)

*The same RGB-D scene feeds the fast geometric path and the asynchronous semantic path before both meet at the age-aware hold radius.*

**Semantic contrast**

![Nine-panel physical carry alternating between a human hand and an object](./img/aegis-verdict-contrast.webp)

*Nine panels from a single carry: the robot freezes for a hand and routes around a box, with nothing changing except the verdict.*

**Radius policy comparison**

![AEGIS hold radius expanding and collapsing with semantic evidence](./img/aegis-radius-breathing.webp)

*AEGIS breathes with evidence age: it expands for a human verdict, then collapses on fresh object evidence and resumes the route.*

![Trust-latest baseline entering the detected obstacle footprint](./img/aegis-trust-latest-breach.webp)

*The trust-latest baseline keeps the latest object verdict at face value and enters the detected footprint during the blind interval.*

## What Is Honest About This Work

The clearance result is proved for the constrained tool point, not the whole arm. A whole-arm audit found the forearm crossing the hazard sphere in 7 of 120 simulated episodes. This is why the work is described as **collision-aware**, not collision-free.

Verdict age is currently measured from the time inference returns rather than the time the image was captured. That shortens the enforced age and can under-size the radius by up to 29.6 mm. The 25 mm epistemic buffer absorbs most of this error, but does not erase the clock mismatch.

The semantic parser also fails permissively: an unreadable reply is interpreted as zero hands. Safety in that case comes from the geometric layer, not from an assumed perfect language model. Finally, the physical runs were conducted below the sufficient buffer-sizing condition proved in the paper, so the hardware result is empirical rather than an instance of that guarantee. Stating these boundaries alongside the run logs makes the work reproducible: each claim can be checked against the evidence tier that supports it, without promoting a local observation into a system-level safety claim.

The distance margin is informed by ISO/TS 15066 speed-and-separation concepts, but this prototype is neither an implementation nor a certification of that standard.

## Code, Data and Video

The [public companion repository](https://github.com/danialza/aegis-safe-action-layer) contains the figures, per-control-tick logs for every physical run, calibration reports, simulation episode records, a run manifest linking every reported number to its source and a claims-to-code map.

The [video supplement](https://github.com/danialza/aegis-safe-action-layer/releases/tag/v1.0) contains 19 clips, about 21 minutes in total, all recorded on the physical Niryo NED3 Pro.

The safe-action layer, sensing pipeline and hardware bridge are maintained separately and are available to researchers on request. For access, email Danial Zafaranchizadeh Moghaddam at `danial.za@outlook.com` or Abolfazl Zaraki at `a.zaraki@herts.ac.uk`. Please include your affiliation and intended reproduction or research use.

## Experimental Scope

The evidence is separated into three tiers: a kinematic comparison over 250 seeds, a full 6-DoF MuJoCo campaign over 30 seeds and 13 physical-arm runs, of which 11 are analysed. The reported scope is one platform, one task family, one intruder at a time, planar obstacles and a workspace of roughly 20 × 20 cm. These boundaries prevent the tabletop results from being read as a whole-arm, multi-person or certified safety evaluation.

## Citation and Reuse

Figures, videos and logs are released under CC BY 4.0. Please retain author attribution and cite the paper when reusing them.

```bibtex
@article{zafaranchizadeh_moghaddam_aegis,
  title = {AEGIS: An Age-Aware, Evidence-Guarded Safe-Action Layer Fusing RGB-D Sensing with Vision-Language Monitoring for Collision-Aware Robotic Manipulation},
  author = {Zafaranchizadeh Moghaddam, Danial and Banitalebi Dehkordi, Maryam and Rahimi Nohooji, Hamed and Zaraki, Abolfazl},
  journal = {Sensors},
  year = {YEAR_TO_BE_ADDED},
  doi = {DOI_TO_BE_ADDED},
  note = {Submitted manuscript}
}
```

## Related Work on the Same Platform

- [Nussbaum-PID real-hardware deployment](/projects/hardware-aware-nussbaum-pid/)
