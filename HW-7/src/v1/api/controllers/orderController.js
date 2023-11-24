const orderService = require('../services/orderService')

async function deleteById(request, response){
    try{
        const deletedOrder = await orderService.deleteById(+request.params.orderId);
        response.status(200).send(
            {
                ...deletedOrder,
            }
        )
    }
    catch (error){
        response.status(error?.status || 500).send({
            status: 'FAILED',
            data: {error: error?.message || error},
        })
    }
}

module.exports = {
    deleteById,
}