import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './OrderAddress.module.css';
import swal from "sweetalert";
import { postDataMap } from "../../../Actions";

function OrderAddress({/* id, */ reference, address, CP, telephone, city, country, department}) {
    const dispatch = useDispatch();

    const history = useHistory(); 

    const user = useSelector((state) => state.user.email);

    const [input, setInput] = useState({
        reference: reference,
        UserEmail: user,
        address: address,
        CP: CP,
        telephone: telephone,
        city: city,
        country: country,
        department: department
    });

    const handleClear = (e) => {
 /*        setInput({
        reference: "",
        UserEmail: user,
        address: "",
        CP: "",
        telephone: "",
        city: "",
        country: "",
        department: ""
        }) */
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.reference) {
            swal('Debe seleccionar una dirección de envío')
        }
            else {
                dispatch(postDataMap(input));
                history.push("/payment");
            }
    }

    return (
        <React.Fragment>
        <div className={styles.containerForm}>
        <form
            className={styles.productContainer} onSubmit={(e) => handleSubmit(e)}>
            <h2 className={styles.titleForm}>Dirección de: {reference}</h2>
            <div className={styles.contenedor}>       
            <div className={styles.name}>
                <label className={styles.lab}>Referencia:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.reference}
                />
                </label>    
            </div>      
            <div className={styles.name}> 
                <label className={styles.lab}>Correo:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.UserEmail}
                /> 
                </label>
            </div>    
            <div className={styles.name}>     
                <label className={styles.lab}>Dirección:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.address}
                />
                </label>
            </div>
            <div className={styles.name}>
                <label className={styles.lab} >Departamento:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.department}
                />
                </label>
            </div>
            <div className={styles.name}>
                <label className={styles.lab} >Ciudad:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.city}
                />
                </label>
            </div>
            <div className={styles.name}>
                <label className={styles.lab} >C.P.:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.CP}
                />
                </label>
            </div>
            <div className={styles.name}>
                <label className={styles.lab} >País:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.country}
                />
                </label>            
            </div>
            <div className={styles.name}>
                <label className={styles.lab} >Teléfono:
                <input
                    className={styles.formInput}
                    disabled={true}
                    value={input.telephone}
                />
                </label>            
            </div>
                <br/>
            </div>
            <div className={styles.containerBtn}>  
                <NavLink to={"/resumeOrder"}>
                    <button className={styles.btn}>Volver al Carrito</button>
                </NavLink>                 
                    <button className={styles.btn}>Confirmar</button>
            </div>
        </form>
        </div>
        </React.Fragment>
    );
}

export default OrderAddress;
