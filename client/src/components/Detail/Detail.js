import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetail, createReview, getProductDetail, setCart } from "../../Actions";
import style from "./Detail.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Boxx from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

const ariaLabel = { 'aria-label': 'description' };

const StyledRating = withStyles({
  iconFilled: {
    color: '#bcf13f',
  },
  iconHover: {
    color: '#bcf13f',
  },
})(Rating);

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
  /* button login */
  const { loginWithRedirect } = useAuth0()
  /* tabs */
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
        email: user.email
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
            <div className={style.ratinggeneralReview}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating name="read-only" value={3} size="large" readOnly />
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
      <div className={style.bottomConteiner}>
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
                {reviews?.length === 0 && Object.keys(user).length === 0 ?
                  <div className={style.noNoConteiner}>
                    <div className={style.noExisteReviews}>
                      <span> No existen opiniones de este producto</span>
                    </div>
                    <div className={style.needLog}>
                      <span> Necesitas loguearte para dejar comentario</span>
                      <hr />
                      <button className={style.loginButton}> Login</button>
                    </div>
                  </div> : <div>
                    {reviews?.length !== 0 && Object.keys(user).length === 0 ?
                      <div>
                        <div className={style.needLog}>
                          <span className={style.needLogText}> Necesitas loguearte para dejar comentario</span>
                          <button className={style.loginButton} onClick={() => loginWithRedirect()}>Log In</button>
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
                        reviews?.length === 0 && Object.keys(user).length !== 0 ?
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
                                  <Rating
                                    name="qualification"
                                    value={state?.qualification}
                                    onChange={handleChange}
                                  />
                                </Box>
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
                                />
                                <button className={style.loginButton} type="submit">Opinar!</button>
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
                                    value={state?.qualification}
                                    onChange={handleChange}
                                  />
                                </Box>
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
                                />
                                <button className={style.loginButton} type="submit">Opinar!</button>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail