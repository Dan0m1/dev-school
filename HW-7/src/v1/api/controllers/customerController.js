const customerService = require('../services/customerService');

async function getCustomerOrders(request, response) {
    try {
        const customerOrders = await customerService.getCustomerOrders(+request.params.customerId);
        response.status(200).send({
            ...customerOrders,
        });
    }
    catch (error){
        response.status(error?.status || 500).send({
            status: 'FAILED',
            data: {error: error?.message || error},
        })
    }
}

module.exports = {
    getCustomerOrders,
}