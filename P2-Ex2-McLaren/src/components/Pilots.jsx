import React from 'react';

export default function Pilots() {
  const pilots = [
    {
      name: 'Oscar Piastri',
      desc: 'Jove i metòdic, ha demostrat un talent increïble i una adaptació ràpida a l’elit de la Fórmula 1.',
      img: '/home/oscar-piastri.webp',
    },
    {
      name: 'Lando Norris',
      desc: 'Carismàtic, constant i ràpid. És una de les figures més prometedores i estimades del paddock.',
      img: '/home/lando-norris.webp',
    }
  ];

  return (
    <main className="pilots-main">
      <section className="pilots-hero" aria-labelledby="pilots-hero-title">
        <h1 id="pilots-hero-title">Pilots McLaren F1 2025</h1>
        <p>Descobreix els pilots que competeixen aquest any amb l’equip McLaren.</p>
      </section>

      <section className="pilots-section" aria-labelledby="pilots-section-title">
        <h2 id="pilots-section-title" className="sr-only">Llista de pilots McLaren 2025</h2>
        <div className="pilots-container">
          {pilots.map((pilot, i) => (
            <article 
              key={i} 
              className="pilot-card" 
              role="group" 
              aria-labelledby={`pilot-name-${i}`} 
              aria-describedby={`pilot-desc-${i}`}
            >
              <img 
                src={pilot.img} 
                alt={`Foto de ${pilot.name}`} 
                className="pilot-img" 
              />
              <div className="pilot-info">
                <h3 id={`pilot-name-${i}`}>{pilot.name}</h3>
                <p id={`pilot-desc-${i}`}>{pilot.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
