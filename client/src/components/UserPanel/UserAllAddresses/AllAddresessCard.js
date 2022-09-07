import React from "react";
import style from "./AllAddresessCard.module.css";

import { Link } from "react-router-dom";

const AllAddresessCard = ({ reference, address, city, country, id }) => {
  return (
    <div className={style.card}>
      <div className={style.fila}>
        <div className={style.text}><i class="fa-solid fa-house"></i>  {reference}</div>

        <span className={style.spanText}>
          {address}, {city}, {country}
        </span>
        <Link to={`/updateAddres/${id}`}>
          <div className={style.containerPencil}>
            <i class="fa-solid fa-pencil"></i>
          </div>
          {/* <button className={style.button}> Editar </button> */}
        </Link>
      </div>
      {/* <div className={style.fila}>
     
      </div> */}
    </div>
  );
};

export default AllAddresessCard;
