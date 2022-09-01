const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./Products.js');
const review = require('./Review.js');
const user = require ('./User');
const cart = require ('./Cart.js');
const purchases = require ('./Purchase.js');
const admin = require ('./Admin.js');
const question = require('./Question.js');
const answer = require('./Answer.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* postear reviews */
router.use('/review', review)
/* traer productos disponibles, buscar productos por query, trae detalle de producto, crea y actualiza producto*/
router.use('/products', products)
/* crear , traer detalle que incluye reviews, data personal y sus órdenes de compra, crear personal data y actualizar personal data de usuario  */
router.use('/user', user)

router.use('/cart', cart)
/* crear orden de compra y mostrar todas las órdenes*/
router.use('/purchases', purchases)
/* Tareas admin: crear nuevo admin y eliminarlo, ver todos los usuarios y buscarlos x query, ver productos deshabilitados */
router.use('/admin', admin)
/* questions */
router.use('/question',question)
/* answers */
router.use('/answer', answer)

module.exports = router;
