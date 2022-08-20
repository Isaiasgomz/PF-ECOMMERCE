const { Router } = require("express");
const { userDetail, userPdata, updatePersonalData } = require("../controllers/userController");
const {User} = require('../db');
const { route } = require("./Review");

const router = Router()

/* post de usuario */
router.post('/', async (req,res)=>{
    try {
        const  {user} = req.body          
        if(!user.email){
            return res.status(400).json({error: "Faltan datos obligatorios"});
        }         
        const [newUser,created] = await User.findOrCreate({
            where:{
                email:user.email
            },
            defaults:{
                email: user.email,
                admin:user.admin
            }
    })
    res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
})

/* detalle de usuario */
router.get('/:idUser', async(req,res)=>{
    const {idUser} = req.params
    try {
        let userD = await userDetail(idUser);
        res.status(200).send(userD);
    } catch (error) {
        res.status(404).send(error);
    }
})

/* crear personal data del usuario */
router.post('/:idUser/personalData', async(req,res)=>{
    const {idUser} = req.params
    try {
        let pData = await userPdata(idUser,req.body);
        res.status(200).send(pData);
    } catch (error) {
        res.status(404).send(error);
    }
})

/* actualizar personal data de usuario */
router.patch('/:idUser/updatePersonalData', async(req,res)=>{
    const {idUser} = req.params
    try {
        await updatePersonalData(idUser, req.body)
        res.status(200).send('Datos Personales actualizados!')
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports= router