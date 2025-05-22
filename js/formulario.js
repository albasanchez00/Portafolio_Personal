document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');

  if (!form) return;

  form.addEventListener('submit', e => {
    let isValid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const termsAccepted = form.querySelector('#terms').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Limpia errores previos
    form.querySelectorAll('.error-msg').forEach(el => el.remove());

    // Validaciones
    if (name.length < 3) {
      showError(form.name, 'Por favor, introduce tu nombre (mínimo 3 caracteres).');
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      showError(form.email, 'Introduce un correo válido (ej. ejemplo@dominio.com).');
      isValid = false;
    }

    if (message.length < 10) {
      showError(form.message, 'El mensaje debe tener al menos 10 caracteres.');
      isValid = false;
    }

    if (!termsAccepted) {
      showError(form.querySelector('#terms'), 'Debes aceptar la política de privacidad.');
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // solo evita el envío si hay errores
    } else {
      // Mostrar mensaje tipo toast si tienes <div id="toast"></div>
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = 'Mensaje enviado correctamente. Gracias por contactar.';
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
      // No se llama a preventDefault, por lo tanto se enviará correctamente
    }
  });

  function showError(input, message) {
    const error = document.createElement('p');
    error.textContent = message;
    error.className = 'error-msg';
    error.style.color = 'red';
    error.style.fontSize = '0.875rem';
    error.style.margin = '4px 0 8px';
    input.insertAdjacentElement('afterend', error);
  }
});
