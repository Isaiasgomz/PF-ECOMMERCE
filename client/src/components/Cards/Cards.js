import React from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";


const Cards = (props) => {
    
    const { Products } = useSelector(state => state)
    const {productsByName} = useSelector(state => state)
    
    
    let arr = []
     
     if(props.filter.category){
     if(Products.length){arr = Products.filter(e => e.category.toLowerCase().includes(props.filter.category.toLowerCase())) ; };
    }

 
    return (
        <div>
            { 
            !!productsByName?.length? productsByName?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 
            :
            !!arr.length
            ? 
            arr?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)
            :                  
            Products?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 

            }


        </div>
    );
}

export default Cards;


//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 