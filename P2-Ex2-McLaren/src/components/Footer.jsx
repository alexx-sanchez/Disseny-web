import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">

          {/* Sección de texto */}
          <div className="footer-section footer-text">
            <h2>McLaren Racing</h2>
            <p>©2025. Tots els drets reservats.</p>
          </div>

          {/* Links rápidos */}
          <div className="footer-section footer-links">
            <h3>Links ràpids</h3>
            <ul>
              <li><a href="#team">Equip F1</a></li>
              <li><a href="#history">Historia</a></li>
              <li><a href="#pilots">Pilots</a></li>
              <li><a href="#car">Cotxe</a></li>
              <li><a href="#contact">Contacte</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
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

        {/* Línea decorativa */}
        <div className="footer-line"></div>
      </footer>
    );
  }
}

export default Footer;
