# Meyakara Design System

> **The Shape of Your Escape.**
> Born in India. Wardrobe of the world. Est. 2026.

Meyakara is a clothing brand built on a single belief: every person has an
escape — a place, a garment, a feeling — and the brand exists to give that
escape a *shape*. The name is constructed from two Hindi roots: **Meya**
(from *Mera*, "mine") and **Kara** (from *Aakara*, "shape"). My Shape. My Fit.
My Escape. The brand never explains the name on the product. The discovery
belongs to the customer.

This design system encodes that quiet, unhurried, slightly poetic voice
into reusable design tokens, typography, palettes, components, and a UI kit
for the brand's storefront.

---

## Index

| File / Folder | What's in it |
| --- | --- |
| `README.md` | This file — brand context, content & visual fundamentals, iconography. |
| `SKILL.md` | Skill manifest for Claude / Claude Code. |
| `colors_and_type.css` | Design tokens — paper & ink foundation, 5 collection palettes, type scale, spacing, motion, semantic element styles. |
| `assets/` | Logo (wordmark, circle, monogram), favicon, brand ideology PDF. |
| `preview/` | Cards rendered into the Design System tab — type, colors, spacing, components, brand. |
| `ui_kits/storefront/` | Hi-fi recreation of the Meyakara storefront — homepage, collection page, product page, journal entry. |

---

## 1 · The brand in one paragraph

