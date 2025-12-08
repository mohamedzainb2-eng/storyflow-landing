# Storyflow Landing – Cinematic Web UI Portfolio

A cinematic scroll landing page that showcases a collection of **real, production-style web interfaces** built by **Mohamed El-Husseiny** – focusing on **front-end engineering, UI design, RTL support, and motion design**.

This project is both a **personal portfolio** and a **UX experiment** in how to present multiple projects as a single, smooth, story-driven scroll.

---

## 🔗 Live Demo

> To be updated after deployment  
> Recommended: GitHub Pages – e.g.  
> `https://mohamedzainb2-eng.github.io/storyflow-landing/`

---

## 🎯 Concept

Instead of a flat list of projects, **Storyflow Landing** presents each work as a separate **“universe”** inside one continuous scroll:

- A calm, cinematic **hero** that introduces who I am and how I think about interfaces.
- A sequence of **scroll scenes**, each one dedicated to a single project.
- Smooth, section-based **scroll snapping** on desktop, so each project feels like a “chapter”.
- A focused **contact outro** with multiple ways to start a professional conversation.

All of the showcased projects are **live** and each has its own **repository**.

---

## 🧩 Projects Showcased

| # | Project | Type | Live Demo | Repository |
|---|---------|------|-----------|-----------|
| 01 | **Mini Shop – Single Page Store** | Single-page e-commerce (HTML/CSS/JS) | https://mohamedzainb2-eng.github.io/single-page-website/ | https://github.com/mohamedzainb2-eng/single-page-website |
| 02 | **Real Estate UI** | RTL real estate interface (React/Vite) | https://mohamedzainb2-eng.github.io/real-estate-ui/ | https://github.com/mohamedzainb2-eng/real-estate-ui |
| 03 | **Admin Control Dashboard** | Admin dashboard (React/Vite/TS) | https://mohamedzainb2-eng.github.io/dashboard-admin/ | https://github.com/mohamedzainb2-eng/admin-dashboard-react-vite |
| 04 | **Animation Studio** | Web-based animation editor | https://mohamedzainb2-eng.github.io/animation-studio/ | https://github.com/mohamedzainb2-eng/animation-studio |
| 05 | **HoloSpace OS** | 3D web spatial operating system | https://mohamedzainb2-eng.github.io/holospace-web/ | https://github.com/mohamedzainb2-eng/holospace-spatial-os |

---

## ✨ Key Features

### 1. Cinematic Scroll Experience

- Section-based **scroll scenes** with fade/translate-on-scroll.
- Desktop **scroll snapping** so each section “locks” into view:
  - Applied globally via CSS (`scroll-snap-type: y mandatory`).
  - Each scene uses `scroll-snap-align: start`.
- **Framer Motion** + **GSAP ScrollTrigger** for smooth, controlled animation.
- Ambient **per-section glow** using radial gradients that match each project’s “universe”.

### 2. Bilingual & RTL Aware

- Full support for **English** and **Arabic**.
- Global `<html dir="ltr|rtl">` & `lang` are updated via a custom `LanguageProvider`.
- Layout flips direction in Arabic:
  - Text blocks align to the right.
  - Project image column moves to the left, text to the right.
- All copy is stored as **localized objects** (EN/AR).

### 3. Project Story Sections

Each project section contains:

- **Cinematic title** with staggered word animation.
- Tagline and description in both EN/AR.
- Structured “story” highlights:
  - Key points
  - Focus
  - Role / responsibility
- Tech stack as rounded tags.
- Screen viewer with:
  - Active screen indicator
  - Dots navigation
  - Auto-rotation every few seconds.

### 4. Contact & CTA

Outro section provides multiple ways to start a conversation:

- **Email** button using a real `mailto:` link.
- **GitHub** profile shortcut.
- **LinkedIn** profile shortcut.
- **WhatsApp** deep-link with a prefilled intro message.

---

## 🛠 Tech Stack

- **Core**
  - React
  - TypeScript
  - Vite

- **Styling**
  - Tailwind CSS
  - Custom CSS for:
    - Scroll snapping
    - Background grids
    - Glow animations

- **Motion & Scroll**
  - Framer Motion
  - GSAP + ScrollTrigger
  - Custom hooks for parallax and scroll progress

- **i18n / RTL**
  - Custom `LanguageContext` (no external i18n library)
  - Localized content models & utility helpers

---

## 📁 Project Structure (High Level)

```bash
src/
├── App.tsx
├── main.tsx
├── index.css
├── styles/
│   ├── animations.css        # keyframes, glow, float, scroll-snap tuning
│   └── globals.css           # (if used) extra global styles
├── layout/
│   └── PageLayout.tsx        # Navbar, top scroll progress, main layout
├── components/
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── CinematicTitle.tsx
│   ├── ProjectSection.tsx
│   ├── ScrollScene.tsx
│   ├── ProjectPreviewCarousel.tsx (optional, for sliding previews)
│   └── OutroSection.tsx
├── scenes/
│   ├── hero/
│   │   └── HeroScene.tsx
│   ├── project/
│   │   └── ProjectScene.tsx
│   └── outro/
│       └── OutroScene.tsx
├── core/
│   ├── i18n/
│   │   └── LanguageContext.tsx
│   └── hooks/
│       ├── useParallax.ts
│       └── useScrollProgress.ts
├── data/
│   ├── projects.ts           # structured definitions for each showcased project
│   └── contact.ts            # CONTACT_EMAIL, CONTACT_GITHUB, CONTACT_LINKEDIN
└── types/
    └── content.ts            # shared types for localized strings & project copy
