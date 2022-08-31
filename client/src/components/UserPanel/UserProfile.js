import React from "react";
import styles from './UserProfile.module.css';
import UserPanel from "./UserPanel";
import happyCart from "../../imagenes/happyCart.png"

const UsertProfile = () => {
  return (

    <React.Fragment>
    <UserPanel/>
    <div className={styles.container}>
    <h1>Bienvenido a Tu Perfil</h1>
        <img className={styles.img} src={happyCart}  />
       
    </div>
    </React.Fragment>
  );
};

export default UsertProfile;
