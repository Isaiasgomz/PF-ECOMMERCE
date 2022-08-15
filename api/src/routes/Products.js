const { Router } = require('express');
const router = Router();
const { productByName, listProducts, productDetail, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');


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



router.post('/create', async (req,res)=>{  
    try {
        const  {productName, price, image, description, quantity, category} = req.body
        if(!productName|| !price || !image|| !description || !quantity || !category){
            return res.status(400).json({error: "Missing required dates"});
        }
        const product = await createProduct(productName, price, image, description, quantity, category)
        res.json(product)
    } catch (error) {
        res.status(404).json(error)
    }
})



router.patch('/update/:id', async (req,res) =>{
    try {
        const {id} = req.params.id
        updateProduct(id, req.body)
        res.status(200).json(id)
    } catch (error) {
        res.status(404).json(error)
    }
} )


router.delete('/delete/:id', (req,res)=>{
    try {
        const {id} = req.params.id
        deleteProduct(id)
        res.status(200).json(id)
    } catch (error) {
        res.status(404).json(error)
    }
})








module.exports = router;