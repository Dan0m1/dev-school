const Product = require('../../database/repositories/ProductRepository');
const {Category} = require ("@prisma/client");

async function createOne(newProduct){
    try {
        if(!Object.values(Category).includes(newProduct.category)){
            throw {
                status: 403,
                message: "Invalid product category",
            }
        }
        const createdProduct = await Product.createOne(newProduct);
        return createdProduct;
    }
    catch (error){
        throw error;
    }
}

module.exports = {
    createOne,
}