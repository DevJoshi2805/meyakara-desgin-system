# Meyakara — Colour System

> *Colour belongs to the escape.*
> The brand has no fixed colour. The collection does.

---

## The principle

Meyakara has no fixed brand colour. The foundation (paper/ink) is constant across every surface, every collection, every season. The collection palette shifts with every escape because every escape has its own sky — and that sky is found, never invented.

This is not a limitation. It is the ideology made visual.

---

## Four layers

Every Meyakara page is built from the same four layers, stacked in order of permanence.

| Layer | CSS var | Role | Changes per collection? |
|---|---|---|---|
| **Foundation** | `--paper`, `--ink` family | Canvas and marks. Always. | Never |
| **Atmosphere** | `--accent-tint` | Ambient surface wash — the sky of the collection. Used at low opacity on section backgrounds. | Yes |
| **Structure** | `--accent-soft` | Borders, card dividers, mid-weight UI. Gives the collection its visual texture. | Yes |
| **Soul** | `--accent` | The single defining colour. CTAs, interactive states, key labels. Use sparingly. | Yes |
| **Depth** | `--accent-deep` | High contrast moments. The darkest variant. Used when the soul colour needs weight. | Yes |

The foundation is always the primary. Collections speak through it — never over it.

---

## The golden rule

> The soul colour is the one colour you would use if you could use only one.
> It must be the most *specific* colour in the palette — the one another collection could never borrow without lying.

**Test:** swap the colour into a different collection. If it still feels true, it is too generic for the soul role. The soul must break when misplaced.

Specificity is not the same as saturation. `--baar-salt` is muted but says nothing — every grey says salt. `--baar-coral` is immediately, undeniably beach.

---

## Per-collection assignments

Activate a collection by applying its class on the outermost wrapper of the collection's page or section. The header, footer, and all brand chrome must sit **outside** this wrapper.

---

### Dhundh — The Hills
*Before dawn and after. The same escape, two moments.*

Dhundh is the only collection with two surface modes. The story is a complete journey in three phases: you leave the city at night, you pass through the in-between, and the mountain clarity finds you. The same seven palette colours serve all three phases — the CSS re-assigns their roles depending on which moment the section lives in.

---

#### Phase 01 — City night · `.collection-dhundh--before-dawn`
*You leave before the world wakes. The city is still loud behind you.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Background | `--dhundh-night` | `#090C0A` | City darkness. Must stay deep — if it lightens, the whole narrative collapses. |
| Soul | `--dhundh-mist` | `#9EAAA4` | The only luminous thing in the dark. CTAs and key moments only. |
| Structure | `--dhundh-pine` | `#4F5C53` | Pine silhouette. Dark-on-dark texture, felt not read. |
| Depth | `--dhundh-deep` | `#2D332E` | Absolute dark. |

`--dhundh-night` dominates the top of every Dhundh page. This phase should be generous — let the darkness breathe.

> **Ghost text:** On the hero, display type ("D H U N D H" with wide tracking) can be near-invisible via `.text-ghost`. Reserve this for the full collection page. On a still/teaser page, the title should be clearly legible — the display is the announcement.

**Foundation inverts:** `--bg` → `--dhundh-night`, `--fg` → `var(--paper)`. Header and footer on the Dhundh collection page inherit this world. Do not apply `.mk-lobby` to them.

---

#### Phase 02 — The in-between · `--dhundh-stone` as section background
*Neither city nor mountain. The road. The fog. The commitment to leave.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Section bg | `--dhundh-stone` | `#6E6A60` | Warm-cool grey. The material of the transition — road, rock, mist. Used as explicit section `background` on transition zones. |
| Text | `var(--paper)` | `#F1ECE0` | Light text on stone — use `var(--fg)` if inside a before-dawn wrapper. |

Stone is not mapped to `--accent`. It is applied directly as a section background — the one surface that belongs to neither the city night nor the mountain clarity.

> **Do not overuse stone.** One transition section per page, at most two. It is a bridge, not a destination.

---

#### Phase 03 — Mountain clarity · `.collection-dhundh`
*The fog lifts. Pine on paper. You found it.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--dhundh-pine` | `#4F5C53` | Dark pine on paper. The defining mark when clarity returns. |
| Structure | `--dhundh-blue-grey` | `#8FA0A8` | Cool morning light. Borders, card dividers. |
| Depth | `--dhundh-deep` | `#2D332E` | Deepest tone. |
| Atmosphere | `--dhundh-fog` | `#D8DDD9` | **Earned clarity — use sparingly.** Final sections, product reveals, the payoff moment only. If everything is fog-tinted, the earned quality is lost. |

Paper foundation. The wordmark and nav adapt to `var(--fg)` / `var(--bg)` automatically.

---

#### Narrative arc on a Dhundh page

