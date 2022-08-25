import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductDetailAdmin}  from "../../Actions"
import { productDisabled } from '../../Actions'
import { useHistory } from 'react-router-dom';
import styles from './AdminUpdate.module.css'


function AdminUpdate(props) {

  const history = useHistory()
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProductDetailAdmin(props.match.params.id))
  },[])
  
  
  
  // let  detail =  useSelector(state => state.adminProductDetail)
  




  const [product, setProduct] = useState({
      // productName:'',
      // price: '', 
      // image: '', 
      // description: '',
      // stock: '', 
      // category: '',
      // brand: '',
  })



  const handleInput = (e) =>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }


    const handleSubmit = (e)=>{
      e.preventDefault()
  

      dispatch(productDisabled(props.match.params.id,product))
      
      setProduct({
      productName: '',
      price:'', 
      image: '', 
      description: '',
      stock: '', 
      category: '',
      brand: '',
      })
       history.push('/adminProducts')
    }


  return (
    <div className={styles.productContainer}> Editar Product
    
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label htmlFor='productName'>Nombre</label>
        <input className={styles.formInput} type={'text'} placeholder={'Nombre'}
        name={'productName'} value={product.productName}
        onChange={(e)=> handleInput(e)} /><br/>


        <label htmlFor='price'>Precio</label>
        <input className={styles.formInput} type={'number'} placeholder={'Precio'}
         name={'price'} value={product.price}  id='product'
          onChange={(e)=> handleInput(e)} /><br/>


        <label htmlFor='image'>Imagen</label>
        <input className={styles.formInput} type={'text'} placeholder={'Imagen'}
        name={'image'} value={product.image} 
        onChange={(e)=> handleInput(e)} /><br/>

        <label htmlFor='description'>Description</label>
        <input className={styles.formInput} type={'text'} placeholder={'descripcion'}
        name={'description'} value={product.description} 
        onChange={(e)=> handleInput(e)} /><br/>


        <label htmlFor='stock'>Cantidad</label>
        <input className={styles.formInput}  type={'number'} placeholder={'Cantidad'} 
        name={'stock'} value={product.stock}  
        onChange={(e)=> handleInput(e)} /><br/>


        <label htmlFor='category'>Categoria</label>
        <input className={styles.formInput}  type={'text'} placeholder={'Categoria'} 
        name={'category'} value={product.category}  
        onChange={(e)=> handleInput(e)} /><br/>


        <label htmlFor='brand'>Marca</label>
        < input className={styles.formInput} type={'text'} placeholder={'Marca'}
         name={'brand'} value={product.brand}  
          onChange={(e)=> handleInput(e)}/><br/>


        <button type='submit'>Editar Producto</button>
      </form>
      

    </div>
  )
}


export default AdminUpdate