import React from 'react';
import Map from '../Map/Map';
import style from  './Success.module.css';
import useGoogleAddress from '../../hooks/UseMapLocation';
import { useSelector } from 'react-redux';

const Success = () => {
    const {address, city, country, reference} = useSelector(state => state.dataMap);
    const {fullname} = useSelector(state => state.userDetail.PersonalDatum);

    const location = useGoogleAddress(`${address}, ${city}, ${country}`);

    return (
      <div className={style.Success}>
        <div >
          <h2>{`${fullname}, Gracias por tu compra`}</h2>
          <span>{`Tu pedido llegará en un plazo no mayor a 3 días, a la dirección de ${reference} indicada:`}</span>
          <div className={style.SuccessMap}>
            <Map data={location} />
          </div>
        </div>
      </div>
    );
}

export default Success;