const { Router } = require("express");
const { Seller, Product} = require('../db')

const router = Router()




router.post('/product', async (req,res)=>{
    
    try {
        const  {productName, price, image, description, quantity, category} = req.body
        if(!productName|| !price || !image|| !description || !quantity || !category){
            return res.status(400).json({error: "Missing required dates"});
        }
        const newCustomer = await Product.create({
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

router.patch('/:id', req,res )



module.exports= router