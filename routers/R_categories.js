const express = require('express');
const router = express.Router();
const C_categories = require('../controllers/C_categories.js');
const authMiddleware = require('../auth/middleware');

// Mendapatkan 
router.get('/categories', C_categories.getCategories);

// Menambah 
router.post('/categories',authMiddleware, C_categories.createCategory);

// Menghapus 
router.delete('/categories/:id',authMiddleware, C_categories.deleteCategory);

// Mengedit 
router.put('/categories/:id',authMiddleware, C_categories.updateCategory);
module.exports = router;