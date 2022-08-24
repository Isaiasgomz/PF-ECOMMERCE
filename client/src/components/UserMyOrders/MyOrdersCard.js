import React from "react"; 

const MyOrdersCard = ({orderN, date, totalPrice, email}) => { 



    return (
        <div>
            <div> {orderN} </div>
            <div> {date} </div>
            <div> {totalPrice} </div>
            <div> {email} </div>
        </div>
        )
};

export default MyOrdersCard;