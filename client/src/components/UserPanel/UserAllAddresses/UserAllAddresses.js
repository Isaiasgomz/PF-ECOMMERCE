import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getUserDetail } from "../../../Actions/index.js";
import style from "./UserAllAddresses.module.css";
import loadingLogo from "../../../imagenes/loading.png";
import AllAddresessCard from "./AllAddresessCard.js";

function UserAllAddresses() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.email);
  const addresses = useSelector((state) => state.userDetail.ShippingAddresses);

  const address = useSelector((state) => state.ShippingAddress);
  const [loading, setLoading] = useState(true);

  function filterAddress(e) {
    e.preventDefault();
    dispatch(getAddress(e.target.value));
  }

  useEffect(() => {
    if(user?.length>0) dispatch(getUserDetail(user))
  },[dispatch])

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

            <div className={style.span}>Seleccione la dirección que quiere ver y/o editar</div>
            <div className={style.containerCards}>
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
            <div className={style.anadir} >
              <Link to="/userShippingAddress">
                <button className={style.button}>AÑADIR NUEVA DIRECCION</button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserAllAddresses;
