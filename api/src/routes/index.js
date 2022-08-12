const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./Products.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/products', products)


module.exports = router;
