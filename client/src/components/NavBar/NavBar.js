import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import styles from "../NavBar/NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import Menu from '../Menu/Menu'
import LoginButton from '../auth0/LogginButton/ButtonLogin'
import LogoutButton from '../auth0/logout/ButtonLogout'
import Profile from '../auth0/User/User'


function NavBar() {
  const {isAuthenticated} = useAuth0();




  return (
    <div className={styles.menus}>
      <div className={styles.container}>
        <Link to="/home"><button className={styles.cart}><i className="fa-solid fa-house"> </i> Place Holder Icono Landing</button></Link>
        <SearchBar />
        <div className={styles.buttons}>
          
          {isAuthenticated?(
            <>
            <Profile/>
            <LogoutButton />
            </>
          ):(
           <LoginButton/>
          )}

          <Link to="/cart"><button className={styles.cart}><i className="fa-solid fa-cart-shopping"></i> Carrito</button></Link>
        </div>

      </div>
      <div ><Menu /></div>
    </div>
  )
}

export default NavBar