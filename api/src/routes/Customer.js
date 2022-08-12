const { Router } = require("express");
const {Customer} = require('../db')

const router = Router()




router.post('/', async (req,res)=>{
    
    try {
        const  {customerName, email, password} = req.body
        if(!customerName || !email || !password){
            return res.status(400).json({error: "Missing required dates"});
        }
        const newCustomer = await Costumer.create({
        customerName,
        email,
        password

    })
    res.status(200).json(newCustomer)
    } catch (error) {
        res.status(404).json(error)
    }
})



module.exports= router