import React from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const Header = ({ isOpen, setIsOpen, navigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Hammer className="text-emerald-700 w-9 h-9" />
          <span className="text-2xl font-extrabold text-emerald-800">Carpintería El Palito</span>
        </div>

        <ul className="hidden md:flex space-x-10">
          <li><button onClick={() => navigate('inicio')} className="text-gray-700 hover:text-emerald-600 transition duration-300 font-semibold text-lg">Inicio</button></li>
          <li><button onClick={() => navigate('servicios')} className="text-gray-700 hover:text-emerald-600 transition duration-300 font-semibold text-lg">Servicios</button></li>
          <li><button onClick={() => navigate('beneficios')} className="text-gray-700 hover:text-emerald-600 transition duration-300 font-semibold text-lg">Beneficios</button></li>
          <li><button onClick={() => navigate('testimonios')} className="text-gray-700 hover:text-emerald-600 transition duration-300 font-semibold text-lg">Testimonios</button></li>
          <li><button onClick={() => navigate('contacto')} className="text-gray-700 hover:text-emerald-600 transition duration-300 font-semibold text-lg">Contacto</button></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl py-4 rounded-b-lg animate-fadeInDown">
          <ul className="flex flex-col items-center space-y-4">
            <li><button onClick={() => navigate('inicio')} className="block text-gray-700 hover:text-emerald-600 py-2 text-lg">Inicio</button></li>
            <li><button onClick={() => navigate('servicios')} className="block text-gray-700 hover:text-emerald-600 py-2 text-lg">Servicios</button></li>
            <li><button onClick={() => navigate('beneficios')} className="block text-gray-700 hover:text-emerald-600 py-2 text-lg">Beneficios</button></li>
            <li><button onClick={() => navigate('testimonios')} className="block text-gray-700 hover:text-emerald-600 py-2 text-lg">Testimonios</button></li>
            <li><button onClick={() => navigate('contacto')} className="block text-gray-700 hover:text-emerald-600 py-2 text-lg">Contacto</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
