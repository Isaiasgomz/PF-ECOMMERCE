import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCart } from '../../Actions'
import CardCart from '../CardCart/CardCart'
import style from "./ShoppingCar.module.css"
import swal from 'sweetalert';





function ShoppingCar(){
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)

  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"))
    dispatch(setCart(x))

  },[dispatch])





  const deleteProduct = (o)=>{

    swal({
      title: "Estás seguro?",
      text: "Una vez eliminado, no puedes recuperar el producto seleccionado.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let x = cart.filter((e)=> e.idProduct !== o.idProduct)
      dispatch(setCart(x))
      localStorage.setItem("ProductCartLocalStoragev3",JSON.stringify(x))
        swal("Poof! El producto ha sido eliminado correctamente!", {
          icon: "success",
        });
      } else {
        swal("El producto se ha salvado!");
      }
    });

  }

  

    return (
      <div className={style.containerCart}>
      <div className={style.containerInfo}>
        <h2>Mi orden</h2>
        <div className={style.containerPrice}>
          <h2>Precio total: $</h2>
        </div>
        <button>Comprar</button>
      </div>

       <div className={style.cards}>
          {cart&& cart.map(e=><CardCart key={e.idProduct} deleteP={deleteProduct} obj={e}/>)}
       </div>

      </div>
    )
  }


export default ShoppingCar