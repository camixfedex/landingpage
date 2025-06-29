import React, { useState, useCallback } from 'react';

// Importa tus componentes de la landing page.
// ¡MUY IMPORTANTE!: Asegúrate de que estos archivos existan
// EXACTAMENTE en la carpeta 'src/components/'
// y que los nombres de archivo coincidan con MAYÚSCULAS Y MINÚSCULAS
// (ej. 'Header.jsx' para 'Header')
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');

  // La función de navegación usa useCallback para optimización
  const navigate = useCallback((page) => {
    setCurrentPage(page);
    setIsOpen(false); // Cierra el menú móvil al navegar
  }, []); // Dependencias vacías: la función no necesita recrearse en cada render

  // Renderiza los componentes de la página según el estado 'currentPage'
  const renderPage = () => {
    // Si currentPage es 'inicio', muestra todas las secciones de la landing page.
    // Para otras páginas, muestra solo la sección correspondiente.
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <HeroSection navigate={navigate} />
            <ServicesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactSection /> {/* ContactSection maneja su propia lógica de envío al backend */}
          </>
        );
      case 'servicios':
        return <ServicesSection />;
      case 'beneficios':
        return <BenefitsSection />;
      case 'testimonios':
        return <TestimonialsSection />;
      case 'contacto':
        return <ContactSection />;
      default:
        // En caso de una página no reconocida, vuelve a la vista de inicio
        return (
          <>
            <HeroSection navigate={navigate} />
            <ServicesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-stone-50">
      {/* El Header recibe el estado del menú y la función de navegación */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} navigate={navigate} />
      <main className="pt-16"> {/* Añade padding superior para evitar que el contenido se oculte detrás del Header fijo */}
        {renderPage()} {/* Aquí se renderiza la "página" actual */}
      </main>
      <Footer /> {/* El Footer se muestra en todas las "páginas" */}
    </div>
  );
}

export default App;