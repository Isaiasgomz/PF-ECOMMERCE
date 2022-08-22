import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserData } from "../../Actions/index.js";
import styles from "./Order.module.css";

function validate(input) {
  const errors = {};

  if (!input.fullname) {
    errors.fullname = "El nombre es requerido";
  }
  if (!input.email) {
    errors.email = "El email es requerido";
  }
  if (!input.address) {
    errors.address = "La direccion es requerida";
  }
  if (!input.CP) {
    errors.CP = "El codigo postal es requerido";
  }
  if (!input.telephone) {
    errors.telephone = "El numero de telefono es requerido";
  }

  return errors;
}

function Order() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const history = useHistory();

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    address: "",
    CP: "",
    telephone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postUserData(user.email, input));
    setInput({
      fullname: "",
      email: "",
      address: "",
      CP: "",
      telephone: "",
    });

    history.push("/payment");
  };

  return (
    <div className={styles.containerForm}>
      <form
        className={styles.productContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className={styles.titleForm}>INFORMACIÓN DE CONTACTO</h2>
        <p type="Nombre:">
          <input
            className={styles.formInput}
            required={true}
            type="text"
            name="fullname"
            value={input.fullname}
            placeholder="p. ej.: Juan Pérez"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.fullname && (
          <p className={styles.textError}>{errors.fullname}</p>
        )}
        <p type="Correo:">
          <input
            className={styles.formInput}
            required={true}
            type="email"
            name="email"
            value={input.email}
            placeholder="usuario@email.com"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.email && <p className={styles.textError}>{errors.email}</p>}
        <p type="Dirección:">
          <input
            className={styles.formInput}
            required={true}
            type="text"
            name="address"
            value={input.address}
            placeholder="Calle, número, localidad, departamento. País"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.address && <p className={styles.textError}>{errors.address}</p>}
        <p type="Departamento:">
          <input
            className={styles.formInput}
            required={true}
            type="number"
            name="departament"
            value={input.departament}
            placeholder="Número de Departamento - Si vives en casa -> 0"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.departament && (
          <p className={styles.textError}>{errors.departament}</p>
        )}
        <p type="C.P.:"></p>
        <input
          className={styles.formInput}
          required={true}
          type="number"
          name="CP"
          value={input.CP}
          placeholder="Código Postal"
          onChange={(e) => handleInput(e)}
        />
        <br />
        {errors.CP && <p className={styles.textError}>{errors.CP}</p>}
        <p type="Teléfono:">
          <input
            className={styles.formInput}
            required={true}
            type="tel"
            name="telephone"
            value={input.telephone}
            placeholder="Teléfono"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.telephone && (
          <p className={styles.textError}>{errors.telephone}</p>
        )}
        <div className={styles.containerBtn}>
          <button className={styles.btn}>Confirmar</button>
          <NavLink to={"/resumeOrder"}>
            <button className={styles.btn}>Volver al Carrito</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Order;
