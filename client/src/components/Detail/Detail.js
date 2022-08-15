import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReview, getProductDetail } from "../../Actions";

function Detail(props) {
  const id = props.match.params?.id;
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetail)
  const reviews = useSelector(state => state.reviews)
  const [state, setState] = useState({
    qualification: '',
    review: '',
    ProductIdProduct: id,
    email: ""
  })
  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])
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
        [e.target.name]: e.target.value
      })
    }
  }
  return (
    <div>
      <div className="conteiner-act">
        <div className="countrdetail">
          <h1>product details</h1>
          <h2>{product.name}</h2>
          <h2>{product.productName}</h2>
          <p>{product.brand}</p>
          <img className="imgdet" src={product.image} alt="" />
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>{product.stock}</p>
          <p>{product.idProduct}</p>
          <p>{product.qualification}</p>
        </div>
        <br />
        <div >
          <h2 className="h22">Reviews</h2>
          {reviews.length === 0 ?
            <div>
              'No existen reviews aun'
              <form onSubmit={handleSubmit}>
                <label> Valoracion:</label>
                <select name="qualification" value={state.qualification} onChange={handleChange}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label> Comentario:</label>
                <input type='textarea' name='review' value={state.review} onChange={handleChange} />
              </form>
            </div> : <div>
              {reviews?.map(e => {
                return <div>
                  <p>Valoracion: {e.qualification} </p>
                  <p>Comentario: {e.review} </p>
                  <p>Usuario: {e.email}  </p>
                </div>
              })}

            </div>}

        </div>
      </div>

    </div>
  )
}

export default Detail