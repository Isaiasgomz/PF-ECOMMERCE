import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
                    <img className="imgdet" src={product.image} alt="" />
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                    <p>{product.category} Km2</p>
                    <p>{product.stock}</p>
                    <p>{product.idProduct}</p>
                    <p>{product.qualification}</p>
                    <p>{product.brand}</p>
                    <br />
                </div>

                <div >
                    <h2 className="h22">Reviews</h2>
                    {/* <div className="actdet">
                        {act.length > 0 ? act?.map(e => {
                            return <div className="eachAct" key={e.id}>
                                <h3>Name: {e.name}</h3>
                                <p>Difficulty: {e.difficulty}</p>
                                <p>Duration: {e.duration}</p>
                                <p>Season to do: {e.season}</p>
                            </div>
                        }) : <div className="notact">
                            This Country does not have any activities yet
                            <p>Click here to add one</p> <NavLink exact to='/CreateActivity' > <button className="btn-nice-act-a"> Create Activity</button></NavLink>
                        </div>}
                    </div> */}
                </div>
            </div>

    </div>
  )
}

export default Detail