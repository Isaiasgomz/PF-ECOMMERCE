const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
console.log('asd')

router.get("/home/marqui", (req,res)=>{
    res.send("Holaaa")
})


module.exports = router;
