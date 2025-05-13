// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('nav');

  // Si no existen los elementos, no continuamos
  if (!toggle || !nav) {
    console.error('No se encontró #nav-toggle o #nav en el DOM');
    return;
  }

  // Alternar menú al hacer click
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('header__nav--open');
  });

  // Cerrar con la tecla ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Cerrar al clicar un enlace del nav
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
