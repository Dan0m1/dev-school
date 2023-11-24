const { PrismaClient } = require('@prisma/client');
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

module.exports = {
    updateOrCreateOrderTotalCost
}