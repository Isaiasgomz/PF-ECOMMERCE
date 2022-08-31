import React, { useEffect, useState } from "react";
import styles from './UserPanel.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAddress, getUserDetail } from "../../Actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserPanel() {
    const dispatch = useDispatch();

    const emailUser = useSelector(state => state.user.email);
    const personalData = useSelector(state => state.userDetail.PersonalDatum);
    const { user } = useAuth0();

    useEffect(() => {
        if (user?.email?.length > 0) dispatch(getUserDetail(user.email));
    }, []);

    const clear = (e) => {
        dispatch(clearAddress());
    }

    const [dropDown, setDropDown] = useState(false)

    const openCloseDropDown = () =>{
        setDropDown(!dropDown);
    }

    return (
        <React.Fragment>
            <div className={styles.back}>
                <div className={styles.sidebar}>
                    <img className={styles.imagen} src={user.picture}/>
                    <h5 className={styles.profile}>{emailUser} </h5>
                    {
                        personalData ?
                            <Link to={"/updateUserData"} className={styles.link}> <i className="fa-solid fa-address-card"></i> Datos Personales</Link>
                            :
                            <Link to={"/userData"} className={styles.link}> <i className="fa-solid fa-address-card"></i> Datos Personales</Link>
                    }
                    <div className={styles.link} onClick={openCloseDropDown}><i className="fa-solid fa-truck-arrow-right"></i> Direcciones de Envío <i className="fa-solid fa-caret-down"></i></div>
                    {dropDown ?
                        <div>
                            <div className={styles.link}>  <Link to={"/userShippingAddress"} className={styles.link}>- Añadir Dirección</Link></div>
                            <div className={styles.link}>  <Link to={"/userAllAddresses"} className={styles.link} onClick={clear}>- Ver mis Direcciones</Link> </div>
                        </div>
                        : null}
                    <Link to={"/myOrders"} className={styles.link}> <i className="fa-solid fa-bag-shopping"></i> Mis Órdenes</Link>
                    <Link to={"/myReviews"} className={styles.link}> <i className="fa-solid fa-gavel"></i> Mis Opiniones</Link>
                    <Link to={"/notfound"} className={styles.link}> <i className="fa-solid fa-heart"></i> Favoritos</Link>
                </div>
            </div>
        </React.Fragment>
    )
}