const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./Products.js');
const review = require('./Review.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/review', review)
router.use('/products', products)



module.exports = router;
