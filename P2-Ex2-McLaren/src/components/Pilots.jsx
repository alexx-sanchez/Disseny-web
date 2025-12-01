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
      <section className="pilots-hero">
        <h1>Pilots McLaren F1 2025</h1>
        <p>Descobreix els pilots que competeixen aquest any amb l’equip McLaren.</p>
      </section>

      <section className="pilots-section">
        <div className="pilots-container">
          {pilots.map((pilot, i) => (
            <div key={i} className="pilot-card">
              <img src={pilot.img} alt={pilot.name} className="pilot-img" />
              <div className="pilot-info">
                <h3>{pilot.name}</h3>
                <p>{pilot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
