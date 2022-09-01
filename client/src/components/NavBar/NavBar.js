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
        <div className={styles.divs}>
          <Link to="/">
            <div className={styles.imagen}>
              <img alt="imagen" className={styles.imagen} src={logo} />
            </div>
          </Link>
        </div>
        <div className={styles.divs}>
          <SearchBar />
        </div>
        <div className={styles.buttons}>
          {isAuthenticated ? (
            <>
              <div className={styles.email}>
                <Profile />
              </div>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
          {isAuthenticated ? (
            <>
              <Link to="/userPanel">
                <button className={styles.profile}>
                  <i className="fa-solid fa-circle-user"></i> Mi Perfil
                </button>
              </Link>
              {user && <Link className={styles.containerHeart} to={"/Favourites"}>

              <i class="fa-solid fa-heart"></i>
              </Link>}
              <Link to="/cart">
                <button className={styles.cart}>
                  <i className="fa-solid fa-cart-shopping"></i> Carrito
                </button>
              </Link>
            </>
          ) : (
            <Link to="/cart">
              <button className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i> Carrito
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.a}>
        <Menu />
      </div>
    </div>
  );
}

export default NavBar;
