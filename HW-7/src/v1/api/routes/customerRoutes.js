const express = require('express');
const customerController = require('../controllers/customerController')
const router = express.Router();

router.get('/:customerId/orders', customerController.getCustomerOrders);

module.exports = router;