import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postProduct } from "../../Actions";
import styles from './CreateProduct.module.css'


function validate (input){
  const errors = {}
  if(!input.productName){
    errors.productName = 'Es Nombre es requerido'
  }
  if(!input.price){
    errors.price = 'Es Precio es requerido'
  }
  if(!input.image){
    errors.image = 'La Imagen es requerida'
  }
  if(!input.description){
    errors.description = 'La Description es requerida'
  }
  if(!input.stock){
    errors.stock = 'La Cantidad es requerida' 
  }
  if(!input.category){
    errors.category = 'La Categoria es requerida'
  }
  if(!input.brand){
    errors.brand = 'La Marca es requerida'
  }
  return errors
}

function CreateProduct() {

  const AllProducts = useSelector(state => state.Products )

  

  const productByCategory = AllProducts.map(item => item.category)
  console.log(AllProducts)
 

  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    productName: '',
    price:'', 
    image: '', 
    description: '',
    stock: '', 
    category: '',
    brand:'',
    disabled:true,
  })

  const [errors, setErrors] = useState({})

  const handleInput = (e) =>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...product,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    dispatch(postProduct(product))
    console.log(product)
    
    setProduct({
    productName: '',
    price:'', 
    image: '', 
    description: '',
    stock: '', 
    category: '',
    brand: '',
    })

  }
  
  return (
    <div className={styles.productContainer}>CreateProduct
    
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label htmlFor='productName'>Nombre</label>
        <input className={styles.formInput} type={'text'} placeholder={'Nombre de Producto'}
         name={'productName'} value={product.productName}
          onChange={(e)=> handleInput(e)} /><br/>
                    {
            errors.productName && (
              <p className={styles.textError}>{errors.productName}</p>
          )}

        <label htmlFor='price'>Precio</label>
        <input className={styles.formInput} type={'number'} placeholder={'Precio'}
         name={'price'} value={product.price} 
          onChange={(e)=> handleInput(e)} /><br/>
          {
            errors.price && (
              <p className={styles.textError} >{errors.price}</p>
          )}

        <label htmlFor='image'>Imagen</label>
        <input className={styles.formInput} type={'text'} placeholder={'Imagen'}
        name={'image'} value={product.image} 
        onChange={(e)=> handleInput(e)} /><br/>
          {
            errors.image && (
              <p className={styles.textError} >{errors.image}</p>
          )}

        <label htmlFor='description'>Description</label>
        <input className={styles.formInput} type={'text'} placeholder={'descripcion'}
        name={'description'} value={product.description} 
        onChange={(e)=> handleInput(e)} /><br/>
          {
            errors.description && (
            <p className={styles.textError} >{errors.description}</p>
          )}

        <label htmlFor='stock'>Cantidad</label>
        <input className={styles.formInput}  type={'number'} placeholder={'Cantidad'} 
        name={'stock'} value={product.stock}  
        onChange={(e)=> handleInput(e)} /><br/>
        {
          errors.stock && (
            <p className={styles.textError} >{errors.stock}</p>
        )}
        
        <section>
          <option>selec category..</option>
          {
            productByCategory && productByCategory.map(item =>(
              <option>{item}</option>
            ))
          }
        </section>
        <br/>
          {
            errors.category && (
              < p className={styles.textError}>{errors.category}</p>
          )}

        <label htmlFor='brand'>Marca</label>
        < input className={styles.formInput} type={'text'} placeholder={'Marca'}
         name={'brand'} value={product.brand}  
          onChange={(e)=> handleInput(e)}/><br/>
          {
            errors.brand && (
              < p className={styles.textError}>{errors.brand}</p>
          )}

        <button type='submit'>Crear</button>
      </form>
      

    </div>
  )
}

export default CreateProduct