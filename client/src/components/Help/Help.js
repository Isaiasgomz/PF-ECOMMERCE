import React from "react";
import style from "./Help.module.css";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className={style.help}>
      <div className={style.header}>
        <div className={style.bienvenido}>
          <img
            alt="nombre"
            src="https://www.venex.com.ar/images/auricularescentrodeayuda.png"
          ></img>
          Bienvenido al <span className={style.ayuda}>CENTRO DE AYUDA</span> de
          PULL REQUEST
        </div>
        <br />
        <br />
        <br />
        <div className={style.texto}>
          <span>
            Encontrá la información que necesitás para comprar online,
            garantías, hacer seguimiento de tu envío y mucho más.
          </span>
          <br />
          <span>Contactate con nuestros asesores vía:</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={style.contacto}>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <img
            alt="nombre"
            src="https://nutripur.com/wp-content/uploads/2019/08/email-logo.png"
            height="40"
            width="60"
          ></img>
          <span className={style.spanContacto}>
            <a href="mailto:pullrequest.ecommerce@gmail.com" target={"_blank"}>
              pullrequest.ecommerce@gmail.com
            </a>
          </span>
        </a>
        <a href="https://wa.me/5492358413208" target={"_blank"}>
          <img
            alt="nombre"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            height="40"
            width="60"
          ></img>
          <span className={style.spanContacto}>+54 9 2358 41-3208</span>
        </a>
      </div>
      <br />
      <br />
      <br />
      <div className={style.tiendaPyR}>
        <div className={style.tienda}>
          <Link to="/home">
            <img
              alt="nombre"
              src="https://images.vexels.com/media/users/3/223411/isolated/preview/7a8154be7b9b50412fc2cf63b636e370-icono-de-tienda-tienda-plana.png"
              height="40"
              width="60"
            ></img>
            <button className={style.btnTienda}>Seguir comprando</button>
          </Link>
        </div>
        <div className={style.FAQs}>
          <Link to="/FAQs">
            <img
              alt="nombre"
              src="https://img.freepik.com/vector-premium/preguntas-respuestas-burbujas-discurso-lineal-globos-contorno-verde-azul-concepto-pregunta-respuesta-letras-mayuscula-preguntas-frecuentes_87771-14844.jpg?w=2000"
              height="50"
              width="80"
            ></img>
            <button className={style.btnTienda}>Preguntas y Respuestas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Help;
