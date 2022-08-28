const { PurchaseOrder } = require('../db');
const { sendEmail } = require('./emailcontrollers');
const { pConfirmation } = require("../TemplatesHtml/purchaseConfirmation.js");
const { pInProgress } = require('../TemplatesHtml/purchaseInProgrese');
const { pSended } = require('../TemplatesHtml/purchaseSended');
const { pCompleted } = require('../TemplatesHtml/purchaseCompleted');

module.exports = {

    postOrder: async function (email, orderN, totalP) {
        try {
            if (!email) throw 'Faltan datos obligatorios';
            else {
                let order = {
                    UserEmail: email,
                    orderN: orderN,
                    totalPrice: totalP
                }
                let newOrder = await PurchaseOrder.create(order);
                return newOrder;
            }
        } catch (e) {
            return e;
        }
    },

    getOrder: async function (email) {
        console.log(email)
        try {
            if (!email) throw 'Faltan datos obligatorios';
            else {
                let newOrder = await PurchaseOrder.findAll({
                    where: {
                        UserEmail: email
                    }
                });
                return newOrder;
            }
        } catch (e) {
            return e;
        }
    },

    getAllOrders: async function () {
        try {
            let allOrders = await PurchaseOrder.findAll();
            return allOrders;
        } catch (error) {
            return error.message;
        }
    },

    updateOrder: async function (email, orderN, status) {
        try {

            await PurchaseOrder.update({ status: status }, {
                where: {
                    orderN: orderN
                }
            })
            console.log("email_ ", email, "status: ", status);

            switch (status) {
                case "Preparando Envio":
                    let confirmation = pConfirmation()
                    console.log("entro a PREPARANDOENVIO");
                    await sendEmail(email, "Su pedido se ha confirmado", confirmation)
                    break;
                case "Enviado":
                    let sended = pSended()
                    console.log("entro a ENVIADO");
                    await sendEmail(email, "Su pedido esta en camino", sended)
                    break;
                case "Completado":
                    let pComplete = pCompleted()
                    console.log("entro a COMPLETADO");
                    await sendEmail(email, "Has recibido tu pedido", pComplete)
                    break;
                default:
                    console.log("entro a EN PROCESO");
                    let inProgress = pInProgress()
                    await sendEmail(email, "Su pedido esta en proceso", inProgress)
                    break;
            }
        } catch (error) {
            throw error;
        }
    },
}