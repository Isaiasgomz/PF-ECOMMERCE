import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllQuestions } from '../../Actions';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import Paginado from '../Paginado/Paginado';
import style from './AdminQuestions.module.css';





function AdminQuestions() {
  const dispatch = useDispatch()
  const allQuestions = useSelector(state => state.allQuestions)
  const AllProducts = useSelector(state => state.AllProducts)

  useEffect(() => {
    dispatch(getAllQuestions())
  }, [])

  const products = allQuestions.map(e =>{
    for (let i = 0; i < AllProducts.length; i++) {
      if(e.ProductIdProduct===AllProducts[i].idProduct){
        return {
          idProduct:AllProducts[i].idProduct,
          productName:AllProducts[i].productName,
          id:e.id,
          question:e.question,
          date:e.date,
          UserEmail:e.UserEmail,
          status: e.status

        }
      }      
    }
  } )
  let [currentPage, setCurrentPage] = useState(1);
  let [ProductsPerPage, setProductsPerPage] = useState(6);
  let indexOfLastProduct = currentPage * ProductsPerPage;
  let indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  let currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className={style.containerAll}>
      

      <div className={style.productContainer}>
        <div className={style.containerInfoTable}>
          <ul className={style.ul}>
            <div className={style.containHeadr}>
              <li className={style.header}>Usuario</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Pregunta</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Fecha</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Id Producto</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Producto</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Estado</li>
            </div>
            <div className={style.containHeadr}>
              <li className={style.header}>Acciones</li>
            </div>
            
          </ul>

          {currentProducts.length > 0 &&
            currentProducts.map((quest,index) => (
              <div key={index} className={quest?.status==="No vista"? 
              style.containercNoVista : quest?.status==="En espera" ? 
              style.containerCenEspera :style.containerc}>
                 
                <div className={style.containCardInfo}>
                  <p> {quest?.UserEmail}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {quest?.question.slice(0,20)}...</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {quest?.date}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {quest?.idProduct}</p>
                </div>
                <div className={style.containCardInfo}>
                  <p> {quest?.productName.slice(0,20)}...</p>
                </div>
                <div className={style.containCardInfo}>
                  <p>{quest?.status} </p>
                </div>
                <div className={style.containerActions}>
                  <NavLink to={`/adminPreguntas/update/${quest?.id}`}>
                    <div className={style.containerPencil}>
                      <i className="fa-solid fa-pencil"></i>
                    </div>
                  </NavLink>
                </div>
                
                
              </div>

            ))}
        </div>

        <div className={style.containerPaginate}>
          <Paginado
            ProductsPerPage={ProductsPerPage}
            allProducts={allQuestions.length}
            paginado={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>

  )
}

export default AdminQuestions