Enlace de acceso al portafolio web: https://asanchez.cursoceat.es/
Pasos para despligue en Firebase
1. Entramos en la pagina web de Firebase:
    - Primero iniciamos sesión con una cuenta de Google (nos será necesario).
    - Accedemos a la consola o directamente a https://console.firebase.google.com/
    - Creamos un proyecto, que es donde subiremos los archivos de la web (código/proyecto).
        - NOTA. Nos preguntara si queremos vincularlo con Google Analitycs, pero esto requiere configurar las cookies del sitio (lo deshabilitamos).

2. Una vez tenemos el proyecto creado
    - Una vez creado nos dirigimos al apartado de Hosting
    - Al seleccionarlo nos dará los pasos para subir los ficheros al hosting.

3. Dentro de la Terminal (PorweShell/Git Bash)
    - Primero deberemos comprobar que tenemos instalado node.js y npm.
    - En Windosws (abrimos el terminal):
        - Insertamos:
            node -v
            npm -v
        - Si todo está correcto instalamos las herramientas de Firebase CLI:
            npm install -g firebase-tools
        - Ahora nos vamos a la raiz de nuestro proyecto (cd para acceder a carpetas en windows)
        - Ahora nos logeamos con Firebase
            firebase login
        - Esto nos abrira una ventana donde debermos loguearnos con Google.
    - Ahora, dentro de la carpeta raiz del proyecto:
        - Inicializamos firebase para el proyecto:
            firebase init
        - Nos permitirá seleccionar un proyecto o crear uno nuevo. Ademas especificaremos si es Hosting y si es SPA.
        - Por ultimos, nos preguntará donde está el código que subiremos