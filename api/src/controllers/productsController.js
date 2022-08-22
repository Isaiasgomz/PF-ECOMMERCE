const { Op, Product, Review } = require('../db');
const api = require("../jsonProducts.js");

module.exports = {
    /* producto por query */
    bulkCreate: async function (){
        const allProducts = await Product.count()
        if (allProducts < 1) {
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
                    category: e.categories[0],
                }
                return obj;
            })
         await Product.bulkCreate(filtrado);}
    },
    productByName: async function (name) {
        try {
            let product = await Product.findAll({
                where: {
                    disabled: false
                }})
            product = product.filter(e => e.productName.toLowerCase().includes(name.toLowerCase()))
            if (product.length === 0) throw 'El producto no existe';
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
                    category: e.categories[0],
                }
                return obj;
            })
            return await Product.bulkCreate(filtrado);
        } else {
            const enableProducts = await Product.findAll(
                {
                    where: {
                        disabled: false
                    }}
            );
            return enableProducts;
        }
    },
    /* detalle de producto por params */
    productDetail: async function (idProduct) {
        try {
            let product = await Product.findByPk(idProduct, {
                where: {
                    disabled: false,
                },
                include: [{
                    model:Review
                }]
            } )
                return product;
        } catch (error) {
            throw error;
        }
    },
    // create a new product
    createProduct: async function (productName, price, image, description, category, stock, brand) {
        try {
            const newProduct = await Product.create({
                productName,
                price, 
                image, 
                description, 
                category,
                stock,
                brand
            })
            return newProduct
        } catch (error) {
            throw new Error(error);
        }
    },
    // update product
    updateProduct:  async function(idProduct, ProductModify){
        try {
             await Product.update(ProductModify, {
                where: {
                    idProduct: idProduct
                }
            })
        } catch (error) {
           throw new Error(error); 
        }
    },
}

