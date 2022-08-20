import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postNorder, postShoppingCart } from '../../Actions';
// npm i react-paypal-button-v2  react v-- 17

const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart) //TIENE QUE SER UN CARRITO FIJO
  const history = useHistory()
 
  

  const paypalOtions = {
    clientId: 'AffjftSi14wqkpaYtcSOkUIOqN3cmYxIW3-51TX84jsgecsOs4lvssCHtzi08_6axU8T1_9_f6CegucW',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
 
    /* dispatch(postNorder(data.orderID))
    let shoppingCart = cart.map(e=>{
      e
    })
    dispatch(postShoppingCart(shoppingCart)) */

    
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
        <h3>Resument del pedido:</h3><br/>
     
        <br/><div className="Payment-button">
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