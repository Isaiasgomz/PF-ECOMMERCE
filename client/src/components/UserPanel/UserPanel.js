import React, { useEffect } from "react";
import styles from './UserPanel.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Actions";

export default function UserPanel() {  
    const dispatch = useDispatch();

    const emailUser = useSelector(state => state.user.email)
    
    useEffect(() => {
        dispatch(getUserDetail(emailUser));
    }, [dispatch]);

    return (
        <React.Fragment>          
                <div className={styles.sidebar}>
                    <img className={styles.imagen} src= 'https://www.gaceta.unam.mx/wp-content/uploads/2020/10/cflodes.jpg' />
                    <h5 className={styles.profile}>{emailUser} </h5>
                    <Link to= {"/userData"} className={styles.link}> <i class="fa-solid fa-address-card"></i>  Datos Personales</Link>
                    <Link to= {"myOrders"} className={styles.link}> <i class="fa-solid fa-bag-shopping"></i>  Mis Órdenes</Link>    
                    <Link to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-truck-arrow-right"></i> Direcciones de Envío</Link>       
                    <Link to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-gavel"></i> Mis Opiniones</Link>    
                    <Link to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-heart"></i> Favoritos</Link>    
                </div>    
        </React.Fragment>      
    )  
}