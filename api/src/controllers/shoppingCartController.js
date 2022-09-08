const { Op, Product, ShoppingCart } = require('../db');
const PurchaseOrder = require('../models/PurchaseOrder');
const { pInProgress } = require('../TemplatesHtml/purchaseInProgrese');
const { sendEmail } = require('./emailcontrollers');

module.exports = {
    postCart: async function (cart) {

        try {
            console.log(11,cart)
            if (cart.length === 0){
                console.log("55",cart)
                throw 'No hay productos en el carrito';
            } 
            else {   
                console.log(22,cart)            
                // let newCart= await ShoppingCart.bulkCreate(cart);
                cart.forEach(async(e)=>{
                    await ShoppingCart.create(e)
                })
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