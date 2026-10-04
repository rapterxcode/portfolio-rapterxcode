# ADR 0001: Architecture Alignment & Redesign Strategy

- **Status:** Accepted (Gate A Approved by Owner)
- **Date:** 2026-10-04
- **Deciders:** Pasit Chatcharoenkit (Owner), Root Orchestrator (Antigravity AI)

## Context

The user requested a complete redesign of their portfolio website using the latest data from `Pasit Chatcharoenkit-Resume-Update-13052026.docx` with `/ui-ux-pro-max` guidelines and `/grill-with-doc`.
The prompt explicitly states: `refactor code react native`.
However, analysis of the existing codebase confirms it is a **React 19 Web SPA** powered by **Vite** and **Tailwind CSS v4**, deployed to GitHub Pages (`rapterxcode.github.io/portfolio-rapterxcode`).

## Decision Drivers

1. **Deployment Target:** GitHub Pages hosting (`gh-pages`) is optimized for static Web SPAs.
2. **Current Portfolio Deficiencies:**
   - Missing the latest job (Tech Soft @ AEON - Linux System Administrator / Cloud & Automation).
   - "Projects" section only contains a placeholder ("Coming Soon"), whereas the updated resume lists 19 enterprise projects.
   - Raw color scheme (`#181818`, `#ffe600`) lacks visual hierarchy and modern polish.
   - Component organization has naming typos (`LelfSection`), untyped data (`any[]`), and choppy scroll calculation.
3. **User Experience:** Need a sleek, high-performing developer portfolio that impresses recruiters and engineering leaders.

## Options Considered

- **Option A (Recommended): Modern React 19 Web SPA with App-like Native Feel.**
  - Maintain React 19 + Vite + Tailwind CSS v4 on GitHub Pages.
  - Refactor component architecture with strong TypeScript interfaces.
  - Apply `ui-ux-pro-max` Modern Dark theme with micro-interactions, responsive mobile drawer, filterable projects, and certificate lightbox.
- **Option B: Port to React Native / Expo Web.**
  - Migrate repository to Expo / React Native Web.
  - Con: Significant overhead, slower web loading, reduced SEO/preview support for static GitHub Pages.

## Proposed Strategy

Subject to user confirmation in the Grilling interview:
1. Proceed with Option A (React 19 + Tailwind v4 Web SPA with sleek native mobile feel).
2. Fully populate and structure all data from the updated resume.
3. Reorganize components cleanly into modular, accessible UI patterns.
