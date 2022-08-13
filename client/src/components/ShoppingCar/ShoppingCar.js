import React from 'react'
import mac from '/client/src/Utils/1103654188.avif'

function ShoppingCar() {
  return (
    <div>ShoppingCar
      <h2>My Order</h2>
      <div>
        <p>12.08.2022</p>
        <p>6 Articulos</p>
        <p>$ 560.00</p>
      </div>
      <div>
        <img  src={mac} width={'80px'} height={'80px'}/>
        <p>Mac</p>
        <p>$ 560,00</p>

      </div>
    </div>
  )
}

export default ShoppingCar