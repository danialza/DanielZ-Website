# DanielZ Website

Personal website and technical blog for **Daniel Z**.

This project is based on the [Astro Cactus template](https://github.com/chrismwilliams/astro-theme-cactus), then customized for a portfolio + blog workflow.

## Tech Stack

- [Astro 5](https://astro.build/)
- Tailwind CSS 4
- Astro Content Collections
- Pagefind (static search)
- Satori (generated OG images)

## What Was Added/Customized In This Repo

### 1) Projects as a first-class content type

- Added `project` collection in `src/content.config.ts`.
- Added project data helpers in `src/data/project.ts`.
- Added project routes:
  - `src/pages/projects/[...page].astro` (listing)
  - `src/pages/projects/[...slug].astro` (single page)
- Added project layout/components:
  - `src/layouts/ProjectPost.astro`
  - `src/components/project/ProjectMasthead.astro`
  - `src/components/project/ProjectPreview.astro`

### 2) Homepage redesign for projects + posts

In `src/pages/index.astro`:

- Projects section appears above posts.
- Latest 6 projects are shown.
- First 4 projects are shown as **cards** with:
  - cover image
  - publish date
  - project title
  - project tags
- Remaining projects are shown as a list under:
  - `More From The Projects:`
- Pinned posts section title updated to:
  - `Pinned Highlights`

### 3) Unified tags for posts + projects

- `/tags/` now combines tags from both posts and projects.
- Each tag shows combined count details in this format:
  - `(N items: X posts, Y projects)`
- `/tags/[tag]/` shows both posts and projects in one chronological list.
- Per-item prefixes in tag pages:
  - `Project » ...`
  - `Post » ...`

### 4) Post/Project page UX updates

- Added breadcrumbs above post/project titles:
  - `Home / Posts /`
  - `Home / Projects /`
- TOC behavior and placement tuned for desktop/mobile readability.
- Content width and spacing adjusted to keep text readable while TOC can sit on the right.

### 5) Header and mobile menu behavior

In `src/components/layout/Header.astro`:

- Mobile menu opens as a full-screen overlay.
- Added close button (`✕`) for the mobile menu.
- Mobile menu closes when:
  - user taps outside the menu panel
  - user taps a navigation link
- Search and theme controls aligned to the right.
- Header logo now supports separate light/dark assets:
  - `public/icon-light.svg`
  - `public/icon-dark.svg`

### 6) Footer layout adjustments

In `src/components/layout/Footer.astro`:

- Footer content moved to a stacked, left-aligned layout.
- Copyright line and menu order/spacing adjusted.

### 7) Theme adjustments

In `src/styles/global.css`:

- Dark-mode accent/link/quote colors were updated to a slate-blue style.
- Added light/dark logo visibility helpers:
  - `.logo-light`
  - `.logo-dark`

### 8) Content updates

- Added project case study:
  - `src/content/project/pasha-group-websites.md`
  - `src/content/project/img/pasha-group-cover.jpg`
  - `src/content/project/img/pasha-group-website-brand-design.jpg`
- Added post:
  - `src/content/post/help-bridge-the-internet-blackout-in-iran.md`
- Removed sample project content used during UI prototyping.

## Project Structure (Key Paths)

- `src/content/post/` → blog posts
- `src/content/project/` → project pages
- `src/content/note/` → notes
- `src/content/tag/` → optional tag metadata pages
- `src/pages/` → route pages
- `src/components/` → UI components
- `src/layouts/` → post/project/base layouts

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321` (or next free port).

## Build & Checks

```bash
npm run check
npm run build
```

## CI (GitHub Actions)

Workflow: `.github/workflows/ci.yml`

Runs on push/PR to `main`:

1. `pnpm install`
2. `pnpm astro check`
3. `pnpm build`

## Configuration Checklist

Before production deployment, update:

- `src/site.config.ts`
  - `url` (currently template default)
  - `title`, `description`, `author`, menu links
- `src/components/SocialList.astro`
  - social profile links

## Credits

- Base theme: [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- License: MIT (see `LICENSE`)
