import React from 'react';
import { Hammer, Brush, Plane } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Muebles a Medida',
      description: 'Diseñamos y fabricamos muebles personalizados que se ajustan perfectamente a tus necesidades y estilo, optimizando cada rincón de tu hogar.',
      icon: <Hammer className="w-14 h-14 text-emerald-700 mb-4 drop-shadow-md" />,
      image: 'https://i.postimg.cc/XJr9NW96/mueblesamedida.png',
    },
    {
      title: 'Restauración de Madera',
      description: 'Devolvemos la vida a tus muebles antiguos con técnicas expertas de restauración y acabados de alta calidad, conservando su valor y belleza original.',
      icon: <Brush className="w-14 h-14 text-emerald-700 mb-4 drop-shadow-md" />,
      image: 'https://i.postimg.cc/FsBG0PsZ/restaurar.png',
    },
    {
      title: 'Proyectos de Interiorismo',
      description: 'Desde revestimientos de pared hasta instalaciones completas y complejos diseños de interiores, abordamos cualquier proyecto de carpintería con maestría.',
      icon: <Plane className="w-14 h-14 text-emerald-700 mb-4 drop-shadow-md" />,
      image: 'https://i.postimg.cc/mkhpGKgP/mueblesinteriores.png',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16 animate-fadeIn">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col items-center group animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full h-48 mb-6 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Imagen+No+Disponible'} />
              </div>
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
