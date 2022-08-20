import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Actions";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import style from "./ShoppingCar.module.css";
import swal from "sweetalert";


function ShoppingCar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  

  let y = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"));
  let productsFromLocalStorage = Array.from(y)
  y = y.reduce((acc, o)=>{
    let cant = o.quantity ? o.quantity : 1
  acc += o.price * cant
  return acc
},0)
  const [price,setPrice] = useState(y);
  const returnPrice = ()=>{
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"));
    console.log("x",x)
    if(!x.length) return
        let a = x.reduce((acc, o)=>{
          let cant = o.quantity ? o.quantity : 1
        acc += o.price * cant
        return acc
      },0)
      setPrice(a)
  }

  const deleteProduct = (o) => {
    swal({
      title: "Estás seguro?",
      text: "Una vez eliminado, no puedes recuperar el producto seleccionado.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let x = cart.filter((e) => e.idProduct !== o.idProduct);
        dispatch(setCart(x));
        localStorage.setItem("ProductCartLocalStoragev3", JSON.stringify(x));
        returnPrice()
        swal("Poof! El producto ha sido eliminado correctamente!", {
          icon: "success",
        });
      } else {
        swal("El producto se ha salvado!");
      }
    });
  };

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"));
    dispatch(setCart(x));
    return()=>{
      dispatch(setCart(productsFromLocalStorage))
    }
  }, [dispatch]);

  return (
    <div className={style.containerCart}>
      <div className={style.containerInfo}>
      <Link to={"/home"}>
      <button>Seguir comprando</button>
      </Link>
        <h2>Mi orden</h2>
        <div className={style.containerPrice}>
          <h2>Precio total: ${price}</h2>
        </div>
        <div>
          <Link to="/resumeOrder">
            <button>Resumen de la orden</button>
          </Link>
        </div>
      </div>

      <div className={style.cards}>
        {productsFromLocalStorage &&
          productsFromLocalStorage.map((e, index) => (
            <CardCart key={e.idProduct}  returnPrice={returnPrice}  deleteP={deleteProduct} obj={e} />
          ))}
      </div>
    </div>
  );
}

export default ShoppingCar;
