import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Actions";
import { Link } from "react-router-dom";
// import style from "./ShoppingCar.module.css"

function ResumeOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"))
    dispatch(setCart(x));
  }, []);





  const total = cart.reduce((acc, o)=>{
    let cant = o.quantity ? o.quantity : 1
  acc += o.price * cant
  return acc
},0)

  return (
    <div>
      <h2>Mi orden</h2>
      <div>
        {cart &&
          cart.map((e) => (
            <div>
              <img src={e.image} alt="img not found" />
              <p>{e.productName}</p>
              <p>{e.price}</p>
              <p>Cantidad: {e.quantity}</p>
            </div>
          ))}
      </div>
      <div>Total: {total} </div>
      <div>
        <Link to="/shoppingCar">
          <button>Volver al carrito</button>
        </Link>
        <Link to="/order">
          <button>Continar</button>
        </Link>
      </div>
    </div>
  );
}

export default ResumeOrder;
