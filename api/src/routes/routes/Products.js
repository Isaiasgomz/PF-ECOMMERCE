const { Router } = require('express');
const router = Router();
const axios = require('axios')

router.get('/', async (req, res) => {
    const { name } = req.query;
    if(name){
        try {
            let productName = await productByName(name);
            res.status(200).send(productName);
        } catch (error) {
            res.status(404).send(error);
        }
    }else{
        let products = await axios.get('api');
        try {
            let allProducts= await listProducts(products)
            res.status(201).send(allProducts)
        } catch (error) {
            res.status(200).send(await listProducts())
        }
    }
})








module.exports = router;