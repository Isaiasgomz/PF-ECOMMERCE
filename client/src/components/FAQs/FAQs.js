import React from "react";
import "./FAQs.css";
import { Link } from "react-router-dom";

function FAQs() {
  return (
    <div className="FAQScont">
      <div className="containerFAQs">
        <nav className="accordionFAQs arrows">
          <header className="box">
            <label htmlFor="acc-close" className="box-title">
              Preguntas Frecuentes
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title" htmlFor="cb1">
              Realizar un pedido
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">
              <span className="preguntaFAQs">¿Cómo realizo un pedido?</span>
              <br />
              <br />
              Solo tenés que seleccionar todos los productos que deseas
              adquirir. Seguidamente, en el carrito de compras visualizarás tu
              orden con los mismos. Será requisito estar registrado para avanzar
              con el proceso de compra.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title" htmlFor="cb2">
              Precio
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">
              <span className="preguntaFAQs">
                ¿El precio que figura en la web es el precio final?
              </span>
              <br />
              <br />
              Todos los precios en la web incluyen el IVA, y se encuentran
              expresados en pesos argentinos.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title" htmlFor="cb3">
              Formas de pago
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">
              <span className="preguntaFAQs">
                ¿Cuáles son las formas de pago?
              </span>
              <br />
              <br />
              Contamos con dos formas de pago: a través de PayPal (Iniciando
              sesión con tu cuenta), o bien por medio de Tarjeta débito o
              crédito.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title" htmlFor="cb4">
              Envíos
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">
              <span className="preguntaFAQs">
                ¿Cómo gestiono el envío de mi pedido?
              </span>
              <br />
              <br />
              En primer lugar recopilamos toda tu información de contacto que
              llenaste en el formulario anteriormente, para despachar el
              producto. Actualmente realizamos envíos a todo el mundo, el lapso
              del mismo es máximo 3 días.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title" htmlFor="cb5">
              Facturación
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content">
              <span className="preguntaFAQs">
                ¿Cómo tramito la factura de mi compra?
              </span>
              <br />
              <br />
              En todas las compras efectuadas en la web, brindamos sin excepción
              alguna, la factura de compra. Una vez que realiza y abona el
              pedido, enviamos a tu dirección de correo electrónico la factura
              correspondiente.
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
      <Link to="/home">
        <button className="btnFAQs">IR A TIENDA</button>
      </Link>
    </div>
  );
}

export default FAQs;
