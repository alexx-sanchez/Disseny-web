// Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/header.scss';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="hero-background">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>
      </div>

      <nav className="nav-bar" role="navigation" aria-label="Menú principal">
        <button
          className="hamburger"
          aria-label="Obrir menú"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${open ? 'open' : ''}`}>
          <li className="nav-item">
            <Link
              to="/inici"
              className={`nav-link ${isActive('/inici') ? 'active' : ''}`}
              aria-current={isActive('/inici') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Inici
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/equip"
              className={`nav-link ${isActive('/equip') ? 'active' : ''}`}
              aria-current={isActive('/equip') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Equip F1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/historia"
              className={`nav-link ${isActive('/historia') ? 'active' : ''}`}
              aria-current={isActive('/historia') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Historia
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pilots"
              className={`nav-link ${isActive('/pilots') ? 'active' : ''}`}
              aria-current={isActive('/pilots') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Pilots
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cotxe"
              className={`nav-link ${isActive('/cotxe') ? 'active' : ''}`}
              aria-current={isActive('/cotxe') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Cotxe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacte"
              className={`nav-link ${isActive('/contacte') ? 'active' : ''}`}
              aria-current={isActive('/contacte') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Contacte
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/multimedia"
              className={`nav-link ${isActive('/multimedia') ? 'active' : ''}`}
              aria-current={isActive('/multimedia') ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              Multimedia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}