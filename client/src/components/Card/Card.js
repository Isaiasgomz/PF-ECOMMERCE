import React, { useState } from "react";
import style from "./Card.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

import agotado from "../../imagenes/agotado.png";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, deleteFavourite, getFavourite } from "../../Actions";
import { useAuth0 } from "@auth0/auth0-react";

function Card({
  name,
  price,
  img,
  calification,
  localStor,
  ob,
  id,
  stock,
  notify,
  notifyAddFav,
  notifyRemove,
  reduction,
  reducedAmount,
}) {
  const [flagFav, setFlagFav] = useState(false);

  const dispatch = useDispatch();

  const [hidden , setHidden] = useState(true)

  const { user } = useAuth0();

  const Fav = useSelector((state) => state.Favourites);

  let mapFav = Fav.map((e) => e.idProduct);

  let filtered = mapFav.includes(ob.idProduct);

  ob.fav = filtered ? true : false;

  console.log()

  let estilos = ob.fav || filtered ? style.favContainer : style.noFavContainer;

  const HandleChangeFav = async (obj, e) => {
    e.preventDefault();

    obj.fav = !obj.fav;

    if (obj.fav === true) {
      await dispatch(addFavourite(user?.email, ob.idProduct));
      notifyAddFav();
      dispatch(getFavourite(user?.email));
      setHidden(false)
      return;
    }

    if (obj.fav === false) {
      await dispatch(deleteFavourite(user?.email, ob.idProduct));
      notifyRemove();
      dispatch(getFavourite(user?.email));
    
      return;
    }
  };

  


  const hacerHiddenTrue = ()  =>{
    setHidden(false)
  }

  const hacerHiddenFalse = ()  =>{
    if (ob.fav === true) {return}
    else{ setHidden(true)}
  }


  const beforeDiscountPrice = price + reducedAmount;


  return (
    <div className={style.containerCard} onMouseEnter={hacerHiddenTrue} onMouseLeave={hacerHiddenFalse} >
     
      <div className={style.superiorPart}>

        {reduction !== 0 ?
          <div className={style.containerDescuento}>
            <div className={style.reduction}>
              <span className={style.porcentaje}>-{reduction}%</span>
            </div>
          </div>
          :
          null
        }

        {stock <= 0 ? (
          <div >
            <div className={style.contAgotado}>
              <img className={style.contAgotado} src={agotado} alt="agotado" />
            </div>
            <Link to={`/detail/${id}`}>
              <div className={style.containerImg}>
                <img className={style.imgAgot} src={img} alt={name} />
              </div>
            </Link>
          </div>

        ) :
          <Link to={`/detail/${id}`}>
            <div className={style.containerImg}>
              <img className={style.img} src={img} alt={name} />
            </div>

          </Link>}

          <div className={style.favConteiner}>
          {user && (
            <div hidden={ ob.fav === true? false : hidden} onClick={(e) => HandleChangeFav(ob, e)} className={estilos}>
              {estilos === style.favContainer ? (
                <i class="fa-solid fa-heart"></i>
              ) : (
                <i class="fa-regular fa-heart"></i>
              )}
            </div>
          )}
          </div>


      </div>


      <div className={style.containerInfo}>
        <div className={style.containerTitle}>
          <Link to={`/detail/${id}`}>
            {" "}
            <span>{name}</span>
          </Link>
        </div>

        <div className={style.containerPriceCart}>

          <span className={style.spanPrice}>${price}</span>
          
        


          {stock <= 0 ? (
            <div className={style.buttonCarritoAgotado}>
              {" "}
              <span>
                {" "}
                <i className="fa-solid fa-cart-plus"></i>{" "}
              </span>{" "}
            </div>
          ) : (
            <div className={style.buttonCarrito} onClick={() => localStor(ob)}>
              <i className="fa-solid fa-cart-plus"></i>
            </div>
          )}
          
          
        </div>
      </div>
    </div>
  );
}

export default Card;
