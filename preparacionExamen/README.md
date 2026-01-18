Examen React - Proyecto de Práctica
===================================
-------------------------------------------------------------------------------
Instalación y ejecución
-------------------------------------------------------------------------------

1. Crear el proyecto con Vite:
```
   npm create vite@latest examen-react
```
2. Acceder a la carpeta del proyecto:
```
   cd examen-react
```
3. Instalar dependencias:
```
   npm install
```
4. Instalar router:
```
   npm install react-router-dom
```
5. Ejecutar el servidor de desarrollo:
```
   npm run dev
```
6. Abrir el proyecto en el navegador usando la URL que muestra Vite 
```
   (por ejemplo: http://localhost:5173)
```
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

# Como hacer el app.jsx (menu)
```
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Multimedia from './components/Multimedia';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
```

# main.jsx (declaracion router)
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

# Multimedia
Gallery
```
import React from "react";
import imgSmall from "./images/photo-480.webp";
import imgMedium from "./images/photo-800.webp";
import imgLarge from "./images/photo-1200.webp";


function Gallery() {
   return (
   <section>
      <h2>Galeria d'imatges</h2>
      <img
         src={imgMedium}
         srcSet={`
         ${imgSmall} 480w,
         ${imgMedium} 800w,
         ${imgLarge} 1200w
         `}
         sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
         alt="Paisatge natural amb muntanyes"
         loading="lazy"
      />
   </section>
   );
}


export default Gallery;
```

Audio
```
import React from "react";
import audioMp3 from "./audio/audio.mp3";
import audioOgg from "./audio/audio.ogg";


function AudioPlayer() {
   return (
   <section>
      <h2>Reproductor d'àudio</h2>
      <audio controls>
         <source src={audioMp3} type="audio/mpeg" />
         <source src={audioOgg} type="audio/ogg" />
            El teu navegador no suporta l'àudio HTML5.
      </audio>
   </section>
   );
}


export default AudioPlayer;
```

Video
```
import React from "react";
import videoMp4 from "./video/video.mp4";
import videoWebm from "./video/video.webm";
import subtitles from "./video/subtitles.vtt";


function VideoPlayer() {
return (
   <section>
      <h2>Reproductor de vídeo</h2>
      <video controls width="600" loading="lazy">
         <source src={videoMp4} type="video/mp4" />
         <source src={videoWebm} type="video/webm" />
         <track
            src={subtitles}
            kind="subtitles"
            srcLang="ca"
            label="Català"
         />
         El teu navegador no suporta vídeo HTML5.
      </video>
   </section>
);
}


export default VideoPlayer;
```

USE REF - FOCUS
```
import { useRef, useEffect } from "react";

function Form() {
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   return (
      <input ref={inputRef} type="text" placeholder="Nom" />
   );
}

export default Form;
```

ARIA i WCAG
```
<form>
   <label htmlFor="email">Email</label>
   <input
      id="email"
      type="email"
      aria-required="true"
      aria-label="Correu electrònic"
   />

   <button aria-label="Enviar formulari">Enviar</button>
</form>
```