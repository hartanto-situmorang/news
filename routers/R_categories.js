const express = require('express');
const router = express.Router();
const C_categories = require('../controllers/C_categories.js');

// Mendapatkan 
router.get('/categories', C_categories.getCategories);

// Menambah 
router.post('/categories', C_categories.createCategory);

// Menghapus 
router.delete('/categories/:id', C_categories.deleteCategory);

// Mengedit 
router.put('/categories/:id', C_categories.updateCategory);

module.exports = router;