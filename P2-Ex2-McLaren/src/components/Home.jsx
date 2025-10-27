import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <main className="bg-gray-950 text-white font-sans overflow-hidden">

        {/* HERO */}
        <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
          <img
            src="/home/hero-mclaren.webp"
            alt="McLaren F1 car on track"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-500 drop-shadow-lg">
              McLaren F1 Team
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
              Velocitat, innovació i passió. L’equip que redefineix els límits de la Fórmula 1.
            </p>
            <a
              href="#team"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Descobreix més
            </a>
          </div>
        </section>

        {/* SOBRE EL EQUIPO */}
        <section id="team" className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
            <img
              src="/home/mclaren-hq.webp"
              alt="McLaren headquarters"
              className="rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4 text-orange-500">Un llegat de velocitat</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Fundada el 1963 per <strong>Bruce McLaren</strong>, la escuderia ha sigut una de les més icòniques de la Fórmula 1.
                Amb desenes de victòries i múltiples campionats del món, McLaren continua liderant la innovació tecnològica a la pista.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Des de la seva seu a Woking, Anglaterra, l’equip desenvolupa cada component amb una precisió obsessiva,
                combinant ciència, rendiment i passió per la competició.
              </p>
            </div>
          </div>
        </section>

        {/* PILOTOS */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">
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
            <div
              key={i}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img
                src={driver.img}
                alt={driver.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-orange-400">{driver.name}</h3>
                <p className="text-gray-300">{driver.desc}</p>
              </div>
            </div>
          ))}
        </div>


        {/* ESTADÍSTICAS */}
        <section className="bg-gray-900 py-20 text-center">
          <h2 className="text-4xl font-bold mb-10 text-orange-500">Estadístiques 2025</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
            {[
              { number: '12', label: 'Victòries' },
              { number: '9', label: 'Poles' },
              { number: '28', label: 'Pòdiums' },
              { number: '1r', label: 'Posició al mundial' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:scale-105 transition-transform"
              >
                <h3 className="text-5xl font-bold text-orange-500">{stat.number}</h3>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECNOLOGÍA */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-orange-500">Innovació i rendiment</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Cada detall del McLaren és el resultat d’hores de simulacions, proves i anàlisi de dades.
                L’ús de materials ultralleugers i aerodinàmica avançada marca la diferència a cada corba.
              </p>
              <p className="text-gray-400">
                Amb la tecnologia híbrida més sofisticada del paddock, McLaren s’ha convertit en sinònim de
                precisió i eficiència dins i fora del circuit.
              </p>
            </div>
            <img
              src="/home/lab-tech.jpg_large"
              alt="McLaren technology lab"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* GALERÍA */}
        <section className="bg-gray-900 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Moments destacats</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
            {['/home/moment1.jpeg', '/home/moment2.jpg', '/home/moment3.webp'].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`Moment ${i + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>


        {/* FRASE FINAL */}
        <section className="bg-black text-center py-16">
          <blockquote className="text-2xl italic max-w-3xl mx-auto text-gray-200">
            “El nostre objectiu no és només competir, sinó inspirar el futur de la velocitat.”
          </blockquote>
          <p className="mt-4 text-gray-500">— Bruce McLaren</p>
        </section>

      </main>
    );
  }
}

export default HomePage;
