---
name: meyakara-design
description: Use this skill to generate well-branded interfaces and assets for Meyakara, a clothing brand whose tagline is "The Shape of Your Escape" — either for production or throwaway prototypes/mocks/marketing assets/etc. Contains essential design guidelines, colour palettes (per collection), typography (Stoke + Tiro Devanagari Hindi), brand voice rules, logo assets, and a storefront UI kit.
user-invocable: true
---

# Meyakara — design skill

Read `README.md` in this skill first. It contains the brand ideology in
brief, content fundamentals (voice, casing, copy patterns), visual
foundations (colour, type, layout, motion, states, iconography), and an
index of every other file.

Then explore as needed:

- `colors_and_type.css` — drop-in design tokens. Includes paper/ink
  foundation, five collection palettes (*Dhundh*, *Baar*, *Raat*,
  *Mandarin*, *Lino*), type scale, spacing, motion, and semantic element
  styles. Activate a collection by re-pointing `--accent-*` vars.
- `assets/` — logos (wordmark, circle, Devanagari monogram), favicon, the
  full Brand Ideology PDF.
- `ui_kits/storefront/` — hi-fi storefront recreation: homepage, collection
  page, product page, journal entry. Pixel-faithful to the brand voice;
  copy components into new designs.
- `preview/` — design-system reference cards (type, colors, spacing,
  components, brand) that visualise every token.

## How to work

If creating visual artifacts (slides, mocks, throwaway prototypes, social
posts, lookbooks, packaging mocks), copy assets out of this skill into
your output and create static HTML files for the user to view.

If working on production code, copy `colors_and_type.css` and the relevant
UI kit components, then read the rules in `README.md` to stay in voice.

If the user invokes this skill without other guidance, ask them what they
want to build (a page? a campaign? a product card? a slide?), ask 3–5
focused questions about which **collection** the work belongs to (this
drives the palette), the surface (web / print / social / packaging), and
whether they want options. Then act as the brand's senior designer.

## Non-negotiables

- The wordmark contains a Devanagari **म** between MEY and KARA. Never
  remove it. Never replace it with a Latin K.
- No emoji. No exclamation marks. No countdown timers. No "Hurry!" copy.
- No pure black (`#000`) and no pure white (`#FFF`) anywhere. Use
  `var(--ink)` and `var(--paper)`.
- Sentence case for prose, ALL CAPS + wide tracking only for labels.
- The line *The Shape of Your Escape* is the one constant — it goes inside
  every product tag, every campaign, every footer.
- Indian English spelling (colour, centre, honour).
- Sans-serifs are not part of the brand. Stoke for Latin, Tiro Devanagari
  Hindi for Hindi.

When in doubt, choose the quieter option.
