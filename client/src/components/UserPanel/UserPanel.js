import React from "react";
import styles from './UserPanel.module.css';
import { NavLink } from "react-router-dom";

export default function UserPanel() {  

    return (
        <React.Fragment>          
                <div className={styles.sidebar}>
                    <h3> className={styles.profile} Mi perfil</h3>
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-address-card"></i> Datos Personales</NavLink>
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-bag-shopping"></i> Mis Órdenes</NavLink>    
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-truck-arrow-right"></i> Direcciones de Envío</NavLink>       
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-memo-circle-info"></i> Mis Opiniones</NavLink>    
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-circle-heart"></i> Favoritos</NavLink>    
                </div>    
        </React.Fragment>      
    )  
}