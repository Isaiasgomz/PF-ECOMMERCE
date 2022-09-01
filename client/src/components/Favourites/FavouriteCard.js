import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite, getFavourite } from "../../Actions";
import { createCont } from "../contexto/contextProvider";
import style from "./FavouriteCard.module.css";

const FavouriteCard = ({ obj }) => {

    const dispatch = useDispatch()

    const { stringLocalStorage  } =useContext(createCont);

    const { user } = useAuth0();

    const notifyRemove=  ()=> toast.error("Removido de favoritos!",{style:{
        background:"red",
        color:"white"
    }})
    
    const deleteProduct =  async(i)=>{
        await dispatch(deleteFavourite(user?.email,i.idProduct))
        notifyRemove()
        dispatch(getFavourite(user?.email))
    }



    
    
    const notify = () => toast.success('Agregado al carrito!',{style:{
        background: "rgb(67, 160, 71)",
        color:"white"
    }});
    const notifyInCart = () => toast('➡️ El producto ya está en el carrito!', {
        style:{
            background: "rgb(52,131,250)",
            color: "white",
            display: "flex",
            alignItems:"center",
            justifyContent: "center"
        }
    });
    let x = [];
    const addProductCartStorage = (o) => {
        let fromLocalStorage = JSON.parse(localStorage.getItem(stringLocalStorage));
    
        if (fromLocalStorage) {
          let filtered = fromLocalStorage.filter(
            (e) => e.idProduct === o.idProduct
          );
          if (filtered.length) {
            notifyInCart()
            return
          };
    
          x = [...fromLocalStorage, o];
          console.log(x);
          localStorage.setItem(stringLocalStorage, JSON.stringify(x));
          notify()
          console.log(x);
          return;
        }
        x = [...x, o];
        localStorage.setItem(stringLocalStorage, JSON.stringify(x));
        console.log(x);
      };


  return (
    <div className={style.containerCard}>
      
      <div className={style.containerImg}>
        <div className={style.SupportContainerImg}>
          <img src={obj.image} alt={obj.productName} />
        </div>
      </div>
      <div className={style.containerInfo2}>
        <div className={style.containerName}>
          <p>{obj.productName}</p>
        </div>
        <div className={style.containerIcons}>
        <div onClick={()=>deleteProduct(obj)} className={style.containerHeart}>

        <i class="fa-solid fa-heart"></i>
        </div>
        <div onClick={()=>addProductCartStorage(obj)}  className={style.containerCart}>

        <i className="fa-solid fa-cart-plus"></i>
        </div>
        </div>
        <div className={style.containerCant}>
          <p>${obj.price}</p>
        </div>
      </div>
      <Toaster
      position="bottom-left"
      reverseOrder={false}
       />
    </div>
  );
};

export default FavouriteCard;
