import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <main className="home-main">

        <section className="hero" aria-label="Secció principal de McLaren F1 Team">
          <img
            src="/home/hero-mclaren.webp"
            alt="McLaren F1 car driving on track"
            className="hero-img"
          />
          <div className="hero-content">
            <h1 className="hero-title">McLaren F1 Team</h1>
            <p className="hero-text">
              Velocitat, innovació i passió. L’equip que redefineix els límits de la Fórmula 1.
            </p>
            <a href="#team" className="hero-btn" aria-label="Descobreix més sobre l'equip McLaren">Descobreix més</a>
          </div>
        </section>

        <section id="team" className="team-section" aria-labelledby="team-title">
          <div className="team-container">
            <img src="/home/mclaren-hq.webp" alt="Seu central de McLaren a Woking, Anglaterra" className="team-img" />
            <div className="team-text">
              <h2 id="team-title">Un llegat de velocitat</h2>
              <p>
                Fundada el 1963 per <strong>Bruce McLaren</strong>, l’escuderia ha sigut una de les més icòniques de la Fórmula 1.
                Amb desenes de victòries i múltiples campionats del món, McLaren continua liderant la innovació tecnològica a la pista.
              </p>
              <p>
                Des de la seva seu a Woking, Anglaterra, l’equip desenvolupa cada component amb una precisió obsessiva,
                combinant ciència, rendiment i passió per la competició.
              </p>
            </div>
          </div>
        </section>

        <section className="drivers-container" aria-label="Pilots de l'equip">
          {[
            {
              name: 'Oscar Piastri',
              desc: 'Jove i metòdic, ha demostrat un talent increïble i una adaptació ràpida a l’elit de la Fórmula 1.',
              img: '/home/oscar-piastri.webp',
            },
            {
              name: 'Lando Norris',
              desc: 'Carismàtic, constant i ràpid. És una de les figures més prometedores i estimades del paddock.',
              img: '/home/lando-norris.webp',
            },
          ].map((driver, i) => (
            <article key={i} className="driver-card">
              <img src={driver.img} alt={`Foto de ${driver.name}`} className="driver-img" />
              <div className="driver-info">
                <h3>{driver.name}</h3>
                <p>{driver.desc}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="stats-section" aria-labelledby="stats-title">
          <h2 id="stats-title">Estadístiques 2025</h2>
          <div className="stats-container">
            {[
              { number: '12', label: 'Victòries' },
              { number: '9', label: 'Poles' },
              { number: '28', label: 'Pòdiums' },
              { number: '1r', label: 'Posició al mundial' },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-section" aria-labelledby="tech-title">
          <div className="tech-container">
            <div>
              <h2 id="tech-title">Innovació i rendiment</h2>
              <p>
                Cada detall del McLaren és el resultat d’hores de simulacions, proves i anàlisi de dades.
                L’ús de materials ultralleugers i aerodinàmica avançada marca la diferència a cada corba.
              </p>
              <p>
                Amb la tecnologia híbrida més sofisticada del paddock, McLaren s’ha convertit en sinònim de
                precisió i eficiència dins i fora del circuit.
              </p>
            </div>
            <img src="/home/lab-tech.jpg_large" alt="Laboratori de tecnologia de McLaren" className="tech-img" />
          </div>
        </section>

        <section className="galleryAD-section" aria-labelledby="galleryAD-title">
          <h2 id="galleryAD-title">Moments destacats</h2>
          <div className="galleryAD-container">
            {['/home/moment1.webp', '/home/moment2.webp', '/home/moment3.webp'].map((img, i) => (
              <div
                key={i}
                className="galleryAD-card"
                role="figure"
                aria-label={`Moment destacat ${i + 1} de McLaren`}
              >
                <img src={img} alt={`Moment destacat ${i + 1} de McLaren`} />
              </div>
            ))}
          </div>
        </section>




        <section className="quote-section" aria-labelledby="quote-title">
          <h2 id="quote-title" className="sr-only">Cita de Bruce McLaren</h2>
          <blockquote>“El nostre objectiu no és només competir, sinó inspirar el futur de la velocitat.”</blockquote>
          <p>— Bruce McLaren</p>
        </section>

      </main>
    );
  }
}

export default Home;
