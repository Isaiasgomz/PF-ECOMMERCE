import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postNorder, postShoppingCart } from '../../Actions';
// npm i react-paypal-button-v2  react v-- 17
import { createCont } from "../contexto/contextProvider";

const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
 
  const history = useHistory()
  const { stringLocalStorage } = useContext(createCont)


  const paypalOtions = {
    clientId: 'AffjftSi14wqkpaYtcSOkUIOqN3cmYxIW3-51TX84jsgecsOs4lvssCHtzi08_6axU8T1_9_f6CegucW',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }
  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = Array.from(y);


  const total = productsFromLocalStorage.reduce((acc, o) => {
    let cant = o.quantity ? o.quantity : 1;
    acc += o.price * cant;
    return acc;
  }, 0);
 
  let cartDB = y.map(e => {
    
    return {
      "UserEmail": user.email,
      "ProductIdProduct": e.idProduct,
      "quantity": e.quantity ? e.quantity : 1,
      "price": e.price
    }
  })
console.log("cariito antes del paynment", cartDB);
  const handlePaymentSuccess = async (data) => {

    await dispatch(postNorder(user.email, data.orderID, total))

    let cartDBfinal = cartDB.map(e => {
      return {
        "UserEmail": e.UserEmail,
        "ProductIdProduct": e.ProductIdProduct,
        "quantity": e.quantity ? e.quantity : 1,
        "price": e.price,
        "PurchaseOrderOrderN": data.orderID
      }
    })
    console.log("cariito despues del paynment", cartDBfinal);
    dispatch(postShoppingCart(cartDBfinal))

   

    alert('Payment completed successfully')
    history.push('/payment/success')
  }


  const handleSumTotal = () => {

    const sum = 1560.00
    return sum;
  }



  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3><br />

        <br /><div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onApprove={data => handlePaymentSuccess(data)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;