import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function Text() {
  // ---------------------------
  // useState: estado para mostrar/ocultar texto
  // ---------------------------
  const [mostrarTexto, setMostrarTexto] = useState(true);

  // useState: contador
  const [contador, setContador] = useState(0);

  // ---------------------------
  // useEffect: efecto para mostrar mensaje cuando cambia el contador
  // ---------------------------
  useEffect(() => {
    console.log(`El contador ahora es ${contador}`);
  }, [contador]); // solo se ejecuta cuando contador cambia

  // useState + useEffect: temporizador
  const [tiempo, setTiempo] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(prev => prev + 1);
    }, 1000);

    // cleanup al desmontar
    return () => clearInterval(intervalo);
  }, []);

  // ---------------------------
  // useRef: referenciar elementos del DOM
  // ---------------------------
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // ---------------------------
  // useMemo: memorizar cálculo costoso
  // ---------------------------
  const numeros = [1, 2, 3, 4, 5];
  const suma = useMemo(() => {
    console.log('Calculando suma...');
    return numeros.reduce((a, b) => a + b, 0);
  }, [numeros]);

  return (
    <div className="text-container">
      <h1 className="text-title">Apuntes Multimedia y Hooks</h1>

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

      {/* Contador */}
      <div>
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>

      {/* Temporizador */}
      <div>
        <h2>Temporizador: {tiempo} segundos</h2>
      </div>

      {/* Input con useRef */}
      <div>
        <input ref={inputRef} type="text" placeholder="Haz clic en el botón para enfocar"/>
        <button onClick={focusInput}>Enfocar input</button>
      </div>

      {/* Resultado memoizado */}
      <div>
        <h2>Suma de números: {suma}</h2>
      </div>

      {/* Video */}
      <video className="text-video" controls width="320" aria-label="Video de ejemplo">
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Audio */}
      <audio className="text-audio" controls aria-label="Audio de ejemplo">
        <source src="audio.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
}
