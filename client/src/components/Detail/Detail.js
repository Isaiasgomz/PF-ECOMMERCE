import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, clearDetail, createReview, deleteFavourite, getAllOrders, getFavourite, getProductDetail, getUserDetail } from "../../Actions";
import style from "./Detail.module.css";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Boxx from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { prom, validate } from "./detailFunctions";
import { createCont } from "../contexto/contextProvider";
import toast, { Toaster } from 'react-hot-toast';
import QandA from "./QandA/QandA";
import agotado from "../../imagenes/agotado.png"
import { useAuth0 } from "@auth0/auth0-react";

const StyledRating = withStyles({
  iconFilled: {
    color: '#bcf13f',
  },
  iconHover: {
    color: '#bcf13f',
  },
})(Rating);


function Detail(props) {
  const { stringLocalStorage } = useContext(createCont)
  const id = props.match.params?.id;
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetail)
  const reviews = useSelector(state => state.reviews)
  const user = useSelector(state => state.user)
  const userDetail = useSelector(state => state.userDetail)

  const questions = useSelector(state => state.questions)
  

  const {AllOrders} = useSelector(state => state)



  const [state, setState] = useState({
    qualification: '',
    review: '',
    ProductIdProduct: id,
    email: user.email
  })


  let orderandProdId = userDetail?.ShoppingCarts?.map(e => {
    return {
      idProduct: e.ProductIdProduct,
      pOrder: e.PurchaseOrderOrderN
    }
  })
  let validacion = false;

        for (let i = 0; i < orderandProdId?.length; i++) {
          for (let j = 0; j < AllOrders?.length; j++) {
            if(orderandProdId[i].pOrder===AllOrders[j].orderN && orderandProdId[i].idProduct===Number(id)){
              if(AllOrders[j].status === "Completado")
              validacion = true
            }
          }
        }
        

