const {PurchaseOrder} = require ('../db');

module.exports = {

    postOrder: async function (email, date){
        try{
            if(!email || !date) throw 'Faltan datos obligatorios';
                else{
                    let order= {
                            UserEmail: email,
                            date
                    }
                    let newOrder = await PurchaseOrder.create(order);
                    return newOrder;
        }}catch(e){
            return e;
        }
    },
}