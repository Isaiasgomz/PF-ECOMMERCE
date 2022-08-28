const { Router, request, response } = require("express");

const { updateUser, userByMail, listUsers, listProductsAdmin, productByName, getProductById, usersAdmin ,addPersonalData, getAllOrderCart } = require('../controllers/adminController');

const router = Router();

/* ver todos los usaurios y buscar por email */
router.get('/users', async(req, res) => {
    const { email } = req.query;
    try {
        if(email){
            let user = await userByMail(email);
            res.status(200).send(user);
            }else{
                let allUsers =await listUsers()
                res.status(201).send(allUsers)
    }}catch (error) {
        res.status(404).send(error);
    }
})

router.get('/allOrders', async (req, res) => {
    try {
        let order = await getAllOrderCart();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error)
    }
  })


// listar todos los prodcutos en conjunato y por nombre
router.get('/products', async (req, res) => {
    try {
        const {name} = req.query
        if(name){
            const product = await productByName(name)
            product.length > 1 ? res.status(201).send(product)
             : res.status(400).json([{productByName:'Producto no encontrado'}])
        }else{
            let allProducts= await listProductsAdmin()
            res.status(201).send(allProducts)
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

// buscar un producto por el id
router.get('/product/:productId', async(req, res) => {
    try {
        const { productId } = req.params
        const productById = await getProductById(productId)
        res.json(productById) 
        } catch (error) {
        res.status(404).send(error)
    }
})

/* anadir la info del admin */
router.post('/addPersonalData/:email', async(req,res)=>{
    const {email} = req.params;
    try {
        const newDataAdmin =  await addPersonalData(email, req.body);
        res.status(200).send(newDataAdmin)
    } catch (error) {
        res.status(404).send(error)
    }
})

/* bloquear al usuario  */
router.put('/disabledUser/:email', async(req,res)=>{
    const {email} = req.params;
    try {
        await updateUser(email, req.body);
        res.status(200).send(`El usuario ${email} fue desabilitado`)
    } catch (error) {
        res.status(404).send(error)
    }
})


// devolver todos los usuarios
router.get('/personal', async (req,res) =>{
    try {
         const allUsers =  await usersAdmin()
         res.status(200).send(allUsers)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports= router
