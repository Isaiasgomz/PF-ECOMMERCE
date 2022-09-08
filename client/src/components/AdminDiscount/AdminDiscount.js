import React, { useEffect, useState } from "react";
// import { BiPlusMedical } from 'react-icons';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getAdminProducts,
  getAdminProductByName,
  productDisabled,
} from "../../Actions";
import Paginado from "../Paginado/Paginado";
import style from "./AdminDiscount.module.css";

import { getUserDetail } from "../../Actions";

function AdminDiscount() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  useEffect( () => {

    if (Object.keys(user).length > 0) {
      dispatch(getUserDetail(user.email));
    }
  },[])

  let allProducts = useSelector((state) => state.adminProducts);
  let allProductsBackup = useSelector((state) => state.allAdminProducts);
  useEffect(() => {
    dispatch(getAdminProducts());
  }, []);



  const productsOutOfStock = allProductsBackup.filter(
    (product) => product.stock < 3
  );

  let [currentPage, setCurrentPage] = useState(1);
  let [ProductsPerPage, setProductsPerPage] = useState(6);
  let indexOfLastProduct = currentPage * ProductsPerPage;
  let indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  let currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const [product, setProduct] = useState("");

  const handleInput = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(getAdminProductByName(product));
    setCurrentPage(1);
    setProduct("");
  };


  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        {/* <AdminSideBar></AdminSideBar> */}
      </div>
      <div className={style.productContainer}>
        
        <div className={style.infoConteiner}>

          <button  className={style.infoButton}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{allProductsBackup.length}</h3>
              <p>Productos Con  Descuento</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckv}>
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
          </button>



            <button  className={style.infoButton}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsOutOfStock.length}</h3>
              <p>Productos Poco Stock</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckEx}>
              <i class="fa-solid fa-exclamation"></i>
              </div>
            </div>
          </div>
          </button>

        </div>

        <div className={style.containerNabvar}>



          <input
            className={style.searchBar}
            value={product}
            onChange={(e) => handleInput(e)}
            placeholder="Buscar Producto"
          ></input>
          <button 
            className={style.searchBarButton}
            onClick={(e) => handleSubmit(e)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>


        <div className={style.containerInfoTable}>
          <ul className={style.ul}>
            <div className={style.containHeadr}>
              <li className={style.header}>Nombre</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Descripción</li>
            </div>
            {/* <div className={style.containHeadr}>
              <li className={style.header}>Marc</li>
            </div> */}
            <div className={style.containHeadr}>
              <li className={style.header}> % Descuento</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Cantidad</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Precio</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>ID</li>
            </div>
            {/* <div className={style.containHeadr}>
              <li className={style.header}>Creado</li>
            </div> */}
            <div className={style.containHeadr}>
              <li className={style.header}>Acciones</li>
            </div>
          </ul>

          {currentProducts &&
            currentProducts.map((product) => (
              <div className={product.disabled? style.containercDisable : product.stock <= 0? style.containercAgotado : product.stock <= 3? style.containercLow : style.containerc}>
                <div className={style.containCardInfo}>
                  <p> {product.productName.split(" ").slice(0, 2).join(" ")}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.productName.split(" ").slice(2, 6).join(" ")}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> 0 % </p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.price}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.stock}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.idProduct}</p>
                </div>
                

                <div className={style.containerActions}>
                  <NavLink to={`/adminDiscount/editDiscount/${product.idProduct}`}>
                    <div className={style.containerPencil}>
                     <i class="fa-solid fa-pencil"></i>
                    </div>
                  </NavLink>
                  <div>
                  {
                    
                
                  }

                  </div>
                </div>
              </div>
            ))}
        </div>

        

        <div className={style.containerPaginate}>
          <Paginado
            ProductsPerPage={ProductsPerPage}
            allProducts={allProducts.length}
            paginado={setCurrentPage}
            currentPage={currentPage}
          />
        </div>

        
      </div>
    </div>
  );
}

export default AdminDiscount;
