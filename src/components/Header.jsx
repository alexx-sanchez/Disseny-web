import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* Logo con fondo animado sutil */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-100 to-orange-200 animate-gradient-x z-0"></div>
          <div className="relative z-10 text-center py-4 px-4">
            <img
              src="/logo.png"
              alt="McLaren Logo"
              className="max-h-[80px] sm:max-h-[100px] mx-auto"
            />
          </div>
        </div>

        {/* Menú normal responsive */}
        <nav>
          <ul className="flex flex-col sm:flex-row justify-around bg-orange-500 py-2 m-0 list-none text-black">
            <li className="py-1 sm:py-0"><a href="#" className="hover:underline text-lg">Equip F1</a></li>
            <li className="py-1 sm:py-0"><a href="#" className="hover:underline text-lg">Historia</a></li>
            <li className="py-1 sm:py-0"><a href="#" className="hover:underline text-lg">Pilots</a></li>
            <li className="py-1 sm:py-0"><a href="#" className="hover:underline text-lg">Cotxe</a></li>
            <li className="py-1 sm:py-0"><a href="#" className="hover:underline text-lg">Contacte</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
