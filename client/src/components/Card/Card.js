import React, { useState } from 'react'
import style from "./Card.module.css"
import { Rating } from "@mui/material";

function Card({name,price,img,calification,ob,store}) {

  // const [storageP, setStorageP] = useState([]);
  
  // const storageProducts = (o)=>{
  //   let arr = []
  //   arr.push(o)
  //   setStorageP([...storageP,o])
  //   console.log(arr)
  //   localStorage.setItem("productsCart", JSON.stringify(storageP))
  // }

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
          <i onClick={()=>store()} className="fa-solid fa-cart-plus"></i>
        </div>
      </div>
    
    </div>
  )
}

export default Card