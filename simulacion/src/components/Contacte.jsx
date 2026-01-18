import React, { useRef, useEffect } from 'react';

export default function Contacte() {
  const nombreRef = useRef(null); // referencia

  // enfocar input
  useEffect(() => {
    nombreRef.current.focus();
  }, []);

  return (
    <div className="contacte-container">
      <h1 className="contacte-title">Contacte</h1>
      <form className="contacte-form">
        <label htmlFor="nombre" className="contacte-label">Nombre:</label>
        <input
          id="nombre"
          type="text"
          ref={nombreRef} // asignar ref -> input
          className="contacte-input"
          aria-label="Campo de nombre"
        />
        <button type="submit" className="contacte-button">Enviar</button>
      </form>
    </div>
  );
}
