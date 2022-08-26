import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ResumeOrderCard.module.css";

const ResumeOrderCard = ({ obj }) => {

  return (
    <div className={style.containerCard}>
      
      <div className={style.containerImg}>
        <div className={style.SupportContainerImg}>
          <img src={obj.image} alt={obj.productName} />
        </div>
      </div>
      <div className={style.containerInfo2}>
        <div className={style.containerName}>
          <p>{obj.productName}</p>
        </div>
        <div className={style.containerCant}>
          <p> x{obj.quantity ? obj.quantity : 1} </p>
        </div>
        <div className={style.containerCant}>
          <p>${obj.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeOrderCard;
