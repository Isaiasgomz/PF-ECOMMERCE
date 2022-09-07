import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
import { getProductDetailAdmin, updatePrice } from "../../Actions";

import style from "./EditDiscount.module.css";

// brand: "Asus"
// category: "Keyboards"
// compatible: "false"
// createdAt: "2022-08-29T03:19:36.991Z"
// description: "1er teclado"
// disabled: false
// idProduct: 1
// image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31482_Teclado_Mecanico_ASUS_ROG_Strix_Scope_TKL_RGB_Cherry_Red_ac577937-grn.jpg"
// price: 18500
// productName: "Teclado Mecanico ASUS ROG Strix Scope TKL RGB Cherry Red"
// stock: 4
// updatedAt: "2022-08-29T03:19:36.991Z"

function onlyOne(value) {
  var x = document.getElementsByName("check");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].value !== value) x[i].checked = false;
  }
}

function EditDiscount(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const propsID = useParams().id;
  useEffect(() => {
    dispatch(getProductDetailAdmin(propsID));
  }, []);

  const detail = useSelector((state) => state.adminProductDetail);

  const [product, setProduct] = useState({
    price: "",
    reduction: 0,
  });

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
      price: detail.price - (detail.price / 100) * e.target.value,
    });
  };


    const handleSubmit = (e) => {
      e.preventDefault();

      const updatingPrice = {
        idProduct: propsID,
        price: detail.price,
        reduction: parseInt(product.reduction),
      };

      console.log(updatingPrice);
      dispatch(updatePrice(updatingPrice));

      setProduct({
        productName: "",
        price: "",
        image: "",
        description: "",
        stock: "",
        category: "",
        brand: "",
      });
      history.push("/adminProducts");
    };

    const handleCheckBoxSeason = (e) => {
      // if(e.target.checked){
      //     setInput({
      //         ...input,
      //         season:e.target.value
      //     })

      // }
      onlyOne(e.target.value);
    };

    return (
      <div className={style.containerAll}>
        <div className={style.container}>
          <div className={style.image}>
            <img
              src={detail.image}
              alt="imagenes_publicadas"
              width="300px"
              height="300px"
            />

          </div>
          <div className={style.containerText}>
            <span className={style.title}>{detail.productName}</span>

            <div className={style.infoProduct}>
              <span className={style.info}>Categoria: {detail.category}</span>
              <span className={style.info}>Marca: {detail.brand}</span>
              <span className={style.info}>stock: {detail.stock}</span>
              <span className={style.info}>Precio actual: {detail.price}</span>
              <span className={style.info}>
                Precio final con {product.reduction}% de descuento:{" "}
                {product.price}{" "}
              </span>
            </div>

            <div className={style.infoProduct}>
              <hr className={style.hr}></hr>
              <label>Porcentaje de descuento: </label>
              <input
                className={style.input}
                type="number"
                name="reduction"
                value={product.reduction}
                onChange={(e) => handleInput(e)}
              />

              <button
                className={style.button}
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Aplicar Descuento
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    }

export default EditDiscount;
