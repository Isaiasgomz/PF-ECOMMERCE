import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCart } from '../../Actions'
import style from "./ShoppingCar.module.css"





function ShoppingCar(){
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)

  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem("ProductCartLocalStorage"))
    dispatch(setCart(x))

  },[])

  

    return (
      <div className={style.containerCart}>
        <h2>My Order</h2>
       <div>
          {cart&& cart.map(e=><p>{e.productName}</p>)}
       </div>
      </div>
    )
  }


export default ShoppingCar