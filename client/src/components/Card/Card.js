import React, { useState } from 'react'
import style from "./Card.module.css"
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function Card({name,price,img,calification,localStor,ob,id,stock}) {
  

  return (
    <div className={style.containerCard}>
      <Link to={`/detail/${id}`}><div className={style.containerImg}>
        <img className={style.img} src={img} alt={name} /> 
      </div></Link>
      <div className={style.containerInfo}>
        <div className={style.containerTitle}>

        <Link to={`/detail/${id}`}> <span>{name}</span></Link>
        </div>
        <div className={style.containerPriceCart}>
          <span>${price}</span>
          {/* <Rating
            name="half-rating"
            size="small"
            defaultValue={Number(calification)}
            precision={0.5}
            readOnly
          /> */}
          {stock<=0?
          <div className={style.buttonCarrito}><i  className="fa-solid fa-cart-plus"></i></div>:
          <div className={style.buttonCarrito}  onClick={()=>localStor(ob)}  ><i className="fa-solid fa-cart-plus"></i></div>}
          {/* <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div> */}
          
        </div>
      </div>
      
    </div>
  )
}

export default Card