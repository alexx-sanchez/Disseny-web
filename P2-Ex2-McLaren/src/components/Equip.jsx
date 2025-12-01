import React from 'react';

export default function Equip() {
  const teamMembers = [
    {
      name: 'Zak Brown',
      role: 'CEO',
      img: '/team/zak-brown.jpg',
      description: 'Responsable de liderar la estrategia global de McLaren Racing.',
    },
    {
      name: 'Andrea Stella',
      role: 'Director Técnico',
      img: '/team/andrea-stella.jpg',
      description: 'Encargado del desarrollo técnico y rendimiento del monoplaza.',
    },
    {
      name: 'James Key',
      role: 'Diseñador Jefe',
      img: '/team/james-key.jpg',
      description: 'Diseña los componentes clave del coche para optimizar la aerodinámica.',
    },
  ];

  return (
    <main className="equip-main">
      <section className="equip-section">
        <h2>Equip McLaren F1</h2>
        <p>Descobreix l’equip que fa possible el rendiment de McLaren a la Fórmula 1.</p>

        <div className="team-cards">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.img} alt={member.name} className="team-img2" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
