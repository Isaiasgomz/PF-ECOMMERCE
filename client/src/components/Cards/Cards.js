import React from 'react';
import Card from '../Card/Card';
import { useSelector } from "react-redux";

const Cards = (props) => {

    const { Products } = useSelector(state => state)


    return (
        <div>
            {Products?.map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)}
        </div>
    );
}

export default Cards;
