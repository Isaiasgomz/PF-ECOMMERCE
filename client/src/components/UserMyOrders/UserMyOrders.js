import React from "react"; 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyOrdersCard from "./MyOrdersCard";
import style from "./MyOrdersCard.module.css"

const UserMyOrders = () => { 
    const { userDetail } = useSelector((state) => state);


 console.log('detalle', userDetail)
 

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
        )
};

export default UserMyOrders;