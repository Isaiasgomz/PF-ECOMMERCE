const { Op, User } = require('../db');

module.exports = {
    /* detalle de producto por params */
    userDetail: async function (email) {
        try {
            let user = await User.findByPk(email, {
                include: ["reviews"]
            } )
            console.log(user)
            return user;
        } catch (error) {
            throw error;
        }
    }
}