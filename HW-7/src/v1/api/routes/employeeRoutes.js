const express = require('express');
const employeeController = require('../controllers/employeeController')
const router = express.Router();

router.patch('/:employeeId', employeeController.updateById)

module.exports = router;