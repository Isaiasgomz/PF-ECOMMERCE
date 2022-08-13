const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { productByName, listProducts, productDetail } = require('../controllers/productsController');
const jsonProducts = require('/api/src/jsonProducts')

const { Product} = require('../db')

 async function  apiInfo (){
    await Product.bulkCreate(jsonProducts)
}

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {

    const verification= await Product.count()
     if(verification < 1){
        await apiInfo()
    }

    if(name){
            let productName = await productByName(name);
            res.status(200).send(productName);
    }else{
            let allProducts=await listProducts()
            res.status(201).send(allProducts)
    }}catch (error) {
        res.status(404).send(error);
    }
})

router.get('/:idProduct', async (req, res) => {
    const { idProduct } = req.params;
    try {
        const verification= await Product.count()
        if(verification < 1){
            await apiInfo()
        }

        let prodDetail = await productDetail(idProduct);
        res.status(200).send(prodDetail);
    } catch (error) {
        res.status(404).send(error);
    }
})






module.exports = router;