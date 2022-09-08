import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getUserDetail } from "../../../Actions/index.js";
import style from "./UserAllAddresses.module.css";
import loadingLogo from "../../../imagenes/loading.png";
import AllAddresessCard from "./AllAddresessCard.js";
import { useAuth0 } from "@auth0/auth0-react";

function UserAllAddresses() {
  const dispatch = useDispatch();

  const { user } = useAuth0();
  const addresses = useSelector((state) => state.userDetail.ShippingAddresses);

  const address = useSelector((state) => state.ShippingAddress);
  const personalData = useSelector((state) => state.userDetail.PersonalDatum);

  function filterAddress(e) {
    e.preventDefault();
    dispatch(getAddress(e.target.value));
  }

  useEffect(() => {
    if(user?.email.length>0) dispatch(getUserDetail(user.email))
  },[user])

 
  /* if (!user || !addresses || !personalData) {
    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          {<img className={style.img} src={loadingLogo} />}
        </div>
      </div>
    );
  } else { */
    return (
      <React.Fragment>
        <div className={style.containerForm}>
          <div className={style.container}>
            <div className={style.containerTitle}>
              <h2> Mis direcciones</h2>
            </div>

            <div className={style.span}>
              
            </div>
            <div className={style.containerCards}>
              {personalData ? (
                <div className={style.card}>
                  <div className={style.fila}>
                    <div className={style.text}>
                      <i className="fa-solid fa-house"></i> Mi dirección
                    </div>

                    {/* <div className={style.adress}> */}

                    <div className={style.spanText}>

                      {" "}
                      {personalData.address}, {personalData.city},{" "}
                      {personalData.country}{" "}
                    </div>
                    <div>
                      {" "}
                      <Link to={"/updateUserData"}>
                        <div className={style.pencil}>
                          <i className="fa-solid fa-pencil"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {addresses?.map((e, index) => (
                <AllAddresessCard
                  id={e.id}
                  reference={e.reference}
                  address={e.address}
                  city={e.city}
                  country={e.country}
                  key={index}
                  filterAddress={() => filterAddress(e.id)}
                  direccion= {e}
                />
              ))}
            </div>
            <div className={style.anadir}>
              <Link to="/userShippingAddress">
                <button className={style.button}>AÑADIR NUEVA DIRECCIÓN</button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  /* } */
}

export default UserAllAddresses;
