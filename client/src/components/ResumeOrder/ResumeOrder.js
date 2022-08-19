import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Actions";
import { Link } from "react-router-dom";
// import style from "./ShoppingCar.module.css"

function ResumeOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStorage"));
    dispatch(setCart(x));
  }, []);

  const total = cart.map(e => e.price).reduce((a,b) => a + b, 0);

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
