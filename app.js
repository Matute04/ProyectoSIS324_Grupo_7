const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Para poder manejar rutas de directorios
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug'); // Si estás usando Pug como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Directorio donde se encuentran tus vistas

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Para manejar formularios

// Rutas estáticas para archivos CSS, JS, imágenes, etc.
app.use(express.static(path.join(__dirname, 'public'))); // Supone que tienes una carpeta 'public'

// Rutas
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

// Ruta principal (homepage)
app.get('/', (req, res) => {
  res.render('index', { title: 'Bienvenido a la tienda de zapatos' }); // Renderiza la vista 'index.pug'
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
