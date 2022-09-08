import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import style from "./ShoppingCar.module.css";
import swal from "sweetalert";
import { createCont } from "../contexto/contextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


function ShoppingCar() {



  const { stringLocalStorage } = useContext(createCont)

  const { user } = useAuth0();

  const {user: usuariodb} = useSelector(s => s)


  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = y ? Array.from(y) : "No hay productos"
  y = y ? productsFromLocalStorage.reduce((acc, o) => {
    let cant = o.quantity ? o.quantity : 1
    acc += o.price * cant
    return acc
  }, 0) : 0
  const [price, setPrice] = useState(y);
  const returnPrice = () => {
    let x = JSON.parse(localStorage.getItem(stringLocalStorage));

    if (!x.length) setPrice(0)
    let a = x.reduce((acc, o) => {
      let cant = o.quantity ? o.quantity : 1
      acc += o.price * cant
      return acc
    }, 0)
    setPrice(a)
  }

  const deleteProduct = (o) => {
    swal({
      title: "Estás seguro?",
      text: "No podras recuperar el producto seleccionado.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {

        productsFromLocalStorage = productsFromLocalStorage.filter((e) => e.idProduct !== o.idProduct)

        localStorage.setItem(stringLocalStorage, JSON.stringify(productsFromLocalStorage));

        returnPrice()
        swal("Poof! El producto ha sido eliminado correctamente!", {
          icon: "success",
        });
      } else {
        swal("El producto se ha salvado!");
      }
    });
  };

  const handleClickNoVerified = (e) => {
    e.preventDefault()

    if(user && usuariodb.status === "false"){
      swal("Su cuenta está deshabilitada!", "Escríbenos a pullrequest.ecommerce@gmail.com", "error");
      return
    }

    if (user && user.email_verified === false) {
      swal("No estás verificado!", "Verificación enviada a su casilla de correo", "error");
      return
    }


    if (!user) {
      swal("No estas logeado!", "Para realizar una compra debes de estar logeado", "error");
      return
    }

    if (!productsFromLocalStorage.length) {
      swal("Carrito vacío!", "No hay productos en el carrito", "error");
      return
    }

  }


  const clearCart = (e) => {
    e.preventDefault()
    swal({
      title: "Estás seguro?",
      text: "Eliminaras todos los productos del carrito.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem(stringLocalStorage)
        localStorage.setItem(stringLocalStorage, JSON.stringify([]))
        setPrice(0)


        swal("Poof! El carrito se ha sido vaciado correctamente!", {
          icon: "success",
        });
      } else {
        swal("PULL REQUEST", "El carrito se ha salvado!", "success");
      }
    });


  }


  return (
    <div className={style.containerCart}>

      <div className={style.containerSup}>
        <div className={style.containerButtons}>
          <Link to={"/home"}>
            <button className={style.button2}><span className={style.textButton}>Volver a la tienda</span> <span className={style.iconButton}><i className="fa-solid fa-rotate-left"></i></span></button>
          </Link>

          <div>
            {user && usuariodb.status !== "false" && user.email_verified && productsFromLocalStorage.length ? (
              <Link to="/resumeOrder">
                <button className={style.button}><span className={style.textButton}>Resumen de la orden</span> <span className={style.iconButton}><i className="fa-solid fa-check"></i></span></button>
              </Link>
            ) : (
              <button
                className={style.button}
                onClick={(e) => handleClickNoVerified(e)}
              >
                <span className={style.textButton}>Resumen de la orden</span> <span className={style.iconButton}><i className="fa-solid fa-check"></i></span>
              </button>
            )}
          </div>
          <div>
            {
              productsFromLocalStorage.length &&
                Array.isArray(productsFromLocalStorage) ?
                <div><button className={style.button1} onClick={e => clearCart(e)}><span className={style.textButton}>Vaciar todo el carrito</span> <span className={style.iconButton}><i className="fa-solid fa-trash-can"></i></span></button></div> :
                 <div><button className={style.button1} disabled={true} onClick={e => clearCart(e)}><span className={style.textButton}>Vaciar todo el carrito</span> <span className={style.iconButton}><i className="fa-solid fa-trash-can"></i></span></button></div>
            }
          </div>
        </div>


        <div className={style.containerInfo}>

          <div className={style.containerPrice1}>
            <span>Mi orden</span>
          </div>

          <div className={style.containerPrice}>
            <span>Precio total: ${price}</span>
          </div>
        </div>
      </div>


      <div className={style.cards}>
        {productsFromLocalStorage.length &&
          Array.isArray(productsFromLocalStorage) ? (
          productsFromLocalStorage.map((e) => (
            <CardCart
              key={e.idProduct}
              returnPrice={returnPrice}
              deleteP={deleteProduct}
              obj={e}
            />
          ))
        ) : (
          <h2>No hay productos!</h2>
        )}
      </div>

    </div>
  );
}


export default ShoppingCar;
