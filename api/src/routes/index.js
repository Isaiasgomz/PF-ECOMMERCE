const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./Products.js');
const review = require('./Review.js');
const user = require ('./User');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* postear reviews */
router.use('/review', review)
/* traer productos, buscar productos por query y detalle de producto */
router.use('/products', products)
/* crear usuario y traer detalle de usuario */
router.use('/user', user)


module.exports = router;
