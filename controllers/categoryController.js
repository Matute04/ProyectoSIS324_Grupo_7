const { createCategory, getCategoryById, getAllCategories } = require('../models/categoryModel');

const addCategory = (req, res) => {
  const { name } = req.body;
  createCategory(name, (err, categoryId) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear la categoría' });
    } else {
      res.status(201).json({ id: categoryId, name });
    }
  });
};

const getCategory = (req, res) => {
  const { id } = req.params;
  getCategoryById(id, (err, category) => {
    if (err) {
      res.status(500).json({ error: 'Error al recuperar la categoría' });
    } else if (!category) {
      res.status(404).json({ error: 'Categoría no encontrada' });
    } else {
      res.status(200).json(category);
    }
  });
};

const getAllCategoriesHandler = (req, res) => {
  getAllCategories((err, categories) => {
    if (err) {
      res.status(500).json({ mensaje: 'Error al recuperar las categorías' });
    } else {
      res.status(200).json(categories);
    }
  });
};

module.exports = { addCategory, getCategory, getAllCategoriesHandler };
