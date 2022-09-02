import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getUserDetail } from "../../../Actions/index.js";
import UserPanel from "../UserPanel";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";
import style from "./UserAllAddresses.module.css";
import loadingLogo from "../../../imagenes/loading.png";
import AllAddresessCard from "./AllAddresessCard.js";

function UserAllAddresses() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.email);
  // "email": "anajuliaa.22.jp@gmail.com",
  const addresses = useSelector((state) => state.userDetail.ShippingAddresses);
  // "ShippingAddresses": [
  //     {
  //       "id": 1,
  //       "reference": "Amiga",
  //       "address": "o'higgins 440",
  //       "department": "0",
  //       "city": "Mendoza",
  //       "CP": "5547",
  //       "country": "Argentina",
  //       "telephone": "23545657",
  //       "UserEmail": "anajuliaa.22.jp@gmail.com"
  //     },
  //     {
  //       "id": 2,
  //       "reference": "amiga",
  //       "address": "Avenida San Martin",
  //       "department": "0",
  //       "city": "Mendoza",
  //       "CP": "5547",
  //       "country": "Argentina",
  //       "telephone": "23545657",
  //       "UserEmail": "anajuliaa.22.jp@gmail.com"
  //     }
  //   ],
  const address = useSelector((state) => state.ShippingAddress);
  console.log(address);
  const [loading, setLoading] = useState(true);
  const [dropDown, setDropDown] = useState(false);

  const openCloseDropDown = () => {
    setDropDown(!dropDown);
  };

  function filterAddress(e) {
    console.log("filter addres");
    e.preventDefault();
    console.log(e.target.value);
    dispatch(getAddress(e.target.value));
  }
  const history = useHistory();
  /*   
     useEffect(() => {
        if(user?.length>0)dispatch(getUserDetail(user));    
    }, [addresses]); */

  setTimeout((loading) => {
    setLoading(false);
  }, 2000);
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
