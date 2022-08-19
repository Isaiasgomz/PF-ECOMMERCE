const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./Products.js');
const review = require('./Review.js');
const user = require ('./User');
const cart = require ('./Cart.js');
const purchases = require ('./Purchase.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* postear reviews */
router.use('/review', review)
/* traer productos, buscar productos por query, trae detalle de producto, crea y actualiza producto*/
router.use('/products', products)
/* crear , traer detalle , crear personal data y actualizar personal data de usuario  */
router.use('/user', user)

router.use('/cart', cart)
/* Orden de compra */
router.use('/purchases', purchases)

module.exports = router;
