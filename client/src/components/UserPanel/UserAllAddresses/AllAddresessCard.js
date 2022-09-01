import React from "react";
import { Link } from "react-router-dom";

const AllAddresessCard = ({ reference, address, city, country }) => {
  return (
    <div>
      <div>{reference}</div>
      <div>
        {address}, {city}, {country}
      </div>
      <div>
      <Link>
        <button> Editar </button>
      </Link>
      </div>
      <div>
        <input type="checkbox" id="cbox1" value="first_checkbox">
          Direccion de envio predeterminada
        </input>
      </div>
    </div>
  );
};
