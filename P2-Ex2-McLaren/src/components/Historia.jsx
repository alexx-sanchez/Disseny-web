import React from 'react';

export default function Historia() {
  const timeline = [
    { year: '1963', event: 'Fundació de McLaren Motorsport' },
    { year: '1966', event: 'Debut a la Fórmula 1 (GP de Mònaco)' },
    { year: '1968', event: 'Primera victòria a la F1 (GP de Bèlgica, Spa)' },
    { year: '1974', event: 'Primer Campionat de Constructors' },
    { year: '1976', event: 'Campionat de Pilots amb James Hunt' },
    { year: '1984‑1991', event: 'Era daurada: múltiples títols i domini a la F1' },
    { year: '1998', event: 'Campionat de Constructors' },
    { year: '2000s‑2010s', event: 'Alts i baixos i transició tecnològica' },
    { year: '2024', event: 'Retorn a l’èxit: títol de Constructors' },
    { year: '2025', event: 'Consolidació del llegat i nous reptes' }
  ];

  return (
    <main className="historia-main">
      <section className="historia-hero">
        <h1>Història de McLaren F1</h1>
        <p>Moments clau que han marcat el llegat de McLaren a la Fórmula 1.</p>
      </section>

      <section className="historia-timeline">
        <h2>Línia del temps destacada</h2>
        <div className="timeline-cards">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-card">
              <h3>{item.year}</h3>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
