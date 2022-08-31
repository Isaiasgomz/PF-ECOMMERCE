const { Router } = require('express');
const { postAnswer } = require('../controllers/answerController');
const router = Router();

router.post('/', async (req, res) => {
   try {
    let newAnswer = await postAnswer(req.body);
    console.log(newAnswer);
    res.status(201).send(newAnswer);
   } catch (error) {
    res.status(400).send(error)
   }
})


module.exports = router;