Meyakara doesn't sell clothing. It sells the act of leaving. Each collection
is a *door* — a complete world with its own palette, silhouette, and
emotional truth — drawn from either an external place (the hills, the beach,
a nightclub, a long train journey), an internal heritage (the Mandarin
collar, Italian linen, the kaftan), or the convergence of the two ("Poised
Pulse" = nightclub × mandarin collar; "Total Fluidity" = riverside × kaftan).
The tagline *The Shape of Your Escape* is printed inside every tag. It is
the one constant across an ever-changing universe of escapes.

**Sources used to build this system**

- `assets/Meyakara_Brand_Ideology.pdf` — the full 8-page founder document.
  Treat as the source of truth for voice, philosophy, and the collection
  system. Quoted lines in this README are taken directly from it.
- `assets/logo-wordmark.jpg`, `assets/logo-wordmark.svg`, `assets/logo-circle.png`,
  `assets/logo-circle-bg.jpg` — the wordmark with a Devanagari **आ** 
  embedded mid-word, and the circular sticker version.
- `assets/favicon.svg` — the standalone Devanagari **मे** monogram inside
  its hairline circle, vector. **Preferred** at only small size.
- `assets/favicon.png` / `assets/mark-devanagari-me.png` — same mark as a
  raster fallback for surfaces that can't render SVG.
- No codebase, Figma, or live storefront has been provided yet — the UI kit
  in `ui_kits/storefront/` is an *interpretation* of the brand ideology, not
  a recreation of an existing site. **Flag this to the user** when handing
  off; once a real site or Figma exists, this kit should be re-anchored to
  it.

---

## 2 · Content fundamentals

> "Every word Meyakara puts into the world should feel like something
> written at a campfire. Not a brand speaking. A feeling, whispering."

### Voice — four rules, in this order

1. **Short.** One or two sentences. Rarely more. Brevity is respect.
2. **Unhurried.** Never urgent. If it sounds like a notification — rewrite it.
3. **Poetic.** Not purple prose. Just the *exact right word*. The one that
   makes someone stop.
4. **Trusted.** The brand trusts the audience to feel without being told
   exactly what to feel. Hint; never instruct.

### Casing & punctuation

- **Sentence case** for everything that runs as prose — buttons that read
  like phrases ("Find your shape"), captions, headlines.
- **ALL CAPS, wide tracking** reserved for *labels* and *eyebrows* — section
  numbers (`01 — THE NAME`), nav items, CTA chips. Never for full sentences.
- The brand ideology document uses an em-dash `—` between section numbers
  and titles (`04 — THE COLLECTION SYSTEM`). Mirror this.
- No exclamation marks. No emoji. No countdown timers. No "Hurry!" or
  "Last chance!". Loudness is what the customer is escaping from.
- Indian English spelling: **colour**, **honour**, **centre**.
- **Collection naming is a team decision, not a design-system rule.** The design system's primary language is English. A collection name may be in English, Hindi (Devanagari), or presented alongside both — whichever the team decides for that collection. Current collections: **Dhundh (धुंध) · Baar (बार) · Raat (रात) · Mandarin · Lino**. When a Hindi name appears in a Latin-script context, a transliteration may accompany it for clarity, but there is no prescribed canonical form.

### Pronouns — *you*, almost never *we*

The customer is the protagonist. The brand recedes. Use **you** when
addressing the reader. Use **we** sparingly, only for first-person brand
beliefs ("We don't sell clothing. We sell the act of leaving.").

### Vibe checklist

- ✓ "Find the shape."
- ✓ "Everyone has a hill. This is yours."
- ✓ "The city will wait. The hills won't."
- ✓ "Wear your escape."
- ✓ "Born in India. Wardrobe of the world."
- ✗ "Shop the new drop now! 🔥"
- ✗ "Limited stock — don't miss out!"
- ✗ "Our mission is to empower self-expression through curated…"

### Product copy pattern

```
[ Collection codename — Hindi, italicised ]
[ Tagline — 4–8 words, sentence case, may end with a period ]
[ Body — 1–3 sentences. The escape, stated. Never the product. ]
[ Quiet CTA — 2–3 words, ALL CAPS, wide tracking ]
```

Example, *Dhundh* (Hills, summer):

> *Dhundh.*
> Everyone has a hill. This is yours.
> Light cotton cut for the city, dyed in the colours of a 6am ridge line.
> ENTER THE COLLECTION

---

## 3 · Visual foundations

### Colour philosophy

Meyakara has **no fixed brand colour**. The palette shifts with every
collection because every escape has its own palette — and that palette is
not invented, it is *found*. Colours must already exist in the place or
garment tradition the collection draws from.

What stays constant is the **foundation**:

- **Paper** — an unbleached, never-pure-white canvas (`#F1ECE0`). Sampled
  directly from the logo card. This is the page background everywhere.
- **Ink** — a soft, not-quite-black (`#1A1814`) for type, marks, and
  hairline rules. Never `#000`.

Five collection palettes are defined as CSS variables in
`colors_and_type.css`:

| Codename | World | Palette |
| --- | --- | --- |
| **Dhundh** (धुंध) | The Hills | fog white · cool blue-grey · muted pine · stone · deep |
| **Baar** (बार) | The Beach | bleached linen · sun-faded coral · salt grey · driftwood · tide |
| **Raat** (रात) | Nightlife | midnight · electric violet · neon-bleed gold · rose bleed · smoke |
| **Mandarin** | The Collar | ink blue · aged ivory · slate · worn silk · deep |
| **Lino** | Italian Linen | sun cream · warm stone · dusty terracotta · faded olive · sun |

Hard rules:

- Maximum **4–5 colours per collection**. All must "feel like they belong
  to the same sky."
- If the palette becomes incoherent, the collection has lost its escape —
  cut a colour.
- The accent set (`--accent`, `--accent-soft`, `--accent-deep`,
  `--accent-tint`) is a *pointer*. Re-point it per collection. Components
  do not hard-code collection colours.

### Type

- **Stoke** — Latin display & body. A warm, slab-influenced serif with
  generous bracketed feet, set wide. The brand wordmark *is* Stoke. Use it
  for everything Latin.
- **Tiro Devanagari Hindi** — Hindi display & body. A traditional, slightly
  pointed serif with strong shirorekha (head-line). Used for collection
  codenames (*Dhundh*, *Raat*) and the occasional pull-quote.
- Both faces are loaded as **local brand files** from `fonts/` via
  `@font-face` at the top of `colors_and_type.css`. Stoke ships at weight
  **300 (Light)** and **400 (Regular)**; Tiro Devanagari Hindi ships at
  **400 Regular** and **400 Italic**. No CDN dependency.
- **No sans-serif** anywhere in the brand. The serif feet are part of the
  voice — they signal "unhurried."

Type is set with **light tracking on display** (`-0.005em`) and **wide
tracking on labels** (`0.14em`–`0.22em`). Body line-height runs loose
(1.55). Display line-height runs tight (1.05). See the type scale
custom properties (`--t-display` … `--t-eyebrow`) for the full set.

### Backgrounds

- **Paper, full-bleed.** No gradients. No noise textures. No mesh
  backgrounds. The page *is* paper.
- **Editorial photography**, full-bleed, with generous negative space. Warm
  natural light. No neon. No HDR. Imagery should feel like it was shot on
  film and left in a drawer for a week.
- **Hairline rules** (1px ink) used sparingly to divide sections.
- **Imagery vibe** — warm, slightly desaturated, occasional film grain.
  Never blown-out. Never glossy. Skin tones true; whites a little ivory.

### Layout

- Generous whitespace. Editorial column widths (~58ch for body).
- Asymmetric two-column compositions are preferred over centered hero
  decks — one column carries imagery, one carries one short sentence.
- Section spacing is **large** (`--s-9`, 96px) and *unequal* — the brand
  rarely uses perfectly symmetric vertical rhythm.
- Fixed header is a **thin hairline bar** (max ~64px), bottom-bordered with
  `1px solid var(--ink)`. No drop shadow.

### Borders, radii, shadows

- **Radii are near-zero.** `--radius-1: 2px`, `--radius-2: 4px`. Pills and
  circles only when absolutely needed (e.g. avatar). Cards have *square*
  corners.
- **Borders are hairline.** `1px solid var(--ink)` is the workhorse. Use
  `--rule-soft` (~18% ink) for subtle dividers inside text columns.
- **Shadows are quiet.** Default elevation has no shadow — just a hairline.
  Reserve `--shadow-card` for elevated overlays (modals, dropdowns) and
  `--shadow-pop` for the rare hero pop-out.

### Cards

A card is paper on paper, separated by a hairline. Optionally a subtle
inner-padding offset. **No rounded corners. No drop shadow by default. No
colored left-border accent.** If a card needs more presence, switch its
background to `--paper-warm` rather than adding a shadow.

### Animation

- **Unhurried.** `--dur-2` (240ms) is the default. `--dur-3` (420ms) for
  page-level transitions. Nothing snappier than `--dur-1` (140ms) except
  hover-opacity.
- **Easing is `ease-out`** for entries, `ease-quiet` for hovers. Never
  bouncy. No spring physics. No elastic.
- **Fades** are the dominant motion. The brand fades in; it does not slide.
- Page transitions: cross-fade, 420ms, with the destination's hero text
  fading up from `translateY(8px)` after the background fade completes.

### States — hover, focus, press

- **Hover (links):** `opacity: 0.62`. That's it. No underline change, no
  color change.
- **Hover (buttons):** invert — outlined button fills with ink; solid
  button hollows out.
- **Focus:** 2px outline in `--ink`, offset 3px. Never blue.
- **Press:** `translateY(0.5px)`. Almost imperceptible.
- **Disabled:** 35% opacity, no other change.

### Transparency & blur

- **Used almost never.** Reserved for the fixed header on long scroll —
  `backdrop-filter: blur(8px)` over `color-mix(in oklab, var(--paper) 88%,
  transparent)`. Nowhere else.
- Modal scrims: `color-mix(in oklab, var(--ink) 35%, transparent)`. No blur.

### Iconography

See the next section.

---

## 4 · Iconography

The brand uses icons **sparingly**. Most navigation is *typographic* — the
word *Bag*, the word *Search* — not a glyph.

When icons are needed:

- **Style** — line-only (no fills), 1.25–1.5px stroke at 20px optical size,
  rounded line caps, rounded joins. Stroke colour is always `currentColor`.
- **System** — [Lucide](https://lucide.dev) icons via CDN. They match the
  brand's "thin, quiet, slightly hand-drawn" stroke character better than
  Heroicons or Feather. **This is a substitution flag** — Meyakara has not
  yet commissioned a custom icon set. When that ships, replace Lucide with
  the brand set.

  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="search"></i>
  <script>lucide.createIcons();</script>
  ```

- **Allowed glyphs only** for the storefront — `search`, `user`,
  `shopping-bag`, `menu`, `x`, `chevron-left`, `chevron-right`,
  `chevron-down`, `arrow-up-right`, `arrow-right`, `instagram`. If a
  designer needs an icon outside this set, *first* try to express the idea
  in a word.
- **No emoji.** Anywhere. Ever. Including in user-generated review
  scaffolding.
- **No unicode-as-icons** (★, ✓, →) except `→` and `—` which read as
  typographic furniture, not icons. The em-dash is a load-bearing
  character in the brand voice.
- **The Devanagari मे monogram** (`assets/favicon.svg`) is a
  **favicon-only mark.** Use it where the wordmark physically cannot
  fit: browser favicons, app launcher icons, and any UI smaller than
  ~24px wide. **Everywhere there is room, the wordmark stands alone** —
  do not pair the monogram with the wordmark in lockups, headers,
  footers, packaging, or marketing.

### Brand mark usage

| Mark | When |
| --- | --- |
| `logo-wordmark.svg` (or `.jpg`) | **Default everywhere.** Top-of-page, footer, print, packaging, social, marketing — anywhere there is room for a horizontal mark. The wordmark is the brand. |
| `favicon.svg` (मे monogram) | **Tiny-space-only.** Browser favicon, app launcher icon, OG fallback square. Not for headers, footers, lockups, or marketing. |
| `favicon.png` / `mark-devanagari-me.png` | Raster fallback for the same tiny-space cases — when SVG can't render. |
| `logo-circle.png` / `logo-circle-bg.jpg` | Reserved — kept on file only as historical raster sources for the favicon mark. Prefer `favicon.svg`. |

The wordmark contains a Devanagari **म** (m) embedded between MEY and KARA.
**Never separate it.** The embedded glyph is the whole point — it makes the
name look both English and Hindi at once. Do not "clean up" the wordmark by
replacing **म** with a Latin K.

### Font substitutions — flagged

- ✓ **Stoke** — brand-licensed files in `fonts/` (Light 300, Regular 400).
- ✓ **Tiro Devanagari Hindi** — brand-licensed files in `fonts/` (Regular,
  Italic). No substitutions outstanding.

No substitutions outstanding for type. No commissioned icons yet — Lucide
is the placeholder set.

---

## 5 · How to use this system

1. Drop `colors_and_type.css` into the `<head>`.
2. Use semantic CSS variables from the `:root` block. Don't hard-code
   `#1A1814` — use `var(--ink)`. Don't hard-code `#F1ECE0` — use
   `var(--paper)`.
3. To activate a collection, redeclare the four `--accent-*` vars on a
   wrapper element. Example:

   ```css
   .collection-dhundh {
     --accent:      var(--dhundh-pine);
     --accent-soft: var(--dhundh-blue-grey);
     --accent-deep: var(--dhundh-deep);
     --accent-tint: var(--dhundh-fog);
   }
   ```

4. Compose copy by the patterns in §2. If the line sounds like a
   notification, cut it.
5. Compose layout by the foundations in §3. Hairlines, not shadows. Paper,
   not gradients. Fades, not slides.

---

*The escape belongs to everyone. The shape belongs to you.*
