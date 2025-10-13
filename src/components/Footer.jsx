import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-orange-500 text-black py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 space-y-4 md:space-y-0">
          
          {/* Texto */}
          <p className="text-center md:text-left text-lg font-medium">
            McLaren Racing ©2025
          </p>

          {/* Redes sociales */}
          <nav aria-label="Redes sociales">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="hover:text-white transition-colors duration-300" size={24} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="hover:text-white transition-colors duration-300" size={24} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:text-white transition-colors duration-300" size={24} />
                </a>
              </li>
            </ul>
          </nav>

        </div>

        {/* Línea decorativa */}
        <div className="border-t border-black/20 mt-4 mx-4 sm:mx-6 md:mx-6"></div>
      </footer>
    );
  }
}

export default Footer;
