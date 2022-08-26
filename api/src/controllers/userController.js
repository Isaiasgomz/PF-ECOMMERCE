const { Op, User, Review, PersonalData, PurchaseOrder , ShoppingCart } = require('../db');
const { sendEmail } = require('./emailcontrollers');
const {welcome} = require("../TemplatesHtml/welcome.js")

module.exports = {
    /* Detalle de usuario por params + review + personal data */
    postUser: async function(user){
        const [newUser, created] = await User.findOrCreate({
            where: {
                email: user.email
            },
            defaults: {
                email: user.email,
                admin: user.admin
            }
        })
        let s = welcome()
        /* if(created)await sendEmail(user?.email,"Bienvenido al mejor ecommerce",s) */
        
        return newUser
    },
    userDetail: async function (email) {
        try {
            let user = await User.findByPk(email, {
                include:[{
                    model:Review
                },{
                    model:PersonalData
                },{
                    model:PurchaseOrder,
                },{
                    model:ShoppingCart
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
        try{if(!pData.fullname || !pData.address /* || !pData.city || !pData.country */ || !pData.CP ) throw 'Faltan datos obligatorios';
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
                        telephone:pData.telephone,
                        department:pData.department,
                        profile: pData.profile,
                }
            });
            return newPData;
        }}catch(e){
            return e;
        }
    },
    /* Actualizacion de personal data */
    updatePersonalData: async function(email, dataModify){
        try {
            await PersonalData.update(dataModify, {
                where: {
                    UserEmail: email
                }
            })
        } catch (error) {
            throw error; 
        }
    }, 
}