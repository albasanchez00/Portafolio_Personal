// Mejora del script para el menú de navegación
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.header__list a');

  // Verificamos que los elementos existan
  if (!toggle || !nav) {
    console.error('No se encontró #nav-toggle o #nav en el DOM');
    return;
  }

  // Función para abrir/cerrar el menú
  function toggleMenu() {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    const newState = !expanded;
    
    toggle.setAttribute('aria-expanded', String(newState));
    nav.classList.toggle('header__nav--open', newState);
    
    // Anunciamos para lectores de pantalla
    if (newState) {
      toggle.setAttribute('aria-label', 'Cerrar menú');
    } else {
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  }

  // Alternar menú al hacer click
  toggle.addEventListener('click', toggleMenu);

  // Cerrar con la tecla ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      toggle.focus();
    }
  });

  // Cerrar al clicar fuera del menú
  document.addEventListener('click', e => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  });

  // Mejorar navegación por teclado
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Cerrar al clicar un enlace del nav
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768 && nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  });

  // Manejar cambios de tamaño de ventana
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // En pantallas grandes, aseguramos que el menú esté visible
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectButtons = document.querySelectorAll('.project-card__btn');

  projectButtons.forEach(btn => {
    const href = btn.getAttribute('href');

    if (!href || href === '#') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Eliminar tooltip anterior si existe
        const existing = btn.parentElement.querySelector('.tooltip-msg');
        if (existing) existing.remove();

        // Crear mensaje tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-msg';
        tooltip.textContent = 'Este proyecto aún no está disponible.';

        btn.parentElement.appendChild(tooltip);

        // Ocultar automáticamente después de 3 segundos
        setTimeout(() => {
          tooltip.remove();
        }, 3000);
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const correoBtn = document.getElementById('correoDirecto');
  const toast = document.getElementById('toast');

  if (correoBtn) {
    correoBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Previene la redirección inmediata

      // Mostrar mensaje tipo toast
      toast.textContent = 'Abriendo tu gestor de correo...';
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=alba.freelancer.developer@gmail.com");
      }, 1000); // Espera 1 segundo antes de abrir el mailto
    });
  }
});