/*   for (let i = 0; i < orderandProdId?.length; i++) {
    for (let j = 0; j < AllOrders?.length; j++) {
      if (orderandProdId[i].pOrder === AllOrders[j].orderN && orderandProdId[i].idProduct === Number(id)) {
        if (AllOrders[j].status === "Completado")
          validacion = true
      }
    }
  }
 */


  const opinar = () => toast.success('Gracias por dejar tu opinion!');

  const [errors, setErrors] = useState({})
  /* promedio */
  let promedio = reviews?.map(e => e.qualification)
  let promResult = prom(promedio);


  /* button login */

  const {user: usuario} = useAuth0()

  /* tabs */

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }


  useEffect(() => {
    dispatch(getProductDetail(id))
    dispatch(getAllOrders());
    dispatch(getUserDetail(user?.email))
    return () => {
      dispatch(clearDetail())
    }
  }, [dispatch, id, user])
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
        email: user.email
      })
    }
    setErrors(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  // add to cart
  let x = [];
  const notify = () => toast.success('Agregado al carrito!', {
    style: {
      background: "rgb(67, 160, 71)",
      color: "white"
    }
  });
  const notifyInCart = () => toast('➡️ El producto ya está en el carrito!', {
    style: {
      background: "rgb(52,131,250)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });
  const addProductCartStorage = (o) => {
    let a = JSON.parse(localStorage.getItem(stringLocalStorage));


    if (a) {
      let filtered = a.filter((e) => e.idProduct === o.idProduct);
      if (filtered.length) {
        notifyInCart()
        return;
      }

      x = [...a, o];
      localStorage.setItem(stringLocalStorage, JSON.stringify(x));
      notify()
      return;
    }

    x = [...x, o];
    localStorage.setItem(stringLocalStorage, JSON.stringify(x));
  };

  // favoritos

  const Fav = useSelector(state=> state.Favourites)

  let mapFav = Fav.map(e=>e.idProduct)
  
  let filtered = mapFav.includes(product.idProduct)


  product.fav = filtered ? true : false

  let estilos = product.fav || filtered? style.favContainer : style.noFavContainer


  const notifyRemove=  ()=> toast.error("Removido de favoritos!",{style:{
    background:"red",
    color:"white"
}})

const notifyAddFav = () => toast.success('Agregado a favoritos!',{style:{
  background: "rgb(67, 160, 71)",
  color:"white"
}});

  const HandleChangeFav = async (obj,e)=>
  {
    e.preventDefault()
    console.log("asdnasodnasidoasndioasndioasndoasd40046051060---------")
  
    obj.fav = !obj.fav

    if(obj.fav === true){
      await dispatch(addFavourite(user?.email,obj.idProduct))
      notifyAddFav()
      dispatch(getFavourite(user?.email))
      return
    }
    
    if(obj.fav === false){
      await dispatch(deleteFavourite(user?.email,obj.idProduct))
      notifyRemove()
      dispatch(getFavourite(user?.email))

      return
    }
  }

  

  return (
    <div className={style.conteiner}>
    {console.log("asdasdasd-------------asdasdasdasd-adasdasdad",product)}
      <div className={style.product}>
        {product.stock <= 0 ?
          <div className={style.img}>
            <img className={style.imgAgot} src={agotado} alt="" />
          <img className={style.imgProduc} src={product.image} alt="" />
        </div>

          :


          <div className={style.img}>
            <img src={product.image} alt="" />
          </div>}
        <div className={style.infoConteiner}>
          <div className={style.nameConteiner}>
            <span className={style.titulo}>{product.productName}</span>
            <div className={style.ratinggeneralReview}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating name="read-only" value={promResult ? promResult : 0} size="large" readOnly />
              </Box>
            </div>
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
            {product.stock > 0 ? <div> <span><i className="fa-solid fa-check"></i></span> <span className={style.miniGarantia1}>  Stock disponible</span></div> : <div className={style.miniGarantia1Ago}>  <i className="fa-solid fa-xmark"></i> <span className={style.miniGarantia1}>     Stock Agotado</span></div>}
            <div >
              <span> <i className="fa-solid fa-truck"></i></span> <span className={style.miniGarantia} > Envio a todo el Pais</span>
            </div>
          </div>

          {usuario?(
            <div className={style.buttonConteiner}>
            <button disabled={product.stock<=0 || product.disabled===true}  onClick={() => addProductCartStorage(product)} className={style.button}  >Agregar al carrito</button>
            <div onClick={(e)=>HandleChangeFav(product,e)} className={estilos}>
            {estilos === style.favContainer ? (
                <i class="fa-solid fa-heart"></i>
              ) : (
                <i class="fa-regular fa-heart"></i>
              )}
          </div>
          </div>
          ):(
            <div >
            <button disabled={product.stock<=0 || product.disabled===true}  onClick={() => addProductCartStorage(product)} className={style.button}  >Agregar al carrito</button>

          </div>
          )}
        </div>
      </div>
      <br />
      <div className={style.bottomConteiner}>
        <div className={style.reviewConteiner}>
          <div className={style.blocTabs}>
            <div className={toggleState === 1 ? style.activeTabs : style.tabs} onClick={() => toggleTab(1)}>Descripcion</div>
            <div className={toggleState === 2 ? style.activeTabs : style.tabs} onClick={() => toggleTab(2)}>Opiniones</div>
            <div className={toggleState === 3 ? style.activeTabs : style.tabs} onClick={() => toggleTab(3)}>Preguntas</div>
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
                {reviews?.length === 0 && validacion === false ?
                  <div className={style.noNoConteiner}>
                    <div className={style.noExisteReviews}>
                      <span> No existen opiniones de este producto</span>
                    </div>
                    <div className={style.needLog}>
                      <span> Necesitas comprar este producto para dejar un comentario</span>
                      <hr />
                    </div>
                  </div> : <div>
                    {reviews?.length !== 0 && validacion === false ?
                      <div>
                        <div className={style.needLog}>
                          <span className={style.needLogText}>Necesitas comprar este producto para dejar un comentario</span>
                        </div>
                        <hr />{reviews?.map(e => {
                          return <div key={e.id} className={style.mapReviewConteiner}>
                            <div className={style.valoracion}>
                              <Box component="fieldset" mb={3} borderColor="transparent">
                                <StyledRating name="read-only" value={e.qualification} readOnly />
                              </Box>
                            </div>
                            <div className={style.comentario}>
                              <span>{e.review} </span>
                            </div>
                            <hr />
                          </div>
                        })}
                      </div> : <div>{
                        reviews?.length === 0 && validacion === true ?
                          <div className={style.noRsiUserConteiner}>
                            <div className={style.formConteiner}>
                              <Boxx
                                onSubmit={handleSubmit}
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <label>Vimos que compraste este producto, dejanos tu opinion!</label>
                                <hr />
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                  <StyledRating
                                    name="qualification"
                                    value={Number(state?.qualification)}
                                    onChange={handleChange}
                                  />
                                </Box>

                                {
                                  errors.qualification && (
                                    <p className={style.textError} >{errors.qualification}</p>)
                                }
                                <TextField
                                  fullWidth
                                  name='review'
                                  value={state?.review}
                                  onChange={handleChange}
                                  id="filled-textarea"
                                  label="Tu opinion"
                                  placeholder="Minimo 5 palabras"
                                  multiline
                                  variant="filled"
                                  error={errors.review?.split(" ").length > 1}
                                />
                                {
                                  errors.review && (
                                    <p className={style.textError} >{errors.review}</p>)
                                }
                                <button disabled={Object.keys(errors).length > 0 || state.review.length === 0} className={style.loginButton} type="submit" onClick={opinar}>Opinar!</button>
                              </Boxx>
                              <hr />
                            </div>
                            <div className={style.noExisteReviews}>
                              <span> No existen opiniones de este producto</span>
                            </div>
                          </div> : <div className={style.siRsiUserConteiner}>
                            <div className={style.formConteiner}>
                              <Boxx
                                onSubmit={handleSubmit}
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1 },
                                  width: 1000,
                                  maxWidth: '100%',
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <label>Vimos que compraste este producto, dejanos tu opinion!</label>
                                <hr />
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                  <StyledRating
                                    name="qualification"
                                    value={Number(state?.qualification)}
                                    onChange={handleChange}
                                  />
                                </Box>

                                {
                                  errors.qualification && (
                                    <p className={style.textError} >{errors.qualification}</p>)
                                }
                                <TextField
                                  fullWidth
                                  name='review'
                                  value={state?.review}
                                  onChange={handleChange}
                                  id="filled-textarea"
                                  label="Tu opinion"
                                  placeholder="Minimo 5 palabras"
                                  multiline
                                  variant="filled"
                                  error={errors.review?.split(" ").length > 1}
                                />

                                {
                                  errors.review && (
                                    <p className={style.textError} >{errors.review}</p>)
                                }
                                <button disabled={Object.keys(errors).length > 0 || state.review.length === 0} className={style.loginButton} type="submit" onClick={opinar}>Opinar!</button>
                              </Boxx>
                              <hr />
                            </div>
                            {reviews?.map(e => {
                              return <div key={e.id} className={style.mapReviewConteiner}>
                                <div className={style.valoracion}>
                                  <Box component="fieldset" mb={3} borderColor="transparent" >
                                    <StyledRating name="read-only" value={e.qualification} readOnly />
                                  </Box>
                                </div>
                                <div className={style.comentario}>
                                  <span>{e.review} </span>
                                </div>
                                <hr />
                              </div>
                            })}
                          </div>
                      }</div>}
                  </div>}
              </div>

            </div>
            <div className={toggleState === 3 ? style.activeContent : style.content}>

            <QandA
            idProduct={id}
            email={user.email}
            questions={questions}
            />

            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}

export default Detail