const {User} = require ('../db');

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
    listUsers: async function () {
        try {
            let user = await User.findAll()
            if (!user) throw 'No existen Usuarios registrados';
            return user;
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

}