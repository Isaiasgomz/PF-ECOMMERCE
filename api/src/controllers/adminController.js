const {User, Product} = require ('../db');
const { listProducts } = require('./productsController');

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
            throw error;
        }
    },

    /* usuario admin eliminado */
    deleteUser: async function(email){
        try {
            await User.destroy({
                where: {
                    email: email
                }
            })
        } catch (error) {
            throw new Error(error); 
        }
    },

    // traer todos los productos para el dashboard del admin
    listUsers: async function () {
        try {
            let user = await User.findAll()
            if (!user) throw 'No existen Usuarios registrados';
            return user;
        } catch (error) {
            throw error;
        }
    },

}