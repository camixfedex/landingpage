import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react'; // Asegúrate de tener los iconos necesarios

// Componente para la sección de Contacto
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // Estado para mensajes de éxito/error ('success', 'error', '')
  const [isLoading, setIsLoading] = useState(false); // Estado para el indicador de carga durante el envío

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => { // ¡Importante: Ahora es una función asíncrona!
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    setStatus(''); // Reinicia cualquier mensaje de estado anterior
    setIsLoading(true); // Activa el indicador de carga

    // Validación simple del lado del cliente
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error: Todos los campos son obligatorios.');
      setIsLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error: Por favor, introduce un email válido.');
      setIsLoading(false);
      return;
    }

    try {
      // *** Aquí está la CLAVE: la llamada a tu servidor backend ***
      // La URL debe coincidir con la de tu servidor Node.js/Express
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST', // Método HTTP POST para enviar datos
        headers: {
          'Content-Type': 'application/json', // Indica que el cuerpo de la petición es JSON
        },
        body: JSON.stringify(formData), // Convierte los datos del formulario a JSON
      });

      const result = await response.json(); // Parsea la respuesta del servidor

      // Verifica si la respuesta del servidor fue exitosa (código de estado 2xx)
      if (response.ok) {
        setStatus('success: ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario después del éxito
        console.log("Mensaje guardado en la base de datos backend:", result);
      } else {
        // Si el servidor responde con un error (ej. 400, 500)
        setStatus(`error: Error al enviar el mensaje. ${result.error || 'Intenta de nuevo.'}`);
        console.error("Error del servidor:", result.error);
      }

    } catch (error) {
      // Captura errores de red (ej. el servidor no está corriendo, problemas de CORS)
      console.error("Error al enviar el mensaje al backend:", error);
      setStatus(`error: No se pudo conectar con el servidor. Por favor, asegúrate de que el servidor esté funcionando.`);
    } finally {
      setIsLoading(false); // Desactiva el indicador de carga, independientemente del resultado
    }
  };

  return (
    <section id="contacto" className="py-24 bg-stone-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 animate-fadeIn">Contáctanos</h2>
        <div className="max-w-xl mx-auto bg-white text-gray-800 p-10 rounded-3xl shadow-2xl animate-zoomIn">
          {isLoading && (
            <div className="text-center text-emerald-600 mb-4 font-semibold text-lg">
              Enviando mensaje...
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-left text-xl font-medium text-gray-700 mb-3">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-300 placeholder-gray-400"
                placeholder="Tu Nombre Completo"
                disabled={isLoading} // Deshabilita el input mientras se envía
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-xl font-medium text-gray-700 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-300 placeholder-gray-400"
                placeholder="tu@email.com"
                disabled={isLoading} // Deshabilita el input mientras se envía
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-xl font-medium text-gray-700 mb-3">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-300 placeholder-gray-400"
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                disabled={isLoading} // Deshabilita el textarea mientras se envía
              ></textarea>
            </div>
            {status && (
              <div className={`py-3 px-5 rounded-lg text-center font-semibold text-lg ${
                status.startsWith('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {status.split(':')[1]}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-xl tracking-wide"
              disabled={isLoading} // Deshabilita el botón mientras se envía
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
