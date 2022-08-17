import React, { useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";
import { sortProductByPrice } from '../../Actions';


const Cards = (props) => {
    
    const { Products } = useSelector(state => state)
    const {productsByName} = useSelector(state => state)
    const dispatch = useDispatch()
    

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

    

 
    return (
        <div>

            {Products?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) }

        </div>
    );
}

export default Cards;


//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 