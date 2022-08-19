import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetail, createReview, getProductDetail, setCart } from "../../Actions";
import style from "./Detail.module.css";
import Divider from '@mui/material/Divider';
import { useAuth0, User } from "@auth0/auth0-react";

function Detail(props) {
  const id = props.match.params?.id;
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetail)
  const reviews = useSelector(state => state.reviews)
  const user = useSelector(state => state.user)
  const [state, setState] = useState({
    qualification: '',
    review: '',
    ProductIdProduct: id,
    email: user.email ? user.email : ''
  })

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }


  /* submit del form */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(state))
    setState({
      qualification: '',
      review: '',
      ProductIdProduct: id,
      email: ""
    })
  }
  /* handle de select de valoracion */
  const handleChange = (e) => {
    if (e.target.name === 'qualification') {
      setState({
        ...state,
        [e.target.name]: parseInt(e.target.value)
      })
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        email:user.email
      })
    }
  }
  /* agregar al carrito */
  let x = [];
  const addProductCartStorage = (o) => {
    let a = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"));
    

    if (a) {
      let filtered = a.filter((e) => e.idProduct === o.idProduct);
      if (filtered.length) return;
      x = [...a, o];
      console.log(x);
      localStorage.setItem("ProductCartLocalStoragev3", JSON.stringify(x));
      console.log(x);
      return;
    }

    x = [...x, o];
    localStorage.setItem("ProductCartLocalStoragev3", JSON.stringify(x));
    console.log(x);
  };
  useEffect(() => {
    dispatch(getProductDetail(id))
    return () => {
      dispatch(setCart(x));
      dispatch(clearDetail())
    }
  }, [dispatch, id])
  return (
    <div className={style.conteiner}>

      <div className={style.product}>

        <div className={style.img}>
          <img src={product.image} alt="" />
        </div>

        <div className={style.infoConteiner}>
          <div className={style.nameConteiner}>
            <span className={style.titulo}>{product.productName}</span>
            <div>
              <span>Categoria: </span> <span>{product.category}</span>
            </div>
          </div>

          <div className={style.priceConteiner}>
            <div className={style.price}>
              <span>$ {product.price} </span>
              <span className={style.textPrice}>Precio de lista</span>
            </div>
            <div className={style.price}>
              <span>$ {Math.round(product.price / 12)}.99</span>
              <span className={style.textPrice}>12 cuotas sin interes </span>

            </div>
          </div>
          <div className={style.garantiaConteiner}>
            <div>
              <span><i className="fa-solid fa-shield-halved"></i> </span> <span className={style.miniGarantia2}>Garantia - 12 meses</span>
            </div>
            {product.stock > 0 ? <div> <span><i className="fa-solid fa-check"></i></span> <span className={style.miniGarantia1}>  Stock disponible</span></div> : <span>Stock agotado</span>}
            <div >
              <span> <i className="fa-solid fa-truck"></i></span> <span className={style.miniGarantia} > Envio a todo el Pais</span>
            </div>
          </div>
          <div className={style.buttonConteiner}>
            <button onClick={() => addProductCartStorage(product)} className={style.button}>Agregar al carrito</button>
          </div>
        </div>
      </div>
      <br />
      <div className={style.reviewConteiner}>

        <div className={style.blocTabs}>
          <div className={toggleState === 1 ? style.activeTabs : style.tabs} onClick={() => toggleTab(1)}>Descripcion</div>
          <div className={toggleState === 2 ? style.activeTabs : style.tabs} onClick={() => toggleTab(2)}>Opiniones</div>
        </div>

        <div className={style.contentTabs}>
          <div className={toggleState === 1 ? style.activeContent : style.content}>
            <div className={style.descriptionConteiner}>
              <div className={style.title}>MARCA</div>
              <div className={style.txt}>{product.brand}</div>
              <div className={style.title}>TEXTO</div>
              <div className={style.txt}>{product.description}</div>
              <span>{product.qualification}</span>
            </div>
          </div>
          <div className={toggleState === 2 ? style.activeContent : style.content}>
            <div className={style.reviewsConteiner}>
              {reviews?.length === 0 ?
                <div>
                  'No existen reviews aun'
                  <form onSubmit={handleSubmit}>
                    <label> Valoracion:</label>
                    <select name="qualification" value={state?.qualification} onChange={handleChange}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <label> Comentario:</label>
                    <input type='textarea' name='review' value={state?.review} onChange={handleChange} />
                  </form>
                </div> : <div>
                  {reviews?.map(e => {
                    return <div>
                      <p>Valoracion: {e.qualification} </p>
                      <p>Comentario: {e.review} </p>
                      <p>Usuario: {e.email}  </p>
                    </div>
                  })}
                   {Object.keys(user).length > 0 ?
                    <div>
                      <form onSubmit={handleSubmit}>
                        <label> Valoracion:</label>
                        <select name="qualification" value={state?.qualification} onChange={handleChange}>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <label> Comentario:</label>
                        <input type='textarea' name='review' value={state?.review} onChange={handleChange} />
                      </form>
                    </div> : <p> Necesitas loguearte para dejar comentario</p>
                  }
                </div>}

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Detail