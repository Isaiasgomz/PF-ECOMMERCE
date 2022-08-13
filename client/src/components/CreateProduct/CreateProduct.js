import React, { useState } from 'react'
import {postProduct} from '/client/src/Actions/index'
import {useDisptach} from 'react-redux'


function validate (input){
  const errors = {}
  if(!input.productName){
    errors.name = 'Es Nombre es requerido'
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
  if(!input.quantity){
    errors.quantity = 'La Cantidad es requerida' 
  }
  if(!input.category){
    errors.category = 'La Categoria es requerida'
  }
}

function CreateProduct() {

  const dispatch = useDisptach()

  const [product, setProduct] = useState({
    productName: '',
    price:'', 
    image: '', 
    description: '',
    quantity: '', 
    category: '',
  })

  cosnt [errors, setErrors] = useState({})

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

  const hanldeSubmit = (e)=>{
    e.preventDefault()

    dispatch(postProduct(product))
    
    setProduct({
    productName: '',
    price:'', 
    image: '', 
    description: '',
    quantity: '', 
    category: '',
    })

  }
  
  return (
    <div>CreateProduct
      <form onSubmit={()=> hanldeSubmit(e)}>
        <label for='productName'>Nombre</label>
        <input type={'text'} placeholder={'Nombre de Producto'}
         name={'productName'} value={product.name}
          onChange={()=> handleInput(e)} />
          {
            errors.name && (
              <p>{errors.name}</p>
          )}

        <label for='price'>Precio</label>
        <input type={'number'} placeholder={'Precio'}
         name={'price'} value={product.price} 
          onChange={()=> handleInput(e)} />
          {
            errors.price && (
              <p>{errors.price}</p>
          )}

        <label for='image'>Imagen</label>
        <input type={'text'} placeholder={'Imagen'}
        name={'image'} value={product.image} 
        onChange={()=> handleInput(e)} />
          {
            errors.image && (
              <p>{errors.image}</p>
          )}

        <label for='description'>Description</label>
        <input type={'text'} placeholder={'descripcion'}
        name={'description'} value={product.description} 
        onChange={()=> handleInput(e)} />
          {
            errors.description && (
            <p>{errors.description}</p>
          )}

        <label for='quantity'>Cantidad</label>
        <input type={'number'} placeholder={'Cantidad'} 
        name={'quantity'} value={product.quantity}  
        onChange={()=> handleInput(e)} />
        {
          errors.quantity && (
            <p>{errors.quantity}</p>
        )}
        <label for='category'>Categoria</label>
        < input type={'text'} placeholder={'Categoria'}
         name={'category'} value={product.category}  
          onChange={()=> handleInput(e)}/>
          {
            errors && (
              < p>{errors.category}</p>
          )}

        <button type="submit" value={'Crear Product'} />
      </form>

    </div>
  )
}

export default CreateProduct