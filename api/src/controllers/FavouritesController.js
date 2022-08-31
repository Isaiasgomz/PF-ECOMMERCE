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
    }
    }