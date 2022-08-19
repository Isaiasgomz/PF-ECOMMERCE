const {PurchaseOrder} = require ('../db');

module.exports = {

    postOrder: async function (email){
        try{
            if(!email) throw 'Faltan datos obligatorios';
                else{
                    let order= {
                            UserEmail: email
                    }
                    let newOrder = await PurchaseOrder.create(order);
                    return newOrder;
        }}catch(e){
            return e;
        }
    },

    getOrder: async function (email){
        try{
            if(!email) throw 'Faltan datos obligatorios';
                else{                   
                    let newOrder = await PurchaseOrder.findOne({
                        where:{
                            UserEmail:email
                        }
                    });
                    return newOrder;
        }}catch(e){
            return e;
        }
    }
}