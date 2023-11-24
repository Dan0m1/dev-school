const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();
async function updateOrCreateOrderTotalCost(orderId, totalCost){
    const order = await prisma.order.update({
        where:{
            id: orderId,
        },
        data: {
            totalCost: totalCost,
        },
    })
}

async function deleteById(orderId){
    try {
        const deletedOrder = await prisma.order.delete({
            where: {
                id: orderId,
            }
        })
        return deletedOrder;
    }
    catch(error){
        error.message = "Order with such id not found";
        throw error;
    }
}

module.exports = {
    updateOrCreateOrderTotalCost,
    deleteById,
}