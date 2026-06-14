import './scss/main.scss';

import { initNav } from './js/nav.js';
import { initReveal } from './js/reveal.js';
import { initParallax } from './js/parallax.js';
import { initSnow } from './js/snow.js';

const nav = document.getElementById('nav');
const hero = document.getElementById('hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Always on — structural behaviour.
initNav(nav, hero);
initReveal();

// Ambient hero effects — skipped entirely when the user prefers reduced motion.
if (!reduceMotion.matches) {
  initParallax(hero);
  initSnow(hero);
}
