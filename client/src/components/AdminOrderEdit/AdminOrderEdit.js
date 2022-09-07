import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllOrders, updateorder } from "../../Actions";
import style from "./AdminOrderEdit.module.css";
import { useParams } from "react-router-dom";

const validate = (value) => {
  const errors = {};
  if (!value) {
    errors.name =
      "Debes Ingresar Un Nombre mayor a 2 letras y no debe incluir caracteres especiales ni simbolos";
  }
  return errors;
};

function onlyOneDifficulty(value) {
  var x = document.getElementsByName("status");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].value !== value) x[i].checked = false;
  }
}

function AdminOrderEdit(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const { AllOrders } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const propsID = useParams().id;

  const oneOrder = AllOrders.filter((item) => item.orderN === propsID);

  const [input, setInput] = useState("");
  /* const [estadoAct, setEstadoAct] = useState({ status: oneOrder[0].status }) */

  const [errors, setErrors] = useState({});

  const handleCheckBox = (e) => {
    /* setEstadoAct({
            status:e.target.value
        }) */
    if (e.target.checked) {
      setInput(e.target.value);
      setErrors(validate(e.target.value));
      onlyOneDifficulty(e.target.value);
    }
  };

  const orderUpdate = {
    email: user.email,
    status: input,
  };

  const handleSubmit = (e) => {
    /* e.preventDefault() */
    dispatch(updateorder(propsID, orderUpdate));
    window.history.back();
  };

  return (
    <div className={style.containerAll1}>
      {oneOrder.length === 1 &&
        oneOrder.map((item) => (
          <div className={style.containerAll}>
            <div className={style.containerPandO}>
              <div className={style.productCont}>
                <div className={style.containerTitle}>
                  <span> Numero de Orden: {item.orderN}</span>
                </div>
                <div className={style.containerTitle}>
                  <span>Usuario: {item.UserEmail}</span>
                </div>
                <div className={style.containerTitle}>
                  <span>Precio total: ${item.totalPrice}</span>
                </div>
                <div className={style.containerTitle}>
                  <span> Fecha: {item.date}</span>
                </div>
              </div>

              <div className={style.ckeckbox}>
                <div className={style.estadoAct}> Estado actual</div>
                <div className={style.greymatter}> {oneOrder[0]?.status}</div>
                <hr className={style.hR} />
                <label className={style.text}>
                  {" "}
                  Procesando Pago
                  <div className={style.circulo}>
                    <input
                      className={style.season}
                      type={"checkbox"}
                      name={"status"}
                      value={"Procesando Pago"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>

                <hr className={style.hR} />
                <label className={style.text}>
                  {" "}
                  Preparando Envio
                  <div className={style.circulo}>
                    <input
                      className={style.season}
                      type={"checkbox"}
                      name={"status"}
                      value={"Preparando Envio"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>
                <hr className={style.hR} />
                <label className={style.text}>
                  {" "}
                  Enviado
                  <div className={style.circulo}>
                    <input
                      className={style.season}
                      type={"checkbox"}
                      name={"status"}
                      value={"Enviado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />{" "}
                  </div>
                </label>

                <hr className={style.hR} />

                <label className={style.text}>
                  {" "}
                  Completado
                  <div className={style.circulo}>
                    <input
                      className={style.season}
                      type={"checkbox"}
                      name={"status"}
                      value={"Completado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>
                <div className={style.buttonCont}>
                  <button
                    className={style.loginButton}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Guardar
                  </button>
                </div>
              </div>

              {errors.name && <p className="text-error">{errors.name}</p>}
              <br />
            </div>
          </div>
        ))}
    </div>
  );
}

export default AdminOrderEdit;
