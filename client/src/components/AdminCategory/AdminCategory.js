import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from './AdminCategory.module.css'
import {NavLink} from 'react-router-dom'
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import {getAdminProducts} from "../../Actions";
import PaginadoCategory from './PaginadoCategory'


function AdminCategory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdminProducts());
  },[])

  let allProductsBackup = useSelector((state) => state.allAdminProducts);
  const allCategory = allProductsBackup.map(product => product.category)

  const categoryFilter = []
  allCategory.forEach(category => {
    if(!categoryFilter.includes(category)){
      categoryFilter.push(category)
    }
  })

   let [currentPage, setCurrentPage] = useState(1);
  let [categoryPerPage, setCategoryPerPage] = useState(6);
  let indexOfLastCategory = currentPage * categoryPerPage;
  let indexOfFirstCategory= indexOfLastCategory - categoryPerPage;
  let currentCategory = categoryFilter.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  return (
    <div className={style.containerAll}>


    <div className={style.productContainer}>
      <div className={style.containerInfoTable}>
          <ul className={style.ul}>
            <div className={style.containHeadr}>
              <li className={style.header}>Categoria</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Habilitados</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Desabilitados</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Agotados</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Total</li>
            </div>
          </ul>

          {currentCategory &&
            currentCategory.map((product) => (
              <div className={style.containerc}>
                <div className={style.containCardInfo}>
                  <p> {product}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {allProductsBackup.filter(item => item.category === product && item.disabled === false).length}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {allProductsBackup.filter(item => item.category === product && item.disabled === true).length}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {allProductsBackup.filter(item => item.category === product && item.stock === 0).length}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {allProductsBackup.filter(item => item.category === product ).length}</p>
                </div>
              </div>
            ))}
        </div>

        <div className={style.containerButtonCreate}>
          <NavLink  className={style.link} to={"/createCategory"}>
            <div className={style.containerIcon}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </NavLink>
        </div>

      <div className={style.containerPaginate}>
        <PaginadoCategory
        categoryPerPage={categoryPerPage}
        allCategory={categoryFilter.length}
        paginado={setCurrentPage}/>
      </div>

      </div>

    </div>
  )
}

export default AdminCategory