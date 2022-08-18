const { Router } = require('express');
const router = Router();
const {postOrder, getOrder} = require('../controllers/purchasesController.js');

router.post('/', async (req, res) => {
    const {email} =req.body;
    try {
        let newOrder = await postOrder(email);
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
 /* FALTA GET PURHCASE PARA TERMINAR EL CARRITO
  */
module.exports = router;