import React from "react";
import style from "./CardDetail.module.css";

const CardDetail = ({ productName, image, price, quantity, obj }) => {
  return (
    <div className={style.containerCard}>
      <div className={style.containerImg}>
        <div className={style.SupportContainerImg}>
          <img src={image} alt={productName} />
        </div>
      </div>
      <div className={style.containerInfo2}>
        <div className={style.containerName}>
        <div>{productName.slice(0,50)} </div>
        </div>
        
        <div className={style.containerCant}>
          {console.log(obj)}
          <p> x{quantity ? quantity : 1} </p>
        </div>
        <div className={style.containerCant2}>
        <div> ${price} </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
