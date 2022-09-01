import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Actions";
import styles from './OrderInfo.module.css';
import loadingLogo from '../../imagenes/loading.png';
import  OrderAllAddresses  from "../OrderInfo/OrderAllAddresses/OrderAllAddresses";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";

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
                    <OrderAllAddresses
                      key= {addresses.id}
                    />
                    : 
                    /* history.push('/userPanel') */
                    <div className={styles.container}>
                      <h1>Información de contacto</h1>
                      <br></br>
                        <span>Si es la primera vez que realiza una compra, debe cargar sus datos personales (Mi perfil/Datos personales) y por lo menos una dirección a la cuál se enviará su compra (Mi perfil/Direcciones de Envío/Añadir Dirección).</span>
                        <br></br>
                        <span>Después vuelva al Carrito para seguir con su compra</span>
                        <br></br>
                        <Link to={"/userPanel"} className={styles.link}> <i className="fa-solid fa-circle-user"></i> Mi perfil</Link>
                    </div>
                }
                </div>
            </React.Fragment>
        )
    }
}