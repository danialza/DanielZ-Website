---
title: "Hardware-Aware Nussbaum-PID Controller"
description: "Companion project page for the hardware-aware experimental assessment of a Nussbaum-function PID controller on a Niryo NED3 Pro joint."
publishDate: "2026-05-27"
coverImage:
  src: "./img/hardware-aware-nussbaum-pid-cover.png"
  alt: "Hardware-aware Nussbaum-PID controller cover with robot joint, control diagram, and tracking plots"
tags: ["robotics", "control-systems", "pid", "python"]
---

## Article

**Hardware-Aware Experimental Assessment of a Nussbaum-Function PID Controller on a Low-Cost Manipulator Joint Using Optuna-Guided Tuning**

Danial Zafaranchizadeh Moghaddam and Abolfazl Zaraki, University of Hertfordshire, 2026.

This page provides the public companion material for the manuscript. It links to the code, figure-generation scripts, manuscript source, and experimental artefacts used to support the results reported in the article.

## Project Summary

This work studies a hardware-aware Nussbaum-function PID controller on a low-cost manipulator joint, using the **Niryo NED3 Pro** as the experimental platform.

The experiments focus on real-hardware trajectory tracking for **Dynamixel ID 6 (Niryo J5)** in raw current mode. The controller and tuning workflow were evaluated under sinusoidal, step, and out-of-envelope bandwidth-probe conditions, with reproducible scripts used to regenerate the publication figures and tables from the experiment logs.

## Code and Reproducibility

The full companion repository is available on GitHub:

- [danialza/hardware-aware-nussbaum-pid](https://github.com/danialza/hardware-aware-nussbaum-pid)

The repository includes:

- LaTeX manuscript source and references
- MDPI `Sensors` class files used for the manuscript build
- Publication figures and tables
- Python scripts for regenerating the main result figures
- Hardware reference photos and control-system illustrations
- Notes for rebuilding the manuscript and rerunning the figure pipeline

## Main Repository Areas

- [Manuscript source](https://github.com/danialza/hardware-aware-nussbaum-pid/blob/main/manuscript.tex)
- [Figure-generation scripts](https://github.com/danialza/hardware-aware-nussbaum-pid/tree/main/scripts)
- [Publication figures](https://github.com/danialza/hardware-aware-nussbaum-pid/tree/main/figures)
- [Publication tables](https://github.com/danialza/hardware-aware-nussbaum-pid/tree/main/tables)
- [Hardware and reference assets](https://github.com/danialza/hardware-aware-nussbaum-pid/tree/main/assets)

## Experimental Scope

The reported validation envelope includes:

- Sinusoidal tracking at 10 degree and 40 degree amplitudes
- 0.05 Hz and 0.5 Hz sinusoidal validation runs
- 15 degree and 40 degree step responses
- Out-of-envelope bandwidth probes at higher frequencies
- Optuna-guided controller-parameter tuning and ablation analysis

## Citation and Reuse

If you use the code, scripts, figures, or experimental methodology, please cite the manuscript above and refer to the companion GitHub repository.

Recommended project-page reference for the manuscript:

> Project code and reproducibility material are available at: <https://danielz.co.uk/projects/hardware-aware-nussbaum-pid/>

## Related Work

- [Ned3 Pro Adaptive Controller](/projects/ned3pro-adaptive-controller/)
- [Ned3 Pro DRL Sim-to-Real Reaching](/projects/ned3pro-mujoco-rl-bundle/)
