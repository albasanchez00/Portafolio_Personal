// Animación de barras de habilidades
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        setTimeout(() => {
            bar.style.width = skill + '%';
        }, 500);
    });
}

// Función para descargar CV como PDF
function downloadCV() {
    // Crear un nuevo estilo para impresión
    const printStyle = document.createElement('style');
    printStyle.textContent = `
        @media print {
            body * { visibility: hidden; }
            .container, .container * { visibility: visible; }
            .container { 
                position: absolute;
                left: 0;
                top: 0;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border-radius: 0 !important;
            }
            .download-btn { display: none !important; }
            .header { 
                background: #2c3e50 !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            .skill-progress {
                background: #3498db !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    `;
    document.head.appendChild(printStyle);

    // Configurar título para el PDF
    const originalTitle = document.title;
    document.title = 'CV_Alba_Sánchez';

    // Imprimir
    window.print();

    // Restaurar título original
    document.title = originalTitle;
    
    // Remover estilo temporal después de imprimir
    setTimeout(() => {
        document.head.removeChild(printStyle);
    }, 1000);
}

// Efecto de escritura para el nombre
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Efecto parallax suave en el header
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        const rate = scrolled * -0.5;
        header.style.transform = `translateY(${rate}px)`;
    });
}

// Inicializar efectos cuando se carga la página
window.addEventListener('load', () => {
    animateSkills();
    parallaxEffect();
    
    // Efecto de escritura para el nombre (opcional)
    const nameElement = document.querySelector('.name');
    const nameText = nameElement.textContent;
    typeWriter(nameElement, nameText, 80);
});

// Animación de hover para las secciones
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.02)';
        section.style.transition = 'transform 0.3s ease';
    });
    
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

// Smooth scroll para navegación interna (si añades un menú)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}