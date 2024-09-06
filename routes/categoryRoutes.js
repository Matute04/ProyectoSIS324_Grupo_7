const express = require('express');
const router = express.Router();
const { addCategory, getCategory, getAllCategoriesHandler } = require('../controllers/categoryController');

router.post('/add', addCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategoriesHandler);

module.exports = router;
