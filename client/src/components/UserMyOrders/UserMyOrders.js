import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyOrdersCard from "./MyOrdersCard";
import style from "./MyOrdersCard.module.css";

const UserMyOrders = () => {
  const { userDetail } = useSelector((state) => state);

    //1 const: hacer un filter a shopingcards q traiga los objetos
    const articles = userDetail.ShoppingCarts.filter(e => e.PurchaseOrderOrderN) // === userDetail.PurchaseOrders.orderN)
    //a la const dsp hacerle un reduce a la propiedad quantity
    const quantity = articles.map(e => e.quantity).reduce((a,b) => a + b, 0);

    console.log("articles", articles);
    console.log("cantidad",quantity);

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2>Mis ordenes:</h2>
      </div>
      <div className={style.containerCards}>
        {userDetail.PurchaseOrders?.map((e, index) => (
          <MyOrdersCard
            orderN={e.orderN}
            date={e.date}
            totalPrice={e.totalPrice}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default UserMyOrders;
