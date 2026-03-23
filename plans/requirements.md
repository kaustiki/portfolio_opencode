# Technical Requirements - Akurati Kaustiki Portfolio

## Tech Stack

| Category | Choice | Notes |
|----------|--------|-------|
| Markup | HTML5 | Semantic HTML |
| Styling | CSS3 | CSS Custom Properties for theming |
| Language | Vanilla JavaScript | ES6+ modules |
| Fonts | JetBrains Mono | Google Fonts |
| Build | None | Plain files, no bundler |

## File Structure

```
/portfoliov3
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── terminal.js
│   ├── theme.js
│   └── neural-pattern.js
├── data/
│   └── portfolio.js
├── assets/
│   └── (images)
└── plans/
```

## Dependencies

- Google Fonts: JetBrains Mono (all weights: 400, 500, 600, 700)
- No external libraries or frameworks

## Section Requirements

### Navigation
- Fixed header, smooth scroll to sections
- Theme toggle button
- Simple horizontal links, hamburger on mobile

### Hero
- 50/50 split: profile photo (left), interactive terminal (right)
- Profile photo: circular placeholder with initials "AK"
- Terminal: input field + output area
- Interactive commands as specified in design.md
- Neural network background pattern (SVG, 4% opacity)

### Neural Network Pattern
- Generate via JavaScript (js/neural-pattern.js)
- 30-50 nodes randomly positioned
- Connect nodes within 150px distance
- Render as inline SVG in hero background
- Regenerate on theme change

### About
- Professional summary paragraph
- Key highlights as bullet points

### Skills
- Categorized list: AI/ML, MLOps, Programming, Soft Skills
- Simple list format, no fancy cards

### Experience
- Vertical timeline format
- Entries: TCS, DigiYosha
- Role, dates, responsibilities

### Projects
- Featured project (Violence Detection)
- Simple grid for other projects
- Tech stack badges
- GitHub link for each project
- Demo link if available

### Fine Arts
- Categorized: Dance, Music, Martial Arts, Chess
- Simple list format

### Education
- Timeline cards: BITS Pilani M.Tech, Anna University B.E.
- Dates and CGPA

### Certifications
- Badge format with credential name and issuer

### Contact
- Email link (mailto)
- Phone number
- Address
- GitHub link
- LinkedIn link
- No form (simple links)

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, stacked hero |
| Tablet | 768-1024px | 2-column grids |
| Desktop | > 1024px | Full layout |

## Theme System

### CSS Custom Properties
```css
:root {
  --bg: #FFFFFF;
  --surface: #F5F5F5;
  --text: #000000;
  --border: #E0E0E0;
  --muted: #666666;
  --terminal-bg: #F0F0F0;
}

[data-theme="dark"] {
  --bg: #000000;
  --surface: #1A1A1A;
  --text: #FFFFFF;
  --border: #333333;
  --muted: #999999;
  --terminal-bg: #0D0D0D;
}
```

### Theme Toggle
- JS-based toggle (localStorage persistence)
- Affects entire site including terminal

## Terminal Features

### Command Parser
- Case-insensitive commands
- Trim whitespace
- Support `command()` and `command` syntaxes

### Built-in Commands
| Command | Description |
|---------|-------------|
| `help()` | Display all available commands |
| `df.info` | Display name and title |
| `model.summary()` | Display profile overview |
| `education.head()` | Display education entries |
| `experience.head()` | Display work experience |
| `skills.head()` | Display technical skills |
| `projects.head()` | Display projects |
| `finearts.head()` | Display fine arts |
| `contact.head()` | Display contact info |
| `clear` | Clear terminal output |
| `theme.toggle()` | Toggle light/dark mode |
| `history` | Show command history |

### Welcome Message
On terminal load, display typing animation:
```
>>> import akurati as ak
>>> ak.info
```
Then show df.info output

### Command History
- Store last 20 commands in session
- Up arrow: previous command
- Down arrow: next command
- History persists during session only

### Tab Completion
- Press Tab to autocomplete commands
- Cycle through matching commands

### Output Formatting
- JSON data pretty-printed
- Tables aligned with spaces
- Monospace throughout

## Browser Support

- Last 2 versions of Chrome, Firefox, Safari, Edge
- No IE support

## Performance Targets

- First Contentful Paint < 1s
- Total page size < 500KB
- No render-blocking resources
