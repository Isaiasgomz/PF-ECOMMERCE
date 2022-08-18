const { Op, User, Review, PersonalData, PurchaseOrder , Product } = require('../db');



module.exports = {
    /* detalle de producto por params + review + personal data */
    userDetail: async function (email) {
        try {
            let user = await User.findByPk(email, {
                include:[{
                    model:Review
                },{
                    model:PersonalData
                },{
                    model:PurchaseOrder
                }
            ],
            
            } )
            if(!user) throw 'Usuario no encontrado';
            else{
                return user;
            }
        } catch (error) {
            throw error;
        }
    },
    /* Creacion de personal data */
    userPdata: async function (email, pData){
        try{if(!pData.fullname || !pData.address || !pData.city || !pData.country || !pData.CP ) throw 'faltan datos obligatorios';
        else{
            let [newPData, created] = await PersonalData.findOrCreate({
                where :{ UserEmail: email },
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
            return newPData;
        }}catch(e){
            return e;
        }
    },
    /* Actualizacion de personal data */
    updatePersonalData: async function(email,dataModify){
        try {
            await PersonalData.update(dataModify, {
                where: {
                    UserEmail: email
                }
            })
        } catch (error) {
            throw new Error(error); 
        }
    }
}