/* 
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductDetailAdmin } from "../../Actions";
import { productDisabled } from "../../Actions";
import axios from "axios";

import styles from "./AdminUpdate.module.css";

function AdminUpdate(props) {
  const history = useHistory();

  const dispatch = useDispatch();
  const propsID = useParams().id;
  useEffect(() => {
    dispatch(getProductDetailAdmin(propsID));
  }, []);




  const detail = useSelector(state => state.adminProductDetail)

  const [errors, setErrors] = useState({})
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


  const [product, setProduct] = useState({

  });

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(productDisabled(propsID, product));


    setProduct({
      productName: "",
      price: "",
      image: "",
      description: "",
      stock: "",
      category: "",
      brand: "",
    });
    history.push("/adminProducts");
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.productContainer}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2 className={styles.titleForm}>Editar producto</h2>
          <label htmlFor="productName">Nombre</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Nombre"}
            name={"productName"}
            value={product.productName}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="price">Precio</label>
          <input
            className={styles.formInput}
            type={"number"}
            placeholder={"Precio"}
            name={"price"}
            value={product.price}
            id="product"
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="image">Imagen</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Imagen"}
            name={"image"}
            value={product.image}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="description">Description</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"descripcion"}
            name={"description"}
            value={product.description}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="stock">Cantidad</label>
          <input
            className={styles.formInput}
            type={"number"}
            placeholder={"Cantidad"}
            name={"stock"}
            value={product.stock}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="category">Categoria</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Categoria"}
            name={"category"}
            value={product.category}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="brand">Marca</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Marca"}
            name={"brand"}
            value={product.brand}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <div className={styles.containerBtn}>
            <button className={styles.btn} type="submit">
              Editar Producto
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AdminUpdate;
 */
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getProductDetailAdmin } from "../../Actions"
import { productDisabled } from '../../Actions'
import { FormGroup } from '@mui/material';
import axios from 'axios';

import styles from './AdminUpdate.module.css'



function AdminUpdate(props) {

  const history = useHistory()

  const dispatch = useDispatch()
const propsID = useParams().id;
  useEffect(() => {
    dispatch(getProductDetailAdmin(propsID))
  }, [])



  const detail = useSelector(state => state.adminProductDetail)

  const [errors, setErrors] = useState({})
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


  const [product, setProduct] = useState({
    // productName:'',
    // price: '', 
    // image: '', 
    // description: '',
    // stock: '', 
    // category: '',
    // brand: '',
  })



  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()


    dispatch(productDisabled(propsID, product))

    setProduct({
      productName: '',
      price: '',
      image: '',
      description: '',
      stock: '',
      category: '',
      brand: '',
    })
    history.push('/adminProducts')
  }


  return (

    <div className={styles.containerAll} >


      <div className={styles.container}>

        <div className={styles.image}>
          {image === ""? 
          <img src={detail.image} alt="imagenes_publicadas" width='300px' height='300px' /> :
          loading? (<h8>Cargando imágenes...</h8>) : <img src={image} style={{width: "300px"}} alt={'product'}/> 
          }
          <span className={styles.title}>{detail.productName} </span>
        </div>
        <div className={styles.containerForm}>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>


            <div className={styles.divForm}>
              <span className={styles.info}>Nombre </span>
              <input className={styles.formInput} type={'text'} placeholder={detail.productName}
                name={'productName'} value={product.productName}
                onChange={(e) => handleInput(e)} />
            </div>

            <div className={styles.divForm}>
              <span className={styles.info}>Precio actual:  $</span>
              <input className={styles.formInput} type={'number'} placeholder={detail.price}
                name={'price'} value={product.price} id='product'
                onChange={(e) => handleInput(e)} />
            </div>

            <div className={styles.divForm}>
            <span className={styles.info}>Imagen </span>
        <FormGroup>
        <input className={styles.formInput} type={'file'} placeholder={'Subir Imagen'}
        name={'file'} 
        onChange={(e)=> handleImage(e)} />
        
        
        </FormGroup>
        </div>

            <div className={styles.divForm}>
              <label className={styles.info} htmlFor='description'>Descripción</label>
              <input className={styles.formInput} type={'text'} placeholder={'Editar Descripcion'}
                name={'description'} value={product.description}
                onChange={(e) => handleInput(e)} /></div>

            <div className={styles.divForm}>
              <span className={styles.info}>Stock: </span>
              <input className={styles.formInput} type={'number'} placeholder={detail.stock}
                name={'stock'} value={product.stock}
                onChange={(e) => handleInput(e)} /></div>

            <div className={styles.divForm}>
              <span className={styles.info}>Categoría: </span>
              <input className={styles.formInput} type={'text'} placeholder={detail.category}
                name={'category'} value={product.category}
                onChange={(e) => handleInput(e)} /></div>

            <div className={styles.divForm}>
              <span className={styles.info}>Marca:</span>
              < input className={styles.formInput} type={'text'} placeholder={detail.brand}
                name={'brand'} value={product.brand}
                onChange={(e) => handleInput(e)} /></div>

            <div className={styles.containerBtn}>
              <button className={styles.btn} type='submit'>Guardar Cambios</button>
              <Link to="/adminProducts"> 
              <button className={styles.btn}  >Volver</button>
              </Link>
            </div>
          </form>
        </div>


      </div>
    </div>
  )
}


export default AdminUpdate