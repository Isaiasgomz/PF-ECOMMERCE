import React from "react";
import style from "./ResumeOrderCard.module.css";
import MediaQuery from 'react-responsive';

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
        <MediaQuery maxWidth={450}>
          
        <div className={style.containerNameQuery}>
          <span>{obj.productName.slice(0,50)}</span>
        </div>
        </MediaQuery>
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
