const productService = require('../services/productService');

async function createOne(request, response){
    const {body} = request;
    if(
        !body.name ||
        !body.category ||
        !body.amount ||
        !body.price
    ){
        response.status(400).send({
            status: 'FAILED',
            data: {
                error:
                    "One of the following keys is missing or is empty in request body: 'name', 'category, 'amount', 'price'",
            },
        })
    }
    const newProduct = {
        name: body.name,
        category: body.category,
        amount: +body.amount,
        price: +body.price,
    }
    try{
        const createdProduct = await productService.createOne(newProduct);
        response.status(201).send({
            ...createdProduct,
        })
    }
    catch (error){
        response.status(error?.status || 500).send({
            status: 'FAILED',
            data: {error: error?.message || error},
        })
    }
}

module.exports = {
    createOne,
}