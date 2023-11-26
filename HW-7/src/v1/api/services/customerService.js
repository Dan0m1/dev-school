const Customer = require('../../database/repositories/CustomerRepository');
const orderService = require('../services/orderService')
async function getCustomerOrders(customerId) {
    try {
        let CustomerOrders = await Customer.findOrdersById(customerId);
        let total = 0;
        for (const order of CustomerOrders.orders){
            total += await orderService.updateOrCreateTotalCost(order.id, order.deliveryCost);
        }
        CustomerOrders = await Customer.findOrdersById(customerId);
        return {
            ...CustomerOrders,
            totalCost: total,
        }
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    getCustomerOrders,
}