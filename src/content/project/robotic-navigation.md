---
title: "Robotic Navigation (Unity)"
description: "University robotics project: autonomous track navigation in Unity using sensor-driven WheelCollider control."
publishDate: "2025-12-16"
coverImage:
  src: "./img/robotic-navigation-cover.jpg"
  alt: "Robotic navigation Unity simulation cover"
tags: ["robotics", "unity", "csharp"]
---

## Role

Developer - University Project (Robotics / Self-Driving Simulation)

## Project Summary

This coursework project focused on building an autonomous controller for a simulated robot in Unity.
The objective was to navigate changing tracks with obstacles using only the provided sensors and wheel systems, without hard-coding a fixed route.

## Assignment Constraints

- Edited only `RobotController.cs` (no model parameter changes).
- Used only the required sensors:
  - `RaycastSensorFront`
  - `RaycastSensorLeft`
  - `RaycastSensorRight`
  - `EulerAnglesSensor`
- Used only the required wheel systems:
  - `WheelColliderFrontLeft`, `WheelColliderFrontRight`, `WheelColliderBackLeft`, `WheelColliderBackRight`
  - `TransformWheelFrontLeft`, `TransformWheelFrontRight`, `TransformWheelBackLeft`, `TransformWheelBackRight`
- Implemented the controller around `Start()` and `FixedUpdate()` for reliable physics updates.

## Controller Approach

- Built a multi-ray clearance scan for front/left/right sensors with horizontal and vertical spread.
- Used obstacle distance to compute steering direction and turn intensity.
- Applied dynamic speed logic based on steering load and target speed.
- Added hill compensation using `EulerAnglesSensor` to avoid underpowering on angled surfaces.
- Applied motor torque, steering angle, and brake torque through WheelColliders.
- Synced visual wheel transforms with collider poses each physics step.

## Demo Video

<video controls playsinline preload="metadata" poster="/videos/robotic-navigation/robotic-navigation-demo-poster.jpg" src="/videos/robotic-navigation/robotic-navigation-demo.mp4" style="width:100%;"></video>
The run duration in this recording is **19.94 seconds**.
The video is played at **normal speed (1x)** and is **not accelerated**; this completion time reflects the controller performance.

## Key Outcomes

- Delivered a reusable sensor-based controller that adapts to track variation.
- Achieved autonomous path following with obstacle avoidance behavior in simulation.
- Demonstrated full run output with a start-to-finish screen recording for assessment.

## Skills

- Robotics
- Autonomous Navigation
- Unity
- C#
- WheelCollider Physics
- Sensor-based Control Systems

## Timeline

16 Dec 2025
