import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getAdminProducts, getAdminProductByName} from "../../Actions"
import Paginado from '../Paginado/Paginado'
import style from './AdminProducts.module.css'

function AdminProducts() {
 const  dispatch = useDispatch()

 useEffect(() => {
  dispatch(getAdminProducts())
  },[])

 
const allProducts = useSelector(state => state.adminProducts)

const productsDisabled = allProducts.filter(product => product.disabled === true)

const productsDrained = allProducts.filter(product => product.stock === 0)


let [currentPage, setCurrentPage] = useState(1)
let [ProductsPerPage, setProductsPerPage] = useState(11)
let indexOfLastProduct = currentPage * ProductsPerPage
let indexOfFirstProduct= indexOfLastProduct - ProductsPerPage
let currentProducts = allProducts.slice(indexOfFirstProduct,indexOfLastProduct) 

const [product,setProduct] = useState('')

const handleInput = (e) => {
  setProduct(e.target.value)
}

const handleSubmit = (e) => {

  dispatch(getAdminProductByName(product))
  setCurrentPage(1)
  setProduct('')
}

const handleDisabled = (id)=>{
  dispatch()
}



return (
  <div className={style.productContainer}>
    <div className={style.infoConteiner}>

    <div className={style.infoProduct}>
      <div className={style.info}>
        <p>{allProducts.length - productsDisabled.length }</p>
        <p>Productos Habilitados</p>
      </div>
      <div className={style.icon}>
        <i  className="fa-solid fa-trash-can"></i>
      </div>
    </div>

    <div className={style.infoProduct}>
      <div className={style.info}>
        <p>{productsDisabled.length}</p>
        <p>Porductos Desabilitados</p>
      </div>
      <div  className={style.icon}>
        <i  className="fa-solid fa-trash-can"></i>
      </div>
    </div>

    <div className={style.infoProduct}>
      <div className={style.info}>
        <p>{productsDrained.length}</p>
        <p>Porductos Agotados</p> 
      </div>
      <div className={style.icon}>
        <i  className="fa-solid fa-trash-can"></i>
      </div>
    </div>

    </div>
    
    <div>
      <select>
        <option>Desabilitados</option>
        {
          productsDisabled && productsDisabled.map(product => (
            <option>{product.productName.split(' ').slice(0,2).join(' ')}</option>
          ))
        }
      </select>
      <select>
        <option>Agotados</option>
        {
          productsDrained && productsDrained.map(product => (
            <option>{product.productName.split(' ').slice(0,2).join(' ')}</option>
          ))
        }
      </select>
      <input value={product} onChange={(e) => handleInput(e)} placeholder='Buscar Producto'></input>
      <button onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>

    <div className={style.headerContainer}>

    <ul>
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
    {
      
      currentProducts && currentProducts.map(product => (
        <ul >

          <div className={style.itemName}>
            <li > {product.productName.split(' ').slice(0,2).join(' ')}</li>
          </div>

          <div className={style.items}>
            <li >  {product.productName.split(' ').slice(2,6).join(' ')}</li>
          </div>

          <div className={style.itemBrand}>
            <li >  {product.brand}</li>
          </div>

          <div className={style.itemPrice}>
            <li >  {product.price}</li>
          </div>

          <div className={style.itemStock}> 
            <li >  {product.stock}</li>
          </div>

          <div className={style.itemStock}>
            <li >  {product.disabled === false ? 'Si' : 'No'}</li>
          </div>

          <div className={style.itemStock}> 
            <li >  {product.idProduct}</li>
          </div>

          <div className={style.itemCreated}>
            <li> {product.createdAt}</li>
          </div>
          <ul>
            <button>Edi</button>
            <button onClick={()=> handleDisabled(product.idProduct)}>Des</button>
          </ul>
          
        </ul>
      ))
    }
          <Paginado  ProductsPerPage={ProductsPerPage} 
        allProducts={allProducts.length} 
        paginado={setCurrentPage}/>

        <NavLink to={'/createProduct'}><button>+</button></NavLink>
    </div>
  )
}

export default AdminProducts