const { Op, Product, ShoppingCart } = require('../db');
const PurchaseOrder = require('../models/PurchaseOrder');

module.exports = {
    postCart: async function (cart) {
        console.log("Entro al controller", cart);
        
        try {
            if (cart.length === 0) throw 'No hay productos en el carrito';
            else {
                
                let newCart= await ShoppingCart.bulkCreate(cart);
                
                console.log("newCart: ", newCart);
                return newCart;
            }
        } catch (e) {
            return e;
        }

    }
}