const Product = require('../../database/repositories/ProductRepository');
const {Category} = require ("@prisma/client");

async function createOne(ProductCreate){
    try {
        if(!Object.values(Category).includes(ProductCreate.category)){
            throw {
                status: 403,
                message: "Invalid product category",
            }
        }
        const ProductResponse = await Product.createOne(ProductCreate);
        return ProductResponse;
    }
    catch (error){
        throw error;
    }
}

module.exports = {
    createOne,
}