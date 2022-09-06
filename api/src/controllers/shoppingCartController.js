const { Op, Product, ShoppingCart } = require('../db');
const PurchaseOrder = require('../models/PurchaseOrder');
const { pInProgress } = require('../TemplatesHtml/purchaseInProgrese');
const { sendEmail } = require('./emailcontrollers');

module.exports = {
    postCart: async function (cart) {

        try {
            if (cart.length === 0) throw 'No hay productos en el carrito';
            else {               
                let newCart= await ShoppingCart.bulkCreate(cart);
                console.log("entro a EN PROCESO");
                    let inProgress = pInProgress()
                    await sendEmail(cart[0].UserEmail, "Estamos procesando su pago", inProgress)
                return newCart;
            }
        } catch (e) {
            return e;
        }

    },

    getOrderCart: async function (PurchaseOrderOrderN) {
        try {
            if(!PurchaseOrderOrderN) throw 'Faltan datos obligatorios';
                else{                   
                    let newOrder = await ShoppingCart.findAll({
                        where:{
                            PurchaseOrderOrderN: PurchaseOrderOrderN,
                            // UserEmail: email
                        },
                        include: [{
                            model: Product
                        }]
                    });
                    return newOrder;
        }} catch (e) {
        return e;
    }
}
}