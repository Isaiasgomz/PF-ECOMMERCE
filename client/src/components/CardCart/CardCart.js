import React, { useContext } from 'react';
import { useState } from 'react';
import { createCont } from '../contexto/contextProvider';
import style from "./CardCart.module.css"
import "./CardCartIcons.css"


const CardCart = ({obj,deleteP,returnPrice }) => {

    const {addToCart,removeToCart} = useContext(createCont)
        
    const [quantity, setQuantity] = useState(obj.quantity?obj.quantity:1);
    
    
    const addProduct = (obj)=>{
        if(quantity >= obj.stock || quantity <= 0){
            return
        }
        setQuantity(quantity + 1)
        addToCart(obj,quantity)
        returnPrice()
        
    }
    
    const removeProduct = (cant)=>{
        if(quantity > cant || quantity <= 1){
            return
        }
            setQuantity(quantity - 1)
            removeToCart(obj,quantity)
            returnPrice()
            
            
        }
        



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

                            <p className={style.price}>{obj.quantity ? obj.quantity : 1} x ${obj.price}</p>
                        </div>
                        <div className={style.quantity}>
                            <i onClick={()=>{addProduct(obj); }} className="fa-solid fa-circle-plus"></i>
                            <i onClick={()=>removeProduct(obj.stock)} className="fa-solid fa-circle-minus"></i>
                            <i onClick={()=>deleteP(obj)} className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CardCart;
