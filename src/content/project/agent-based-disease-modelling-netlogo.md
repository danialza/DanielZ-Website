---
title: "Agent Based Modelling"
description: "University Artificial Life with Robotics project focused on infectious disease spread simulation using agent-based modelling."
publishDate: "2025-11-05"
coverImage:
  src: "./img/agent-based-disease-modelling-netlogo-cover.jpg"
  alt: "Agent-based disease modelling cover image"
tags: ["robotics"]
---

## Role

Developer - University Project (Artificial Life with Robotics)

## Project Summary

This project was developed for the **Artificial Life with Robotics** course as an agent-based simulation in NetLogo.
The model investigates how an infectious disease spreads across two interacting populations over time and how intervention policies change infection and mortality outcomes.

## Assignment Scope

- Simulated two populations with independent regions (turquoise and magenta).
- Tested regional movement constraints (local-only movement vs unrestricted movement).
- Compared social distancing vs no social distancing.
- Compared self-isolation after an undetected transmission period vs no self-isolation.
- Modeled infection, illness progression, survival, immunity development, and antibody decay over time.

## Technical Implementation

- Built on default NetLogo turtles without custom breeds, aligned with assignment constraints.
- Implemented infection probability using configurable `infection_rate` (0-100).
- Implemented illness countdown with `infected_time` and post-recovery immunity with antibody timers.
- Updated real-time global metrics each tick, including:
  - infection percentages (total and by population)
  - deaths (total and by population)
  - antibody/immunity percentages (total and by population)
- Structured setup and execution flow through separate procedures:
  - `setup_world`
  - `setup_agents`
  - `run_model`

## Demo Video

<video controls playsinline preload="metadata" poster="/videos/artificial-life/abm-netlogo-demo-poster.jpg" src="/videos/artificial-life/abm-netlogo-demo.mp4" style="width:100%;"></video>

## Key Outcomes

- Delivered a stable simulation that follows strict course requirements and runtime constraints.
- Produced a reusable experiment setup for comparing policy effects on spread and mortality.
- Built clear output metrics to support analysis of intervention effectiveness across both populations.

## Skills

- Agent-Based Modelling
- NetLogo
- Artificial Life Simulation
- Disease Spread Modeling
- Data Analysis
- Simulation Design
