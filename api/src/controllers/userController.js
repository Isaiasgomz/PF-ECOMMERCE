const { Op, User, Review, PersonalData, PurchaseOrder , ShoppingCart, ShippingAddress } = require('../db');
const { sendEmail } = require('./emailcontrollers');
const {welcome} = require("../TemplatesHtml/welcome.js");

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
                    model:Review,
                },{
                    model:PersonalData,
                },{
                    model:ShippingAddress,
                },{
                    model:ShoppingCart,
                },{
                   model:PurchaseOrder, 
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
        console.log(pData)
        try{if(!pData.fullname || !pData.address || !pData.city || !pData.country || !pData.CP ) throw 'Faltan datos obligatorios';
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
    /* Creación de direcciones */
    userAddress: async function(email, addresses) {
        try        
            {if(!addresses.reference || !addresses.address || !addresses.city || !addresses.country || !addresses.CP ) throw 'Faltan datos obligatorios';
            else{
                let newAddress = await ShippingAddress.create({
                    UserEmail:email,
                    reference:addresses.reference,
                    address:addresses.address,
                    department:addresses.department,
                    city:addresses.city,
                    CP:addresses.CP,
                    country:addresses.country,
                    telephone:addresses.telephone,        
                });
            return newAddress;
        }}catch(e){
            return e;
        }
    }
}