import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Actions";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import style from "./ShoppingCar.module.css";
import swal from "sweetalert";
import { createCont } from "../contexto/contextProvider";


function ShoppingCar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const {stringLocalStorage} = useContext(createCont)
  


  

  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = y? Array.from(y) : "No hay productos"
  y = y? y.reduce((acc, o)=>{
    let cant = o.quantity ? o.quantity : 1
  acc += o.price * cant
  return acc
},0) : 0
  const [price,setPrice] = useState(y);
  const returnPrice = ()=>{
    let x = JSON.parse(localStorage.getItem(stringLocalStorage));
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
        localStorage.setItem(stringLocalStorage, JSON.stringify(x));
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
    let x = JSON.parse(localStorage.getItem(stringLocalStorage));
    dispatch(setCart(x));
    return()=>{
      dispatch(setCart(productsFromLocalStorage))
    }
  }, [dispatch]);

  return (
    <div className={style.containerCart}>
    {console.log(stringLocalStorage)}
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
        {productsFromLocalStorage && Array.isArray(productsFromLocalStorage)?
          productsFromLocalStorage.map((e) => (
            <CardCart key={e.idProduct}  returnPrice={returnPrice}  deleteP={deleteProduct} obj={e} />
          )): (<h2>No hay productos!</h2>)}
      </div>
    </div>
  );
}

export default ShoppingCar;
