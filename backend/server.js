// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Para permitir peticiones desde tu frontend
const path = require('path');

const app = express();
const PORT = 3001; // Puerto para tu backend (diferente al de React)

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite a Express parsear JSON en el cuerpo de las peticiones

// Configuración de la base de datos SQLite
const dbPath = path.resolve(__dirname, 'contacts.db'); // La base de datos se guardará en la misma carpeta del servidor
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos SQLite:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite en', dbPath);
    // Crea la tabla 'contacts' si no existe
    db.run(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error al crear la tabla de contactos:', err.message);
      } else {
        console.log('Tabla "contacts" verificada o creada correctamente.');
      }
    });
  }
});

// Ruta para guardar un nuevo contacto
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validación básica del lado del servidor
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Formato de correo electrónico inválido.' });
  }

  const sql = `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, message], function(err) {
    if (err) {
      console.error('Error al insertar el contacto:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor al guardar el contacto.' });
    }
    console.log(`Contacto guardado con ID: ${this.lastID}`);
    res.status(201).json({ message: 'Mensaje recibido y guardado con éxito.', id: this.lastID });
  });
});

// Ruta de ejemplo para obtener todos los contactos (opcional, solo para verificar)
app.get('/api/contacts', (req, res) => {
  db.all('SELECT * FROM contacts', (err, rows) => {
    if (err) {
      console.error('Error al obtener contactos:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor al obtener contactos.' });
    }
    res.json(rows);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`Endpoint para contactos: http://localhost:${PORT}/api/contact (POST)`);
  console.log(`Verificar contactos: http://localhost:${PORT}/api/contacts (GET)`);
});