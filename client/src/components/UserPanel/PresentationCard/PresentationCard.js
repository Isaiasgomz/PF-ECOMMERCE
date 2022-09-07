import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./PresentationCard.module.css";
import loadingLogo from "../../../imagenes/loading.png";
import { Link } from "react-router-dom";
import { getUserDetail } from "../../../Actions";
import { useAuth0 } from "@auth0/auth0-react";

function PresentationCard() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const info = useSelector((state) => state.userDetail.PersonalDatum);

  useEffect(() => {
    if(user?.email.length > 0) dispatch(getUserDetail(user.email));
  }, [user]);


  if (!info || !user) {
    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          <img className={style.img} src={loadingLogo} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.containerCart}>
        <div className={style.containerCart2}>
          <div className={style.productos}>
            <h2>Datos personales</h2>
          </div>
          <Link to={"/updateUserData"}>
            <div className={style.pencil}>
              <i class="fa-solid fa-pencil"></i>
            </div>
          </Link>
          <div className={style.container}>
            <div className={style.data}>
              <h6 className={style.title}>Nombre completo: {info.fullname}</h6>
              <h6 className={style.title}>Dirección: {info.address}</h6>
              <h6 className={style.title}>Ciudad: {info.city}</h6>
              <h6 className={style.title}>Pais: {info.country}</h6>
            </div>

            <div className={style.data}>
              <h6 className={style.title}>Correo: {user.email}</h6>
              <h6 className={style.title}>
                Departamento: {info.department}
              </h6>{" "}
              <br />
              <h6 className={style.title}>CP: {info.CP}</h6>
              <h6 className={style.title}>teléfono: {info.telephone}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PresentationCard;
