const { Router } = require("express");
const { User, Product } = require("../db");
const { Op } = require("sequelize");
const { productByName } = require("../controllers/productsController");
const { postCart, getOrderCart } = require("../controllers/shoppingCartController");


const router = Router();
//agregar un producto a la lista cart de un usuario
router.post("/", async (req, res) => {
  try {
      let newCart = await postCart(req.body)
      res.status(200).send(newCart)
  } catch (error) {
      res.status(404).send(error)
    }
});

//traer productos de la orden
router.get('/:PurchaseOrderOrderN', async (req, res) => {
  const {PurchaseOrderOrderN} = req.params
  try {
      let order = await getOrderCart(PurchaseOrderOrderN);
      res.status(201).send(order);
  } catch (error) {
      res.status(400).send(error)
  }
})

module.exports = router;