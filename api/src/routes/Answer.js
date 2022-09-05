const { Router } = require('express');
const { postAnswer, updateAnswer, getAllAnswers } = require('../controllers/answerController');
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

router.get('/', async (req, res) => {
   try {
       const allAnswer = await getAllAnswers()
       return res.status(200).send(allAnswer)
   } catch (error) {
       res.status(400).send(error) 
   }
})

router.put('/update/:idAnswer', async (req,res)=>{
   try {

       const {idAnswer} = req.params
       const {answer} = req.body
       console.log("answer en rutaback; ", answer);
      const answerUP = await updateAnswer(idAnswer, answer)
      res.status(200).send(answerUP)
   } catch (error) {
       res.status(400).send(error)
   }
})

module.exports = router;