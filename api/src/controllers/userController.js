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
            if(user.length===0) throw 'Usuario no encontrado';
            else{
                return user;
            }
        } catch (error) {
            throw error;
        }
    },
    userPdata: async function (email, pData){
        try{if(!pData.fullname || !pData.address || !pData.city || !pData.country || !pData.CP ) throw 'faltan datos obligatorios';
        else{
            /* let obj={
                shippingAddress:[]
            } */
            /* obj={
                UserEmail:email,
                fullname:pData.fullname,
                address:pData.address,
                city:pData.city,
                country:pData.country,
                CP:pData.CP,
                shippingAddress: obj.shippingAddress.concat( !pData.shippingAddress?pData.address:pData.shippingAddress),
                telephone:!pData.telephone?'':pData.telephone
            } */
            let [newPData, created] = await PersonalData.findOrCreate({
                where :{fullname:pData.fullname},
                defaults:{
                        UserEmail:email,
                        fullname:pData.fullname,
                        address:pData.address,
                        city:pData.city,
                        country:pData.country,
                        CP:pData.CP,
                        shippingAddress: pData.shippingAddress,
                        telephone:pData.telephone
                }
            });
            console.log(created)
            /* await newPData.addUsers(email) */
            return newPData
        }}catch(e){
            return e;
        }
    }
}