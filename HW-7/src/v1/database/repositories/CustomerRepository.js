const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();
async function findOrdersById(customerId){
    if(await prisma.customer.count({
        where:{
            id: customerId,
        }
    }) === 0) throw {
        status: 404,
        message: "Customer with such id not found",
    }
    return prisma.customer.findFirstOrThrow({
        where: {
            id: customerId
        },
        select: {
            orders: true
        },
    })
}

module.exports = {
    findOrdersById,
}
