import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import MyOrdersCard from "./MyOrdersCard";

const UserMyOrders = () => { 
    const { userDetail } = useSelector((state) => state);


 console.log('detalle', userDetail)
 
    return (
        <div>
            <h2>Mis Ordenes:</h2>
            <div>
               
            {userDetail?.map((e, index) => (
                
                <MyOrdersCard
                // orderN={e.orderN}
                // date={e.date}
                // totalPrice={e.totalPrice}
                email={e.email}
                key={index}
                />
            ))}
            </div>
        </div>
        )
};

export default UserMyOrders;