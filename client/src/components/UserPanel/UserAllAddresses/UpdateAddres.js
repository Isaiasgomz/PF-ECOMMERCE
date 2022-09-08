import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAddress } from "../../../Actions";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";
import loadingLogo from "../../../imagenes/loading.png"
import styles from './UpdateAddress.module.css';
import { useAuth0 } from "@auth0/auth0-react";    

function UpdateAddres(props) {
    const propsID = useParams().id
    const id = propsID;
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const address = useSelector((state) => state.ShippingAddress);
    
    useEffect(async()=> {
        await dispatch(getAddress(id))
    },[dispatch])
  
    if (!user) {
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
             <div>                    
                <div>
                    <UpdateShippingAddress
                        key= {address?.id}
                        id= {address?.id}
                        reference= {address?.reference}
                        UserEmail= {user?.email}
                        address= {address?.address}
                        CP= {address?.CP}
                        telephone= {address?.telephone}
                        city= {address?.city}
                        country= {address?.country}
                        department= {address?.department}
                    />  
                </div>                         
            </div>
        )
    }
}

export default UpdateAddres;
