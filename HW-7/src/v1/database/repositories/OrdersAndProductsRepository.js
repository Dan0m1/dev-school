const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();
async function findMany(orderId){
    return prisma.ordersAndProducts.findMany({
        where: {
            order:{
                id: orderId,
            }
        },
    })
}
async function deleteById(orderId){
    await prisma.ordersAndProducts.deleteMany({
        where:{
            orderId: orderId,
        }
    })
}

module.exports = {
    findMany,
    deleteById,
}