import React, { useEffect, useState } from "react";
// import { BiPlusMedical } from 'react-icons';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getAdminProducts,
  getAdminProductByName,
  productDisabled,
  adminProduct,
} from "../../Actions";
import Paginado from "../Paginado/Paginado";
import style from "./AdminProducts.module.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import { getUserDetail } from "../../Actions";

function AdminProducts() {
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

  const productsDisabled = allProductsBackup.filter(
    (product) => product.disabled === true
  );

  const productsDrained = allProductsBackup.filter(
    (product) => product.stock === 0
  );

  const productsOutOfStock = allProductsBackup.filter(
    (product) => product.stock < 3
  );

  const productsDiscount = allProductsBackup.filter(
    (product) => product.reduction > 0
    
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

  const filterProductByIconGreen = () =>{
   let currentProducts2 = allProducts.filter(e => e.disabled !== true &&  e.stock > 3 )
    dispatch(adminProduct(currentProducts2))
 }

  /* const filterProductByIconGreen = () =>{
    dispatch(adminProduct(allProductsBackup))  
  } */
  const filterProductByIconBlue = () =>{
      
    dispatch(adminProduct(productsDisabled))
     
  }
  const filterProductByIconRed = () =>{
    dispatch(adminProduct(productsDrained))
    
  }
  const filterProductByIconYellow = () =>{
    dispatch(adminProduct(productsOutOfStock)) 
     
  }

  const filterProductByIconDiscount = () =>{
    dispatch(adminProduct(productsDiscount))  
    
 }


  

  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        {/* <AdminSideBar></AdminSideBar> */}
      </div>
      <div className={style.productContainer}>
        
        <div className={style.infoConteiner}>

          <button onClick={filterProductByIconGreen} className={style.infoButton}>
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
          </button>

          <button onClick={filterProductByIconDiscount} className={style.infoButton}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsDiscount.length}</h3>
              <p>Productos con Descuento</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckD}>
                <i class="fa-solid fa-percent"></i>
              </div>
            </div>
          </div>
          </button>

          <button  onClick={filterProductByIconBlue} className={style.infoButton}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsDisabled.length}</h3>
              <p>Productos Deshabilitados</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckx}>
              <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>
          </button>


                  <button onClick={filterProductByIconRed} className={style.infoButton}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{productsDrained.length}</h3>
              <p>Productos Agotados</p>
            </div>
            <div className={style.icon}>
            <div className={style.containerCheckarrow}>
            <i class="fa-solid fa-arrow-trend-up"></i>
            </div>
            </div>
          </div>
          </button>
                  <button onClick={filterProductByIconYellow} className={style.infoButton}>
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
          <select className={style.searchBar}>
            <option>Desabilitados</option>
            {productsDisabled &&
              productsDisabled.map((product) => (
                <option>
                  {product.productName.split(" ").slice(0, 2).join(" ")}
                </option>
              ))}
          </select>
          <select className={style.searchBar}>
            <option>Agotados</option>
            {productsDrained &&
              productsDrained.map((product) => (
                <option>
                  {product.productName.split(" ").slice(0, 2).join(" ")}
                </option>
              ))}
          </select>
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
              <div className={product.disabled? style.containercDisable : product.stock <= 0? style.containercAgotado : product.stock <= 3? style.containercLow : product.reduction > 0? style.containercDiscount : style.containerc}>
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
                  {
                    
                  product.disabled?
                  <div className={style.actionDisable}>
                  <i onClick={() => handleDisabled(product.idProduct, product.disabled)} className="fa-solid fa-arrow-rotate-left"></i>
                  </div>
                    :
                  <div className={style.actionNotDisable}>
                    
                    <i onClick={() => handleDisabled(product.idProduct, product.disabled)} className="fa-solid fa-trash"></i>
                  </div>
                  }

                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className={style.containerButtonCreate}>
          <NavLink  className={style.link} to={"/createProduct"}>
            <div className={style.containerIcon}>
            <i class="fa-solid fa-plus"></i>
              
            </div>
          </NavLink>
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

export default AdminProducts;
