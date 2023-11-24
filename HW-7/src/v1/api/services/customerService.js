const Customer = require('../../database/repositories/CustomerRepository');
const orderService = require('../services/orderService')
async function getCustomerOrders(customerId) {
    try {
        let customerOrders = await Customer.findOrdersById(customerId);
        let total = 0;
        for (const order of customerOrders.orders){
            total += await orderService.updateOrCreateTotalCost(order.id, order.deliveryCost);
        }
        customerOrders = await Customer.findOrdersById(customerId);
        return {
            ...customerOrders,
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