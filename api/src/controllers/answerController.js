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
    }
}