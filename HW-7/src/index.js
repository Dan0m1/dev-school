const express = require('express');
const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();

const CustomerRouter = require('./v1/api/routes/customerRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/customers', CustomerRouter);
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});