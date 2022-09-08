import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.containerCopy}>
        <p className={style.copyright}>
         Copyright © 2022 -{" "}
          <Link to="/">
            <button className={style.title}>Pull Request</button>
          </Link>
        </p>
      </div>
      <div className={style.containerButtons}>
        <Link to="/FAQs">
          <button className={style.buttonFooter}>Preguntas</button>
        </Link>
        <Link to="/help">
          <button className={style.buttonFooter}>Ayuda</button>
        </Link>
        <Link to="/about">
          <button className={style.buttonFooter}>Equipo</button>
        </Link>
      </div>
      <div className={style.containerIcons}>
        <a href="https://www.instagram.com/" target={"_blank"}>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" target={"_blank"}>
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/" target={"_blank"}>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
