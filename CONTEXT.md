# CONTEXT.md: Pasit Chatcharoenkit Portfolio Architecture

## 1. Domain & Ubiquitous Language

- **Portfolio Owner:** Pasit Chatcharoenkit (Assistant Manager - Cloud & Automation @ AEON Thana Sinsap (Thailand) PCL).
- **Core Value Proposition:** 6+ years of engineering experience spanning enterprise multi-cloud landing zones (AWS, GCP, Azure), architecture & team leadership, on-premise infrastructure/virtualization (VMware, Proxmox), enterprise storage/networking, container orchestration (Kubernetes, Docker), CI/CD & Ansible AWX automation, and modern AIOps (n8n, FastAPI, pgvector, Ollama).
- **Target Audience:** Technical recruiters, engineering managers, CTOs, and enterprise clients seeking a senior cloud/DevOps/infrastructure engineering leader.
- **Key Deliverables:**
  - Complete portfolio showcasing 5 enterprise career milestones, 19 enterprise/AI projects, 10 skill domains (50+ toolsets), 17 accredited certifications, 20 training courses, and downloadable ATS-compliant vector PDF CV.
  - Executive Bright (Light default) & Modern Dark Engineering dual theme with `localStorage` persistence and zero-FOUC strict-CSP initialization (`public/theme-init.js`).
  - Accessible `shadcn/ui` (Radix UI + Tailwind CSS v4) component system with `lucide-react` icons.

---

## 2. Technical Stack & Hosting Topology

- **Production Stack (`main` branch):**
  - React `19.3.1` (`react`, `react-dom`) + TypeScript `5.9.3`
  - Vite `8.4.0` (Rolldown + Oxc) + Tailwind CSS `4.3.5` (`@tailwindcss/vite`)
  - UI System: `shadcn/ui` (`radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `tw-animate-css`)
  - Quality & Testing: ESLint `10.15.0` (`eslint-plugin-react-hooks` v7, `typescript-eslint` v8), Vitest `5.1.2` + Testing Library
  - **Production Hosting:** GCP Firebase Hosting (`raptorxcode` / Project Number `31940467839`) -> `https://raptorxcode.web.app` & `https://raptorxcode.firebaseapp.com`
- **Archived GitHub Pages Branch (`deploy-github-page`):**
  - Preserves exact pre-Firebase snapshot (`81759b2`) configured with `base: '/portfolio-rapterxcode/'` and `gh-pages` deployment to `https://rapterxcode.github.io/portfolio-rapterxcode`.
- **Architecture Decision Records:**
  - [ADR-0001: Portfolio Redesign Alignment](./docs/adr/0001-portfolio-redesign-alignment.md)
  - [ADR-0002: React 19.3, Zero-CVE Hardening, shadcn/ui & Firebase Hosting](./docs/adr/0002-react19-shadcn-firebase-hosting.md)

---

## 3. UI/UX Design System Specification (`shadcn/ui` + Executive Bright / Dark)

- **Design Persona:** Executive Bright (default) with Modern Dark Engineering toggle (Inspired by Linear, Vercel, Cloudflare Console, and Google Stitch tokens).
- **Semantic Tokens (`src/index.css`):**
  - Light Background: `#F8FAFC`, Foreground: `#0F172A`, Primary: `#0284C7`, Emerald Accent: `#059669`
  - Dark Background: `#070A11`, Foreground: `#F8FAFC`, Primary: `#06B6D4`, Emerald Accent: `#10B981`
- **Typography:**
  - Display & Body: `Plus Jakarta Sans`, `Inter`
  - Code / Badges / Metrics / CLI: `JetBrains Mono`
- **Accessible Interactive Primitives (`src/components/ui/`):**
  - Floating capsule navbar with `Avatar`, `Tooltip`, and Radix `Sheet` mobile drawer.
  - Hero Profile & Interactive ZSH Terminal console powered by Radix `Tabs`.
  - Filterable 19 Projects showcase (`Tabs` + `Input` with `useDeferredValue`) + Radix `Dialog` Architecture Deep-Dive modal.
  - 17 Certifications + 20 Training Courses (`Tabs`) + Radix `Dialog` Certificate Lightbox viewer.
  - Contact channels with clipboard copy feedback (`Tooltip`) and direct vector PDF CV download.
