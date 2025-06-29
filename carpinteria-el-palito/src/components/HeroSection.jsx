import React from 'react';
import { Lightbulb } from 'lucide-react'; // Puedes añadir iconos si se usan en esta sección

const HeroSection = ({ navigate }) => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/0QFrYtsv/42925.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-stone-900 opacity-70"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fadeInDown text-shadow-lg">
          Transformamos tus ideas en Madera
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 animate-fadeInUp opacity-90">
          Diseños exclusivos y acabados impecables para cada rincón de tu hogar.
        </p>
        <button
          onClick={() => navigate('contacto')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 animate-bounceIn text-lg tracking-wide"
        >
          ¡Solicita tu presupuesto!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;