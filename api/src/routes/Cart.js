const { Router } = require("express");
const { User, Cart, Product } = require("../db");
const { Op } = require("sequelize");
const { productByName } = require("../controllers/productsController");

const router = Router();

//agregar un producto a la lista cart de un usuario
router.get("/", async (req, res) => {
  const { product } = req.query;

  if (product) {
    let productName = await productByName(product);
    if (productName) {

    }
  }
});

//mostrar los productos que estan agregados al carrito
router.get("/:email", async (req, res) => {
  const { email } = req.params;

  if (email) {
    let user = await User.findOne({
      where: { email: { [Op.iLike]: `%${email}%` } },
      include: {
        model: Cart,
        attributes: ["quantity"],
        through: { attributes: [] },
      },
    });
    user
      ? res.status(200).json(user)
      : res.status(404).json("No se envio un usuario.");
  }
});

module.exports = router;