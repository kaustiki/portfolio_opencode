# Technical Requirements - Akurati Kaustiki Portfolio

## Tech Stack

| Category | Choice | Notes |
|----------|--------|-------|
| Framework | Next.js 14+ | App Router |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | CSS variables for theming |
| Animation | Framer Motion | Minimal transitions |
| Fonts | Sora + Inter | Google Fonts |
| Deployment | Vercel | Auto-deploy |

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0"
  }
}
```

## Section Requirements

### Navigation
- Fixed header, smooth scroll, mobile hamburger menu, active section highlighting

### Hero
- Full viewport, name, title, professional summary, 2 CTA buttons

### About
- Personal profile paragraph, key highlights

### Skills
- Categorized grid: AI/ML, MLOps, Programming, Soft Skills

### Fine Arts
- Separate visual treatment: Dance, Music, Martial Arts, Chess

### Experience
- Vertical timeline: TCS, DigiYosha with role/responsibilities

### Projects
- Featured card (Violence Detection), grid for others, tech badges

### Education
- Timeline/cards: BITS Pilani M.Tech, Anna University B.E.

### Certifications
- Badge format: IIIT Hyderabad PG Certification

### Contact
- Form (name, email, message), contact info, address

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column |
| Tablet | 640-1024px | 2-column grid |
| Desktop | > 1024px | Full layout |

## Requirements Summary

- Performance: Lighthouse > 90, FCP < 1.5s
- Accessibility: WCAG 2.1 AA, keyboard nav, contrast 4.5:1
- Browser: Last 2 versions Chrome, Firefox, Safari, Edge
