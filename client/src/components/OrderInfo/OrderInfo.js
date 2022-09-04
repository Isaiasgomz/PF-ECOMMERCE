import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Actions";
import styles from './OrderInfo.module.css';
import loadingLogo from '../../imagenes/loading.png';
import  OrderAllAddresses  from "../OrderInfo/OrderAllAddresses/OrderAllAddresses";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import UserData from "../UserPanel/UserData/UserData";
import UserShippingAddress from "../UserPanel/UserShippingAddress/UserShippingAddress"

export default function OrderInfo() {
    const dispatch = useDispatch();

    const { user } = useAuth0();
    const personalData = useSelector(state => state.userDetail.PersonalDatum);
    const addresses = useSelector((state) => state.userDetail.ShippingAddresses);

    const history= useHistory();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user?.email) dispatch(getUserDetail(user.email));
    }, [user]);

    setTimeout((loading) => {
        setLoading(false)
      }, 2000);
      if (loading) {
        return (
          <div className={styles.contenedorLoading}>
            <div className={styles.loading}>
              <img className={styles.img} src={loadingLogo} />
            </div>    
          </div>
        )
      } 
      else {
        return (
            <React.Fragment>
                <div>
                {
                  (personalData && addresses.length > 0)?
                    <div className={styles.container}>
                      <h1>Dirección de envío</h1>
                        <OrderAllAddresses
                          key= {addresses.id}
                        />
                    </div>    
                    : 
                    <div className={styles.container}>
                      <h1>Información de contacto y envío</h1>
                      <br></br>
                        <UserData/>
                        <UserShippingAddress/>
                    </div>
                }
                </div>
            </React.Fragment>
        )
    }
}