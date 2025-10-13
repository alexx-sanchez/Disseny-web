import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="text-center py-4">
          <img
            src="./public/logo.png"
            alt="McLaren Logo"
            className="max-h-[100px] mx-auto"
          />
        </div>

        <nav>
          <ul className="flex justify-center bg-orange-500 py-2 m-0 list-none">
            <li className="mx-4"><a href="#" className="text-black hover:underline">Equip F1</a></li>
            <li className="mx-4"><a href="#" className="text-black hover:underline">Historia</a></li>
            <li className="mx-4"><a href="#" className="text-black hover:underline">Pilots</a></li>
            <li className="mx-4"><a href="#" className="text-black hover:underline">Cotxe</a></li>
            <li className="mx-4"><a href="#" className="text-black hover:underline">Contacte</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
