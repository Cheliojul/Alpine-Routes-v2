'use client';

import { useEffect, useRef } from 'react';
import { initNav } from '../js/nav';
import { initReveal } from '../js/reveal';
import { initParallax } from '../js/parallax';
import { initSnow } from '../js/snow';

// Runs the imperative DOM behaviour after hydration. Renders nothing.
// A ref guard keeps it single-init under React StrictMode (dev double-invoke).
export default function ClientEffects() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const nav = document.getElementById('nav');
    const hero = document.getElementById('hero');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    initNav(nav, hero);
    initReveal();

    if (!reduceMotion.matches) {
      initParallax(hero);
      initSnow(hero);
    }
  }, []);

  return null;
}
