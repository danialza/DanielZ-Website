---
title: "TalkingHeadAI Conversational Avatar System"
description: "A real-time voice and text conversational avatar platform with two-mode retrieval routing, long-term memory, and reviewer feedback loops."
publishDate: "2026-04-16"
coverImage:
  src: "./img/talkingheadai-architecture-overview.png"
  alt: "TalkingHeadAI architecture overview diagram"
tags: ["ai", "python", "automation"]
---

## Role

Developer - AI Systems Architecture and Full-Stack Integration

## Project Summary

This project is a real-time conversational talking-head system where users interact by voice or text and receive synchronized avatar responses.
The platform combines speech-to-text, routing, retrieval, generation, text-to-speech, and avatar streaming in one loop, with persistent memory and a reviewer-driven quality pipeline.

## Repository

[TalkingHeadAI](https://github.com/danialza/TalkingHeadAI)

## Systems Used

- Backend API and orchestration: Python 3.11, FastAPI, async SQLAlchemy
- Frontend client: Next.js 14, React 18, TypeScript, Tailwind CSS
- Structured data layer: PostgreSQL 16
- Vector retrieval layer: Qdrant
- Cache and queue layer: Redis
- LLM and generation services: Claude (primary), optional Ollama path
- Embeddings: OpenAI text-embedding-3-small (with local fallback design)
- Speech pipeline: Deepgram (STT) + ElevenLabs/OpenAI (TTS)
- Avatar rendering: D-ID streaming mode with offline fallback path
- Runtime and local orchestration: Docker Compose

## System Diagrams

### 1) System Architecture Overview

![TalkingHeadAI architecture overview](./img/talkingheadai-architecture-overview.png)

This diagram shows the full component map:
- Frontend layer: Next.js App Router + Tailwind + WebSocket client.
- Backend layer: FastAPI server with orchestrator, query router, RAG pipeline, KB manager, REST and WebSocket APIs, and worker services.
- Data layer: PostgreSQL, Qdrant, and Redis with clear service ports.
- External providers: Deepgram (STT), Claude (LLM), ElevenLabs (TTS), D-ID (avatar), and OpenAI embeddings.

It explains how boundaries are defined between product UI, decision logic, stateful storage, and AI provider integrations.

### 2) Request Flow: Voice to Avatar Response

![TalkingHeadAI request flow](./img/talkingheadai-request-flow.png)

This flow shows the runtime sequence for one user interaction:
- User audio enters through microphone and browser WebSocket.
- STT converts speech to text and passes it to the orchestrator.
- Query embedding + router decide between Case A and Case B.
- Output text goes through TTS and then avatar video rendering.
- Final response is delivered back to the browser as synchronized audio/video.

The latency notes in the diagram clarify where response time is spent across STT, routing, generation, TTS, and avatar rendering.

### 3) Two-Mode Answering: Query Routing Logic

![TalkingHeadAI two-mode routing](./img/talkingheadai-two-mode-routing.png)

This diagram explains the retrieval threshold strategy:
- User query is embedded and searched against `approved_qa` in Qdrant.
- If similarity score is above threshold (`>= 0.85`), the system runs Case B and returns approved knowledge.
- If below threshold, it runs Case A, pulls `session_chunks` + approved context, calls the LLM, and stores unresolved items in `unanswered_pool`.

It documents why the system can stay reliable for known questions while still handling new questions dynamically.

### 4) Knowledge Quality Loop

![TalkingHeadAI knowledge quality loop](./img/talkingheadai-mentor-quality-loop.png)

This loop shows how unanswered questions become reusable knowledge:
- New/low-confidence queries are saved to `unanswered_pool`.
- Reviewer dashboard is used for answer, dismiss, or split actions.
- Approved answers are inserted into `qa_pairs` and upserted to Qdrant.
- Future similar queries increasingly hit Case B, reducing ambiguity and response variance over time.

It captures the continuous improvement mechanism of the platform's knowledge base.

### 5) User Memory Feature: Extraction and Recall

![TalkingHeadAI user memory flow](./img/talkingheadai-memory-flow.png)

This diagram describes personalized memory behavior:
- During interaction, facts are extracted asynchronously (non-blocking path) while normal response continues.
- Structured facts are persisted in `user_facts` with upsert logic.
- On later interactions, user facts are loaded and injected into the system prompt before generation.
- Frontend memory card supports user visibility and safe reset actions.

It explains how personalization is implemented without adding blocking latency to the main conversation path.

## Core Backend Responsibilities

- Session and conversation orchestration
- Similarity-based route selection
- Retrieval-augmented generation assembly
- User memory extraction and recall
- Provider abstraction for STT, LLM, TTS, and avatar systems
- Reviewer endpoints for unanswered-question lifecycle

## Key Outcomes

- Delivered a production-style architecture for low-latency conversational avatar interactions.
- Built a scalable two-path routing strategy for known vs novel queries.
- Added long-term user memory for personalization across sessions.
- Implemented a continuous reviewer feedback loop to improve answer quality over time.

## Skills

- AI Systems Design
- Real-Time Orchestration
- Retrieval-Augmented Generation (RAG)
- Backend API Engineering
- Vector Search Integration
- Conversation Memory Design
- Automation Workflow Design
- Python
