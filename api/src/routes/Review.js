const { Router } = require('express');
const { postReview } = require('../controllers/reviewsController');
const router = Router();

router.post('/', async (req, res) => {
   try {
    let newReview = await postReview(req.body);
    res.status(201).send(newReview);
   } catch (error) {
    res.status(400).send(error)
   }
})


module.exports = router;