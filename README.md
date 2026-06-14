# Alpine Routes — v2

Premium mountain transport & transfer company landing page, built with **Vite** and **SCSS**, split into reusable components.

Live: **https://cheliojul.github.io/Alpine-Routes-v2/**

## Stack
- **Vite** — dev server, HMR, production build
- **SCSS** — component-scoped partials compiled via Dart Sass
- **Handlebars partials** (`vite-plugin-handlebars`) — reusable HTML components, no client framework
- Vanilla JS modules for interactivity (nav, scroll reveal, hero parallax, snow)

## Project structure
```
index.html              # entry: composes partials via {{> name }}
vite.config.js          # base path + handlebars partials/data
src/
  main.js               # imports styles + wires up JS modules
  data/routes.js        # featured-route data (drives the route-card component)
  partials/             # HTML components
    nav.html  hero.html  routes.html  route-card.html
    why.html  booking.html  footer.html
  scss/                 # styles, grouped by component
    main.scss           # @use's every partial in order
    _mixins.scss  _tokens.scss  _base.scss  _buttons.scss
    _nav.scss  _hero.scss  _routes.scss  _why.scss  _booking.scss  _footer.scss
  js/                   # behaviour modules
    nav.js  reveal.js  parallax.js  snow.js
.github/workflows/deploy.yml   # builds + deploys to GitHub Pages
```

## Develop
```bash
npm install
npm run dev      # http://localhost:5173/Alpine-Routes-v2/
```

## Build
```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy
Pushing to `main` triggers the GitHub Actions workflow, which builds the site
and deploys `dist/` to GitHub Pages automatically.
