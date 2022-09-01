import React, { useEffect } from "react";
import styles from './UserProfile.module.css';

import happyCart from "../../imagenes/happyCart.png"
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../Actions";

const UserProfile = () => {


    <React.Fragment>
    
    <div className={styles.container}>
    <h1>Bienvenido a Tu Perfil</h1>
        <img className={styles.img} src={happyCart}  />
       
    </div>
    </React.Fragment>
  );

};

export default UserProfile;
