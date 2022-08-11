const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/home/marquiaaa", (req,res)=>{
    res.send("Holaaa")
})

router.get("/home/marqui", (req,res)=>{
    res.send("Holaaa")
})


module.exports = router;
