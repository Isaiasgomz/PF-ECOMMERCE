const { Router } = require('express');
const router = Router();
const {postOrder} = require('../controllers/purchasesController.js');

router.post('/', async (req, res) => {
    const {email/* , date */} =req.body;
    try {
        let newOrder = await postOrder(email/* , date */);
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(400).send(error)
    }
})
 
module.exports = router;