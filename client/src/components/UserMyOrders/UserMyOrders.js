import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Actions";
import MyOrdersCard from "./MyOrdersCard";
import style from "./MyOrdersCard.module.css";
import UserPanel from "../UserPanel/UserPanel";

const UserMyOrders = () => {
  const dispatch = useDispatch();

  const emailUser = useSelector((state) => state.user.email);

  useEffect(() => {
    dispatch(getUserDetail(emailUser));
  }, [dispatch]);

  const { userDetail } = useSelector((state) => state);

  const total = (orderN) => {
    const articles = userDetail.ShoppingCarts;
    const x = articles.filter((e) => e.PurchaseOrderOrderN === orderN);
    const quantity = x.map((e) => e.quantity).reduce((a, b) => a + b, 0);
    return quantity;
  };

  return (
    <div>

      <div className={style.containerForm}>
        <div className={style.container}>
          <div className={style.containerTitle}>
            <h2>Mis órdenes</h2>
          </div>
          <div className={style.containerCards}>
            {userDetail.PurchaseOrders?.map((e, index) => (
              <MyOrdersCard
                quantity={total(e.orderN)}
                orderN={e.orderN}
                date={e.date}
                totalPrice={e.totalPrice}
                status={e.status}
                key={index}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserMyOrders;
