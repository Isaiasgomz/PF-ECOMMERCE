import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../../Actions";
import CardDetail from "./CardDetail";
import style from "./CardDetail.module.css";

const UserOrderDetail = (props) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const nOrder = props.match.params?.PurchaseOrderOrderN;

  useEffect(() => {
    dispatch(getShoppingCart(nOrder));
  }, [dispatch, nOrder]);

  const { shoppingCart } = useSelector((state) => state);

  //Cantidad de productos
  const quantity = shoppingCart
    .map((e) => e.quantity)
    .reduce((a, b) => a + b, 0);

  //Precio total
  const totalPrice = shoppingCart
    .map((e) => e.price)
    .reduce((a, b) => a + b, 0);

  //Productos
  const products = shoppingCart.map((e) => e.Product);

  //Cantidad individual
  const individualQ = (quantity) => {
    // console.log("qqqqqq", quantity)
    const ind = shoppingCart.quantity;
    return ind;
  };

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    return (
      <div className={style.loadingCont} >
        <h2 className={style.loading}>Loading...</h2>
      </div>
    );
  } else if (loading === false) {
    return (
      <div className={style.containerCart}>
        <div className={style.productos}>
        <Link to="/myOrders">
          <button className={style.button}>Volver a mis ordenes</button>
        </Link>
        </div>
        <div className={style.containerCart2}>
          <div className={style.productos}>
            <h4>N° orden: {shoppingCart[0].PurchaseOrderOrderN} </h4>
          </div>
          <div className={style.productos}>
            <h5>Productos: {quantity} </h5>
          </div>
          <div className={style.cards}>
            {products?.map((e, index) => (
              <CardDetail
                image={e.image}
                productName={e.productName}
                quantity={e.quantity}
                price={e.price}
                key={index}
              />
            ))}
          </div>
          <div className={style.productos2}>
            <h4>Precio total: ${totalPrice} </h4>
          </div>
        </div>
      </div>
    );
  }
};

export default UserOrderDetail;
