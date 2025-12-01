import React from 'react';

export default function Cotxe() {
  const cars = [
    {
      name: 'McLaren MCL60 (2025)',
      description: 'Monoplaza actual de McLaren en la temporada 2025 de Fórmula 1. Combina aerodinámica avanzada y tecnología híbrida.',
      driver: 'Lando Norris / Oscar Piastri',
      img: '/cotxe/mclaren-mcl60.jpg',
    },
    {
      name: 'McLaren MP4/4 (1988)',
      description: 'Clásico de 1988 con gran dominación en la F1, ganando 15 de 16 carreras.',
      driver: 'Ayrton Senna / Alain Prost',
      img: '/cotxe/mclaren-mp44.webp',
    },
    {
      name: 'McLaren MP4/5 (1989)',
      description: 'Modelo ganador del Campeonato de Pilotos y Constructores en 1989.',
      driver: 'Ayrton Senna / Alain Prost',
      img: '/cotxe/mclaren-mp45.webp',
    },
    {
      name: 'McLaren MP4/6 (1991)',
      description: 'Icono de la era dorada de McLaren, con Senna dominando el campeonato.',
      driver: 'Ayrton Senna / Gerhard Berger',
      img: '/cotxe/mclaren-mp46.jpg',
    }, 
    {
      name: 'McLaren MP4/8 (1993)',
      description: 'Monoplaza con el que Ayrton Senna ganó su última temporada con McLaren, mostrando gran dominio tecnológico.',
      driver: 'Ayrton Senna / Michael Andretti',
      img: '/cotxe/mclaren-mp48.jpg',
    },
    {
      name: 'McLaren MP4/13 (1998)',
      description: 'Modelo que dio el Campeonato de Constructores a McLaren.',
      driver: 'Mika Häkkinen / David Coulthard',
      img: '/cotxe/mclaren-mp413.jpg',
    },
    {
      name: 'McLaren MP4/14 (1999)',
      description: 'Segunda generación del auto de Häkkinen, continuando la dominación de McLaren.',
      driver: 'Mika Häkkinen / David Coulthard',
      img: '/cotxe/mclaren-mp414.jpg',
    },
    {
      name: 'McLaren MP4/17 (2002)',
      description: 'Modelo que mostró mejoras aerodinámicas y técnicas de McLaren en los 2000.',
      driver: 'David Coulthard / Mika Häkkinen',
      img: '/cotxe/mclaren-mp417.jpg',
    },
    {
      name: 'McLaren MP4/23 (2008)',
      description: 'El coche de Lewis Hamilton que luchó por el campeonato.',
      driver: 'Lewis Hamilton / Heikki Kovalainen',
      img: '/cotxe/mclaren-mp423.jpg',
    },
    {
      name: 'McLaren MP4/30 (2015)',
      description: 'Modelo híbrido de la era moderna de la F1, con motores turbo V6 híbridos.',
      driver: 'Fernando Alonso / Jenson Button',
      img: '/cotxe/mclaren-mp430.jpg',
    }
  ];

  return (
    <main className="car-main">
      <section className="car-hero">
        <h1>Monoplaces Emblemàtics de McLaren</h1>
        <p>Explora 10 dels monoplaces més icònics de McLaren i els pilots que els van conduir.</p>
      </section>

      <section className="cars-gallery">
        {cars.map((car, i) => (
          <div key={i} className="car-card">
            <img src={car.img} alt={`Imatge del ${car.name}`} className="car-img" loading="lazy" />
            <div className="car-info">
              <h2>{car.name}</h2>
              <p><strong>Pilot(s):</strong> {car.driver}</p>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
