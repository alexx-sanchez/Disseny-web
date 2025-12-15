import React, { useRef, useEffect } from 'react';

export default function Contacte() {
  // Creem la referència per a l'input del nom
  const nameInputRef = useRef(null);

  // useEffect s'executa quan el component es monta
  useEffect(() => {
    nameInputRef.current.focus(); // Col·loca el focus a l'input
  }, []);

  return (
    <main className="contact-main">
      <section className="contact-section">
        <h2>Contacta amb nosaltres</h2>
        <p>Si tens dubtes o vols col·laborar amb McLaren F1, envia’ns un missatge!</p>

        <form className="contact-form">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="El teu nom"
            required
            ref={nameInputRef} // Assignem la referència aquí
          />

          <label htmlFor="email">Correu electrònic</label>
          <input type="email" id="email" name="email" placeholder="exemple@correu.com" required />

          <label htmlFor="message">Missatge</label>
          <textarea id="message" name="message" placeholder="Escriu el teu missatge..." rows="5" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}
