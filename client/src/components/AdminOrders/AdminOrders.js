import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders} from "../../Actions";
import {NavLink} from 'react-router-dom'
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import style from './AdminOrders.module.css'

// UserEmail: "isaiasrobles2003@gmail.com"
// date: "2022-08-26"
// orderN: "03471734AF6562409"
// status: "Procesando Pago"
// totalPrice: 204000

function AdminOrders() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders());
    },[])

    const {AllOrders} = useSelector(state => state)

  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        <AdminSideBar></AdminSideBar>
      </div>

    <div className={style.productContainer}>
      <div className={style.containerInfoTable}>
          <ul className={style.ul}>
            <div className={style.containHeadr}>
              <li className={style.header}>Usuario</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Order</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Precio Total</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Estado</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Fecha</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Actiones</li>
            </div>
          </ul>

          {AllOrders.length > 0 &&
            AllOrders.map(order => (
            <div className={style.containerc}>
                <div className={style.containCardInfo}>
                  <p> {order.UserEmail}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {order.orderN}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {order.totalPrice}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {order.status}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {order.date}</p>
                </div>

                <div className={style.containerActions}>
                       <NavLink to={`/order/update/${order.orderN}`}>
                         <div className={style.containerPencil}>
                          <i class="fa-solid fa-pencil"></i>
                        </div>
                       </NavLink>
                </div>
            </div>

            ))}
        </div>

        
      </div>
    </div>
    
  )
}

export default AdminOrders