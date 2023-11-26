const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.delete('/:orderId', orderController.deleteById)

module.exports = router;