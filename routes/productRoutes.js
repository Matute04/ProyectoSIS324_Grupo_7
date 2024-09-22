const express = require('express');
const router = express.Router();
const { 
    index,
    createProductController, 
    getProductByIdController, 
    getAllProductsController, 
    updateProductController, 
    deleteProductController 
} = require('../controllers/productController');

// Obtener todos los productos
router.get('/', index); // Cambiado de '/products' a '/'

// Crear un nuevo producto
router.post('/add', createProductController); // Cambiado de '/products' a '/'

// Obtener un producto por ID
router.get('/:id', getProductByIdController); // Cambiado de '/products/:id' a '/:id'

// Actualizar un producto por ID
router.put('/:id', updateProductController); // Cambiado de '/products/:id' a '/:id'

// Eliminar un producto por ID
router.delete('/:id', deleteProductController); // Cambiado de '/products/:id' a '/:id'

module.exports = router;
