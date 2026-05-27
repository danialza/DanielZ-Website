---
title: "Article: Hardware-Aware Nussbaum-PID Controller"
description: "Companion page for a real-hardware Nussbaum-PID study on the Niryo NED3 Pro, including headline metrics, diagrams, figures, and reproducibility links."
publishDate: "2026-05-27"
coverImage:
  src: "./img/hardware-aware-nussbaum-pid-cover.png"
  alt: "Hardware-aware Nussbaum-PID controller cover with robot joint, control diagram, and tracking plots"
tags: ["robotics", "python"]
---

## Article

**Hardware-Aware Experimental Assessment of a Nussbaum-Function PID Controller on a Low-Cost Manipulator Joint Using Optuna-Guided Tuning**

Danial Zafaranchizadeh Moghaddam and Abolfazl Zaraki, University of Hertfordshire, 2026.

This page provides the public companion material for the manuscript. It links to the code, figure-generation scripts, manuscript source, and experimental artefacts used to support the results reported in the article.

## One-Line Abstract

The paper shows that a direct Nussbaum-PID implementation degrades on the low-cost NED3 Pro actuator, then demonstrates that a hardware-aware regularized variant recovers usable 300 s tracking with low error and limited saturation.

## Project Summary

This work studies a hardware-aware Nussbaum-function PID controller on a low-cost manipulator joint, using the **Niryo NED3 Pro** as the experimental platform.

The experiments focus on real-hardware trajectory tracking for **Dynamixel ID 6 (Niryo J5)** in raw current mode. The controller and tuning workflow were evaluated under sinusoidal, step, and out-of-envelope bandwidth-probe conditions, with reproducible scripts used to regenerate the publication figures and tables from the experiment logs.

## Headline Result

Enhanced Nussbaum-PID on **Dynamixel ID 6 / Niryo J5**, 300 s sinusoidal validation at **10 degree / 0.05 Hz**:

| Metric | Result |
| --- | ---: |
| MAE | 1.054 degree |
| RMSE | 1.283 degree |
| P95 \|e\| | 2.145 degree |
| Max \|e\| | 6.530 degree |
| Saturation | 1.2% |

The direct baseline implementation degrades to **MAE = 10.476 degree** on the same actuator. The paper characterizes why this happens and proposes a hardware-oriented regularization that recovers usable real-hardware tracking.

## Visual Summary

![Graphical abstract: real-hardware Nussbaum-PID control and optimization framework](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_graphical_abstract.png)

*Graphical abstract: the article connects Nussbaum-PID theory, the NED3 Pro / Dynamixel actuator, the hardware-aware layer, Optuna-guided tuning, and long-horizon validation.*

![Hardware platform: Niryo NED3 Pro experimental setup](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_hardware_platform.png)

*Hardware platform used for the single-joint current-mode validation on the Niryo NED3 Pro.*

![Headline 10 degree / 0.05 Hz, 300 s validation](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_envelope_amp10_005hz.png)

*Headline 300 s validation run at 10 degree / 0.05 Hz.*

![Hardware-aware Nussbaum-PID block diagram](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_block_diagram.png)

*Hardware-aware Nussbaum-PID control architecture for the NED3 Pro actuator.*

## Key Figures

![Baseline versus enhanced Nussbaum-PID comparison](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_pure_vs_paperplus.png)

*Baseline versus enhanced controller comparison.*

![Critical zoom around zeta approximately pi over 2 failure region](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_critical_region_zoom.png)

*Critical-region zoom showing the failure mode around zeta approximately pi over 2.*

![Multi-envelope 40 degree step response summary](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_envelope_step40.png)

*Multi-envelope step-response evidence for the 40 degree condition.*

![Optuna search dashboard](https://raw.githubusercontent.com/danialza/hardware-aware-nussbaum-pid/main/figures/fig_optuna_progress.png)

*Optuna search dashboard used to summarize tuning progress.*

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

The validated envelope includes:

- 10 degree and 40 degree sinusoids at 0.05 Hz and 0.5 Hz
- 15 degree and 40 degree step responses
- Bandwidth-limit characterization at 1.5-3 Hz
- Optuna-guided controller-parameter tuning and ablation analysis

Beyond the validated low-frequency envelope, the bandwidth probes show where the low-cost mechanical and sensing stack becomes the dominant limitation.

## Citation and Reuse

If you use the code, scripts, figures, or experimental methodology, please cite the manuscript above and refer to the companion GitHub repository.

Recommended project-page reference for the manuscript:

> Project code and reproducibility material are available at: <https://danielz.co.uk/projects/hardware-aware-nussbaum-pid/>

## Related Work

- [Ned3 Pro Adaptive Controller](/projects/ned3pro-adaptive-controller/)
- [Ned3 Pro DRL Sim-to-Real Reaching](/projects/ned3pro-mujoco-rl-bundle/)
