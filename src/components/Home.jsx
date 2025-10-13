import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <main className="bg-gray-100">

        {/* Campeones del Mundial */}
        <section className="grid md:grid-cols-2 gap-0 items-center bg-gray-300">
          <header className="flex flex-col md:flex-row items-center gap-4 pl-4">
            <h1 className="text-3xl font-bold mb-0 text-center md:text-left">
              Campeones del Mundial de Constructores 2024
            </h1>
            <img
              src="/constructor.webp"
              alt="Logo McLaren"
              className="h-60 w-auto"
            />
          </header>
          <figure>
            <img
              src="/win.jpg"
              alt="Celebración McLaren"
              className="w-full h-auto"
            />
          </figure>
        </section>

        {/* Coche actual y resultados */}
        <section className="grid md:grid-cols-2 gap-0 items-center bg-gray-300">
          <figure>
            <img
              src="/cochef1.jpg"
              alt="Coche McLaren"
              className="w-full h-auto"
            />
          </figure>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold mb-4">Estat actual de l'equip</h2>
            <p className="max-w-3xl leading-relaxed text-gray-700 px-4">
              McLaren travessa un gran moment el 2025, liderant el Campionat de Constructors després d'una temporada molt consistent.
              Els seus pilots, <strong>Oscar Piastri</strong> i <strong>Lando Norris</strong>, estan lluitant entre ells pel títol mundial,
              amb Piastri lleugerament per davant en punts. L’equip ha demostrat un gran rendiment i fiabilitat, tot i que encara busca
              millorar la rapidesa a les parades en boxes. La rivalitat interna entre ambdós pilots ha augmentat, però manté viva
              l’emoció dins de l’equip. Mentrestant, <strong>Red Bull</strong> i <strong>Verstappen</strong> continuen sent una
              amenaça constant a la recta final del campionat.
            </p>
          </div>
        </section>

        {/* Seu de McLaren */}
        <section className="grid md:grid-cols-2 gap-0 items-center bg-gray-300">
          <header className="flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-semibold mb-2">Seu de McLaren</h2>
            <p className="mt-2 text-gray-700 max-w-xl leading-relaxed">
              La seu de McLaren a Woking, Regne Unit, combina història i tecnologia d'avantguarda,
              sent el cor del desenvolupament dels seus monoplaces de Fórmula 1 i el centre d'operacions
              de l'equip. Aquí es dissenyen, construeixen i perfeccionen els vehicles, amb un equip
              d'enginyers i tècnics altament qualificats que treballen per mantenir McLaren al més alt
              nivell de competició. La seu també alberga els departaments de gestió i estratègia, fent
              d'aquest lloc un veritable nucli del projecte esportiu i tecnològic de l'escuderia.
            </p>
          </header>
          <figure>
            <img
              src="/sede.webp"
              alt="Seu McLaren"
              className="w-full h-auto"
            />
          </figure>
        </section>

      </main>
    );
  }
}

export default HomePage;
