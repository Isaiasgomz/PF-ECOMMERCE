import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCart } from '../../Actions'
import CardCart from '../CardCart/CardCart'
import style from "./ShoppingCar.module.css"





function ShoppingCar(){
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)

  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"))
    dispatch(setCart(x))

  },[])

  

    return (
      <div className={style.containerCart}>
      <div className={style.containerInfo}>
        <h2>Mi orden</h2>
        <div className={style.containerPrice}>
          <h2>Precio total: $</h2>
        </div>
      </div>

       <div className={style.cards}>
          {cart&& cart.map(e=><CardCart obj={e}/>)}
       </div>

      </div>
    )
  }


export default ShoppingCar