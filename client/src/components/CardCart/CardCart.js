import React from 'react';
import style from "./CardCart.module.css"
import "./CardCartIcons.css"


const CardCart = ({obj,deleteP}) => {


    return (

            <div className={style.containerCard}>
                {console.log(obj)}
                <div className={style.containerImg}>
                    <div className={style.SupportContainerImg}>

                        <img className={style.img} src={obj.image} alt={obj.productName}/>
                    </div>
                </div>
                <div className={style.containerInfo}>
                    <div className={style.containerName}>
                        <p className={style.nameProduct}>{obj.productName}</p>
                    </div>
                    <div className={style.containerButtons}>
                        <div className={style.containerPriceCart}>

                            <p className={style.price}>${obj.price}</p>
                        </div>
                        <div className={style.quantity}>
                            <i className="fa-solid fa-circle-plus"></i>
                            <i className="fa-solid fa-circle-minus"></i>
                            <i onClick={()=>deleteP(obj)} className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CardCart;
