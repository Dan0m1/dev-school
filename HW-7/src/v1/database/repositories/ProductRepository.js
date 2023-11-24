const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findById(productId) {
    const product = await prisma.product.findFirst({
        where:{
            id: productId,
        },
        select:{
            price: true
        }
    })
    if (product === null)
    {
        throw {
            status: 404,
            message: "Product with such id was not found"
        }
    }
    else return product;
}

module.exports = {
    findById,
}