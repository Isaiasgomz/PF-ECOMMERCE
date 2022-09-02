import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {getProductDetailAdmin}  from "../../Actions"
import style from './EditDiscount.module.css'

// brand: "Asus"
// category: "Keyboards"
// compatible: "false"
// createdAt: "2022-08-29T03:19:36.991Z"
// description: "1er teclado"
// disabled: false
// idProduct: 1
// image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31482_Teclado_Mecanico_ASUS_ROG_Strix_Scope_TKL_RGB_Cherry_Red_ac577937-grn.jpg"
// price: 18500
// productName: "Teclado Mecanico ASUS ROG Strix Scope TKL RGB Cherry Red"
// stock: 4
// updatedAt: "2022-08-29T03:19:36.991Z"

function onlyOne(value){
    var x = document.getElementsByName('check');
    var i;
    for (i = 0; i < x.length; i++) {
      if(x[i].value !==  value) x[i].checked = false;}
    
    }

function EditDiscount(props) {

    const history = useHistory()
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProductDetailAdmin(props.match.params.id))
  },[])

    const  detail =  useSelector(state => state.adminProductDetail)

    console.log(detail)


    const [product, setProduct] = useState({
        price:'',
        reduction: '',
        
    })
  
  
  
    const handleInput = (e) =>{
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
        price:detail.price - ((detail.price/100) * e.target.value)
      })
    }
    
    console.log(product)
  
      const handleSubmit = (e)=>{
        e.preventDefault()
    
  
        dispatch()
        
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
  

      const handleCheckBoxSeason = (e) =>{
       
        // if(e.target.checked){
        //     setInput({
        //         ...input,
        //         season:e.target.value
        //     })
        
        // }
        onlyOne(e.target.value)
     }
  

  return (
    <div className={style.container}>
      <div className={style.image}>

        <img src={detail.image} alt="imagenes_publicadas" width='300px' height='300px' />
      </div>
        <div>
            <p>{detail.productName}</p>
            <p>Marca: {detail.brand}</p>
            <p>Categoria: {detail.category}</p>
            <div>

            <label > Activar Descuento</label><br/>
            <label className='text-input'> SI
            <input className={style.season} type={'checkbox'}
            name={'check'}
            value={'Primavera'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            <label> NO
            <input className={style.season}
            type={'checkbox'}
            name={'check'}
            value={'Verano'}
            onChange={(e)=> handleCheckBoxSeason(e)}/>
            </label>

            </div>
            <p>Precio Actual: {detail.price}</p>

        
        <input type='number' name='reduction' value={product.reduction} onChange={(e) => handleInput(e)}/>
        <p> precio Final con {product.reduction} % de Descuento: {product.price} </p>
        
        </div>


    </div>
  )  
}

export default EditDiscount