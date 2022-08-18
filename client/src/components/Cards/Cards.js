import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";
import { setCart, sortProductByPrice } from '../../Actions';


const Cards = (props) => {
    
    const { Products } = useSelector(state => state)
    const {productsByName} = useSelector(state => state)
    const dispatch = useDispatch()
    

    let x = []
    const addProductCartStorage = (o)=>{
        let filtered = x.filter(e=> e.idProduct === o.idProduct)
        if(filtered.length)return

        let a = JSON.parse(localStorage.getItem("ProductCartLocalStorage"))
        if(a){
            x = [...a,o]
            console.log(x)
            localStorage.setItem("ProductCartLocalStorage", JSON.stringify(x))
                        console.log(x)
            return
        }

        x = [...x,o]
        localStorage.setItem("ProductCartLocalStorage", JSON.stringify(x))
        console.log(x)

        
       
    }
    useEffect(() => {
      
        return () => {
            dispatch(setCart(x))
        };
    },[]);

 
    return (
        <div>

            {Products?.map( (e,index) => <Card localStor={addProductCartStorage} ob={e} price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) }

        </div>
    );
}

export default Cards;


//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 