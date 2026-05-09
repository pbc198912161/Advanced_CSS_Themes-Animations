// js/nav.js
// ============================================================
//  NAVIGATION
//  Mobile hamburger menu toggle with ARIA support.
//  Closes menu on outside click and on Escape key.
// ============================================================

const toggle  = document.querySelector('.menu-toggle');
const menu    = document.getElementById('mobile-menu');

if (toggle && menu) {

  function openMenu() {
    menu.hidden = false;
    menu.style.animation = 'slide-down 0.25s ease both';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when a mobile nav link is clicked
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Mark active nav link based on current page filename
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});
