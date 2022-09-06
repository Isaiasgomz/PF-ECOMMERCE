import React, { useState } from 'react'
import style from "./BuildCard.module.css"

import agotado from "../../imagenes/agotado.png"

function BuildCard({ name, price, img, calification, localStor, ob, id, stock }) {


  return (
    <div className={style.containerCard}>

    <div className={style.superiorPart}>
      {ob.reduction !== 0 ?
        <div className={style.containerDescuento}>
          <div className={style.reduction}>
            <span className={style.porcentaje}>-{ob.reduction}%</span>
          </div>
        </div>
        :
        null
      }


      {ob.stock <= 0 ?
        <div className={style.containerAgotado}>

          <img className={style.contAgotado} src={agotado} alt="agotado" />
          <div className={style.containerImgAgot}>
            <img className={style.img} src={img} alt={name} />
          </div>

        </div>
        :

        <div className={style.containerImg}>
          <img className={style.img} src={img} alt={name} />
        </div>
      }

      </div>

      <div className={style.containerInfo}>

        <div className={style.containerTitle}>

          <span>{name}</span>
        </div>

        <div className={style.containerPriceCart}>

          <span>${price}</span>

        </div>
      </div>

    </div>
  )
}

export default BuildCard