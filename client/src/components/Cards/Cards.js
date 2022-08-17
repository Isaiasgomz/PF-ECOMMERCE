import React, { useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";


const Cards = (props) => {
    
    const { Products } = useSelector(state => state)
    const {productsByName} = useSelector(state => state)
    

    const [storageP, setStorageP] = useState([]);

  
    const storageProducts = (o)=>{
        let x = storageP.filter(e=>e.idProduct === o.idProduct)
        if(x.length){
            return
        }
        setStorageP([...storageP,o])
        console.log(storageP)
        localStorage.setItem("productsCart", JSON.stringify(storageP))
    }

    
    let arr = []
     
     if(props.filter.category){
     if(Products.length){arr = Products.filter(e => e.category.toLowerCase().includes(props.filter.category.toLowerCase())) ; };
    }

 
    return (
        <div>
            { 
            !!productsByName?.length? productsByName?.map( (e,index) => <Card store={()=>storageProducts(e)} ob={e} price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 
            :
            !!arr.length
            ? 
            arr?.map( (e,index) => <Card store={()=>storageProducts(e)}  ob={e} price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)
            :                  
            Products?.map( (e,index) => <Card store={()=>storageProducts(e)} ob={e} price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 

            }


        </div>
    );
}

export default Cards;


//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 