---
title: "Article: Nussbaum-PID Real-Hardware Deployment"
description: "Companion page for the published Sensors article on real-hardware Nussbaum-PID deployment on a current-controlled Niryo NED3 Pro actuator."
publishDate: "2026-05-27"
coverImage:
  src: "./img/hardware-aware-nussbaum-pid-cover.webp"
  alt: "Hardware-aware Nussbaum-PID controller cover with robot joint, control diagram, and tracking plots"
tags: ["robotics", "python"]
---

## Article

**Real-Hardware Deployment of a Nussbaum-Function PID Controller on a Current-Controlled Low-Cost Actuator via Hardware-Aware Optuna Tuning**

Danial Zafaranchizadeh Moghaddam, Olga Tveretina, and Abolfazl Zaraki, University of Hertfordshire, 2026.

This page provides project context, visual summaries, headline metrics, citation information, and access notes for the published article.

**Published article:** [Sensors 2026, 26(13), 4212](https://www.mdpi.com/1424-8220/26/13/4212)

**DOI:** [10.3390/s26134212](https://doi.org/10.3390/s26134212)

**PDF:** [MDPI PDF](https://www.mdpi.com/1424-8220/26/13/4212/pdf)

**Preprint archive:** [preprints.org/manuscript/202606.0331](https://www.preprints.org/manuscript/202606.0331)

The MDPI publication is the version of record and should be cited for scientific use. The preprint remains useful as a public history of the manuscript before journal publication.

## One-Line Abstract

The paper shows that a direct Nussbaum-PID implementation degrades on a current-controlled low-cost actuator, then demonstrates that a hardware-aware Optuna-tuned variant recovers usable 300 s tracking by managing adaptation growth, actuation mapping, and saturation.

## Project Summary

This work studies real-hardware deployment of a Nussbaum-function PID controller on a current-controlled low-cost manipulator actuator, using the **Niryo NED3 Pro** as the experimental platform.

The experiments focus on real-hardware trajectory tracking for **Dynamixel ID 6 (Niryo J5 / distal wrist)** in raw current-command control. The study isolates deployment-layer behaviour from whole-arm Coriolis, centrifugal, and gravity dynamics, then tests how friction, encoder quantization, current limits, communication latency, and low-speed nonlinearities affect an adaptive controller that works cleanly in paper-level or simulation settings.

## Headline Result

Enhanced Nussbaum-PID on **Dynamixel ID 6 / Niryo J5**, 300 s sinusoidal validation at **10 degree / 0.05 Hz**:

| Metric | Result |
| --- | ---: |
| MAE | 1.054 degree |
| RMSE | 1.283 degree |
| P95 \|e\| | 2.145 degree |
| Max \|e\| | 6.530 degree |
| Saturation | 1.2% |

The direct baseline implementation degrades to **MAE = 10.476 degree** and an internal command saturation ratio of **0.450** on the same actuator. The enhanced implementation reduces the internal command saturation ratio to **0.012** while preserving the Nussbaum-PID core.

The tuned implementation adds three practical deployment layers:

- adaptation-state regularization
- low-speed velocity-reference feedforward
- tail-region damping

Parameters were selected from a hardware-aware Optuna archive of **79 real-hardware trials**, with unsafe runs rejected and the score jointly reflecting tracking quality, saturation, actuation activity, and bounded adaptation growth.

## Publication and Citation

If you use this work, please cite the published *Sensors* article:

> Zafaranchizadeh Moghaddam, D.; Tveretina, O.; Zaraki, A. Real-Hardware Deployment of a Nussbaum-Function PID Controller on a Current-Controlled Low-Cost Actuator via Hardware-Aware Optuna Tuning. *Sensors* **2026**, *26*(13), 4212. <https://doi.org/10.3390/s26134212>

BibTeX:

```bibtex
@article{zafaranchizadeh_moghaddam_2026_nussbaum_pid_hardware,
  title = {Real-Hardware Deployment of a Nussbaum-Function PID Controller on a Current-Controlled Low-Cost Actuator via Hardware-Aware Optuna Tuning},
  author = {Zafaranchizadeh Moghaddam, Danial and Tveretina, Olga and Zaraki, Abolfazl},
  journal = {Sensors},
  volume = {26},
  number = {13},
  pages = {4212},
  year = {2026},
  publisher = {MDPI},
  doi = {10.3390/s26134212},
  url = {https://www.mdpi.com/1424-8220/26/13/4212}
}
```

Project-page reference:

```text
Project page and full-code access notes:
https://danielz.co.uk/projects/hardware-aware-nussbaum-pid/
```

## Method and Tool References

The article builds on several components that should be acknowledged when they are used in related work.

### Optuna

Optuna was used for the hardware-aware tuning archive and controller-parameter search.

Recommended citation:

> Akiba, T.; Sano, S.; Yanase, T.; Ohta, T.; Koyama, M. Optuna: A Next-generation Hyperparameter Optimization Framework. In *Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 2019. <https://doi.org/10.1145/3292500.3330701>

BibTeX:

```bibtex
@inproceedings{akiba_2019_optuna,
  title = {Optuna: A Next-generation Hyperparameter Optimization Framework},
  author = {Akiba, Takuya and Sano, Shotaro and Yanase, Toshihiko and Ohta, Takeru and Koyama, Masanori},
  booktitle = {Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining},
  year = {2019},
  doi = {10.1145/3292500.3330701}
}
```

### Nussbaum-Gain Background

The controller is based on the Nussbaum-function idea for systems with unknown control direction.

Recommended citation:

> Nussbaum, R.D. Some Remarks on a Conjecture in Parameter Adaptive Control. *Systems & Control Letters* **1983**, *3*(5), 243-246. <https://doi.org/10.1016/0167-6911(83)90021-X>

BibTeX:

```bibtex
@article{nussbaum_1983_adaptive_control,
  title = {Some Remarks on a Conjecture in Parameter Adaptive Control},
  author = {Nussbaum, R. D.},
  journal = {Systems & Control Letters},
  volume = {3},
  number = {5},
  pages = {243--246},
  year = {1983},
  doi = {10.1016/0167-6911(83)90021-X}
}
```

### Source Nussbaum-PID Controller

The real-hardware study starts from the Nussbaum-function PID formulation reported for robot-manipulator tracking control.

Recommended citation:

> Rahimi Nohooji, H.; Voos, H. Nussbaum Function Based PID Approach for Tracking Control of Robot Manipulators. In *Proceedings of the 2024 32nd Mediterranean Conference on Control and Automation (MED)*, Chania, Greece, 2024.

BibTeX:

```bibtex
@inproceedings{rahimi_nohooji_2024_nussbaum_pid_robot_manipulators,
  title = {Nussbaum Function Based PID Approach for Tracking Control of Robot Manipulators},
  author = {Rahimi Nohooji, H. and Voos, H.},
  booktitle = {Proceedings of the 2024 32nd Mediterranean Conference on Control and Automation (MED)},
  address = {Chania, Greece},
  year = {2024}
}
```

## Visual Summary

![Graphical abstract: real-hardware Nussbaum-PID control and optimization framework](./img/hardware-aware-nussbaum-pid-graphical-abstract.webp)

*Graphical abstract: the article connects Nussbaum-PID theory, the NED3 Pro / Dynamixel actuator, the hardware-aware layer, Optuna-guided tuning, and long-horizon validation.*

![Hardware platform: Niryo NED3 Pro experimental setup](./img/hardware-aware-nussbaum-pid-hardware-platform.webp)

*Hardware platform used for the single-joint current-mode validation on the Niryo NED3 Pro.*

![Headline 10 degree / 0.05 Hz, 300 s validation](./img/hardware-aware-nussbaum-pid-headline-10deg-005hz.webp)

*Headline 300 s validation run at 10 degree / 0.05 Hz.*

![Hardware-aware Nussbaum-PID block diagram](./img/hardware-aware-nussbaum-pid-block-diagram.webp)

*Hardware-aware Nussbaum-PID control architecture for the NED3 Pro actuator.*

## Key Figures

![Baseline versus enhanced Nussbaum-PID comparison](./img/hardware-aware-nussbaum-pid-baseline-vs-enhanced.webp)

*Baseline versus enhanced controller comparison.*

![Critical zoom around zeta approximately pi over 2 failure region](./img/hardware-aware-nussbaum-pid-critical-zoom.webp)

*Critical-region zoom showing the failure mode around zeta approximately pi over 2.*

![Multi-envelope 40 degree step response summary](./img/hardware-aware-nussbaum-pid-step40.webp)

*Multi-envelope step-response evidence for the 40 degree condition.*

![Optuna search dashboard](./img/hardware-aware-nussbaum-pid-optuna-progress.webp)

*Optuna search dashboard used to summarize tuning progress.*

## Code and Access

The public companion repository keeps the project file names, figures, tables, selected public artefacts, and README descriptions visible for manuscript context. Python implementation bodies are not included in the public copy.

Public repository:

- [danialza/hardware-aware-nussbaum-pid](https://github.com/danialza/hardware-aware-nussbaum-pid)

For full code access, reviewer material, or supplementary implementation details, please email:

- Danial Zafaranchizadeh Moghaddam — `danial.za@outlook.com`
- Abolfazl Zaraki — `a.zaraki@herts.ac.uk`

Please include your affiliation, intended use, and whether the request is for review, reproduction, or collaboration.

## Experimental Scope

The validated envelope includes:

- 10 degree and 40 degree sinusoids at 0.05 Hz and 0.5 Hz
- 15 degree and 40 degree step responses
- Bandwidth-limit characterization at 1.5-3 Hz
- Optuna-guided controller-parameter tuning and ablation analysis

Beyond the validated low-frequency envelope, the bandwidth probes show where the low-cost mechanical and sensing stack becomes the dominant limitation.

## Citation and Reuse

If you use the figures, experimental methodology, or any implementation material shared with you by email, please cite the published *Sensors* article and acknowledge the project page when it is useful for code-access context.

The public GitHub repository is a companion snapshot for figures, tables, README descriptions, and manuscript context. Full implementation access is handled by request so that review, reproduction, and collaboration use can be tracked properly.

## Related Work

- [Ned3 Pro Adaptive Controller](/projects/ned3pro-adaptive-controller/)
- [Ned3 Pro DRL Sim-to-Real Reaching](/projects/ned3pro-mujoco-rl-bundle/)
