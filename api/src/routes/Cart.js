const { Router } = require("express");
const { User, Product } = require("../db");
const { Op } = require("sequelize");
const { productByName } = require("../controllers/productsController");
const { postCart } = require("../controllers/shoppingCartController");

const router = Router();
//agregar un producto a la lista cart de un usuario
router.post("/", async (req, res) => {
  const {cart} = req.body;
  try {
      let newCart = await postCart(cart)
      res.status(200).send(newCart)
  } catch (error) {
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