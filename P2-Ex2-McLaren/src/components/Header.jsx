// Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="hero-background">
        <div className="logo-container">
          <img src="/logo.png" alt="McLaren Logo" className="logo-img" />
        </div>
      </div>

      <nav className="nav-bar" role="navigation" aria-label="Menú principal">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/inici"
              className={`nav-link ${isActive('/inici') ? 'active' : ''}`}
              aria-current={isActive('/inici') ? 'page' : undefined}
            >
              Inici
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/equip"
              className={`nav-link ${isActive('/equip') ? 'active' : ''}`}
              aria-current={isActive('/equip') ? 'page' : undefined}
            >
              Equip F1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/historia"
              className={`nav-link ${isActive('/historia') ? 'active' : ''}`}
              aria-current={isActive('/historia') ? 'page' : undefined}
            >
              Historia
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pilots"
              className={`nav-link ${isActive('/pilots') ? 'active' : ''}`}
              aria-current={isActive('/pilots') ? 'page' : undefined}
            >
              Pilots
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cotxe"
              className={`nav-link ${isActive('/cotxe') ? 'active' : ''}`}
              aria-current={isActive('/cotxe') ? 'page' : undefined}
            >
              Cotxe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacte"
              className={`nav-link ${isActive('/contacte') ? 'active' : ''}`}
              aria-current={isActive('/contacte') ? 'page' : undefined}
            >
              Contacte
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/multimedia"
              className={`nav-link ${isActive('/multimedia') ? 'active' : ''}`}
              aria-current={isActive('/multimedia') ? 'page' : undefined}
            >
              Multimedia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
