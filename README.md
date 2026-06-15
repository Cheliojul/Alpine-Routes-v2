# Alpine Routes — v2

Premium mountain transport & transfer company landing page, built with **Next.js** (App Router) and **SCSS**, composed from **JSX components**.

Live: **https://cheliojul.github.io/Alpine-Routes-v2/**

## Stack
- **Next.js** (App Router) — JSX components, static HTML export (`output: 'export'`)
- **SCSS** — component-scoped partials compiled by Dart Sass (Next built-in)
- Vanilla JS effect modules (nav, scroll reveal, hero parallax, snow) run from a
  single `'use client'` effects runner after hydration

## Project structure
```
next.config.mjs         # static export + basePath for GitHub Pages
src/
  app/
    layout.jsx           # <html>, fonts, global SCSS import, metadata
    page.jsx             # composes the components
  components/            # JSX components
    Nav.jsx  Hero.jsx  Routes.jsx  RouteCard.jsx
    Why.jsx  Booking.jsx  Footer.jsx
    ClientEffects.jsx    # 'use client' — wires up the JS modules
  data/routes.js         # featured-route data (drives <RouteCard>)
  js/                    # behaviour modules
    nav.js  reveal.js  parallax.js  snow.js
  scss/                  # styles, grouped by component
    main.scss  _mixins.scss  _tokens.scss  _base.scss  _buttons.scss
    _nav.scss  _hero.scss  _routes.scss  _why.scss  _booking.scss  _footer.scss
public/.nojekyll
.github/workflows/deploy.yml   # builds + deploys the export to GitHub Pages
```

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build    # static export -> out/
```

## Deploy
Pushing to `main` triggers the GitHub Actions workflow, which runs the Next.js
static export and deploys `out/` to GitHub Pages automatically.
