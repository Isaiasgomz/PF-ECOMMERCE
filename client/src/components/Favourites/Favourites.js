import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourite } from '../../Actions';
import { useAuth0 } from "@auth0/auth0-react";
import FavouriteCard from './FavouriteCard';
import style from "./Favourite.module.css"
import LoginButton from '../auth0/LogginButton/ButtonLogin';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Favourites = () => {

    const { user } = useAuth0();

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFavourite(user?.email))
    },[dispatch,user?.email])

    let products = useSelector(state=> state.AllProducts)

    let favs = useSelector(state=> state.Favourites)

    favs = favs.map(e=>e.idProduct)

    products = products.filter(e=> favs.includes(e.idProduct))

    if(user) {return (
        <div className={style.containerFav}>
          {/*   <div className={style.containerButton}>
            <Link to={"/home"}>

            <button className={style.buttonNoLoged}>Volver</button>
            </Link>
            </div> */}
            <div className={style.containerCardsFav}>

            

            <div className={style.containerTitle}>
            <h2 className={style.title}>Favoritos</h2>
            </div>

            <div className={style.containerCards}>
            {products.length ? products.map(e=>(
                <FavouriteCard key={e.idProduct} obj={e}/> 
            )):(
                <div className={style.containerNoProducts}>
                    <h3>No hay ningún producto aquí!</h3>
                </div>
            )}
            </div>
            </div>
        </div>
    )}else{
        return(
            <div className={style.containerNoLoged}>
                <div className={style.containerInfoNoLoged}>
                    <div className={style.containerTitleNoLoged}>

                    <h2>No estás registrado!</h2>
                    </div>
                    <div className={style.containerButtonNoLoged}>
                    <Link to={"/home"}>

                    <button className={style.buttonNoLoged}>Volver a la tienda</button>
                    </Link>
                    </div>
                </div>
                <Toaster
      position="bottom-left"
      reverseOrder={false}
       />
            </div>
        )
    };
}

export default Favourites;
