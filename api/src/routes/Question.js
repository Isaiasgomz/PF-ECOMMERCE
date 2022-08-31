const { Router } = require('express');
const { postQuestion, getAllQuestions, updateQuestion } = require('../controllers/questionsController');
const router = Router();

router.post('/', async (req, res) => {
   try {
    let newQuestion = await postQuestion(req.body);
    console.log(newQuestion);
    res.status(201).send(newQuestion);
   } catch (error) {
    res.status(400).send(error)
   }
})

router.get('/', async (req, res) => {
   try {
       const allQuestions = await getAllQuestions()
       return res.status(200).send(allQuestions)
   } catch (error) {
       res.status(400).send(error) 
   }
})

router.put('/update/:idQuest', async (req,res)=>{
    try {
        const {idQuest} = req.params
        const {status} = req.body
       const question = await updateQuestion(idQuest, status)
       res.status(200).send(question)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router;