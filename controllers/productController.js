const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../models/productModel');

// Mostrar todos los productos
const index = (req, res) => {
    getAllProducts((err, products) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los productos' });
        } else {
            res.render('products/index', { products: products || [] });
        }
    });
};

// Formulario para añadir un nuevo producto
const addProductForm = (req, res) => {
    res.render('products/add'); // Renderiza la vista para añadir producto
};

// Añadir un nuevo producto
const addProduct = (req, res) => {
    const { name, categoryId, size, color, price, stock } = req.body;
    createProduct(name, categoryId, size, color, price, stock, (err, productId) => {
        if (err) {
            res.status(500).json({ error: 'Error al añadir el producto' });
        } else {
            res.redirect('/products'); // Redirige a la lista de productos tras añadir
        }
    });
};

// Mostrar un producto por ID
const showProduct = (req, res) => {
    const { id } = req.params;
    getProductById(id, (err, product) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener el producto' });
        } else if (!product) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.render('products/show', { product });
        }
    });
};

// Formulario para editar un producto existente
const editProductForm = (req, res) => {
    const { id } = req.params;
    getProductById(id, (err, product) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener el producto' });
        } else if (!product) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.render('products/edit', { product });
        }
    });
};

// Actualizar un producto existente
const editProduct = (req, res) => {
    const { id } = req.params;
    const { name, categoryId, size, color, price, stock } = req.body;
    updateProduct(id, name, categoryId, size, color, price, stock, (err, changes) => {
        if (err) {
            res.status(500).json({ error: 'Error al actualizar el producto' });
        } else if (changes === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.redirect('/products'); // Redirige a la lista de productos tras la actualización
        }
    });
};

// Eliminar un producto existente
const removeProduct = (req, res) => {
    const { id } = req.params;
    deleteProduct(id, (err, changes) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        } else if (changes === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.redirect('/products'); // Redirige al índice tras la eliminación
        }
    });
};

module.exports = {
    index,
    addProductForm,
    addProduct,
    showProduct,
    editProductForm,
    editProduct,
    removeProduct
};
