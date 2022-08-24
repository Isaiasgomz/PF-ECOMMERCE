import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./ResumeOrder.module.css";
import ResumeOrderCard from "./ResumeOrderCard";
import { createCont } from "../contexto/contextProvider";



function ResumeOrder() {

  const {stringLocalStorage} = useContext(createCont)
  
  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = Array.from(y);


  const total = productsFromLocalStorage.reduce((acc, o) => {
    let cant = o.quantity ? o.quantity : 1;
    acc += o.price * cant;
    return acc;
  }, 0);

  return (
    <div className={style.containerCart}>
      <div className={style.containerInfo}>
        <Link to="/shoppingCar">
          <button className={style.button}>Volver al carrito</button>
        </Link>
        <h2>Mi orden</h2>

        <Link to="/order">
          <button className={style.button}>Continuar</button>
        </Link>
      </div>
      

      <div className={style.cards}>
        <div className={style.productos}><h3>Productos: {} </h3></div>
      
        {productsFromLocalStorage &&
          productsFromLocalStorage.map((e) => (
            <ResumeOrderCard key={e.idProduct} obj={e} />
          ))}
      </div>

      <div className={style.containerInfo2}>
        {/* <div>
              <h3>Productos: {e.quantity}</h3>
            </div> */}
       
        <h3>Precio total: ${total} </h3>
      </div>
      
    </div>
  );
}

export default ResumeOrder;
