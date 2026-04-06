---
title: "Ned3 Pro DRL Sim-to-Real Reaching"
description: "A goal-conditioned DRL system (SAC+HER) for Ned3 Pro, trained in simulation and deployed on real robot with synchronized monitoring."
publishDate: "2026-04-01"
coverImage:
  src: "./img/ned3pro-rl-bundle-cover.png"
  alt: "Ned3 Pro real robot and DRL workspace"
tags: ["reinforcement-learning", "robotics", "python", "ros"]
---

## Role

Developer - Deep Reinforcement Learning and Robotics Systems

## Project Summary

This project implements a sim-to-real robotic reaching pipeline for **Ned3 Pro** using **Soft Actor-Critic with Hindsight Experience Replay (SAC+HER)**.
The policy was trained as a goal-conditioned controller in simulation, then deployed to the real robot with synchronized monitoring through a MuJoCo digital twin and XY/YZ tracking plots.

## What We Built

- Built a goal-conditioned DRL control loop that integrates state estimation, policy inference, and real-world robot execution.
- Implemented SAC+HER training and evaluation workflows for robust target-reaching behavior.
- Created synchronized monitoring views through a digital twin plus XY/YZ trajectory tracking plots.
- Structured workflows for repeatable experiments and quantitative analysis of tracking error and failure modes.

## DRL Validation (SAC+HER)

- The SAC+HER policy achieved **90%+ task success** in simulation.
- Validated end-to-end sim-to-real transfer with real robot runs and synchronized monitoring.
- Logged run behavior for tracking quality review and failure-mode analysis.

## Demo Video

<video controls playsinline preload="metadata" poster="/videos/ned3pro-rl-bundle/ned3pro-rl-bundle-demo-poster.jpg" src="/videos/ned3pro-rl-bundle/ned3pro-rl-bundle-demo.mp4" style="width:100%;"></video>

*Caption: Normal-speed demo of the DRL pipeline where the learned controller runs on the real robot while synchronized MuJoCo digital-twin and trajectory monitoring are active.*

The recording is shown at normal speed and represents the actual controller behavior during execution.

## Key Outcomes

- Delivered a practical DRL baseline for sim-to-real reaching on Ned3 Pro.
- Demonstrated that SAC+HER can provide stable goal-conditioned control for transfer to hardware.
- Established a reusable evaluation flow for success rate, trajectory quality, and execution analysis.

## Skills

- Reinforcement Learning
- Deep Reinforcement Learning (DRL)
- SAC + HER
- Robotics
- Python

## Related Project

- [Ned3 Pro robot on MuJoCo](/projects/mujoco-docker-bridge-ned3pro/)
