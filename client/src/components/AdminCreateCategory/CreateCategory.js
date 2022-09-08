import { FormGroup } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { postProduct, getAdminProducts } from "../../Actions";
import styles from './CreateCategory.module.css'


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
    errors.description = 'La Descripción es requerida'
  }
  if(!input.stock){
    errors.stock = 'La Cantidad es requerida' 
  }
  if(!input.category){
    errors.category = 'La Categoría es requerida'
  }
  if(!input.brand){
    errors.brand = 'La Marca es requerida'
  }
  return errors
}





function CreateCategory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdminProducts())
  },[])


  // const allProducts = useSelector(state => state.adminProducts)

 const history = useHistory();


  const [product, setProduct] = useState({
    productName: '',
    price:'', 
    image: '', 
    description: '',
    stock: '', 
    category: '',
    brand:'',

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

  //Cloudinary 
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = async (e) => {
    const files = e.target.files
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images")
    setLoading(true);
    
    const res = await axios.post (
        "https://api.cloudinary.com/v1_1/juliap/image/upload",
        data
    )

    console.log(res)
    setImage(res.data.secure_url)
    
    setProduct({
      ...product,
      image: res.data.secure_url
    });
    setErrors(validate({
      ...product,
      image:res.data.secure_url
    }))
    setLoading(false)
}
//ProductsController
// const imagesCloudinary = async (image) =>{
//          const files = image;
//         const data = new FormData(); //datos que vamos a recibir
//         data.append("file", files[0]);//los files q recibimos
//         data.append("upload_preset", "images") //la carpeta donde lo vamos a subir

//     const res = await axios.post (
//         "https://api.cloudinary.com/v1_1/juliap/image/upload",
//         data
//     )
//     return res.data.secure_url;
// }


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

    history.push("/adminProducts");
  }
  
  return (
    <div className={styles.containerForm}>

    
    <div className={styles.productContainer}>
    
      <form className={styles.form} onSubmit={(e)=> handleSubmit(e)}>
        <h2 className={styles.titleForm} >Crear producto</h2>
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
        <FormGroup>
        <input className={styles.formInput} type={'file'} placeholder={'Subir Imagen'}
        name={'file'} 
        onChange={(e)=> handleImage(e)} />
        {loading? (<h8>Cargando imágenes...</h8>) : <img src={image} style={{width: "300px"}}/> }
        <br/>
        </FormGroup>
          {
            errors.image && (
              <p className={styles.textError} >{errors.image}</p>
          )}

        <label htmlFor='description'>Descripción</label>
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

        <label htmlFor='category'>Categoría</label>
        <input className={styles.formInput}  type={'text'} placeholder={'Categoria'} 
        name={'category'} value={product.category}  
        onChange={(e)=> handleInput(e)} /><br/>
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

              <div className={styles.containerBtn}>

        <button className={styles.btn} type='submit'>Crear</button>
              </div>
      </form>
      

    </div>
    </div>
  )
}

export default CreateCategory