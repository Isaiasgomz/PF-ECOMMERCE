import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart} from "../../Actions";

const UserOrderDetail = (props) => { 
    const dispatch = useDispatch();

    const nOrder = props.match.params?.nOrder;

    useEffect(() => {
        dispatch(getShoppingCart(nOrder));
    }, [dispatch, nOrder]);

    const {shoppingCart} = useSelector((state) => state);


    return (
        <div>
            <div>hola</div>
            {/* <div>N° order:  {shoppingCart.PurchaseOrderOrderN} </div> */}
        </div>
    )
}

export default UserOrderDetail;