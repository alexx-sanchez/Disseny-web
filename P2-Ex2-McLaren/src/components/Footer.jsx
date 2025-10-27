import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white shadow-inner pt-10 pb-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-0 grid md:grid-cols-3 gap-8">

          {/* Sección de texto */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">McLaren Racing</h2>
            <p className="text-gray-100">©2025. Tots els drets reservats.</p>
          </div>

          {/* Links rápidos */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Links ràpids</h3>
            <ul className="space-y-1 text-gray-100">
              <li><a href="#team" className="hover:text-white transition-colors">Equip F1</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">Historia</a></li>
              <li><a href="#pilots" className="hover:text-white transition-colors">Pilots</a></li>
              <li><a href="#car" className="hover:text-white transition-colors">Cotxe</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacte</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-2">Segueix-nos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-200 transition-colors duration-300">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-200 transition-colors duration-300">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-200 transition-colors duration-300">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

        </div>

        {/* Línea decorativa */}
        <div className="border-t border-black/20 mt-8 mx-6 sm:mx-8"></div>
      </footer>
    );
  }
}

export default Footer;
