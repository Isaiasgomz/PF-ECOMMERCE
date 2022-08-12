const {Op, Product} =require('../db');
module.exports ={
    /* producto por query */
    productByName: async function (productName){
        let product = await Product.findAll({
            where: {
                productName                
            }
        })
        if (product.length === 0) {
            throw 'el producto no existe';
        } else {
            return product;
        }
    },
    /* meter todos los productos desde la api a la base de datos */
    listProducts: async function(data){
        
        if (data) {
            let obj = {}
            let filtrado = data.map(e => {

                obj = {
                    productName,
                    price,
                    image,
                    description,
                    qualification,
                    reviews,
                    quantity,
                    category
                }
                return obj;
            })
            await Product.bulkCreate(filtrado);
            return filtrado;
        } /* si no tiene argumentos, significa que ya esta cargada la db */else {
            let allProducts = await Product.findAll();
            return allProducts;
        }
    },
    /* detalle de producto por params */
    productDetail: async function(idProduct){
        let product = await Product.findByPk(idProduct)
        if (!product) {
            throw 'el id del producto solicitado no existe';
        } else {
            return product;
        }
    }
}