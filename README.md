# Advanced CSS Themes & Animations

A theming system built with CSS variables, four switchable colour modes, keyframe animations, responsive Grid/Flexbox layouts, and full accessibility support.

---

## What This Project Does

The site is a four-page showcase that demonstrates every concept from the Advanced CSS Themes & Animations course brief. You can switch between four completely different colour themes — Dark, Light, Ocean, and Forest — using the buttons in the navbar, and every single element on the page updates instantly. No page reload, no flash, no JavaScript colour logic. It all works because every colour in every CSS file is a variable, never hardcoded.

---

## Pages

- **Home** (`index.html`) — Hero section, theme showcase, feature overview, animation preview cards
- **Components** (`pages/components.html`) — Buttons, badges, cards, form inputs, toggles, progress bars, skeleton loaders, tooltips
- **Animations** (`pages/animations.html`) — Entrance animations, stagger effects, micro-interactions, typewriter, ping/ripple, shimmer, rotating border, easing demos
- **Accessibility** (`pages/accessibility.html`) — Skip link demo, focus rings, reduced motion, contrast ratios, ARIA table, WCAG AA checklist

---

## How to Run It

This project has zero dependencies and no build step. Just open the files.

**Option 1 — Double click:**
Open `index.html` directly in any browser. Done.

**Option 2 — Local server (recommended, avoids any browser file restrictions):**

If you have VS Code, install the **Live Server** extension, right-click `index.html` and choose "Open with Live Server".

Or with Node.js:
```bash
npx serve .
```

Or with Python:
```bash
python -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

---

## Directory Structure

```
advanced-css/
│
├── index.html                  ← Home page
│
├── pages/
│   ├── components.html         ← UI component library
│   ├── animations.html         ← Keyframe animation demos
│   └── accessibility.html      ← A11y features & WCAG checklist
│
├── css/
│   ├── variables.css           ← All 4 themes defined here (CSS custom properties)
│   ├── reset.css               ← Modern CSS reset
│   ├── layout.css              ← CSS Grid & Flexbox page layouts
│   ├── components.css          ← All UI components (buttons, cards, forms, etc.)
│   ├── animations.css          ← All @keyframes and animation utility classes
│   └── accessibility.css       ← Skip link, focus rings, prefers-reduced-motion
│
└── js/
    ├── theme.js                ← Theme switcher (reads/saves to localStorage)
    ├── animations.js           ← IntersectionObserver for scroll-triggered animations
    └── nav.js                  ← Mobile hamburger menu toggle
```

---

## What I Learned Building This

**CSS Custom Properties (Variables)** — Every colour, shadow, and gradient is a variable. The four themes are defined as `[data-theme="dark"]`, `[data-theme="light"]` etc. blocks in `variables.css`. Switching themes means changing one attribute on the `<html>` element. Everything else cascades automatically.

**CSS Grid and Flexbox** — Grid handles the big picture layout (hero two-column, feature grids, page structure). Flexbox handles component internals (button rows, nav items, card headers). The key Grid trick used throughout is `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))` — it creates as many columns as fit without any media queries.

**Keyframe Animations** — Every animation is defined with `@keyframes` in `animations.css`. The JS just adds or removes classes — it never touches animation values. Scroll-triggered animations use the `IntersectionObserver` API to add `.is-visible` when an element enters the viewport.

**prefers-reduced-motion** — The most important accessibility feature in the project. One `@media (prefers-reduced-motion: reduce)` block in `accessibility.css` sets `animation-duration: 0.01ms !important` on everything. This effectively disables all motion for users who need it, without removing the animations for everyone else.

**Accessible Focus States** — Using `:focus-visible` instead of `:focus` means the custom focus ring only appears during keyboard navigation, not when clicking with a mouse. This is the modern correct approach.

---

## Requirements Coverage

| Requirement | Where it's implemented |
|---|---|
| Theme switching with CSS variables | `css/variables.css` — four `[data-theme]` blocks, `js/theme.js` |
| Responsive layout with Grid/Flexbox | `css/layout.css` — throughout, auto-fill grids, mobile-first |
| Accessible focus states | `css/accessibility.css` → `*:focus-visible` block |
| Keyframe animations and transitions | `css/animations.css` — 14 named `@keyframes`, utility classes |
| prefers-reduced-motion support | `css/accessibility.css` → `@media (prefers-reduced-motion: reduce)` |

---

## Technologies

- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- CSS Keyframe Animations & Transitions
- IntersectionObserver API (vanilla JS)
- WCAG 2.1 AA Accessibility standards
- No frameworks, no build tools, no dependencies
