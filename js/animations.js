// js/animations.js
// ============================================================
//  SCROLL-TRIGGERED ANIMATIONS
//  Uses IntersectionObserver to add .is-visible when an
//  element enters the viewport. CSS does the actual animation.
//  Respects prefers-reduced-motion — skips animation entirely.
// ============================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Observe all elements that should animate on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop watching once animated — no need to re-trigger
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll(
    '.animate-on-scroll, .animate-stagger, .animate-fade-up, .animate-fade-left'
  ).forEach(el => observer.observe(el));

} else {
  // Reduced motion: make everything immediately visible
  document.querySelectorAll(
    '.animate-on-scroll, .animate-stagger, .animate-fade-up, .animate-fade-left'
  ).forEach(el => {
    el.classList.add('is-visible');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

// Progress bars — animate width when visible
if (!prefersReducedMotion) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-fill');
        if (fill) fill.style.animationPlayState = 'running';
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-bar').forEach(bar => {
    const fill = bar.querySelector('.progress-fill');
    if (fill) fill.style.animationPlayState = 'paused';
    progressObserver.observe(bar);
  });
}
