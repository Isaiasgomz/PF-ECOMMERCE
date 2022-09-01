const { Router } = require('express');
const router = Router();
const { productByName, listProducts, productDetail,
     createProduct, updateProduct, deleteProduct, updateStock, updatePrice } = require('../controllers/productsController');

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
        res.status(404).send(error);
    }
})

router.post('/create', async (req,res)=>{  
    try {
        const  {productName, price, image, description, category, stock, brand} = req.body
        if(!productName|| !price || !image|| !description || !category || !brand){
            return res.status(400).json({error: "Faltan datos obligatorios"});
        }
        const product = await createProduct(productName, price, image, description, category, stock, brand)
        res.json(product)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put('/update/:id', async (req,res) =>{
    try {
        const {id} = req.params
        await updateProduct(id, req.body)
        res.status(200).send('Producto actualizado!')
    } catch (error) {
        res.status(404).send(error)
    }
} )
router.put('/updateStock', async (req,res) =>{
    try {
        console.log("req.body en back: ",req.body)
        await updateStock(req.body)
        res.status(200).send('Stock actualizado!')
    } catch (error) {
        res.status(404).send(error)
    }
} )
/* actualizar precio con descuento */
router.put('/updatePrice', async (req,res) =>{
    const {idProduct, price, reduction} = req.body;
    try {
        await updatePrice(idProduct, price, reduction)
        res.status(200).send('Descuento aplicado!')
    } catch (error) {
        res.status(404).send(error)
    }
} )
module.exports = router;