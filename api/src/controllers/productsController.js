const { Op, Product } = require('../db');
const api = require("../jsonProducts.js");
const Review = require('../models/Review');

module.exports = {
    /* producto por query */
    productByName: async function (name) {
        try {
            let product = await Product.findAll()
            product = product.filter(e => e.productName.toLowerCase().includes(name.toLowerCase()))
            if (product.length === 0) throw 'el producto no existe';
            return product;
        } catch (error) {
            throw error;
        }
    },
    /* meter todos los productos desde la api a la base de datos */
    listProducts: async function () {
        const allProducts = await Product.findAll()
        if (allProducts.length === 0) {
            let obj = {}
            let filtrado = api.map(e => {
                obj = {
                    productName: e.name,
                    price: e.price,
                    image: e.image,
                    brand: e.brand,
                    description: e.description,
                    qualification: e.calification,
                    stock: e.quantity,
                    category: e.categories
                }
                return obj;
            })
            await Product.bulkCreate(filtrado);
            return filtrado;
        } else {
            return allProducts;
        }
    },
    /* detalle de producto por params */
    productDetail: async function (idProduct) {
        try {
            let product = await Product.findByPk(idProduct, {
                include: ["reviews"]
            } )
            console.log(product)
            return product;
        } catch (error) {
            throw error;
        }
    }
}

