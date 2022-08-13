const {Review} = require("../db");

module.exports = {
    postReview: async function (obj){
        
        try{if(!obj.email || !obj.qualification || !obj.review || !obj.ProductIdProduct) throw 'Falta enviar datos obligatorios';
        else{
            let objReview= {
                UserEmail:obj.email,
                qualification:obj.qualification,
                review:obj.review,
                ProductIdProduct:obj.ProductIdProduct
            }
            let newReview = await Review.create(objReview);
            return newReview;
        }}catch(e){
            return e;
        }
    }
}