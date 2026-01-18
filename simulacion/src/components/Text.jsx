import React, { useState } from 'react';

export default function Text() {
  // Estado para mostrar/ocultar texto
  const [mostrarTexto, setMostrarTexto] = useState(true);

  return (
    <div className="text-container">
      <h1 className="text-title">Apuntes Multimedia</h1>

      {/* Botón para mostrar/ocultar texto */}
      <button
        className="text-button"
        onClick={() => setMostrarTexto(!mostrarTexto)}
      >
        {mostrarTexto ? 'Ocultar texto' : 'Mostrar texto'}
      </button>

      {/* Texto condicional */}
      {mostrarTexto && (
        <p className="text-paragraph">
          Este es un ejemplo de cómo usar <strong>useState</strong> para mostrar u ocultar contenido dinámicamente.
        </p>
      )}

      {/* Video */}
      <video
        className="text-video"
        controls
        width="320"
        aria-label="Video de ejemplo"
      >
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Audio */}
      <audio
        className="text-audio"
        controls
        aria-label="Audio de ejemplo"
      >
        <source src="audio.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
}
