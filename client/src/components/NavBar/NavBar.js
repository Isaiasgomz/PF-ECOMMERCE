import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../NavBar/NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'


function NavBar() {



  return (

    <div className={styles.container}>

      <Link to="/home"><button className={styles.carrito}><i className="fa-solid fa-house"> </i> Place Holder Icono Landing</button></Link>
      <SearchBar />
      <div className={styles.buttons}>
        <Link to="/Login"><button className={styles.carrito}> Login</button></Link>
        <Link to="/SignUp"><button className={styles.carrito}> SignUp</button></Link>
        <Link to="/cart"><button className={styles.carrito}><i className="fa-solid fa-cart-shopping"></i> Carrito</button></Link>
      </div>
    </div>
  )
}

export default NavBar