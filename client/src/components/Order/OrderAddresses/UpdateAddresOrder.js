import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../../Actions";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";

function UpdateAddresOrder(props) {
    const id = props.match.params?.id
 
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.email);
    const address = useSelector((state) => state.ShippingAddress);
 
    useEffect(async ()=> {
        await dispatch(getAddress(id))
    },[dispatch])
    
  return (
  <div>                    
                    <div>
                    <UpdateShippingAddress
                        key= {address?.id}
                        id= {address?.id}
                        reference= {address?.reference}
                        UserEmail= {user}
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

export default UpdateAddresOrder;
