const {Op, Product} =require('../db');
const api = require("../jsonProducts.js");

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
    listProducts: async function(){
        const allProducts = await Product.findAll()
        if(allProducts.length===0){
            let obj = {}
            let filtrado = api.map(e => {
                obj = {
                    productName:e.name,
                    price:e.price,
                    image:e.image,
                    brand:e.brand,
                    description:e.description,
                    qualification:e.calification,
                    stock:e.quantity,
                    category:e.categories
                }
                return obj;
            })
            console.log(filtrado)
            await Product.bulkCreate(filtrado);
            return filtrado;
        }else{
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