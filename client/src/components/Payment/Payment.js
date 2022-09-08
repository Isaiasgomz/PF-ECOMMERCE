import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { postShoppingCart ,postNorder, modifyStock} from '../../Actions';
import './Payment.css'

// npm i react-paypal-button-v2  react v-- 17
import { createCont } from "../contexto/contextProvider";
import dotenv from "dotenv";

dotenv.config()


const {
  REACT_APP_PAYPAL
  } = process.env;
  


const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const cart = useSelector((state) => state.cart); //TIENE QUE SER UN CARRITO FIJO
  const order = useSelector((state) => state.order);
  const history = useHistory();

  // console.log(user);
  // console.log(cart);

  const { stringLocalStorage } = useContext(createCont);

  const paypalOtions = {
    clientId: REACT_APP_PAYPAL,
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };
  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = Array.from(y);

  const total = productsFromLocalStorage.reduce((acc, o) => {
    let cant = o.quantity ? o.quantity : 1;
    acc += o.price * cant;
    return acc;
  }, 0);





  let toModifyStock= y.map(e => {
    return {
      
      "idProduct": e.idProduct,
      "stock":e.quantity ? (e.stock-e.quantity)  :(e.stock-1),
    }
  })
  // console.log("array para modif stock: ",toModifyStock)
  let cartDB = y.map(e => {

    return {
      UserEmail: user.email,
      ProductIdProduct: e.idProduct,
      quantity: e.quantity ? e.quantity : 1,
      price: e.price,
    };
  });
  // console.log("cariito antes del paynment", cartDB);
  const handlePaymentSuccess = async (data) => {
    dispatch(postNorder(user.email, data.orderID, total));

    let cartDBfinal = cartDB.map((e) => {
      return {
        UserEmail: e.UserEmail,
        ProductIdProduct: e.ProductIdProduct,
        quantity: e.quantity ? e.quantity : 1,
        price: e.price,
        PurchaseOrderOrderN: data.orderID,
      };
    });
    // console.log("cariito despues del paynment", cartDBfinal);

    dispatch(postShoppingCart(cartDBfinal))
    /* [{idProduct:idProduct,stock:stock}] */

    dispatch(modifyStock(toModifyStock))
    localStorage.removeItem(stringLocalStorage)
    localStorage.setItem(stringLocalStorage,JSON.stringify([]))


    history.push('/payment/success')
  }



  const handleSumTotal = () => {
    const sum = 1560.0;
    return sum;
  };

  return (
    <div className="pay">
      <h3>Resumen del pedido:</h3>
      <div className="Payment">
        <div className="Payment-content">
          <br />

          <br />
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={total}
              onApprove={(data) => handlePaymentSuccess(data)}
              onPaymentStart={() => console.log("Start Payment")}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Payment;
