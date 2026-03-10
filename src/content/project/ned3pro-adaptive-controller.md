---
title: "Ned3 Pro Adaptive Controller (No Torque Interface)"
description: "Custom ROS1 controller for Ned3 Pro that bridges adaptive torque-law output to safe Mode 0 current commands."
publishDate: "2026-02-06"
coverImage:
  src: "./img/ned3pro-adaptive-controller-cover.jpg"
  alt: "Ned3 Pro adaptive controller tracking plot"
tags: ["robotics", "ros", "c++", "python"]
---

## Role

Developer - Robotics Control Systems

## Project Summary

I built a custom controller for the **Ned3 Pro** focused on one core problem:
running an adaptive control law when the practical motor interface does not provide a direct torque command path.

The result was a working ROS1 controller that executes the control law in torque-like form, then safely bridges it to current-mode actuation on hardware.

## Core Challenge

- The control design is expressed in torque-domain form.
- The practical motor interface on Ned3 Pro had to be driven through current-mode commands (Mode 0), not direct torque writes.
- This required a reliable torque-to-current bridge with runtime safety constraints.

## What I Built

- A custom `ros_control` plugin:
  - `niryo_robot_paper_controller/NeuralAdaptivePidController`
- Hardware integration for Ned3 Pro joint control in a private single-joint configuration.
- Real-time command bridge:
  - computes adaptive controller output in torque-like form
  - maps output into safe current-domain actuation
  - sends low-level motor commands through the hardware driver interface
- Runtime interfaces for experiments:
  - desired trajectory input
  - torque/current override input
  - online PID gain update input
  - present-current feedback publishing

## Safety and Reliability Layer

- Current clamp to hard limits
- Command freshness timeouts
- Explicit operating-mode switching for motors:
  - torque off
  - set operating mode to current control
  - torque on
- Optional online current readback for monitoring

## Key Outcomes

- Delivered a deployable adaptive controller on real Ned3 Pro hardware despite the lack of a direct torque command interface.
- Closed the practical gap between torque-law controller design and current-mode motor actuation.
- Built a controllable and testable ROS runtime for controller experiments with safety constraints.
- Verified this controller approach on three primary robot motors.
