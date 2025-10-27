import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="relative w-full">
        {/* Fondo hero sutil con imagen */}
        <div className="relative h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden">
          {/* Gradiente encima para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>

          {/* Logo centrado */}
          <div className="relative z-10 flex justify-center items-center h-full">
            <img
              src="/logo.png"
              alt="McLaren Logo"
              className="max-h-[80px] sm:max-h-[100px] md:max-h-[120px]"
            />
          </div>
        </div>

        {/* Menú */}
        <nav className="bg-orange-500 shadow-md">
          <ul className="flex flex-col sm:flex-row justify-around items-center py-2 m-0 list-none text-black">
            {['Equip F1', 'Historia', 'Pilots', 'Cotxe', 'Contacte'].map((item, i) => (
              <li key={i} className="py-1 sm:py-0">
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                  className="hover:underline text-lg font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
