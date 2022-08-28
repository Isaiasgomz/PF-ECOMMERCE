const { Router } = require('express');
const router = Router();
const {postOrder, getOrder, getAllOrders, updateOrder} = require('../controllers/purchasesController.js');

router.post('/', async (req, res) => {
    const {email,orderN,totalP} =req.body;

    try {
        let newOrder = await postOrder(email,orderN,totalP);
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get('/', async (req, res) => {
    const {email} = req.body;
    try {
        let nOrder = await getOrder(email);
        res.status(201).send(nOrder);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/orders', async (req, res) => {
    try {
        const allOrders = await getAllOrders()
        return res.status(200).send(allOrders)
    } catch (error) {
        res.status(400).send(error) 
    }
})


router.put('/update/:orderN', async (req,res)=>{
    try {
        const {orderN} = req.params
        const {email, status} = req.body
       const order = await updateOrder(email,orderN,status)
       return order 
    } catch (error) {
        res.status(400).send(error)
    }
})
 /* FALTA GET PURHCASE PARA TERMINAR EL CARRITO
  */
module.exports = router;