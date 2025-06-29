import React from 'react';
import { CheckCircle2, Lightbulb, HeartHandshake, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Materiales Premium',
      description: 'Utilizamos solo las mejores maderas nobles y materiales certificados, garantizando durabilidad y acabados de lujo.',
      icon: <CheckCircle2 className="w-9 h-9 text-white" />,
    },
    {
      title: 'Diseño Exclusivo',
      description: 'Cada pieza es una obra de arte, diseñada y creada para reflejar tu estilo único y transformar tus espacios con elegancia.',
      icon: <Lightbulb className="w-9 h-9 text-white" />,
    },
    {
      title: 'Artesanía Detallada',
      description: 'Nuestros artesanos cuidan cada detalle, desde el corte preciso hasta el pulido final, asegurando la perfección en cada mueble.',
      icon: <HeartHandshake className="w-9 h-9 text-white" />,
    },
    {
      title: 'Soporte Post-Venta',
      description: 'Ofrecemos un servicio al cliente excepcional y garantía en todos nuestros trabajos, porque tu satisfacción es nuestra prioridad.',
      icon: <TrendingUp className="w-9 h-9 text-white" />,
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-emerald-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 animate-fadeIn">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-emerald-600 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:bg-emerald-800 transition duration-500 transform hover:scale-105 animate-zoomIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-emerald-500 rounded-full p-4 mb-5 shadow-inner">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-base opacity-90 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
