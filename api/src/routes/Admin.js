const { Router } = require("express");

const { updateUser, userByMail, listUsers, deleteUser, listProductsAdmin, productByName } = require('../controllers/adminController');

const router = Router();

/* ver todos los usaurios y buscar por email */
router.get('/users', async(req, res) => {
    const { email } = req.query;
    try {
        if(email){
            let user = await userByMail(email);
            res.status(200).send(user);
            }else{
                let allUsers=await listUsers()
                res.status(201).send(allUsers)
    }}catch (error) {
        res.status(404).send(error);
    }
})

router.get('/products', async (req, res) => {
    try {
        const {name} = req.query
        if(name){
            const product = await productByName(name)
             res.status(201).send(product) 
        }else{
            let allProducts= await listProductsAdmin()
            res.status(201).send(allProducts)
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

/* actualizar usuario admin */
router.patch('/updateUser', async(req,res)=>{
    const {email, admin} = req.body;
    try {
        await updateUser(email, admin);
        res.status(200).send('Nuevo administrador creado!')
    } catch (error) {
        res.status(404).send(error)
    }
})

/* eliminar usuario admin */
router.delete('/deleteUser', async(req,res)=>{
    const {email} = req.body;
    try {
        await deleteUser(email);
        res.status(200).send(`El administrador ${email} fue dado de baja`)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports= router
