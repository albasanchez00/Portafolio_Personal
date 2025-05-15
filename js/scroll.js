// Mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  
  // Volver arriba al hacer clic
  document.getElementById('scrollToTopBtn').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
// Mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Volver arriba al hacer clic
document.getElementById('scrollToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
  