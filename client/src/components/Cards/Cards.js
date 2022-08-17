import React from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";
import { sortProductByPrice } from '../../Actions';


const Cards = (props) => {
    
    const { Products } = useSelector(state => state)
    const {productsByName} = useSelector(state => state)
    const dispatch = useDispatch()
    
    

 
    return (
        <div>
            {Products?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) }
        </div>
    );
}

export default Cards;


//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>) 