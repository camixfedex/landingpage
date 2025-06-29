Carpintería El Palito - Landing Page Moderna con Backend (React, Tailwind CSS, Node.js, SQLite)
Este proyecto es una landing page moderna y responsiva diseñada para simular la presencia en línea de una carpintería, "Carpintería El Palito". Incluye un frontend interactivo construido con React y estilizado con Tailwind CSS, y un backend sencillo con Node.js y SQLite para la persistencia de datos del formulario de contacto.

Características Principales:
Interfaz Responsiva: Adaptable a diferentes tamaños de pantalla (móviles, tablets, escritorio) para una experiencia de usuario óptima.

Diseño Moderno: Estética limpia y atractiva con una paleta de colores inspirada en tonos esmeralda y piedra, e imágenes temáticas de madera.

Animaciones Fluidas: Transiciones y efectos de aparición sutiles para una interacción dinámica.

Menú de Navegación: Encabezado fijo con navegación interna a las diferentes secciones de la página (Inicio, Servicios, Beneficios, Testimonios, Contacto).

Sección Principal (Hero Section): Con título, subtítulo impactantes y un botón de llamada a la acción.

Sección de Servicios y Beneficios: Presentación clara de las ofertas de la carpintería con íconos e imágenes de fondo descriptivas.

Sección de Testimonios: Comentarios de clientes para generar confianza.

Formulario de Contacto:

Campos para Nombre, Email y Mensaje.

Validación básica de datos del lado del cliente.

Persistencia de Datos: Los datos enviados son guardados en una base de datos SQLite a través de un servidor Node.js y Express (backend).

Pie de Página (Footer): Incluye información de contacto y enlaces a redes sociales.

Tecnologías Utilizadas:
Frontend:

React: Librería para construir la interfaz de usuario.

Vite: Herramienta de compilación rápida para proyectos React.

Tailwind CSS: Framework CSS de utilidad para un estilizado rápido y responsivo.

Lucide React: Librería de íconos.

Backend:

Node.js: Entorno de ejecución JavaScript.

Express: Framework web para Node.js, utilizado para construir la API REST.

SQLite3: Base de datos ligera y autónoma, utilizada para almacenar los contactos.

CORS: Middleware para habilitar la comunicación entre el frontend y el backend.

Cómo Ejecutar el Proyecto:
El proyecto consta de dos partes principales que deben ejecutarse por separado: el backend y el frontend.

1. Configuración y Ejecución del Backend:
Crea una carpeta nueva para el backend (ej. backend/) fuera de tu proyecto React.

Dentro de esa carpeta, inicializa un proyecto Node.js:

npm init -y

Instala las dependencias:

npm install express sqlite3 cors

Crea un archivo server.js y pega el código del servidor Node.js/SQLite proporcionado.

Ejecuta el servidor:

node server.js

Mantén esta terminal abierta.

2. Configuración y Ejecución del Frontend:
Abre otra terminal separada y navega a la carpeta de tu proyecto React.

Instala las dependencias (si no lo has hecho):

npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

Inicializa Tailwind CSS:

npx tailwindcss init -p

Configura tailwind.config.js y src/index.css como se indica en la guía detallada.

Asegúrate de que los componentes estén separados en la carpeta src/components/.

Inicia la aplicación React:

npm run dev

Abre la URL que te proporcionará Vite (ej. http://localhost:5173/).

Una vez que ambos servidores estén ejecutándose, podrás interactuar con el formulario de contacto y verificar que los datos se guarden en tu base de datos contacts.db (ubicada en la carpeta backend/)
