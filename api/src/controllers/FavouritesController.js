const {User, Product} = require ('../db');

module.exports = {
    setFavourites: async (idUser,idProduct)=>{
        console.log("asdas")
        if(!idUser || !idProduct) return "Faltan datos!"

        console.log(idUser,idProduct)

        const id = Number(idProduct)


        const [instance, created] = await User.findOrCreate({
            where:{email: idUser},
        })

        await instance.addProducts(id)
        console.log("oaaaaaaaaaaaaaaaa")

        return (instance)
    }
    }