import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ana García',
      text: '¡Absolutamente encantada con mi nueva mesa de comedor! La calidad y el diseño superaron mis expectativas. El proceso fue transparente y el resultado final impecable.',
    },
    {
      name: 'Carlos Rodríguez',
      text: 'El Palito restauró unas sillas antiguas de mi abuela y quedaron como nuevas. ¡Un trabajo impecable! Su atención al detalle es realmente sorprendente.',
    },
    {
      name: 'Sofía Martínez',
      text: 'Profesionales y muy atentos. Se adaptaron a mis ideas y el resultado final fue justo lo que quería, con un acabado perfecto y a tiempo.',
    },
    {
      name: 'Jorge Luis Pérez',
      text: 'Encargué un librero a medida y el equipo de El Palito hizo un trabajo espectacular. Funcional, hermoso y exactamente lo que imaginaba.',
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16 animate-fadeIn">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center italic text-gray-700 hover:shadow-xl transition-shadow duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900 text-xl">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
