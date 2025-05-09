// js/script.js
const toggle  = document.getElementById('nav-toggle');
const nav     = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('header__nav--open');
});

// Cerrar menú con la tecla ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' &&
      nav.classList.contains('header__nav--open')) {
    nav.classList.remove('header__nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

// Opcional: cerrar menú al hacer clic en un enlace
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('header__nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);
