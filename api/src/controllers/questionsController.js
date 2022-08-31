const {Question,Answer} = require("../db");

module.exports = {
    postQuestion: async function (obj){
        console.log("obj: ",obj);
        try{if(!obj.email || !obj.question|| !obj.ProductIdProduct) throw 'Faltan datos obligatorios';
        else{
            let objQuestion= {
                UserEmail:obj.email,
                question:obj.question,
                ProductIdProduct:obj.ProductIdProduct
            }
            let newQuestion = await Question.create(objQuestion);
            return newQuestion;
        }}catch(e){
            return e;
        }
    },
    getAllQuestions: async function () {
        try {
            let allQuestions = await Question.findAll({
                include:[{
                    model:Answer
                }]
            });
            return allQuestions;
        } catch (error) {
            return error.message;
        }
    },
    updateQuestion: async function (id,status) {
        try {

            await Question.update({ status: status }, {
                where: {
                    id: id
                }
            })

                    /* let confirmation = pConfirmation()
                    console.log("entro a PREPARANDOENVIO");
                    await sendEmail(email, "Su pedido se ha confirmado", confirmation) */
                   
           
        } catch (error) {
            throw error;
        }
    }
}