const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { productByName, listProducts } = require('../controllers/productsController');

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
            let allProducts= await listProducts(products.data)
            res.status(201).send(allProducts)
        } catch (error) {
            res.status(200).send(await listProducts())
        }
    }
})

router.get('/:idProduct', async (req, res) => {
    const { idProduct } = req.params;
    try {
        let l = await countryDetail(idPais.toUpperCase());
        res.status(200).send(l);
    } catch (error) {
        res.status(404).send(error);
    }
})






module.exports = router;