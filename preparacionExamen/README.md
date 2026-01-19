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



1. Selectores

p → selecciona todos los <p>. Sirve para aplicar estilo general a ese tipo de elemento.

.clase → selecciona todos los elementos con esa clase. Sirve para agrupar estilos.

#id → selecciona un elemento único por su id. Sirve para personalizar algo concreto.

div > p → selecciona solo los <p> hijos directos de un div. Útil para no afectar otros <p>.

div p → selecciona todos los <p> dentro de un div, aunque no sean hijos directos.

a:hover → aplica estilo cuando pasas el cursor sobre un enlace.

2. Colores y fondos

color → cambia el color del texto.

background-color → color de fondo de un elemento.

background-image → poner una imagen de fondo.

background-size: cover → la imagen cubre todo el elemento.

background-repeat: no-repeat → la imagen no se repite.

background-position: center → centra la imagen de fondo.

3. Texto y fuentes

font-family → tipo de letra (Arial, Times…).

font-size → tamaño de letra.

font-weight → grosor (normal, bold).

font-style → estilo (normal, italic).

text-align → alineación (left, center…).

text-decoration → decoraciones (underline = subrayado, line-through = tachado).

line-height → altura de la línea (espacio entre líneas).

letter-spacing → espacio entre letras.

4. Caja (Box Model)

width y height → ancho y alto del elemento.

padding → espacio dentro del borde.

border → borde del elemento.

margin → espacio fuera del borde.

box-sizing: border-box → hace que el padding y borde se incluyan en el ancho y alto total (útil para que no se desconfigure).

5. Display y posicionamiento

display: block → ocupa toda la línea (ej: <div>).

display: inline → ocupa solo lo que necesita el contenido (ej: <span>).

display: inline-block → como inline, pero permite ancho y alto.

display: flex → activa un contenedor flexible para alinear elementos.

position: static → posición normal (por defecto).

position: relative → se mueve relativo a su posición original.

position: absolute → se posiciona respecto al primer padre con position: relative.

position: fixed → fijo en la pantalla, aunque hagas scroll.

position: sticky → se comporta como relative hasta que llegas a un límite y se queda “pegado”.

6. Flexbox (básico)

justify-content → alinea horizontalmente: flex-start, center, flex-end, space-between, space-around.

align-items → alinea verticalmente dentro del contenedor: flex-start, center, flex-end, stretch.

flex-direction → dirección de los elementos: row (horizontal), column (vertical).
