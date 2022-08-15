import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../NavBar/NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import Menu from '../Menu/Menu'

function NavBar() {



  return (
    <div className={styles.menus}>
      <div className={styles.container}>

        <Link to="/"><button className={styles.cart}><i className="fa-solid fa-house"> </i> Place Holder Icono Landing</button></Link>
        <SearchBar />
        <div className={styles.buttons}>
          <Link to="/Login"><button className={styles.cart}> Login</button></Link>
          <Link to="/SignUp"><button className={styles.cart}> SignUp</button></Link>
          <Link to="/cart"><button className={styles.cart}><i className="fa-solid fa-cart-shopping"></i> Carrito</button></Link>
        </div>

      </div>
      <div ><Menu /></div>
    </div>
  )
}

export default NavBar