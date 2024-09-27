const express = require('express'); 
const router = express.Router();
const { 
    index,           // Mostrar todos los productos
    showProduct,     // Mostrar un producto por ID
    addProductForm,  // Formulario para añadir un producto
    addProduct,      // Añadir un nuevo producto
    editProductForm, // Formulario para editar un producto existente
    editProduct,     // Actualizar un producto
    removeProduct    // Eliminar un producto
} = require('../controllers/productController');

router.get('/', index);
router.get('/add', addProductForm);
router.post('/add', addProduct);
router.get('/:id', showProduct);
router.get('/:id/edit', editProductForm);
router.post('/:id/edit', editProduct);
router.post('/:id/delete', removeProduct);

module.exports = router;
