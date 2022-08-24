const {User, Product, PersonalData} = require ('../db');
const { listProducts,productDetail } = require('./productsController');

module.exports = {
    /* usuario admin nuevo */
    updateUser: async function(email, admin){
        try {
            await User.update({admin:admin}, {
                where: {
                    email:email
                }
            })
        } catch (error) {
            throw new Error(error); 
        }
    },

    /* usuario por query */
    userByMail: async function (email) {
        try {
            let user = await User.findByPk(email)
            if (!user) throw 'El usuario no existe';
            return user;
        } catch (error) {
            throw error;
        }
    },

    /* todos los usuarios */
    listProductsAdmin: async function () {
        try {
             const count = await Product.count();
             if (count < 1) {
              await  listProducts()
            }
            let products = await Product.findAll()
            if (!products.length > 0) throw 'No existen Productos registrados';
            return products;
        } catch (error) {
            throw error;
        }
    },
    productByName: async function (name) {
        try {
            const count = await Product.count();
             if (count < 1) {
              await  listProducts()
            }
            let product = await Product.findAll()
            product = product.filter(e => e.productName.toLowerCase().includes(name.toLowerCase()))
            if (product.length === 0) throw 'El producto no existe';
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /* usuario bloqueado */
    updateUser: async function(email,dataModify){
        try {
            await User.update(dataModify, {
                where: {
                    email: email
                }
            })
        } catch (error) {
            throw error; 
        }
    },

    // traer todos los productos para el dashboard del admin
    listUsers: async function () {
        try {
            let user = await User.findAll({ 
                include:[{
                model: PersonalData
            }
        ],            
        })
            if (!user) throw 'No existen Usuarios registrados';
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getProductById: async function (id) {
        try {
            let product = await Product.findByPk(id);
            return product;
        } catch (error) {
            throw error;
        }
    },

    // addPersonalData: async function (email,data) {
    //     try {
    //         if(!data.fullName){
    //             throw 'Faltan datos obligatorios';
    //         }else{
    //             let [newPData, created] = await PersonalData.findOrCreate({
    //                 where :{ UserEmail: email },
    //                 defaults:{
    //                     UserEmail: email,
    //                     fullname:data.fullName,
                            
    //                 }
    //             });
    //             return newPData;
    //         }
    //     } catch (error) {
    //         throw error; 
    //     }
    // }


}