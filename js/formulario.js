document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Expresión regular para email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Limpia errores previos
    form.querySelectorAll('.error-msg').forEach(el => el.remove());

    let isValid = true;

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


    const termsAccepted = form.querySelector('#terms').checked;
    if (!termsAccepted) {
    showError(form.querySelector('#terms'), 'Debes aceptar la política de privacidad.');
    isValid = false;
    }

    if (isValid) {
      // Aquí puedes manejar el envío real (backend o EmailJS, por ejemplo)
      alert('Formulario enviado correctamente.');
      form.reset();
    }
  });
});
