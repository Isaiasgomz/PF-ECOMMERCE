import React from 'react';
import { useState } from 'react';
import style from "./CardCart.module.css"
import "./CardCartIcons.css"


const CardCart = ({obj,deleteP}) => {

    
    const [quantity, setQuantity] = useState(1);
    
    
    const addProduct = (cant)=>{
        if(quantity >= cant || quantity <= 0){
            return
        }
        setQuantity(quantity + 1)
    }
    
    const removeProduct = (cant)=>{
        if(quantity > cant || quantity <= 1){
            return
        }
            setQuantity(quantity - 1)
        }
        
    let price = obj.price * quantity
    obj.quantity = quantity

    return (

            <div className={style.containerCard}>
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

                            <p className={style.price}>{quantity} x ${price}</p>
                        </div>
                        <div className={style.quantity}>
                            <i onClick={()=>{addProduct(obj.stock); }} className="fa-solid fa-circle-plus"></i>
                            <i onClick={()=>removeProduct(obj.stock)} className="fa-solid fa-circle-minus"></i>
                            <i onClick={()=>deleteP(obj)} className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CardCart;
