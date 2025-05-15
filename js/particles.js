document.addEventListener('DOMContentLoaded', () => {
  if (typeof tsParticles === 'undefined') {
    console.error('tsParticles no está cargado');
    return;
  }

  // Caracteres para la lluvia de código
  const matrixChars = [
    '0', '1', '7', '8', '9', 
    'A', 'B', 'C', 'D', 'E', 'F',
    '>', '<', '?', '/', '\\', '|', 
    '+', '-', '*', '=', '!', '@', '#', '$', '%', '^', '&'
  ];
  
  // Función para obtener un carácter aleatorio
  const getRandomChar = () => {
    return matrixChars[Math.floor(Math.random() * matrixChars.length)];
  };
  
  tsParticles.load('tsparticles', {
    fpsLimit: 30,
    background: {
      // fondo transparente
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' }
      }
    },
    particles: {
      shape: { 
        type: "char",
        options: {
          char: {
            value: getRandomChar,
            font: "Courier New",
            style: ""
          }
        }
      },
      color: { 
        value: ["#035e9b", "#1f2a37", "#2b4b72", "#007acc"] 
      },
      number: { 
        value: 70, 
        density: { enable: true, area: 800 } 
      },
      opacity: { 
        value: 0.9,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: { 
        value: 12,
        random: {
          enable: true,
          minimumValue: 10
        }
      },
      move: { 
        enable: true, 
        speed: 3, 
        direction: 'bottom', 
        outModes: 'out',
        straight: true,
        random: false
      },
      life: {
        duration: {
          sync: false,
          value: 20
        },
        count: 1
      }
    }
  });
});