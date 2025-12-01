// Footer.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section footer-text">
          <h2>McLaren Racing</h2>
          <p>©2025. Tots els drets reservats.</p>
        </div>

        <div className="footer-section footer-links">
          <h3>Links ràpids</h3>
          <ul>
            <li>
              <Link to="/equip" className={isActive('/equip') ? 'active' : ''}>Equip F1</Link>
            </li>
            <li>
              <Link to="/historia" className={isActive('/historia') ? 'active' : ''}>Historia</Link>
            </li>
            <li>
              <Link to="/pilots" className={isActive('/pilots') ? 'active' : ''}>Pilots</Link>
            </li>
            <li>
              <Link to="/cotxe" className={isActive('/cotxe') ? 'active' : ''}>Cotxe</Link>
            </li>
            <li>
              <Link to="/contacte" className={isActive('/contacte') ? 'active' : ''}>Contacte</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h3>Segueix-nos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-line"></div>
    </footer>
  );
}
