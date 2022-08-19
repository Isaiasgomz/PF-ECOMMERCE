import React, { useState } from 'react'
import style from "./Card.module.css"
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function Card({name,price,img,calification,localStor,ob,id}) {



  return (
    <div className={style.containerCard}>
      <div className={style.containerImg}>
       <img className={style.img} src={img} alt={name} /> 
      </div>
      <div className={style.containerInfo}>
        <div className={style.containerTitle}>

          <p>{name}</p>
        </div>
        <div className={style.containerPriceCart}>
          <p>${price}</p>
          {/* <Rating
            name="half-rating"
            size="small"
            defaultValue={Number(calification)}
            precision={0.5}
            readOnly
          /> */}
          <i onClick={()=>localStor(ob)} className="fa-solid fa-cart-plus"></i>
        </div>
      </div>
    
    </div>
  )
}

export default Card