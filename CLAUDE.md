# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimal web clock that displays the current time with seconds precision. Uses vanilla JavaScript, HTML5, and Tailwind CSS for styling (loaded via CDN).

**Files:**
- `index.html` — HTML structure, Tailwind styles, clock display element
- `script.js` — JavaScript logic that updates the clock every second

## Running the Project

### Local development
```bash
# Start HTTP server to serve files
python3 -m http.server 8000

# Then open in browser: http://localhost:8000
```

Alternatively, open `index.html` directly in a browser (double-click).

### Testing
- Clock should display time in format `HH:MM:SS`
- Seconds should update every 1 second (synchronized with system time)
- Display should be centered on the page with readable typography

## Architecture Notes

- **No build step required** — Tailwind CSS loaded from CDN for simplicity
- **Vanilla JS only** — No frameworks, no dependencies
- Uses `setInterval(1000)` to update clock display each second
- `padStart(2, '0')` ensures zero-padding for single-digit hours, minutes, seconds
- Font is monospaced (`font-mono`) to prevent width shifts when numbers change

## Commit Message Convention

Use Conventional Commits format:

```
<type>(<scope>): <subject>

<body>
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `style` — code style changes (formatting, missing semicolons, etc.)
- `refactor` — code refactoring without feature or fix
- `docs` — documentation changes
- `chore` — maintenance tasks, dependencies

**Examples:**
- `feat(footer): add year display in footer`
- `fix(clock): correct timezone handling`
- `style: format code with prettier`
- `docs: update README with setup instructions`

Keep commits atomic and focused. Each commit should represent a single logical change.
