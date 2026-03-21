# Design Decisions - Akurati Kaustiki Portfolio

## Reference
Inspired by ascendmarketing.xyz - clean, professional, generous whitespace.

---

## Colors

| Role | Hex |
|------|-----|
| Background | #FFFFFF, #F8FAFC |
| Text | #334155, #64748B |
| Primary | #0F172A |
| Accent | #0D9488 |
| Accent Hover | #0F766E |
| Border | #E2E8F0 |

- Use teal sparingly (CTAs, links only)
- No gradients on large surfaces
- No purple, cyan, neon

---

## Typography

| Role | Font | Weights |
|------|------|---------|
| Headings | Sora | 600, 700 |
| Body | Inter | 400, 500 |
| Code | JetBrains Mono | 400 |

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 3.5rem | 700 | 1.1 |
| H2 | 2rem | 600 | 1.2 |
| H3 | 1.25rem | 600 | 1.3 |
| Body | 1rem | 400 | 1.6 |

---

## Layout

- Max width: 1200px
- Section padding: 96px vertical (desktop), 64px (tablet), 48px (mobile)
- Grid: 12-col desktop, 8-col tablet, 4-col mobile

### Spacing Scale
| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |

---

## Components

### Cards
- Background: white, Border: 1px #E2E8F0, Radius: 8px
- Padding: 24px, Shadow: 0 1px 3px rgba(0,0,0,0.05)
- Hover: border → teal

### Buttons
| Type | Style |
|------|-------|
| Primary | Teal bg, white text |
| Secondary | White bg, teal border/text |
| Ghost | No bg, teal text, hover underline |

- Padding: 12px 24px, Min-height: 44px

### Navigation
- Fixed top, white bg, 72px height, border-bottom
- Logo left, links right, mobile hamburger

### Timeline
- Vertical line: 2px teal, dots: 12px teal circles

### Form Inputs
- Height: 48px, border: 1px #E2E8F0, radius: 6px
- Focus: 2px teal ring

---

## Animation

| Type | Duration |
|------|----------|
| Fade in | 400ms ease-out |
| Hover lift | 200ms ease-in-out |
| Button hover | 150ms ease |

- Respect `prefers-reduced-motion`
- No parallax, no spinning, no confetti

---

## Section Order

1. Hero
2. About
3. Skills
4. Experience
5. Projects
6. Fine Arts
7. Education
8. Certifications
9. Contact
10. Footer

---

## Anti-Patterns Forbidden

- Purple/violet gradients
- Neon accents
- Center-everything
- Text gradients
- Bouncing/spinning
- Typewriter text
- Carousel/slider
- Space Grotesk
- Decorative elements without purpose
