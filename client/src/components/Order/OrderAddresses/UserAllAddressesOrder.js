import React, {useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, postDataMap } from "../../../Actions/index.js";
import style from "./UserAllAddressesOrder.module.css";
import loadingLogo from "../../../imagenes/loading.png";
import swal from "sweetalert";

function UserAllAddressesOrder() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.email);
  const addresses = useSelector((state) => state.userDetail.ShippingAddresses);
  const personalData = useSelector((state) => state.userDetail.PersonalDatum);

  const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    if(user?.length>0) dispatch(getUserDetail(user))
  },[dispatch])

  const handleConfirm = (e) => {
    e.preventDefault();
    if (isChecked) {
      history.push("/payment");    
    }
      else {
        swal('Debe seleccionar una dirección de envío para continuar')  
      }
  } 

  const handleChangeRadio = (e) => {
    if(e.target.checked) {
        dispatch(postDataMap(e.target.value));
        setIsChecked(true);
    }
  }

  setTimeout((loading) => {
    setLoading(false);
  }, 1500);
  if (loading) {
    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          {<img className={style.img} src={loadingLogo} />}
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className={style.containerForm}>
          <div className={style.container}>
            <div className={style.containerTitle}>
              <h2> Mis direcciones</h2>
            </div>

            <div className={style.span}>Seleccione la dirección a la cual se enviará su compra</div>
            <div className={style.containerCards}>
            {personalData ? (
                <div className={style.card}>
                  <div className={style.fila}>
                    <div className={style.text}>
                      <i class="fa-solid fa-house"></i> Mi dirección
                    </div>
                    <div>
                      {" "}
                      {personalData.address}, {personalData.city},{" "}
                      {personalData.country}{" "}
                    </div>

                    <div className="radio">
                            <div className={style.radio1}>
                                <input
                                  key = {personalData.id}
                                  type= 'radio'
                                  name= 'radio' 
                                  value= {["Mi domicilio", personalData.address, personalData.city, personalData.country]}
                                  onChange={e => handleChangeRadio(e)}
                                /> 
                            </div>
                        </div>
                    <div>

                      {" "}
                      <Link to={"/updateUserData"}>
                        <div className={style.pencil}>
                          <i class="fa-solid fa-pencil"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

            {addresses?.map((a, index) => (  

                 <div className={style.card}>
                    <div className={style.fila}>
                      <div className={style.text}><i className="fa-solid fa-house"></i>  {a.reference}</div>
                        <div>
                          {a.address}, {a.city}, {a.country}
                        </div>
                        <div className="radio">
                            <div className={style.radio1}>
                                <input
                                  id = {a.id}
                                  type= 'radio'
                                  name= 'radio' 
                                  value= {[a.reference, a.address, a.city, a.country]}
                                  onChange={e => handleChangeRadio(e)}
                                /> 
                            </div>
                        </div>
                      <Link to={`/updateAddres/${a.id}`}>
                        <div className={style.containerPencil}>
                          <i className= "fa-solid fa-pencil"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
               ))}    
            </div> 
            <div className={style.anadir} >
              <Link to="/userShippingAddress">
                <button className={style.button}>AÑADIR NUEVA DIRECCIÓN</button>
              </Link>
            </div>
            <div className={style.control} >
              <Link to="/resumeOrder">
                <button className={style.button}>VOLVER AL CARRITO</button>
              </Link>
              <Link to="/payment">
                <button className={style.button} onClick={handleConfirm} >CONFIRMAR</button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserAllAddressesOrder;
