// Atmospheric snow on the hero canvas. Pauses when the hero is offscreen
// or the tab is hidden to keep it light.
export function initSnow(hero) {
  if (!hero) return;

  const canvas = hero.querySelector('.hero__snow');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let flakes = [];
  let W = 0;
  let H = 0;
  let running = false;
  let raf = null;

  function makeFlake(initial) {
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : -10,
      r: Math.random() * 1.8 + 0.6,
      sp: Math.random() * 0.5 + 0.25,
      drift: Math.random() * 0.6 - 0.3,
      ph: Math.random() * Math.PI * 2,
      a: Math.random() * 0.4 + 0.22,
    };
  }

  function resize() {
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(150, W / 11));
    flakes = [];
    for (let i = 0; i < count; i++) flakes.push(makeFlake(true));
  }

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      f.ph += 0.01;
      f.y += f.sp;
      f.x += f.drift + Math.sin(f.ph) * 0.3;
      if (f.y > H + 5) {
        flakes[i] = makeFlake(false);
        continue;
      }
      if (f.x < -5) f.x = W + 5;
      else if (f.x > W + 5) f.x = -5;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(234, 241, 245, ${f.a})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  function start() {
    if (!running) {
      running = true;
      raf = requestAnimationFrame(tick);
    }
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
  }

  resize();
  window.addEventListener('resize', resize);
  start();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? start() : stop()));
      },
      { threshold: 0 }
    ).observe(hero);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });
}
