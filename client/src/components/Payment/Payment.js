import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNorder, postShoppingCart, postNorder } from "../../Actions";
import './Payment.css'
// npm i react-paypal-button-v2  react v-- 17
import { createCont } from "../contexto/contextProvider";

const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const cart = useSelector((state) => state.cart); //TIENE QUE SER UN CARRITO FIJO
  const order = useSelector((state) => state.order);
  const history = useHistory();

  console.log(user);
  console.log(cart);

  const { stringLocalStorage } = useContext(createCont);

  const paypalOtions = {
    clientId:
      "AffjftSi14wqkpaYtcSOkUIOqN3cmYxIW3-51TX84jsgecsOs4lvssCHtzi08_6axU8T1_9_f6CegucW",
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

  //  dispatch(getNorder(user.email))

  // const orderCompleted = order.map((item) => {
  //   return {

  //   }
  // })
  // dispatch(postShoppingCart())

  let cartDB = y.map((e) => {
    return {
      UserEmail: user.email,
      ProductIdProduct: e.idProduct,
      quantity: e.quantity ? e.quantity : 1,
      price: e.price,
    };
  });
  console.log("cariito antes del paynment", cartDB);
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
    console.log("cariito despues del paynment", cartDBfinal);
    dispatch(postShoppingCart(cartDBfinal));

    history.push("/payment/success");
  };

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
              amount={handleSumTotal()}
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
