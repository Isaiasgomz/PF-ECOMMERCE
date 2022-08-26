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
  if (!input.UserEmail) {
    errors.UserEmail = "El email es requerido";
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
  if (!input.city) {
    errors.city = "El nombre de la ciudad es requerido";
  }
  if (!input.country) {
    errors.country = "El nombre del país es requerido";
  }

  return errors;
}

function Order() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const history = useHistory();

  const [input, setInput] = useState({
    fullname: "",
    UserEmail: "",
    address: "",
    CP: "",
    telephone: "",
    city: "",
    country: "",
    department:""
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
    
    dispatch(postUserData(user.email, input));
    setInput({
      fullname: "",
      UserEmail: "",
      address: "",
      CP: "",
      telephone: "",
      city: "",
      country: "",
      department:""
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
            name="UserEmail"
            value={input.UserEmail}
            placeholder="usuario@email.com"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.UserEmail && <p className={styles.textError}>{errors.UserEmail}</p>}
        <p type="Dirección:">
          <input
            className={styles.formInput}
            required={true}
            type="text"
            name="address"
            value={input.address}
            placeholder="Calle y número"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.address && <p className={styles.textError}>{errors.address}</p>}
        <p type="Ciudad:">
          <input
            className={styles.formInput}
            required={true}
            type="text"
            name="city"
            value={input.city}
            placeholder="Ciudad"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.city && <p className={styles.textError}>{errors.city}</p>}
        <p type="Pais:">
          <input
            className={styles.formInput}
            required={true}
            type="text"
            name="country"
            value={input.country}
            placeholder="País"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.country && <p className={styles.textError}>{errors.country}</p>}
        <p type="Departamento:">
          <input
            className={styles.formInput}
            required={true}
            type="number"
            name="department"
            value={input.department}
            placeholder="Número de Departamento - Si vives en casa -> 0"
            onChange={(e) => handleInput(e)}
          />
        </p>
        <br />
        {errors.departament && (
          <p className={styles.textError}>{errors.department}</p>
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
