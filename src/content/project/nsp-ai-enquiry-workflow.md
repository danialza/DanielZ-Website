---
title: "NSP AI Enquiry Workflow"
description: "An AI enquiry-to-JSON system upgraded to FastAPI with local UI, Docker runtime, tests, and an evaluation starter."
publishDate: "2026-04-03"
coverImage:
  src: "./img/nsp-ai-enquiry-workflow-cover-v2.svg"
  alt: "NSP AI enquiry workflow project cover"
tags: ["ai", "python", "automation"]
---

## Role

Developer - AI Workflow Prototyping

## Project Summary

This project delivers a practical AI-driven intake workflow for **NSP Cases**.
It reads customer enquiry emails for custom flight cases, extracts technical/commercial details with an LLM, and outputs a clean JSON payload ready for downstream operations.

After the initial version, the system was upgraded to a service-style architecture with:
- FastAPI backend endpoints
- browser-based local UI
- Docker and Compose runtime support
- test and evaluation scaffolding for reliability

The design remains local, practical, and interview-ready:
- core extraction logic isolated in `main.py`
- prompt files externalized for fast iteration
- provider abstraction for future model/provider swaps
- stable normalized JSON schema for ERP/MRP integration

## Repository

[nsp-ai-enquiry-workflow](https://github.com/danialza/nsp-ai-enquiry-workflow)

## What Was Implemented

- Input ingestion from `sample_email.txt`
- Prompt-driven extraction of:
  - product type
  - dimensions (`length`, `width`, `height`, `unit`)
  - use case
  - requirements
  - attachment mention detection
  - concise business summary
  - missing information list
  - confidence score
- JSON normalization and validation handling in Python
- Structured output writing to `output/example_output.json`
- Human-review-ready pattern via `missing_information` and `confidence`
- Added FastAPI service layer in `app.py` with:
  - `POST /api/extract`
  - `GET /health`
  - `GET /version`
- Added lightweight frontend (`templates/` + `static/`) for browser-based extraction usage
- Added containerized runtime support:
  - `Dockerfile`
  - `docker-compose.yml`
- Added quality and reliability scaffolding:
  - API/unit tests in `tests/`
  - evaluation starter in `evaluation/` (offline and live modes)

## Workflow Flowchart

![NSP workflow flowchart](./img/nsp-ai-enquiry-workflow-flowchart.svg)

*Flow from incoming enquiry email to structured output and optional human review before ERP/MRP handoff.*

## UI Update

![NSP Enquiry Extractor UI](./img/nsp-ai-enquiry-workflow-ui.png)

*Updated UI for pasting enquiry text and getting structured JSON output instantly.*

## Key Outcomes

- Converted unstructured enquiry text into a predictable business schema.
- Evolved the prototype into a cleaner service baseline (CLI + API + UI).
- Improved deployment and reproducibility with Docker/Compose support.
- Added testing and evaluation hooks for safer iteration and future scaling.

## Skills

- AI Workflow Design
- Prompt Engineering
- Python
- FastAPI
- API Integration
- Docker
- Data Structuring
- Testing and Evaluation
