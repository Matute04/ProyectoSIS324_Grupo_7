const { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } = require('../models/productModel');

// Crear un nuevo producto
const createProductController = (req, res) => {
  const { name, categoryId, size, color, price, stock } = req.body;
  
  createProduct(name, categoryId, size, color, price, stock, (err, productId) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el producto' });
    } else {
      res.status(201).json({ mensaje: 'Producto creado con éxito', productId });
    }
  });
};

// Obtener un producto por su ID
const getProductByIdController = (req, res) => {
  const { id } = req.params;

  getProductById(id, (err, product) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el producto' });
    } else if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
    } else {
      res.status(200).json(product);
    }
  });
};

// Obtener todos los productos
const getAllProductsController = (req, res) => {
  getAllProducts((err, products) => {
      if (err) {
          res.status(500).json({ error: 'Error al obtener los productos' });
      } else {
          res.render('products/index', { products }); // Asegúrate de que la vista es correcta
      }
  });
};

// Actualizar un producto
const updateProductController = (req, res) => {
  const { id } = req.params;
  const { name, categoryId, size, color, price, stock } = req.body;

  updateProduct(id, name, categoryId, size, color, price, stock, (err, changes) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar el producto' });
    } else if (changes === 0) {
      res.status(404).json({ error: 'Producto no encontrado' });
    } else {
      res.status(200).json({ mensaje: 'Producto actualizado con éxito' });
    }
  });
};

// Eliminar un producto
const deleteProductController = (req, res) => {
  const { id } = req.params;

  deleteProduct(id, (err, changes) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el producto' });
    } else if (changes === 0) {
      res.status(404).json({ error: 'Producto no encontrado' });
    } else {
      res.status(200).json({ mensaje: 'Producto eliminado con éxito' });
    }
  });
};

// Mostrar todos los productos (Index)
const index = (req, res) => {
  getAllProducts((err, products) => {
      if (err) {
          res.status(500).json({ error: 'Error al obtener los productos' });
      } else {
          res.render('products/index', { products: products || [] }); // Asegúrate de que products sea un array
      }
  });
};


module.exports = {index, createProductController, getProductByIdController, getAllProductsController, updateProductController, deleteProductController};