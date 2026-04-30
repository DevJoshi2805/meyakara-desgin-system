# Storefront UI kit — Meyakara

A hi-fi recreation of the Meyakara storefront. Because no production
codebase, Figma, or live site has been provided yet, this kit is an
**interpretation** of the brand ideology — not a copy of an existing
build. When the real site or Figma ships, re-anchor these components.

## Files

- `index.html` — interactive click-through demonstrating the storefront in
  one document. Homepage → Collection page → Product page → Bag.
- `Header.jsx` — fixed header with logo, primary nav, account/bag.
- `HomepageHero.jsx` — full-bleed editorial hero with the tagline.
- `CollectionGrid.jsx` — collection door grid (5 collections).
- `ProductGrid.jsx` + `ProductCard.jsx` — collection page layout.
- `ProductPage.jsx` — single product detail.
- `BagDrawer.jsx` — slide-in bag.
- `Footer.jsx` — minimal footer.

All components import the shared tokens from `../../colors_and_type.css`.
No sans-serif. No emoji. Hairlines, not shadows. Paper, not gradients.
