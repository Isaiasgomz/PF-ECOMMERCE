const {PurchaseOrder} = require ('../db');

module.exports = {

    postOrder: async function (email,orderN,totalP){
        try{
            if(!email) throw 'Faltan datos obligatorios';
                else{
                    let order= {
                            UserEmail: email,
                            orderN:orderN,
                            totalPrice:totalP
                    }
                    let newOrder = await PurchaseOrder.create(order);
                    return newOrder;
        }}catch(e){
            return e;
        }
    },

    getOrder: async function (email){
        console.log(email)
        try{
            if(!email) throw 'Faltan datos obligatorios';
                else{                   
                    let newOrder = await PurchaseOrder.findAll({
                        where:{
                            UserEmail:email
                    }});
                    return newOrder;
        }}catch(e){
            return e;
        }
    }
}