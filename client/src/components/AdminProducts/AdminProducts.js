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
import style from "./AdminProducts.module.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import { getUserDetail } from "../../Actions";

function AdminProducts() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  if (Object.keys(user).length > 0) {
    dispatch(getUserDetail(user.email));
  }

  let allProducts = useSelector((state) => state.adminProducts);
  let allProductsBackup = useSelector((state) => state.allAdminProducts);
  useEffect(() => {
    dispatch(getAdminProducts());
  }, []);

  const productsDisabled = allProductsBackup.filter(
    (product) => product.disabled === true
  );

  const productsDrained = allProductsBackup.filter(
    (product) => product.stock === 0
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

  const handleDisabled = async (id, status) => {
    // setCurrentPage(1)
    // const updatingProuduct = allProducts.find(p => p.id === id);
    let disabledProduct;
    if (status === true) {
      disabledProduct = {
        disabled: false,
      };
    } else {
      disabledProduct = {
        disabled: true,
      };
    }
    await dispatch(productDisabled(id, disabledProduct));
    await dispatch(getAdminProducts());
  };

  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        <AdminSideBar></AdminSideBar>
      </div>
      <div className={style.productContainer}>
        {/* <h2>Productos</h2> */}
        <div className={style.infoConteiner}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{allProductsBackup.length - productsDisabled.length}</h3>
              <p>Productos Habilitados</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckv}>
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          </div>

          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsDisabled.length}</h3>
              <p>Porductos Desabilitados</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckx}>
              <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>

          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsDrained.length}</h3>
              <p>Porductos Agotados</p>
            </div>
            <div className={style.icon}>
            <div className={style.containerCheckarrow}>
            <i class="fa-solid fa-arrow-trend-up"></i>
            </div>
            </div>
          </div>
        </div>

        <div className={style.containerNabvar}>
          <select>
            <option>Desabilitados</option>
            {productsDisabled &&
              productsDisabled.map((product) => (
                <option>
                  {product.productName.split(" ").slice(0, 2).join(" ")}
                </option>
              ))}
          </select>
          <select>
            <option>Agotados</option>
            {productsDrained &&
              productsDrained.map((product) => (
                <option>
                  {product.productName.split(" ").slice(0, 2).join(" ")}
                </option>
              ))}
          </select>
          <input
            value={product}
            onChange={(e) => handleInput(e)}
            placeholder="Buscar Producto"
          ></input>
          <button onClick={(e) => handleSubmit(e)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* <div className={style.headerContainer}>
          <ul className={style.ul}>
            <li className={style.headerName}>Nombre</li>
            <li className={style.headerDescription}>Descripcion</li>
            <li className={style.headerBrand}>Marca</li>
            <li className={style.headerPrice}>Precio</li>
            <li className={style.headerCount}>Cantidad</li>
            <li className={style.headerDisabled}>Habilitado</li>
            <li className={style.headerID}>ID</li>
            <li className={style.headerCreated}>Creado</li>
            <li className={style.headerActions}>Acciones</li>
          </ul>
        </div>
        {currentProducts &&
          currentProducts.map((product) => (
            <ul>
              <div className={style.itemName}>
                <li> {product.productName.split(" ").slice(0, 2).join(" ")}</li>
              </div>

              <div className={style.items}>
                <li> {product.productName.split(" ").slice(2, 6).join(" ")}</li>
              </div>

              <div className={style.itemBrand}>
                <li> {product.brand}</li>
              </div>

              <div className={style.itemPrice}>
                <li> {product.price}</li>
              </div>

              <div className={style.itemStock}>
                <li> {product.stock}</li>
              </div>

              <div className={style.itemStock}>
                <li> {product.disabled === false ? "Si" : "No"}</li>
              </div>

              <div className={style.itemStock}>
                <li> {product.idProduct}</li>
              </div>

              <div className={style.itemCreated}>
                <li> {product.createdAt}</li>
              </div>
              <ul>
                <NavLink to={`/admin/update/${product.idProduct}`}>
                  <i className="fa-solid fa-trash-can"></i>
                </NavLink>
                <i
                  onClick={() =>
                    handleDisabled(product.idProduct, product.disabled)
                  }
                  className="fa-solid fa-trash-can"
                ></i>
              </ul>
            </ul>
          ))} */}

        <div className={style.containerInfoTable}>
          <ul className={style.ul}>
            <div className={style.containHeadr}>
              <li className={style.header}>Nombre</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Descripcion</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Marca</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Precio</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Cantidad</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Habilitado</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>ID</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Creado</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Acciones</li>
            </div>
          </ul>

          {currentProducts &&
            currentProducts.map((product) => (
              <div className={style.containerc}>
                <div className={style.containCardInfo}>
                  <p> {product.productName.split(" ").slice(0, 2).join(" ")}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.productName.split(" ").slice(2, 6).join(" ")}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.brand}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.price}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.stock}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.disabled === false ? "Si" : "No"}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.idProduct}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {product.createdAt}</p>
                </div>

                <div className={style.containerActions}>
                  <NavLink to={`/admin/update/${product.idProduct}`}>
                    <div className={style.containerPencil}>
                     <i class="fa-solid fa-pencil"></i>
                    </div>
                  </NavLink>
                  <div>
                  <i onClick={() => handleDisabled(product.idProduct, product.disabled)} class="fa-solid fa-trash-can"></i>
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
          />
        </div>

        <div className={style.containerButtonCreate}>
          <NavLink  className={style.link} to={"/createProduct"}>
            <div className={style.containerIcon}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
