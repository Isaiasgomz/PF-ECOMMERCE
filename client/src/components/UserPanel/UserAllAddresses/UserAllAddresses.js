import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../../Actions/index.js";
import UserPanel from "../UserPanel";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";
import styles from './UserAllAddresses.module.css';

function UserAllAddresses() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.email);
    const addresses = useSelector((state) => state.userDetail.ShippingAddresses);
    const address = useSelector((state) => state.ShippingAddress)
    console.log(address)

    const[ref, setRef] = useState("")

    const history = useHistory();
    

    function filterAddress(e) {
        e.preventDefault();  
        dispatch(getAddress(e.target.value)); 
        setRef(e.target.value);
    }

    useEffect(()=> {
        dispatch(getAddress(ref)); 
    }, [ref])

    return (
    <React.Fragment>
    <UserPanel/>
    <div className={styles.containerForm}>
        <h2 className={styles.titleForm}> Mis Direcciones</h2>
        <div className={styles.searchbar}>
        <ul name="searchaddress" >
            {   
                addresses && addresses.map(a => {
                    return(
                        <Link to= {"/updateShippingAddress"} className={styles.link} value={a.reference} >
                            <button className={styles.link} key={a.id} value={a.reference} onClick={(e) => filterAddress(e)}>        
                                {a.reference}  
                            </button>
                        </Link>                         
                    )
                })                
            }
        </ul>   
        </div>
             {<UpdateShippingAddress
                        reference= {address.reference}
                        UserEmail= {user}
                        address= {address.address}
                        CP= {address.CP}
                        telephone= {address.telephone}
                        city= {address.city}
                        country= {address.country}
                        department= {address.department}
                    />
                    
            }
    </div>
    </React.Fragment>
  );
}

export default UserAllAddresses;
