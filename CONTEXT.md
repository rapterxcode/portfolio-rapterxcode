# CONTEXT.md: Pasit Chatcharoenkit Portfolio Redesign

## 1. Domain & Ubiquitous Language

- **Portfolio Owner:** Pasit Chatcharoenkit (Senior Backend Full-Stack Developer / DevOps / Cloud / Infrastructure Engineer).
- **Core Value Proposition:** 6+ years of engineering experience spanning on-premise infrastructure, virtualization (VMware, Proxmox), enterprise storage/networking, multi-cloud (AWS, GCP, Azure, Alibaba), container orchestration (Kubernetes, Docker), CI/CD automation, and modern AI-driven operations (n8n, FastAPI, pgvector, Ollama).
- **Target Audience:** Technical recruiters, engineering managers, CTOs, and enterprise clients seeking a senior DevOps/Infrastructure/Backend engineer with proven hands-on delivery.
- **Key Deliverables:**
  - Complete portfolio redesign incorporating latest updates from `Pasit Chatcharoenkit-Resume-Update-13052026.docx`.
  - Rich project showcase (19 enterprise/AI projects previously missing or marked "Coming Soon").
  - Updated current role (Tech Soft Holding @ AEON Thana Sinsap - Linux System Administrator / Cloud & Automation).
  - 17 professional certifications + 20 training courses with verified credentials and badges.
  - Interactive, modern `/ui-ux-pro-max` developer-grade UI/UX.

---

## 2. Technical Stack Audit & Reconciliation

- **Current Repository Stack:**
  - React 19 (`react` ^19.1.0, `react-dom` ^19.1.0)
  - Vite (`vite` ^6.3.5)
  - Tailwind CSS v4 (`@tailwindcss/vite` ^4.1.10)
  - React Router (`react-router-dom` ^7.6.2)
  - GitHub Pages deployment (`gh-pages` ^6.3.0) -> `https://rapterxcode.github.io/portfolio-rapterxcode`
- **Ambiguity Identified:**
  - User prompt mentions `refactor code react native`.
  - Repository is pure React 19 Web (Vite + Tailwind).
  - Resolution: Clarify via Gate A whether the user intends to maintain and elevate the React Web SPA on GitHub Pages or initialize a React Native / Expo application.

---

## 3. UI/UX Design System Specification (`ui-ux-pro-max`)

- **Design Persona:** Modern Dark Engineering / High-Tech Utility (Inspired by Linear, Vercel, and Cloudflare console).
- **Color Palette (60-30-10 Rule):**
  - Background (60%): Deep Slate Canvas (`#090D16` / `#0F172A`)
  - Surface & Cards (30%): Elevated Translucent Surface (`#1E293B` / `rgba(30, 41, 59, 0.7)` with `backdrop-blur-md`)
  - Accent / Primary CTA (10%): Cyber Emerald (`#10B981`) and Electric Cyan (`#06B6D4`)
  - Text Hierarchy: Primary `#F8FAFC`, Secondary `#94A3B8`, Muted `#64748B`
  - Borders: Crisp hairline borders (`#1E293B` hover `#334155`)
- **Typography:**
  - Display & Headings: `Inter` / `Plus Jakarta Sans`
  - Code / Badges / Metrics: `JetBrains Mono` / `Fira Code`
- **Interactive UX Components:**
  - Two-Column Sticky Navigation on Desktop + Smooth Mobile Bottom/Drawer Nav.
  - Category Filter for Projects (DevOps & Cloud, AI & Automation, Infrastructure & HCI, Security & Network).
  - Certificate Lightbox/Modal viewer with direct Credly / verification links.
  - Interactive Experience Timeline with expandable technical details and architecture bullet points.
  - Quick Contact drawer with copyable LINE ID, phone, multi-email, and direct Resume PDF download.
