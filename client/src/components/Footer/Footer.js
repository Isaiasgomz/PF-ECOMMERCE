import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.containerCopy}>
        <p className={style.copyright}>Copyright © 2022 TechStore S.R.L</p>
      </div>
      <div className={style.containerButtons}>
        <button className={style.buttonFooter}>FAQ's</button>
        <button className={style.buttonFooter}>Help</button>
        <Link to="/about">
          <button className={style.buttonFooter}>About</button>
        </Link>
      </div>
      <div className={style.containerIcons}>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  );
}

export default Footer;
