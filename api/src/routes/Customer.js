const { Router } = require("express");
const { userDetail } = require("../controllers/userController");
const {Customer} = require('../db');
const { route } = require("./Review");

const router = Router()




router.post('/', async (req,res)=>{
    
    try {
        const  {customerName, email, password} = req.body
        if(!customerName || !email || !password){
            return res.status(400).json({error: "Missing required dates"});
        }
        const newCustomer = await Customer.create({
        customerName,
        email,
        password

    })
    res.status(200).json(newCustomer)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get('/:idUser', async(req,res)=>{
    const {idUser} = req.params
    try {
        let userD = await userDetail(idUser);
        res.status(200).send(userD);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
})


module.exports= router