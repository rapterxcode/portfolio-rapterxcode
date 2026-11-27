# ADR 0002: React 19.3 Upgrade, Zero-CVE Hardening, shadcn/ui Adoption & GCP Firebase Hosting Migration

- **Status:** Accepted (Gate A & Gate B Approved by Owner)
- **Date:** 2026-11-27
- **Deciders:** Pasit Chatcharoenkit (Owner), System Architect & Tech Lead (AI Engineering Team)
- **Supersedes (Hosting & UI primitives):** Partially supersedes [ADR-0001](./0001-portfolio-redesign-alignment.md) hosting target (GitHub Pages archived on `deploy-github-page`)

## 1. Context & Constraints

- **Business Goal:** Modernize the portfolio SPA to the latest React 19 ecosystem, adopt accessible `shadcn/ui` primitives, eliminate all 21 known npm security vulnerabilities (including 1 Critical and 16 High), archive the prior GitHub Pages codebase on branch `deploy-github-page`, and migrate production hosting to GCP Firebase Hosting under project `raptorxcode` (Project Number `31940467839`).
- **Constraints:**
  - Preserve 100% of portfolio data (current role, 5 career milestones, 19 projects, 17 certifications, 20 trainings, PDF CV) and the Executive Bright (Light default) + Modern Dark Engineering identity.
  - Zero-cost hosting on Firebase Spark free tier with global CDN, automatic TLS, and strict OWASP HTTP security headers.
  - Keep reversible rollout and instant rollback capability.

## 2. Options Considered

### Hosting Topology

| Option | Pros | Cons | Cost & Ops Effort | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: Classic Firebase Hosting (Static SPA Global CDN)** | Global SSD CDN, zero-config TLS, SPA rewrites, custom headers, Preview Channels, 1-click release rollback, native match for Vite SPA. | Static client-side hosting only (no SSR needed). | **$0/mo (Spark free tier)**; minimal ops. | **Selected** |
| **Option B: Firebase App Hosting (Cloud Run + Cloud Build)** | Git-push deploy, SSR/ISR support. | Requires Blaze billing, built for Next.js/Angular SSR; unnecessary overhead for static Vite SPA. | Low-medium (Blaze required). | Rejected |
| **Option C: Cloud Run + Nginx Docker Container** | Reuses `Dockerfile`/`nginx.conf`. | Requires Blaze billing, Artifact Registry, container patching, no native preview channels. | Medium. | Rejected |

### Routing & CVE Reduction

| Option | Pros | Cons | Security & Bundle Impact | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: Remove `react-router-dom` & render `<App />` directly** | Ponytail simplicity (only 1 static `/` route existed), eliminates 13 HIGH `react-router` CVEs permanently, smaller JS bundle. | Re-add router if multi-page routes are needed later. | Removes 13 HIGH CVEs; ~25KB+ gzipped saved. | **Selected** |
| **Option B: Upgrade `react-router-dom` to `^7.18.7`** | Ready for multi-page routes immediately. | Retains unused runtime & ongoing CVE maintenance surface. | Patches current CVEs only. | Rejected |

### Icon Library Strategy

| Option | Pros | Cons | Bundle & Consistency | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: `lucide-react` + 3 lightweight SVG brand icons (GitHub, LinkedIn, LINE)** | Native `shadcn/ui` default, matches `design-system/MASTER.md`, removes all 5 `@fortawesome/*` packages. | Touch 11 component files for icon migration. | Consistent stroke system; smaller bundle. | **Selected** |
| **Option B: Keep `@fortawesome/*` alongside `lucide-react`** | Smaller diff. | Dual icon systems, inconsistent aesthetics, heavier JS bundle. | Redundant dependency tree. | Rejected |

## 3. Chosen Architecture & Boundaries

- **Git Branch Topology:**
  - `deploy-github-page`: Exact untouched snapshot (`81759b2`) of legacy GitHub Pages codebase (`base: '/portfolio-rapterxcode/'`, `gh-pages`).
  - `main`: Modernized React `19.3.1`, Vite `8.4.0` (Rolldown + Oxc), Tailwind CSS `4.3.5`, ESLint `10.15.0`, TypeScript `5.9.3`, `shadcn/ui` (`radix-ui` + `lucide-react`), root-path Firebase Hosting (`base: '/'`).
- **Component Boundaries:**
  - `src/components/ui/`: Authentic `shadcn/ui` primitives (`button`, `badge`, `card`, `dialog`, `tabs`, `sheet`, `input`, `separator`, `tooltip`, `avatar`, `scroll-area`) styled with Tailwind v4 CSS variables.
  - `src/contents/*`: Immutable typed portfolio data layer (Source of Truth for Resume/Projects/Certs/Skills).
  - `public/theme-init.js`: External synchronous FOUC-prevention script compliant with strict `script-src 'self'` CSP.

## 4. Reliability, Security & Observability

- **CVE Remediation:** Upgraded React 19.3.1, Vite 8.4.0, Tailwind 4.3.5, ESLint 10.15.0, `sonarqube-scanner` 5.1.0; removed `react-router-dom`, obsolete `@types/*`, `gh-pages`, and `@fortawesome/*` -> **`npm audit`: 0 vulnerabilities** (down from 21).
- **Security Headers (`firebase.json`):** Enforces `Content-Security-Policy` (`script-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`), `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, and `Permissions-Policy`.
- **Caching:** `/assets/**` immutable (`max-age=31536000, immutable`), `/index.html` (`no-cache`) for instant atomic deployments.
- **Automated Quality Gates:** CI workflow runs `npm audit --audit-level=moderate`, `eslint`, `tsc -b`, `vitest run`, and `vite build`.

## 5. Rollout & Rollback Plan

1. Snapshot `main` to `deploy-github-page` and push to `origin`.
2. Build & verify locally (`typecheck`, `lint`, `test`, `build`, `npm audit`).
3. Enable Firebase on GCP project `raptorxcode` (`projects:addfirebase raptorxcode`).
4. Deploy to Preview Channel (`preview-react19`), verify HTTP 200, security headers, SPA fallback, and live UI.
5. Deploy to Live Hosting (`https://raptorxcode.web.app`).
6. **Rollback:** Run `npx -y firebase-tools@latest hosting:rollback --project raptorxcode` for instant CDN rollback; legacy GitHub Pages remains intact on `deploy-github-page` and `origin/gh-pages`.
