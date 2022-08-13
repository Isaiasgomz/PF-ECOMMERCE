const { Router } = require('express');
const router = Router();
const { productByName, listProducts, productDetail } = require('../controllers/productsController');


router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
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
        let prodDetail = await productDetail(idProduct);
        res.status(200).send(prodDetail);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
})






module.exports = router;