/*
  Main JavaScript for the PM portfolio website.
  Handles dark mode toggling, mobile navigation, simple filtering
  for work and writing pages, and honeypot anti‑spam on forms.
*/

// Toggle dark mode by adding/removing `.dark` class on the <html> element.
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  // Save preference to localStorage
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('prefers-dark', isDark ? 'true' : 'false');
}

// Apply saved theme on load
(function applySavedTheme() {
  const prefersDark = localStorage.getItem('prefers-dark');
  if (prefersDark === 'true') {
    document.documentElement.classList.add('dark');
  }
})();

// Filter items by data-tag
function initFilter(containerSelector, filterSelector) {
  const container = document.querySelector(containerSelector);
  const filterButtons = document.querySelectorAll(filterSelector);
  if (!container || !filterButtons.length) return;
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      const items = container.querySelectorAll('[data-tags]');
      items.forEach((item) => {
        const tags = item.getAttribute('data-tags').split(',');
        if (!tag || tags.includes(tag)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
      // Update active state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// Simple honeypot check
function validateHoneypot(event) {
  const honeypot = event.target.querySelector('input[name="honeypot"]');
  if (honeypot && honeypot.value) {
    // spam bot filled the hidden field
    event.preventDefault();
  }
}

// Initialize filter on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  initFilter('.work-grid', '.work-filters button');
  initFilter('.posts-grid', '.posts-filters button');
  // Attach honeypot validation to any contact forms
  const contactForm = document.querySelector('form.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', validateHoneypot);
  }
});
