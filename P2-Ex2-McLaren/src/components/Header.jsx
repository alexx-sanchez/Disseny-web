// Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* Fondo hero */}
      <div className="hero-background">
        <div className="logo-container">
          <img src="/logo.png" alt="McLaren Logo" className="logo-img" />
        </div>
      </div>

      {/* Menú */}
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/inici" className={`nav-link ${isActive('/inici') ? 'active' : ''}`}>
              Inici
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/equip" className={`nav-link ${isActive('/equip') ? 'active' : ''}`}>
              Equip F1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/historia" className={`nav-link ${isActive('/historia') ? 'active' : ''}`}>
              Historia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pilots" className={`nav-link ${isActive('/pilots') ? 'active' : ''}`}>
              Pilots
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cotxe" className={`nav-link ${isActive('/cotxe') ? 'active' : ''}`}>
              Cotxe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacte" className={`nav-link ${isActive('/contacte') ? 'active' : ''}`}>
              Contacte
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
