import React from "react"; 
import { Link } from "react-router-dom";
import style from "./MyOrdersCard.module.css"

const MyOrdersCard = ({orderN, date, totalPrice, quantity, status}) => { 


    return (
        <div className={style.card}>
            <div className={style.fila}>
            <div className={style.text}>Orden N°: {orderN} </div>
            <div className={style.date}> {date} </div>
            </div>
            <div className={style.fila}>
            <div className={style.text}>Cantidad: {quantity} </div>
            <div className={style.text}>Precio total: ${totalPrice} </div>
            </div>
            <div className={style.fila}>
            <Link to={`/orderDetail/${orderN}`}>
            <button className={style.button}>Detalles</button>
            </Link>
            <div className={style.delivered}>{status}</div>
            </div>
        </div>
        )
};

export default MyOrdersCard;