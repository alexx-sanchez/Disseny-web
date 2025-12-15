import React, { useRef, useEffect } from 'react';

export default function Contacte() {
  // Creem la referència per a l'input del nom
  const nameInputRef = useRef(null);

  // useEffect s'executa quan el component es monta
  useEffect(() => {
    // Assegurem que la referència existeixi abans de posar focus
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <main className="contact-main">
      <section className="contact-section">
        <h2 id="contact-title">Contacta amb nosaltres</h2>
        <p>Si tens dubtes o vols col·laborar amb McLaren F1, envia’ns un missatge!</p>

        <form className="contact-form" aria-labelledby="contact-title">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="El teu nom"
            required
            aria-label="Nom complet del remitent"
            ref={nameInputRef} // <-- Assignem la referència aquí
          />

          <label htmlFor="email">Correu electrònic</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@correu.com"
            required
            aria-label="Adreça de correu electrònic"
          />

          <label htmlFor="message">Missatge</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escriu el teu missatge..."
            rows="5"
            required
            aria-label="Missatge del remitent"
          ></textarea>

          <button type="submit" role="button" aria-label="Enviar formulari de contacte">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
