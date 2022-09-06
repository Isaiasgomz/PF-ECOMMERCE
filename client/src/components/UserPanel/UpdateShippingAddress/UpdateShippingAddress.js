import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {clearAddress, getAddress, getUserDetail, updateShippingAddress} from '../../../Actions';
import styles from './UpdateShippingAddress.module.css';
import swal from "sweetalert";

function validate(input) {
  const errors = {};

  if (!input.reference) {
    errors.reference = "La referencia es requerida";
  }
  if (!input.address) {
    errors.address = "La dirección es requerida";
  }
  if (!input.CP) {
    errors.CP = "El código postal es requerido";
  }
  if (!input.city) {
    errors.city = "El nombre de la ciudad es requerido";
  }
  if (!input.country) {
    errors.country = "El nombre del país es requerido";
  }

  return errors;
}

function UpdateShippingAddress({ id,  reference, address, CP, telephone, city, country, department}) {
    const dispatch = useDispatch();
 
    const user = useSelector((state) => state.user.email);
    /* const addresses = useSelector((state) => state.userDetail.ShippingAddresses) */
    useEffect(async ()=> {
        await dispatch(getAddress(id))
    },[dispatch, user])
    
    const history = useHistory();

    const [input, setInput] = useState({
        /* id: id, */
        reference: reference,
        UserEmail: user,
        address: address,
        CP: CP,
        telephone: telephone,
        city: city,
        country: country,
        department: department
    });

    const [isDisabled, setIsDisabled] = useState(true);
    
    const [errors, setErrors] = useState({});

    const handleClick = () => {
        if (!input.reference) {
            swal('Debe seleccionar una dirección de envío para eliminar')
        }
            else {
                setIsDisabled(!isDisabled);
            }
    };

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

    const handleClose = (e) => {
        e.preventDefault();
        window.history.back();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.reference) {
            swal('Debe seleccionar una dirección de envío para editar')
        }
            else {  
                dispatch(updateShippingAddress(user, input));
                /* dispatch(getUserDetail(user)); */
                swal('Su dirección de envío se actualizó correctamente');
                clearAddress();
                setIsDisabled(true);
                window.history.back();
                /* history.push("/userAllAddresses"); */
            }
    };

    return (
       <>
    
            <div className={styles.containerForm}>
                <form
                    className={styles.productContainer}
                    onSubmit={(e) => handleSubmit(e)}>
                    <h2 className={styles.titleForm}>Dirección de {reference}</h2>
                    <div className={styles.contenedor}>
                        <div className={styles.name}>
                            <label className={styles.lab}>Referencia:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    readOnly={true}
                                    type="text"
                                    name="reference"
                                    value={input.reference} />
                                {errors.reference && (
                                    <label className={styles.textError}>{errors.reference}</label>)}
                            </label>
                        </div>
                        <div className={styles.name}>
                            <label className={styles.lab}>Correo:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    readOnly={true}
                                    type="email"
                                    name="UserEmail"
                                    value={input.UserEmail} />
                            </label>
                        </div>
                        <div className={styles.name}>
                            <label className={styles.lab}>Dirección:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    required={true}
                                    type="text"
                                    name="address"
                                    value={input.address}
                                    /* placeholder="Calle y Número" */
                                    onChange={(e) => handleInput(e)} />
                                {errors.address && <label className={styles.textError}>{errors.address}</label>}
                            </label>
                        </div>
                        <div className={styles.name}>
                            <label className={styles.lab}>Departamento:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    type="number"
                                    name="department"
                                    value={input.department}
                                    /* placeholder="N° de Dpto - Si vives en casa -> 0" */
                                    onChange={(e) => handleInput(e)} />
                            </label>
                        </div>
                        <div className={styles.name}>
                            <label className={styles.lab}>Ciudad:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    required={true}
                                    type="text"
                                    name="city"
                                    value={input.city}
                                    /* placeholder="Ciudad" */
                                    onChange={(e) => handleInput(e)} />
                                {errors.city && <label className={styles.textError}>{errors.city}</label>}
                            </label>
                        </div>
                        <div className={styles.name}>
                            <label className={styles.lab}>C.P.:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    required={true}
                                    type="number"
                                    name="CP"
                                    value={input.CP}
                                    /* placeholder="Código Postal" */
                                    onChange={(e) => handleInput(e)} />
                                {errors.CP && <label className={styles.textError}>{errors.CP}</label>}
                            </label>
                        </div>
                        <div className={styles.name2}>
                            <label className={styles.lab}>País:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    required={true}
                                    type="text"
                                    name="country"
                                    value={input.country}
                                    /* placeholder="País" */
                                    onChange={(e) => handleInput(e)} />
                                {errors.country && <label className={styles.textError}>{errors.country}</label>}
                            </label>
                        </div>
                        <div className={styles.name2}>
                            <label className={styles.lab}>Teléfono:
                                <input
                                    className={styles.formInput}
                                    disabled={isDisabled}
                                    type="tel"
                                    name="telephone"
                                    value={input.telephone}
                                    /* placeholder="Teléfono" */
                                    onChange={(e) => handleInput(e)} />
                            </label>
                        </div>
                        <br />
                    </div>

                    <div className={styles.containerBtn}> 
                        <button className={styles.btnS} onClick={handleClose}>Salir</button>
                        <button className={styles.btn} disabled={!isDisabled} onClick={handleClick}>Editar</button>
                        <button className={styles.btn} type='submit' disabled={isDisabled}>Guardar</button>
                    </div>
                </form>
            </div>
        </>
 
  );

}

export default UpdateShippingAddress;
