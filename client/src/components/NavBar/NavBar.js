import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/Menu";
import LoginButton from "../auth0/LogginButton/ButtonLogin";
import LogoutButton from "../auth0/logout/ButtonLogout";
import Profile from "../auth0/User/User";
import logo from "../../imagenes/logo.png";

function NavBar() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.menus}>
      <div className={styles.container}>

          <Link to="/">
            <div className={styles.imagen}>
              <img alt="imagen" className={styles.imagenLogo} src={logo} />
            </div>
          </Link>
       
        <div className={styles.divs}>
          <SearchBar />
        </div>
        <div className={styles.buttons}>
          {isAuthenticated ? (
            <>
              <div className={styles.email}>
                <Profile />
              </div>
              <div className={styles.logout}> <LogoutButton />  </div>
              
            </>
          ) : (
            <div className={styles.login}> <LoginButton /> </div>
          )}
          
            <Link to="/cart">
              <button className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i> <span className={styles.spanText}>Carrito</span>
              </button>
            </Link>
          
        </div>
      </div>
      <div className={styles.a}>
        <Menu />
      </div>
    </div>
  );
}

export default NavBar;
