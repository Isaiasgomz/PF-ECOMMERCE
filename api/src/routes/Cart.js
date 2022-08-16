const { Router } = require("express");
const { User, Cart, Product } = require("../db");
const { Op } = require("sequelize");
const { productByName } = require("../controllers/productsController");

const router = Router();

//agregar un producto a la lista cart de un usuario
router.post("/", async (req, res) => {
  const { idProduct, email } = req.body;

  try{
      if (idProduct && email) {
   let user = await User.findByPk(email)
   let product = await Product.findByPk(idProduct)
   await user.addProduct(product);

     res.status(200).send("Se ha añadido al carrito") 
  } else {
    res.status(400).send("Debes loguearte para añadir al carrito.")
  }

  } catch(error){
    res.status(404).send(error)
  }
});

//mostrar los productos que estan agregados al carrito
router.get("/:email", async (req, res) => {
  const { email } = req.params;

  if (email) {
    let user = await User.findOne({
      where: { email: email },
      include: [{
        model: Product,
        through: { attributes: ["quantity"] },
      }],
    });
    user
      ? res.status(200).json(user)
      : res.status(404).json("No se envio un usuario.");
  }
});

module.exports = router;