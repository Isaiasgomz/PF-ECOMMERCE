import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getUserDetail } from "../../../Actions/index.js";
import UserPanel from "../UserPanel";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";
import styles from './UserAllAddresses.module.css';

function UserAllAddresses() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.email);
    const addresses = useSelector((state) => state.userDetail.ShippingAddresses);
    const address = useSelector((state) => state.ShippingAddress)
    console.log(address)
    const [loading, setLoading] = useState(true)

    const history = useHistory();
  /*   
     useEffect(() => {
        if(user?.length>0)dispatch(getUserDetail(user));    
    }, [addresses]); */

    function filterAddress(e) {
        e.preventDefault();  
        dispatch(getAddress(e.target.value)); 
    }
 
    setTimeout((loading) => {
        setLoading(false)
    }, 2000);
    if(loading){
        return (
        <div className={styles.loadingCont} >
            <h2 className={styles.loading}>Loading...</h2>
        </div>
        )}
        else {
            return (
            <React.Fragment>
            <UserPanel/>
            <div className={styles.containerForm}>
                <h2 className={styles.titleForm}> Mis Direcciones</h2>
                <div className={styles.searchbar}>
                    <p>Seleccione la dirección que quiere ver y/o editar</p>
                    {   
                        addresses && addresses.map(a => {
                            return(
                                <div>
                                    <button className={styles.link} key={a.id} value={a.reference} onClick={(e) => filterAddress(e)}>        
                                        {a.id} {a.reference}  
                                    </button>  
                                </div>                     
                            )
                        })                
                    }  
                </div>
                    {<UpdateShippingAddress
                        key= {address?.id}
/*                         id= {address?.id} */
                        reference= {address?.reference}
                        UserEmail= {user}
                        address= {address?.address}
                        CP= {address?.CP}
                        telephone= {address?.telephone}
                        city= {address?.city}
                        country= {address?.country}
                        department= {address?.department}
                    />                           
                    }
            </div>
            </React.Fragment>
        )}
}

export default UserAllAddresses;
