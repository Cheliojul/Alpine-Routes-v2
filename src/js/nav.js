// Sticky nav: frosts once the hero scrolls past, plus the mobile hamburger.
export function initNav(nav, hero) {
  if (!nav) return;
  const toggle = nav.querySelector('.nav-toggle');

  function onScroll() {
    const trigger = hero ? Math.max(120, hero.offsetHeight - 120) : 120;
    nav.classList.toggle('scrolled', window.scrollY > trigger);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('.nav-link, .nav-cta').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
