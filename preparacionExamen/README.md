Examen React - Proyecto de Práctica
===================================

Este proyecto es un repaso para el examen de React. Incluye componentes básicos:
Header, Main y Footer, con estilo en CSS. Ideal para practicar organización
de componentes, layouts, CSS y React Router.

-------------------------------------------------------------------------------
Tecnologías usadas
-------------------------------------------------------------------------------

- React 18+
- Vite
- CSS puro
- React Router (opcional, para practicar rutas)

-------------------------------------------------------------------------------
Instalación y ejecución
-------------------------------------------------------------------------------

1. Crear el proyecto con Vite:
   npm create vite@latest examen-react

2. Acceder a la carpeta del proyecto:
   cd examen-react

3. Instalar dependencias:
   npm install

4. Ejecutar el servidor de desarrollo:
   npm run dev

5. Abrir el proyecto en el navegador usando la URL que muestra Vite 
   (por ejemplo: http://localhost:5173)

-------------------------------------------------------------------------------
Estructura de carpetas sugerida
-------------------------------------------------------------------------------
```
examen-react/
│
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ components/
│     ├─ Header.jsx
│     ├─ Main.jsx
│     └─ Footer.jsx
```
-------------------------------------------------------------------------------
Componentes
-------------------------------------------------------------------------------

1. Header.jsx
   - Logo centrado.
   - Menú de navegación horizontal.
   - Práctica de enlaces internos y estilizado con CSS.
   - Ejemplo de uso de <Link> si se usa React Router.

2. Main.jsx
   - Contenido principal dividido en secciones:
     - Inicio
     - Sobre mí
     - Contacto
   - Práctica de organización de contenido, centrado con Flexbox y estilos.
   - Secciones con fondo gris claro y bordes redondeados.

3. Footer.jsx
   - Pie de página simple.
   - Práctica de tipografía y colores.
   - Texto centrado y destacado con amarillo.