import React from "react";
import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <body className={style.bgpurple}>
        <div className={style.stars}>
          <div className={style.customnavbar}>
            <div className={style.navbarlinks}>
              <ul>
                <Link to={"/home"}>
                  <li>
                    <a
                      href="http://salehriaz.com/404Page/404.html"
                      target="_blank"
                    >
                      TIENDA
                    </a>
                  </li>
                </Link>
                <Link to={"/about"}>
                  {" "}
                  <li>
                    <a
                      href="http://salehriaz.com/404Page/404.html"
                      target="_blank"
                    >
                      EQUIPO
                    </a>
                  </li>{" "}
                </Link>
                <Link to={"/help"}>
                  {" "}
                  <li>
                    <a target="_blank">AYUDA</a>
                  </li>
                </Link>
                <Link to={"/faqs"}>
                  {" "}
                  <li>
                    <a class="btn-request" target="_blank">
                      PREGUNTAS Y RESPUESTAS
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={style.centralbody}>
            <img
              className={style.image404}
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
            />
            <Link to={"/"}>
              <a
                href="http://salehriaz.com/404Page/404.html"
                class={style.btngohome}
                target="_blank"
              >
                PULL REQUEST
              </a>{" "}
            </Link>
          </div>
          <div className={style.objects}>
            <img
              className={style.objectrocket}
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div className={style.earthmoon}>
              <img
                className={style.objectearth}
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                className={style.objectmoon}
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div className={style.boxastronaut}>
              <img
                className={style.objectastronaut}
                src="https://www.salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div className={style.glowingstars}>
            <div className={style.star}></div>
            <div className={style.star}></div>
            <div className={style.star}></div>
            <div className={style.star}></div>
            <div className={style.star}></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default NotFound;
