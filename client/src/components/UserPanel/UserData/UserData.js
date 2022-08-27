import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserData } from "../../../Actions/index.js";
import UserPanel from "../UserPanel";
import styles from './UserData.module.css';

function validate(input) {
  const errors = {};

  if (!input.fullname) {
    errors.fullname = "El nombre es requerido";
  }
  if (!input.address) {
    errors.address = "La dirección es requerida";
  }
  if (!input.CP) {
    errors.CP = "El código postal es requerido";
  }
  if (!input.telephone) {
    errors.telephone = "El número de teléfono es requerido";
  }
  if (!input.city) {
    errors.city = "El nombre de la ciudad es requerido";
  }
  if (!input.country) {
    errors.country = "El nombre del país es requerido";
  }

  return errors;
}

function UserData() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const history = useHistory();

    const [input, setInput] = useState({
        fullname: "",
        UserEmail: user.email,
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
    alert('Sus datos de perfil se guardaron correctamente')
    setInput({
        fullname: "",
        UserEmail: user.email,
        address: "",
        CP: "",
        telephone: "",
        city: "",
        country: "",
        department:""
    });
    history.push("/userPanel");
    };

  return (
    <React.Fragment>
    <UserPanel/>
    <div className={styles.containerForm}>
      <form
        className={styles.productContainer}
        onSubmit={(e) => handleSubmit(e)}>
      <h2 className={styles.titleForm}>Datos Personales</h2>

      <div className={styles.contenedor}>
        <div className={styles.name}>
            <label className={styles.lab}>Nombre Completo:
            <input
                className={styles.formInput}
                required={true}
                type="text"
                name="fullname"
                value={input.fullname}
                placeholder="Por ej.: Juan Pérez"
                onChange={(e) => handleInput(e)}
            />                     
            {errors.fullname && (
                <label className={styles.textError}>{errors.fullname}</label>)}
            </label>    
        </div>      
        <div className={styles.name}> 
            <label className={styles.lab}>Correo:
            <input
                className={styles.formInput}
                disabled={true}
                readOnly={true}
                type="email"
                name="UserEmail"
                value={input.UserEmail}
            /> 
            </label> 
        </div>    
        <div className={styles.name}>     
            <label className={styles.lab}>Dirección:
            <input
                className={styles.formInput}
                required={true}
                type="text"
                name="address"
                value={input.address}
                placeholder="Calle y Número"
                onChange={(e) => handleInput(e)}
            />            
            {errors.address && <label className={styles.textError}>{errors.address}</label>}
            </label>
        </div>
        <div className={styles.name}>
            <label className={styles.lab}>Departamento:
            <input
                className={styles.formInput}
                required={true}
                type="number"
                name="department"
                value={input.department}
                placeholder="N° de Dpto - Si vives en casa -> 0"
                onChange={(e) => handleInput(e)}
            />
            {errors.department && (
            <label className={styles.textError}>{errors.department}</label>
            )}
            </label>
        </div>
        <div className={styles.name}>
            <label className={styles.lab}>Ciudad:
            <input
                className={styles.formInput}
                required={true}
                type="text"
                name="city"
                value={input.city}
                placeholder="Ciudad"
                onChange={(e) => handleInput(e)}
            />
            {errors.city && <label className={styles.textError}>{errors.city}</label>}
            </label>
        </div>
        <div className={styles.name}>
            <label className={styles.lab}>C.P.:
            <input
                className={styles.formInput}
                required={true}
                type="number"
                name="CP"
                value={input.CP}
                placeholder="Código Postal"
                onChange={(e) => handleInput(e)}
                />
            {errors.CP && <label className={styles.textError}>{errors.CP}</label>}
            </label>
        </div>
        <div className={styles.name}>
            <label className={styles.lab}>País:
            <input
                className={styles.formInput}
                required={true}
                type="text"
                name="country"
                value={input.country}
                placeholder="País"
                onChange={(e) => handleInput(e)}
            />
            {errors.country && <label className={styles.textError}>{errors.country}</label>}
            </label>            
        </div>
        <div className={styles.name}>
            <label className={styles.lab}>Teléfono:
            <input
                className={styles.formInput}
                required={true}
                type="tel"
                name="telephone"
                value={input.telephone}
                placeholder="Teléfono"
                onChange={(e) => handleInput(e)}
            />
            {errors.telephone && (
            <label className={styles.textError}>{errors.telephone}</label>
            )}
            </label>            
        </div>

        </div>
        <br/>
        <div className={styles.containerBtn}>
          <button className={styles.btn} type='submit'>Guardar</button>
          <NavLink to={"/userPanel"}>
            <button className={styles.btn}>Cancelar</button>
          </NavLink>
        </div>
      </form>
    </div>
    </React.Fragment>
  );
}

export default UserData;

