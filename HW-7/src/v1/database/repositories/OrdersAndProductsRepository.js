const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
async function findMany(orderId){
    const products = await prisma.ordersAndProducts.findMany({
        where: {
            order:{
                id: orderId,
            }
        },
    })
    return products;
}

module.exports = {
    findMany,
}