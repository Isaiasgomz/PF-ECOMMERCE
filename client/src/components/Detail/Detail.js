import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../Actions";

function Detail(props) {
  const id = props.match.params?.id;
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetail)
  const reviews = useSelector(state => state.reviews)
  const [state, setState] = useState({
    qualification: '',
    review: 0
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
      review: 0
  })
}
/* handle de select de valoracion */
const handleChange = (e) => {
  setError(validate({ ...state, [e.target.name]: e.target.value }))
  if (e.target.name === 'difficulty') {
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
                <select name="qualification" value={state.qualification} onChange={handleChange}></select>
              </form>
            </div> : <div>
              <p>Valoracion: {reviews.qualification} </p>
              <p>Comentario: {reviews.review} </p>
              <p>Usuario: {reviews.email}  </p>
            </div>}

        </div>
      </div>

    </div>
  )
}

export default Detail