# OVERLINE — Creative Studio Landing Page

A bold, dark, editorial-style landing page for **Overline Studio**, a creative agency that helps brands build identities reflecting where they're headed — not where they've been.

## Features

- Full-screen animated hero with layered imagery and staggered motion reveals (Framer Motion)
- Projects showcase: Chroma Shift, Soft Signal, Ground Zero, Neon Armour, Second Skin
- Services list: Brand Identity, Art Direction, Photography, Creative Strategy, Design
- About/team section, process/how-we-work, testimonials, contact section
- shadcn/ui component library (accordion, dialog, toast, etc.)
- Responsive mobile navigation with slide-in menu
- Minimal health-check API route (`/api`) returning a hello-world JSON

## Tech Stack

- Next.js 16 (App Router, TypeScript), React 19
- Tailwind CSS 4, Framer Motion, lucide-react icons
- shadcn/ui components, Radix UI primitives
- Prisma + SQLite schema present (not wired into the UI yet)
- Built/served via Bun scripts; deployable as a static export

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

The site is fully static-exportable (no server components with data fetching, no auth wired in):

```bash
npm run build      # outputs to out/
```

## Project Structure

```
.
├── src/
│   ├── app/           # App Router: layout, page, api route
│   ├── components/ui/ # shadcn/ui primitives
│   └── lib/           # utilities + Prisma client stub
├── public/images/     # hero + project imagery
├── prisma/            # SQLite schema (future use)
└── next.config.ts     # output: "export" for static hosting
```

## Deploy Notes

Deployed as a static site on GitHub Pages (built with `output: "export"`, served from `docs/`).

---

Built by Girish Lade — https://ladestack.in
