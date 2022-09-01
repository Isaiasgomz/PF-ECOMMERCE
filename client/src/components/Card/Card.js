import React, { useState } from 'react'
import style from "./Card.module.css"
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

import agotado from "../../imagenes/agotado.png"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, deleteFavourite, getFavourite } from '../../Actions';
import { useAuth0 } from "@auth0/auth0-react";


function Card({ name, price, img, calification, localStor, ob, id, stock, notify, notifyAddFav, notifyRemove }) {


  const [flagFav, setFlagFav] = useState(false)

  const dispatch = useDispatch()

  const { user } = useAuth0();

  const Fav = useSelector(state=> state.Favourites)

  let mapFav = Fav.map(e=>e.idProduct)
  
  let filtered = mapFav.includes(ob.idProduct)


  ob.fav = filtered ? true : false

  let estilos = ob.fav || filtered? style.favContainer : style.noFavContainer




  const HandleChangeFav = async (obj,e)=>
  {
    e.preventDefault()

  
    obj.fav = !obj.fav

    if(obj.fav === true){
      await dispatch(addFavourite(user?.email,ob.idProduct))
      notifyAddFav()
      dispatch(getFavourite(user?.email))
      console.log("fav,desde la func",Fav)
      console.log("------------------desdelafunc",filtered)
      return
    }
    
    if(obj.fav === false){
      await dispatch(deleteFavourite(user?.email,ob.idProduct))
      notifyRemove()
      dispatch(getFavourite(user?.email))
      console.log("fav,desde la func",Fav)
      console.log("------------------desdelafunc",filtered)
      return
    }
  }
  

  return (
    <div className={style.containerCard}>
    {console.log("ad12321312",ob)}
    {console.log("acaaaaaaaaaaaaa favvvvv",Fav)}
    {console.log("------------------",filtered)}
      {stock <= 0 ? <div className={style.containerAgotado}>
        <div className={style.contAgotado}>
          <img className={style.contAgotado} src={agotado} alt="agotado" />
        </div>
        <Link to={`/detail/${id}`}>
          <div className={style.containerImgAgot}>
            <img className={style.imgAgot} src={img} alt={name} />
          </div>
        </Link>
      </div>
        :
          <Link to={`/detail/${id}`}>
          <div className={style.containerImg}>
            <img className={style.img} src={img} alt={name} />
          </div>
        </Link>}

      {/* {reduction !==0? <div>


      </div>
        :
        <div>

      </div>           
      } */}
        
      <div className={style.containerInfo}>
        <div className={style.containerTitle}>
          <Link to={`/detail/${id}`}> <span>{name}</span></Link>
        </div>
        <div className={style.containerPriceCart}>
          <span>${price}</span>
          {/* <Rating
            name="half-rating"
            size="small"
            defaultValue={Number(calification)}
            precision={0.5}
            readOnly
          /> */}
          {user && <div onClick={(e)=>HandleChangeFav(ob,e)} className={estilos}>
            <i class="fa-solid fa-heart"></i>
          </div>}

          {stock <= 0 ?
            <div className={style.buttonCarritoAgotado}> <span> <i className="fa-solid fa-cart-plus"></i> </span> </div> :
            <div className={style.buttonCarrito} onClick={() => localStor(ob)}><i className="fa-solid fa-cart-plus"></i></div>}

          {/* <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div> */}

        </div>
      </div>

    </div>
  )
}

export default Card