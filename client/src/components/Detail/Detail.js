import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../Actions";

function Detail(props) {
  const id = props.match.params?.id;
  const dispatch = useDispatch();
  const product = useSelector(state=>state.productDetail)
  const reviews = useSelector(state=>state.reviews)

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch,id])

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
                    <br />
                </div>

                <div >
                    <h2 className="h22">Reviews</h2>
                    {reviews.length ===0? 'No existe reviews aun': <div>
                        <p>Valoracion: {reviews.qualification} </p>
                        <p>Comentario: {reviews.review} </p>
                        <p>Usuario: {reviews.email}  </p>
                         </div> }
                    
                </div>
            </div>

    </div>
  )
}

export default Detail