import React from 'react';
import Map from '../Map/Map';
import style from  './Success.module.css';
import useGoogleAddress from '../../hooks/UseMapLocation';
import { useSelector } from 'react-redux';

const Success = () => {
    const {address,city,country,fullname} = useSelector(state => state.personalData)
    

    const location = useGoogleAddress(`${address}, ${city}, ${country}`);

  return (
    <div className={style.Success}>
      <div >
        <h2>{`${fullname}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className={style.SuccessMap}>
          <Map data={location} />
        </div>
      </div>
    </div>
  );
}

export default Success;