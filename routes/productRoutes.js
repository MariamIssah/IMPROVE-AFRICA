const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getSellerProducts
} = require('../controllers/productController');

// All routes require authentication
router.use(protect);

// Protected routes for all authenticated users
router.get('/', getProducts);
router.get('/:id', getProduct);

// Farmer only routes
router.post('/', authorize('farmer', 'admin'), createProduct);
router.get('/seller/products', getSellerProducts);

// Product owner or admin only routes
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router; 