```
[header — inherits city night world, no mk-lobby]
[city night hero — --dhundh-night dominant, --dhundh-mist for accents]
  ↓  scroll
[stone transition — --dhundh-stone as section bg, the in-between]
  ↓  scroll
[mountain clarity — --dhundh-fog used sparingly, pine on paper]
[footer — collection-owned]
```

**CSS class (mountain clarity / dawn):** `.collection-dhundh`
**CSS class (city night / before-dawn):** `.collection-dhundh--before-dawn`
**Stone transition:** apply `background: var(--dhundh-stone)` directly on the section element

---

### Baar — The Beach
*Not yet opened. Palette and narrative to be defined before launch.*

**CSS class:** `.collection-baar` · Raw vars live in the activation block in `colors_and_type.css`.

---

### Raat — Nightlife
*Not yet opened. Palette and narrative to be defined before launch.*

**CSS class:** `.collection-raat` · Foundation inverts (like Dhundh before-dawn). Raw vars live in the activation block in `colors_and_type.css`.

---

### Mandarin — The Collar
*Not yet opened. Palette and narrative to be defined before launch.*

**CSS class:** `.collection-mandarin` · Raw vars live in the activation block in `colors_and_type.css`.

---

### Lino — Italian Linen
*Not yet opened. Year-round default when no collection is active.*

**CSS class:** `.collection-lino` · Raw vars live in the activation block in `colors_and_type.css`.

---

## The lobby

The lobby is every surface that belongs to the **brand** and to **no collection** — pages a customer lands on before entering any collection's world.

**Lobby surfaces:** the home page, account pages, cart, checkout, order confirmation, error states, loading states, 404 pages.

**Not lobby surfaces:** the header and footer on a collection page. When a customer is inside Dhundh, the entire page — header, hero, product sections, footer — breathes Dhundh. The brand anchor is the wordmark and typeface, not the background colour. The wordmark in `var(--paper)` on a dark before-dawn background is still unmistakably Meyakara.

**The rule:** lobby surfaces use only `--paper` and `--ink`. No `--accent` vars. No collection tints. Ever.

Apply `.mk-lobby` on home and utility pages to enforce this.

```css
/* Home page — full lobby, no collection */
<body class="mk-lobby">
  <header> … </header>
  <main> … </main>
  <footer> … </footer>
</body>

/* Collection page — collection owns everything, header and footer included */
<body class="collection-dhundh">
  <section class="collection-dhundh--before-dawn">
    <header> … </header>    <!-- inherits the dark world -->
    <!-- before-dawn hero, opening sections -->
  </section>
  <section>
    <!-- dawn sections — inherits .collection-dhundh from body -->
  </section>
  <footer> … </footer>      <!-- inherits the dawn world -->
</body>
```

**Why the lobby still matters:**

The home page is the one surface every customer lands on before choosing a collection. It is the brand's resting state — paper and ink, no collection colour. The wordmark, the typeface, the quiet layout. Collections are introduced here as doors, not imposed as worlds. Once the customer steps through a door (navigates to a collection page), that world becomes total.

The lobby is not a constraint on collection pages. It is the threshold between them.

---

## What does not change

These decisions are fixed. They are not a collection decision. They are not a seasonal decision.

- `--paper` and `--ink` families — the foundation
- Typography: Stoke (Latin) + Tiro Devanagari Hindi. No sans-serif, ever.
- Maximum 4–5 colours per collection palette, all feeling like they belong to the same sky
- The lobby rule — header, footer, and brand chrome in paper/ink only
- No pure black (`#000`) or pure white (`#FFF`) anywhere
- Photography: consistent lens quality, light direction, and casting sensibility across all collections — this is the real brand constant across escapes

---

## Indian market notes

These decisions are calibrated for India-first operation (2026–2031, base: Delhi).

**The "found, not invented" palette philosophy maps onto Indian craft tradition.** Natural dye, hand-pressed marks, and block printing have always sourced colour from landscape. This philosophy will feel intuitively true to an Indian audience without explanation.

**The collection subjects are Indian escapes, not borrowed ones.** Dhundh is Kasol and Mussoorie. Baar is Goa and Kerala. Raat is Hauz Khas and Aerocity. Mandarin carries a specific resonance with the Indian relationship to heritage-collar dressing. These are not constructed — they map onto real escape routes that the audience already takes.

**Photography consistency is more important than any single colour decision.** Instagram-first discovery means the lens quality, light ratio, and casting aesthetic must be identical across Dhundh and Raat and Lino even when the environments look nothing alike. This is how new brands build recognition without a fixed colour anchor.

**Premium pricing requires visual restraint to be consistent.** Every inconsistency — a button that breaks the collection palette, a campaign that uses a trending colour — erodes the price justification faster here than in any other market. The audience is watching for whether you mean it.

**Launch sequence recommendation:** Dhundh or Baar first. Both are visceral, immediately recognisable Indian escapes. Lino (Italian linen, a slow Sunday) is correct as the year-round default but should not be the first collection to introduce the brand.

---

*Last updated: April 2026. Source of truth: `colors_and_type.css`.*
