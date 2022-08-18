import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postNorder } from '../../Actions';
// npm i react-paypal-button-v2  react v-- 17

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory()
 
  

  const paypalOtions = {
    clientId: 'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      dispatch(postNorder(data.ALGO))
      
      dispatch(postShoppingCart())
      alert('Payment completed successfully')
      history.push('/checkout/success')
    }
  }

  
  const handleSumTotal = () => {

    const sum = 1560.00
    return sum;
  }


  
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {
          <div className="Payment-item" >
            <div className="Payment-element">
              <h4>Mac</h4>
              <span>
                $
                {' '}
                {123}
              </span>
            </div>
          </div>
        }
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
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