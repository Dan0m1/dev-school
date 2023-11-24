const Order = require('../../database/repositories/OrderRepository')
const Product = require('../../database/repositories/ProductRepository')
const OrdersAndProducts = require('../../database/repositories/OrdersAndProductsRepository')
async function updateOrCreateTotalCost(orderId, deliveryCost){
    try{
        let total = deliveryCost;
        let pr;
        const products = await OrdersAndProducts.findMany(orderId)
        for(const product of products){
            pr = await Product.findById(product.productId);
            total += product.amount * pr.price;
        }
        await Order.updateOrCreateOrderTotalCost(orderId,total);
        return total;
    }
    catch (error){
        throw error;
    }
}

module.exports = {
    updateOrCreateTotalCost,
}