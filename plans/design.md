# Design Decisions - Akurati Kaustiki Portfolio

## Aesthetic Direction
Unified coder/terminal aesthetic - everything feels like code. Monospace fonts throughout, pure black & white theming, terminal as the primary interaction pattern.

---

## Colors

### Light Mode
| Role | Hex |
|------|-----|
| Background | #FFFFFF |
| Surface | #F5F5F5 |
| Text | #000000 |
| Border | #E0E0E0 |
| Muted | #666666 |
| Terminal BG | #F0F0F0 |

### Dark Mode
| Role | Hex |
|------|-----|
| Background | #000000 |
| Surface | #1A1A1A |
| Text | #FFFFFF |
| Border | #333333 |
| Muted | #999999 |
| Terminal BG | #0D0D0D |

- No accent colors - pure monochrome
- Terminal colors invert: light mode = black text on white, dark mode = white text on black

---

## Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | JetBrains Mono | 700 |
| Body | JetBrains Mono | 400 |
| Terminal | JetBrains Mono | 400 |

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 2.5rem | 700 | 1.2 |
| H2 | 1.75rem | 700 | 1.3 |
| H3 | 1.25rem | 600 | 1.4 |
| Body | 1rem | 400 | 1.6 |
| Code | 0.875rem | 400 | 1.5 |

---

## Layout

- Max width: 1200px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Grid: CSS Grid for layouts

### Spacing Scale
| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 48px |
| 2xl | 64px |

---

## Components

### Hero Section
- Split layout: 50% profile photo (left), 50% interactive terminal (right)
- Mobile: stacked vertically
- Profile photo: circular, placeholder with initials
- Terminal: full command-line interface with blinking cursor

### Terminal Interface
- Interactive command input
- Available commands:
  - `help()` - List all commands
  - `df.info` - Name, title, description
  - `education.head()` - Education details
  - `experience.head()` - Work experience
  - `skills.head()` - Technical skills
  - `projects.head()` - Featured projects
  - `clear` - Clear terminal
  - `theme.toggle()` - Switch light/dark mode
- Output displayed as formatted code blocks
- Auto-scroll to bottom on new output

### Cards
- Background: surface color
- Border: 1px solid border color
- Radius: 4px (minimal, code-like)
- Padding: 16px

### Buttons
- Background: transparent
- Border: 1px solid text color
- Padding: 8px 16px
- Hover: inverted colors (text becomes bg)
- Min-height: 40px

### Navigation
- Fixed top, background color, 56px height
- Links: monospace, uppercase
- Mobile: simple stacked menu

### Timeline (Git-Log Style)
- Mimics `git log --oneline` output format
- Marker: `*` character (8px circle) at each entry
- Connector: vertical pipe `|` between entries (2px solid)
- Structure:
  ```
  * (HEAD) -> Role/Title
  │   Company/Institution | Dates
  │   > Detail line 1
  │   > Detail line 2
  │
  * Previous Role/Title
  │   Company/Institution | Dates
  ```
- Most recent entry marked with `(HEAD)`
- Details indented with `> ` prefix
- Minimal, code-native aesthetic

---

## Animation

| Type | Duration | Easing |
|------|----------|--------|
| Fade in | 200ms | ease-out |
| Hover | 150ms | ease |
| Terminal blink | 1s | step-end |

- Minimal animations - code executes, things appear
- No bouncy, spinning, or elaborate transitions

---

## Section Order

1. Hero (with terminal)
2. About
3. Skills
4. Projects
5. Experience
6. Education
7. Fine Arts
8. Certifications
9. Contact

---

## Background Pattern

### Neural Network Pattern
- Subtle SVG pattern of connected nodes (neural network visualization)
- Applied to: Hero section background only
- Opacity: 4% (barely visible, adds depth without distraction)
- Color: Inherits text color (adapts to theme)
- Nodes: 4px circles, randomly positioned
- Connections: 1px lines between nearby nodes
- Generated via JavaScript on page load
- Static (not animated) to maintain performance

---

## Anti-Patterns Forbidden

- Any color other than black/white
- Sans-serif fonts
- Rounded corners > 8px
- Gradients
- Shadows (except subtle pattern)
- Decorative elements (except neural network pattern)
- Carousels or sliders
- Overly polished "corporate" feel
