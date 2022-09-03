const {Answer} = require("../db");

module.exports = {
    postAnswer: async function (obj){
        try{if(!obj.answer) throw 'Faltan datos obligatorios';
        else{
            let objAnswer= {
                QuestionId:obj.QuestionId,
                answer:obj.answer
            }
            let newAnswer = await Answer.create(objAnswer);
            return newAnswer;
        }}catch(e){
            return e;
        }
    },    getAllAnswers: async function () {
        try {
            let allAnswer = await Answer.findAll();
            console.log(allAnswer);
            return allAnswer;
        } catch (error) {
            return error.message;
        }
    },
    updateAnswer: async function (id,obj) {
        try {
            await Answer.update({ answer: obj }, {
                where: {
                    id: id
                }
            })

        } catch (error) {
            throw error;
        }
    }
}