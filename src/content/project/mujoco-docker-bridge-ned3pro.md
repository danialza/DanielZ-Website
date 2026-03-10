---
title: "Ned3 Pro robot ob Mujoco"
description: "Independent MuJoCo execution path for Ned3 Pro on macOS with live bridge and camera output."
publishDate: "2026-03-05"
coverImage:
  src: "./img/ned3pro-robot-on-mujoco-cover.jpg"
  alt: "Ned3 Pro running on MuJoCo"
tags: ["robotics", "ros", "c++", "python"]
---

## Role

Developer - Robotics Simulation Integration

## Project Summary

In this project, we ran the **Ned3 Pro** robot model on MuJoCo with a Docker-based bridge and live visualization.
At the time of implementation, an official MuJoCo model for this robot was not available from the manufacturer.
The official simulator path provided by **Niryo** was ROS1 + Gazebo.

## Why This Path

- Easier and cleaner execution on macOS.
- Faster setup for testing and development workflows.
- It provides the base environment for starting future learning stages on powerful hardware.

## Short Workflow

1. Started the ROS1 simulation stack inside Docker.
2. Bridged live joint states to MuJoCo on macOS host.
3. Verified live synchronization in viewer and confirmed camera output stream.

## Live Demo

<video controls playsinline preload="metadata" poster="/videos/mujoco-ned3pro/mujoco-docker-bridge-demo-poster.jpg" src="/videos/mujoco-ned3pro/mujoco-docker-bridge-demo.mp4" style="width:100%;"></video>

## Key Outcomes

- Demonstrated stable execution of Ned3 Pro on MuJoCo with a live bridge pipeline.
- Delivered live sync between simulation and visualization.
- Confirmed camera output availability during runtime.
- Built a practical foundation for hardware-accelerated learning phases in the next steps.

## Skills

- Robotics
- ROS Integration
- Simulation Bridging
