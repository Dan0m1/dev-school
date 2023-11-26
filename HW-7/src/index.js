const express = require('express');
const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();

const CustomerRouter = require('./v1/api/routes/customerRoutes');
const EmployeeRouter = require('./v1/api/routes/employeeRoutes');
const OrderRouter = require('./v1/api/routes/orderRoutes');
const ProductRouter = require('./v1/api/routes/productRoutes');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/customers', CustomerRouter);
app.use('/employees', EmployeeRouter);
app.use('/orders', OrderRouter);
app.use('/products', ProductRouter);
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

module.exports = prisma;
