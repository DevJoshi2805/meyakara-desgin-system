# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Meyakara is a clothing brand design system — not a build-tooled software project. There is no package.json, no build step, no test suite, and no linter. The repo contains:

- **`colors_and_type.css`** — the single source of truth for design tokens (CSS custom properties): paper/ink foundation, five collection palettes, type scale, spacing, motion, radii, shadows, and semantic element styles.
- **`fonts/`** — brand-licensed font files: Stoke (Light 300, Regular 400) and Tiro Devanagari Hindi (Regular, Italic).
- **`assets/`** — logos (wordmark, circle, Devanagari मे monogram), favicon, and the Brand Ideology PDF.
- **`ui_kits/storefront/`** — hi-fi storefront interpretation as static HTML + JSX reference components. Not wired to a framework; used as copy-paste source.
- **`preview/`** — standalone HTML cards that visualise every design token and component.
- **`SKILL.md`** — skill manifest so Claude can be invoked as the brand's senior designer.

## Architecture: how tokens work

All colour is driven by CSS custom properties in `colors_and_type.css`:

1. **Foundation** (`--paper`, `--ink` and their variants) is constant across all collections.
2. **Collection palettes** — five sets (`--dhundh-*`, `--baar-*`, `--raat-*`, `--mandarin-*`, `--lino-*`) define 4–5 colours each.
3. **Accent pointer** (`--accent`, `--accent-soft`, `--accent-deep`, `--accent-tint`) — components bind to these. To activate a collection, re-point the accent vars on a wrapper element. Components never hard-code collection colours.

UI kit components (`ui_kits/storefront/*.jsx`) import `../../colors_and_type.css` and rely on these variables.

## Non-negotiable brand rules

When generating or editing any artifact in this repo:

- **No pure black (`#000`) or pure white (`#FFF`)** — use `var(--ink)` and `var(--paper)`.
- **No sans-serif fonts.** Stoke for Latin, Tiro Devanagari Hindi for Hindi. The serif feet are part of the voice.
- **No emoji, no exclamation marks, no countdown timers, no urgency copy.**
- **Indian English spelling** — colour, centre, honour.
- **Sentence case** for prose; **ALL CAPS + wide tracking** only for labels/eyebrows.
- **The wordmark contains a Devanagari म between MEY and KARA** — never remove or replace it.
- The मे monogram (`favicon.svg`) is for favicon/tiny-space only; everywhere else use the wordmark.
- Hairlines, not shadows. Paper, not gradients. Fades, not slides. Near-zero radii.
- The design system's primary language is English. Collection names may appear in English, Hindi (Devanagari), or both — this is a team decision per collection and is not a design-system constraint.

## Working with this system

- To create new pages or components: copy `colors_and_type.css` into the `<head>`, use `var(--*)` tokens throughout, and follow the voice/layout rules in `README.md §2–3`.
- To preview tokens: open any file in `preview/` in a browser.
- To activate a collection palette on a section, redeclare `--accent-*` vars on a parent element (see `README.md §5`).
- The storefront UI kit is an interpretation, not a recreation of an existing site. Flag this to users when handing off.
