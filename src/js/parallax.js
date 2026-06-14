// Mouse parallax on hero layers (fine-pointer devices only).
// Each layer declares a `data-depth`; closer layers move more.
export function initParallax(hero) {
  if (!hero) return;

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!finePointer.matches) return;

  const layers = hero.querySelectorAll('.hero__layer');
  if (!layers.length) return;

  let raf = null;
  let ntx = 0;
  let nty = 0;

  function apply() {
    raf = null;
    layers.forEach((el) => {
      const d = parseFloat(el.getAttribute('data-depth')) || 0;
      el.style.setProperty('--px', `${ntx * d}px`);
      el.style.setProperty('--py', `${nty * d * 0.5}px`);
    });
  }

  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    ntx = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1..1
    nty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (!raf) raf = requestAnimationFrame(apply);
  });

  hero.addEventListener('mouseleave', () => {
    ntx = 0;
    nty = 0;
    if (!raf) raf = requestAnimationFrame(apply);
  });
}
