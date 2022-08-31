const {User, Product} = require ('../db');

module.exports = {
    setFavourites: async (idUser,idProduct)=>{
       
        if(!idUser || !idProduct) return "Faltan datos!"

        const id = Number(idProduct)

        const [instance, created] = await User.findOrCreate({
            where:{email: idUser},
        })

        await instance.addProducts(id)

        return (instance)
    },
    deleteFavourite: async(idUser,idProduct)=>{
        if(!idUser || !idProduct) return "Faltan datos!"
        
        const id = Number(idProduct)

        const user = await User.findByPk(idUser)

        await user.removeProducts(id)

        return user

    }
    }