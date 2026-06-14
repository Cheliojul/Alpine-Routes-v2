// Route-card elevation lines draw themselves once scrolled into view.
export function initReveal() {
  const cards = document.querySelectorAll('.route-card');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => io.observe(card));
}
