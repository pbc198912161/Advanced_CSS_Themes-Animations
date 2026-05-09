// js/theme.js
// ============================================================
//  THEME SWITCHER
//  Reads data-theme on <html>, saves choice to localStorage,
//  and restores it on every page load.
// ============================================================

const STORAGE_KEY = 'css-themes-preference';

/**
 * Apply a theme by setting data-theme on <html>
 * and updating the active state of theme buttons.
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);

  // Update all theme buttons across the page
  document.querySelectorAll('.theme-btn').forEach(btn => {
    const isActive = btn.dataset.theme === theme;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

/**
 * Get saved theme, or fall back to OS preference, or dark.
 */
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;

  // Respect OS preference if no saved choice
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

// Boot — apply theme immediately to avoid flash
applyTheme(getInitialTheme());

// Wire up all theme buttons (works on every page)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.theme-btn');
  if (btn && btn.dataset.theme) {
    applyTheme(btn.dataset.theme);
  }
});
