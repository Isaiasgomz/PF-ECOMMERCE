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
                    category: e.categories[0]
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
    },
    // create a new product
    createProduct: async function (productName, price, image, description, quantity, category) {
        try {
            const newProduct = await Product.create({
                productName,
                price, 
                image, 
                description,
                quantity, 
                category
            })
            return newProduct
        } catch (error) {
            throw new Error(error);
        }
    },
    // update product
    updateProduct:  async function(idProduct,ProductModify){
        try {
           await Product.update(ProductModify, {
                where: {
                    id: idProduct
                }
            })
        } catch (error) {
           throw new Error(error); 
        }
    },
    // delete product
    deleteProduct: async function(idProduct){
        try {
           await Product.destroy({
                where: {
                  id: idProduct
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

