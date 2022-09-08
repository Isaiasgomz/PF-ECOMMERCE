import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShoppingCart } from "../../Actions";
import CardDetail from "./CardDetail";
import style from "./CardDetail.module.css";
import loadingLogo from "../../imagenes/loading.png";

const UserOrderDetail = (props) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const nOrder = useParams().PurchaseOrderOrderN;

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
  const products = shoppingCart.map((e) => {
    e.Product.quantity = e.quantity;
    return e.Product;
  });

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          <img className={style.img} src={loadingLogo} />
        </div>
      </div>
    );
  } else if (loading === false) {
    return (
      <div className={style.containerCart}>
        <div className={style.productos4}>
          <Link to="/myOrders">
            <button className={style.button}>Volver a mis órdenes</button>
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
                obj={e}
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
