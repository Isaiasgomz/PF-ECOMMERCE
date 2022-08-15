const { Op, User, Review, PersonalData } = require('../db');



module.exports = {
    /* detalle de producto por params */
    userDetail: async function (email) {
        try {
            let user = await User.findByPk(email, {
                include:[{
                    model:Review
                },{
                    model:PersonalData
                }
            ]
            } )
            return user;
        } catch (error) {
            throw error;
        }
    },
    userPdata: async function (email, pData){
        try{if(!pData.fullname || !pData.address || !pData.city || !pData.country || !pData.CP ) throw 'faltan datos obligatorios';
        else{
            let obj={
                shippingAddress:[]
            }
            obj={
                UserEmail:email,
                fullname:pData.fullname,
                address:pData.address,
                city:pData.city,
                country:pData.country,
                CP:pData.CP,
                shippingAddress: !pData.shippingAddress?pData.address:pData.shippingAddress,
                telephone:!pData.telephone?'':pData.telephone
            }
            let newPData = await PersonalData.create(obj);
            return newPData
        }}catch(e){
            return e;
        }
    }
}