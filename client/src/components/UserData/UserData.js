import React from "react";
import UserPanel from "../UserPanel/UserPanel";
import styles from './UserData.module.css';


export default function UserData() { 

    return(
        <div>
            <UserPanel/>
            <form className={styles.form}>
                <h3 className={styles.titulo}>Datos Personales</h3>
                
            </form>
        </div>
    )
}