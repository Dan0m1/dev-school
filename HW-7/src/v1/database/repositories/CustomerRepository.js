const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
async function findOrdersById(customerId){
        const customerOrders = prisma.customer.findFirst({
            where: {
                id: customerId
            },
            select: {
                orders: true
            },
        })
        if (customerOrders === null) {
            throw {
                status: 404,
                message: "Customer with such id not found",
            }
        } else return customerOrders;
}

module.exports = {
    findOrdersById,
}
