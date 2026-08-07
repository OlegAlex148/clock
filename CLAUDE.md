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

## Git Workflow

This project follows **GitHub Flow** for branch management and contributions.

### Branch Naming Convention

- `feat/<feature-name>` — for new features (e.g., `feat/mobile-layout-fix`)
- `fix/<issue-name>` — for bug fixes (e.g., `fix/timezone-handling`)
- `docs/<doc-name>` — for documentation updates (e.g., `docs/setup-guide`)
- `refactor/<area>` — for code refactoring (e.g., `refactor/clock-logic`)

### Workflow Steps

1. **Create feature branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/your-feature-name
   ```

2. **Commit changes** following Conventional Commits (see below)

3. **Push to remote**:
   ```bash
   git push -u origin feat/your-feature-name
   ```

4. **Create Pull Request** on GitHub with:
   - Clear description of changes
   - Reference to any related issues
   - Steps to test the changes

5. **Merge to main** after review approval

6. **Delete feature branch** after merge (locally and on remote)

### Pull Request Description Guidelines

All PRs should include:

- **Summary** section describing what was implemented/changed
- **Testing** section with steps to verify the changes
- **Related Issues** (if applicable) with references to GitHub issues
- **Notes** section for any important context or caveats (optional)

**Example PR description structure:**
```
## Summary
- Brief description of the feature or fix
- Key changes made

## Testing
- Steps to test the changes
- Devices/browsers tested (for UI changes)
- Test coverage added (if applicable)

## Related Issues
Closes #<issue-number> (if applicable)

## Notes
Any additional context (optional)
```

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

## Документация
При добавлении функционала проверяй .claude/docs/*.
Актуализируй файлы при изменении архитектуры.
