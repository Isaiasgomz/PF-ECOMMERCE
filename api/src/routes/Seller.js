const { Router } = require("express");
const { Seller, Product} = require('../db')

const router = Router()




router.post('/product', async (req,res)=>{
    
    try {
        const  {productName, price, image, description, quantity, category} = req.body
        if(!productName|| !price || !image|| !description || !quantity || !category){
            return res.status(400).json({error: "Missing required dates"});
        }
        const newProduct = await Product.create({
        productName,
        price, 
        image, 
        description,
        quantity, 
        category

    })
    res.status(200).json(newProduct)
    } catch (error) {
        res.status(404).json(error)
    }
})



router.patch('/:id', async (req,res) =>{
    try {

        Product.update(req.body, {
            where: {
              id: req.params.id
            }
        })

    } catch (error) {
        res.status(404).json(error)
    }

} )


router.delete('/:id', (req,res)=>{
    try {
        Product.destroy({
            where: {
              id: req.params.id
            }
        })
    } catch (error) {
        res.status(404).json(error)
    }
})


module.exports= router