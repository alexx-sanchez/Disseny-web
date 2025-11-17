import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {/* Fondo hero sutil con imagen */}
        <div className="hero-background">
          {/* Logo centrado */}
          <div className="logo-container">
            <img
              src="/logo.png"
              alt="McLaren Logo"
              className="logo-img"
            />
          </div>
        </div>

        {/* Menú */}
        <nav className="nav-bar">
          <ul className="nav-list">
            {['Equip F1', 'Historia', 'Pilots', 'Cotxe', 'Contacte'].map((item, i) => (
              <li key={i} className="nav-item">
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                  className="nav-link"
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
