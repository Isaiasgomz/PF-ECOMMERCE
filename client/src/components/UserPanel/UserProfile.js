import React, { useEffect } from "react";
import styles from './UserProfile.module.css';
import UserPanel from "./UserPanel";
import happyCart from "../../imagenes/happyCart.png"
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../Actions";

const UserProfile = () => {

    const dispatch = useDispatch();
    const { user } = useAuth0();

    useEffect(() => {
        if (user?.email.length > 0) dispatch(getUserDetail(user.email));
    }, [user]);

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

export default UserProfile;
