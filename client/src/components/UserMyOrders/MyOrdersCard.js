import React from "react"; 
import style from "./MyOrdersCard.module.css"

const MyOrdersCard = ({orderN, date, totalPrice, email}) => { 



    return (
        <div className={style.card}>
            <div className={style.fila}>
            <div className={style.text}>Orden N°: {orderN} </div>
            <div className={style.date}> {date} </div>
            </div>
            <div className={style.fila}>
            <div className={style.text}>Cantidad: </div>
            <div className={style.text}>Precio total: ${totalPrice} </div>
            </div>
            <div className={style.fila}>
            <button className={style.button}>Detalles</button>
            <div className={style.delivered}>Entregado</div>
            </div>
        </div>
        )
};

export default MyOrdersCard;