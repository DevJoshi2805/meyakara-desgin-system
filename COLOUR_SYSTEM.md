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
*6am ridge line. Still air. Pine and fog.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--dhundh-pine` | `#4F5C53` | Dark pine. Specific to a hill morning — no other collection could use it. |
| Structure | `--dhundh-blue-grey` | `#8FA0A8` | Cool morning light on rock. |
| Depth | `--dhundh-deep` | `#2D332E` | Earth before dawn. |
| Atmosphere | `--dhundh-fog` | `#E8E9E6` | The mist. Sits close to paper — intentionally quiet. |

**CSS class:** `.collection-dhundh`

---

### Baar — The Beach
*Bleached linen. Colours left in the sun.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--baar-coral` | `#D98A78` | Sun-faded coral. Immediate, irreplaceable. **Decorative use only — contrast ≈ 2.8:1 on paper.** |
| Structure | `--baar-driftwood` | `#8B6F55` | Warm worn wood. |
| Depth | `--baar-tide` | `#4F5E5C` | Dark tidal water. Use for small interactive text on Baar pages. |
| Atmosphere | `--baar-bleached` | `#F3EBDA` | Sun-bleached surface. |

**CSS class:** `.collection-baar`

> **Contrast note:** `--baar-coral` fails WCAG AA for body-size text on `--paper`. Use it for large display type, border accents, and decorative marks. Reach for `--baar-tide` (via `--accent-deep`) when small text must carry colour.

---

### Raat — Nightlife *(foundation inverts)*
*The hour before. Electricity. Darkness with light bleeding through.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--raat-gold` | `#C9A24A` | Warm light in darkness. ≈ 6:1 contrast on midnight — the only accent that works as a CTA here. |
| Structure | `--raat-violet` | `#5B3AC7` | Electric. Decorative only (≈ 3.8:1 on midnight). |
| Depth | `--raat-bleed` | `#8E2A6A` | The bleed — the colour between violet and warmth. |
| Atmosphere | `--raat-smoke` | `#1F1B2A` | The room. Dark surface. |
| — `--bg` override | `--raat-midnight` | `#0A0A12` | Applied via `.collection-raat`. |
| — `--fg` override | `var(--paper)` | `#F1ECE0` | Foundation light, flipped to foreground. |

**CSS class:** `.collection-raat`

> **Foundation exception:** Raat is the only collection that overrides `--bg` and `--fg`. Apply `.collection-raat` on the outermost collection wrapper only. The `<header>` and `<footer>` must sit outside this wrapper — they must always remain paper and ink.
>
> **Why gold, not violet?** Gold (#C9A24A) on midnight has ≈ 6:1 contrast — usable for CTAs. Violet (≈ 3.8:1) is decorative. Gold is also the image of light in darkness: a held glass, a stage lamp. It earns the soul role.

---

### Mandarin — The Collar
*Ink blue. Aged ivory. The colours of restraint.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--mandarin-ink` | `#1B2A4A` | Deep navy. ≈ 10:1 contrast on paper. The authority of the collar. |
| Structure | `--mandarin-slate` | `#5B6772` | Cool disciplined grey-blue. |
| Depth | `--mandarin-deep` | `#11182B` | Absolute navy. |
| Atmosphere | `--mandarin-silk` | `#C7B89A` | Aged cloth. Warm ivory surface wash. |

**CSS class:** `.collection-mandarin`

---

### Lino — Italian Linen *(system default)*
*Sun cream. Terracotta. A slow Sunday.*

| Role | Variable | Hex | Rationale |
|---|---|---|---|
| Soul | `--lino-terracotta` | `#B26B4A` | Earthy, specific. The only colour that says slow Sunday and nothing else. |
| Structure | `--lino-stone` | `#C9B89A` | Warm gravel. |
| Depth | `--lino-olive` | `#7E7A4A` | Cool counterpoint to terracotta. |
| Atmosphere | `--lino-sun` | `#E2C77F` | Afternoon light. Use as section background wash. |

**CSS class:** `.collection-lino` (also the `:root` default — no class needed)

> Lino is the year-round default because it is the most accessible, warmest, and temporally neutral palette. It is not the first collection — it is the brand's resting state.

---

## The lobby

The lobby is every surface that belongs to the **brand**, not to any collection.

**Lobby surfaces:** the site header, site footer, navigation drawers, account pages, checkout, error states, loading states, 404 pages.

**The rule:** lobby surfaces use only `--paper` and `--ink`. No `--accent` vars. No collection tints. Ever.

Apply `.mk-lobby` to enforce this. It resets all accent pointers to foundation values, regardless of any collection class above it in the DOM.

```css
/* in your markup — header and footer always sit outside any collection wrapper */

<header class="mk-lobby"> … </header>

<main class="collection-raat">
  <!-- dark midnight world -->
</main>

<footer class="mk-lobby"> … </footer>
```

**Why the lobby matters — especially for India-first launch:**

Instagram is the primary discovery channel. Scroll speed is high. A customer who encounters Dhundh (cool, pine, fog) one week and Raat (dark, gold, violet) the next will not connect them as the same brand without a consistent visual anchor. The paper/ink lobby — appearing in every frame of brand chrome, on every collection page — is that anchor.

The lobby is not a design constraint. It is the reason the collection freedom is possible.

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
