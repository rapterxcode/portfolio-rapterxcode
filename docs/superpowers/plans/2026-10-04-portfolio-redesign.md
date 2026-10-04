# Implementation Plan: Pasit Chatcharoenkit Portfolio Redesign & Architecture Elevation

- **Date:** 2026-10-04
- **Author:** Root Orchestrator (Antigravity AI)
- **Target Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, React Router
- **Status:** Proposed (Awaiting Gate B Plan Approval)
- **Approved Design Specification:**
  - Architecture: React 19 Web SPA with App-like Native Feel (responsive, glassmorphism, tabs, modals).
  - Theme: Modern Dark Engineering (Deep Slate `#090D16`, Cyber Cyan `#06B6D4` & Emerald `#10B981` accents, frosted glass surfaces).
  - Data Strategy: Complete resume synchronization (Tech Soft @ AEON role, 19 enterprise/AI projects, 17 certs, 20 courses, 10 skill domains).

---

## Task Breakdown

### Task 1: Type Definitions & Content Synchronization
- **Files Modified / Created:**
  - `src/types/portfolio.ts` (New: strict TypeScript models for Profile, Experience, Project, SkillCategory, Certification, CourseTraining, Reference)
  - `src/contents/header.ts` (Update profile title, bio, contact links, status)
  - `src/contents/about.ts` (Update 6+ years summary and core enterprise strengths)
  - `src/contents/experience.ts` (Add Tech Soft @ AEON role, update dates and bullet achievements)
  - `src/contents/project.ts` (Replace placeholder with 19 enterprise & AI projects categorized)
  - `src/contents/skills.ts` (New: 10 structured skill domains with technology items)
  - `src/contents/certification.ts` (Synchronize 17 certifications + 20 course trainings)
  - `src/contents/contact.ts` (Update with LINE, Phone, multi-emails, and references)
- **Verification:**
  - `npm run build` succeeds without type errors.

---

### Task 2: Design System Tokens & Styling Refactor
- **Files Modified / Created:**
  - `index.html` (Add Inter and JetBrains Mono fonts, update meta title and favicon)
  - `src/index.css` (Define dark mode root styles, smooth scroll, custom sleek scrollbar)
  - `src/App.css` (Tailwind v4 `@theme` tokens: slate canvas, cyan/emerald glow, frosted glass borders)
- **Verification:**
  - Verify background color `#090D16`, glass cards, and theme variables render properly.

---

### Task 3: Architecture Refactoring & UI Primitives
- **Files Modified / Created:**
  - `src/sections/LeftSection/index.tsx` (Rename from `LelfSection` to `LeftSection`, fixing directory typo)
  - Remove `src/sections/Navbar/index copy.tsx` (Dead file cleanup)
  - `src/hooks/useScrollSpy.ts` (New: modern `IntersectionObserver` scrollspy replacing choppy scroll listener)
  - `src/components/Badge/index.tsx` (New: sleek tech pill badge with variants)
  - `src/components/Modal/index.tsx` (New: accessible modal dialog with backdrop blur)
  - `src/components/Tabs/index.tsx` (New: accessible category tab switcher)
- **Verification:**
  - Zero console errors during scroll navigation; active nav item updates smoothly.

---

### Task 4: Interactive Views & Sections Implementation
- **Files Modified / Created:**
  - `src/sections/Header/index.tsx` (Avatar with live pulsing status badge, role title, social links, resume download CTA)
  - `src/sections/Navbar/index.tsx` (Nav items with glowing active line and index numbers)
  - `src/sections/About/index.tsx` (Bio narrative + 4 key metric stat cards)
  - `src/sections/Experience/index.tsx` (Refactor experience timeline with badges and expandable details)
  - `src/sections/Projects/index.tsx` (Category tabs for Cloud/DevOps, AI/Automation, Infra/HCI; project modal viewer)
  - `src/sections/Skills/index.tsx` (New: interactive categorized skills matrix)
  - `src/sections/Certification/index.tsx` (Tabs for Certifications & Course Trainings, certificate image modal)
  - `src/sections/Contact/index.tsx` & `src/sections/Footer/index.tsx` (LINE, Phone, multi-email, references card)
  - `src/sections/RightSection/index.tsx` & `src/App.tsx` (Combine all sections into responsive grid with mobile drawer)
- **Verification:**
  - Full responsive layout works smoothly on 375px mobile, tablet, and 1440px desktop.

---

### Task 5: Production Build & Quality Gate Verification
- **Commands:**
  - `npm run lint` -> 0 errors / 0 warnings
  - `npm run build` -> Production bundle compiled cleanly to `dist/`
  - Generate `VALIDATION.md` with complete evidence
- **Verification:**
  - Ready for deployment to GitHub Pages.
