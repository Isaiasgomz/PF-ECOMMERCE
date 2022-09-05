import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import style from "./ButtonLogout.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();


  return (
    <button className={style.buttonLog} onClick={() => logout({ returnTo: window.location.origin })}>
      <i className="fa-solid fa-power-off"></i>  Cerrar Sesión
    </button>
  );
};

export default LogoutButton;