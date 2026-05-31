---
title: "Patina AR History Explorer (Beta)"
description: "Beta iOS AR app and Python multi-agent backend for reconstructing the historical past of real-world locations."
publishDate: "2026-05-31"
coverImage:
  src: "./img/patina-beta-cover.webp"
  alt: "Patina beta cover showing a phone viewing an augmented historical city scene"
tags: ["ai", "ios", "python", "ar"]
---

## Status

**Patina is currently in beta.**

The project is an experimental iOS AR history app backed by a Python multi-agent system. The goal is simple to describe and hard to build: point a phone at a real place, choose a year, and see an AI-generated historical reconstruction with narration, ambient sound, and a voice-led historical persona.

This beta focuses on proving the architecture, the agent workflow, the iOS interaction model, and the historical-grounding safeguards before opening it up as a polished public product.

## What We Built

- A SwiftUI iOS app with an AR camera-first experience.
- A year-selection timeline for moving between the present and historical periods.
- A backend API that accepts location, camera frames, and target year requests.
- A LangGraph-based multi-agent pipeline for scene analysis, historical retrieval, reconstruction planning, narration, audio, persona dialogue, and safety checks.
- A RAG layer designed around location-aware historical context.
- A hallucination guard that checks narration and persona outputs before they are returned to the app.
- A community-memory flow for future local knowledge contributions.
- A Docker-based backend stack with PostgreSQL/pgvector, Redis, FastAPI, and a Celery worker.
- A backend test suite and an evaluation harness for historical accuracy and RAG faithfulness.

## Core Experience

The beta flow starts from the camera:

1. The iOS app captures a live camera frame and GPS location.
2. The backend analyzes the scene and estimates whether reconstruction is possible.
3. If confidence is high enough, the user selects a target year.
4. The backend retrieves historical context and generates reconstruction instructions.
5. The app receives historical image, audio, narration, notable figures, and confidence metadata.
6. The iOS app blends the historical reconstruction over the live camera view.
7. The user can start a conversation with a historically grounded figure connected to the place and era.

If the confidence score is too low, the system falls back to text-only historical context rather than forcing a weak visual reconstruction.

## Systems Used

### iOS App

- **SwiftUI** for the main interface
- **ARKit + RealityKit** for camera-based AR overlay rendering
- **AVFoundation** for camera/audio handling
- **CoreLocation** for GPS-aware historical retrieval
- **Speech framework** for voice input fallback
- **SwiftData** for local session persistence
- **URLSession + async/await** for API communication

### Backend

- **FastAPI** for the REST API
- **LangGraph** for the multi-agent workflow
- **Pydantic** for typed request/response contracts
- **PostgreSQL + pgvector** for retrieval storage
- **LlamaIndex** for RAG orchestration
- **Redis + Celery** for async worker flows
- **Prometheus metrics** for request, latency, and guard-pass tracking
- **Docker Compose** for local stack orchestration

### AI and Data Layer

- Vision models for scene understanding and object/era cues
- Embedding models for historical retrieval
- Text-generation providers for research, narration, and persona behavior
- Stable Diffusion / image-generation services for reconstruction output
- Text-to-speech and audio-generation services for narration and soundscape
- Historical data sources including Wikimedia, Wikipedia, Library of Congress, OpenHistoricalMap, Smithsonian, and related archival APIs

## Agent Architecture

The backend is organized around a typed shared state object and multiple specialist agents:

- **VisionAgent** reads the frame and decides whether reconstruction should continue.
- **HistoricalResearchAgent** retrieves and structures relevant historical context.
- **ReconstructionAgent** builds the historical image prompt and era treatment.
- **AudioAgent** creates a period-aware ambient soundscape plan.
- **NarrationAgent** writes a concise historical narration script.
- **PersonaAgent** powers voice conversation with a historically grounded figure.
- **HallucinationGuard** validates claims before delivery.
- **MemoryAgent** handles community-contributed local knowledge for future retrieval.

The main graph routes low-confidence scenes into fallback mode and only proceeds to reconstruction when there is enough signal.

## Current Beta Scope

The beta is not positioned as a finished consumer app yet. The current version is about proving the system shape:

- The iOS shell, AR view, timeline controls, map discovery, and community views are structured.
- The API surface covers analysis, reconstruction, persona sessions, nearby locations, memory contribution, and health checks.
- The backend graph can coordinate vision, research, generation, narration, audio, and safety stages.
- Prompt templates are separated into dedicated files so agent behavior can be iterated without scattering prompts through the codebase.
- Tests mock external providers so the core pipeline can be checked without requiring API keys.

## What Comes Next

- Connect a live historical data ingestion pipeline and seed a stronger location-indexed corpus.
- Replace in-memory session state with Redis-backed session persistence.
- Harden persona grounding with stricter citation handling and better refusal behavior.
- Add richer visual QA for reconstruction quality before showing overlays in AR.
- Improve latency by caching retrieval, generation prompts, and previously reconstructed locations.
- Add production-grade auth, quota controls, and observability dashboards.
- Expand the iOS beta with onboarding, error states, saved sessions, and shareable reconstruction cards.
- Run field tests in real locations and tune the confidence thresholds for when visual reconstruction should be allowed.
- Tighten the evaluation harness with a larger golden set and regression gates before public release.

## Why It Matters

Patina explores a different kind of location-based learning: not a static museum guide or prebuilt walking tour, but a generative historical lens that reacts to where the user actually stands.

The hard part is not just generating an image of the past. The hard part is deciding when the system knows enough, grounding the story in retrieved evidence, making the experience usable on a phone, and preventing the app from presenting confident fiction as history.

## Update Note

This post will be updated as the beta evolves.
