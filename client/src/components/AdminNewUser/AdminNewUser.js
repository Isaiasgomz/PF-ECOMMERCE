import React, { useState } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import  {useDispatch, useSelector} from 'react-redux'
import {postUserData,postNewAdmin} from '../../Actions/index.js'
import styles from './AdminNewUser.module.css'

function validate (input){
  const errors = {}

  if(!input.fullname){
    errors.fullname = 'El nombre es requerido'
  }
  if(!input.email){
    errors.email = 'El email es requerido'
  }
  if(!input.address){
    errors.address = 'La direccion es requerida'
  }
  if(!input.city){
    errors.city = 'La ciudad es requerida'
  }
  if(!input.country){
    errors.country = 'El pais es requerido'
  }
  if(!input.CP){
    errors.CP = 'El codigo postal es requerido'
  }
  if(!input.telephone){
    errors.telephone = 'El numero de telefono es requerido'
  }

  return errors

}


function AdminNewUser() {
    const  dispatch = useDispatch()



  const  history = useHistory()


  const [input, setInput] = useState({
    fullname:'',
    email:'',
    address:'',
    city:'',
    country:'',
    CP:'',
    telephone:'',
  })

  const [errors, setErrors] = useState({})

  const handleInput= (e) =>{

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = async (e)=>{
    e.preventDefault()


    const newAdmin = {user:{
        email: input.email,
        admin:true
      }}
  
    await dispatch(postNewAdmin(newAdmin))

    await dispatch(postUserData(input.email,input))

    setInput({
    fullname:'',
    email:'',
    address:'',
    city:'',
    country:'',
    CP:'',
    telephone:'',
    })

    history.push('/adminUsers')
    
  }
  return (
    <div className={styles.productContainer}>
      <h2>Crear nuevo adminstrador</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='fullname'>Nombre</label>
      <input className={styles.formInput} required={true} type="text" 
      name='fullname' value={input.fullname}
      placeholder='Camila Yokoo' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.fullname && (
        <p className={styles.textError} >{errors.fullname}</p>)
      }

      <label htmlFor='email'>Correo</label>
      <input className={styles.formInput} required={true} type="email"
      name='email' value={input.email} 
      placeholder='user@email.com'
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.email && (
        <p className={styles.textError} >{errors.email}</p>)
      }

      <label htmlFor='address'>Direccion</label>
      <input className={styles.formInput} required={true} type="text" 
      name='address' value={input.address}
      placeholder='Direccion'
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.address && (
        <p className={styles.textError} >{errors.address}</p>)
      }

      <label htmlFor='departament'>Departamento</label>
      <input className={styles.formInput} required={true} type="number" 
      name='departament' value={input.departament}
      placeholder='Departamento' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.departament && (
        <p className={styles.textError} >{errors.departament}</p>)
      }

      <label htmlFor='city'>Ciudad</label>
      <input className={styles.formInput} required={true} type="text"
      name='city' value={input.city}
      placeholder='Ciudad' 
      onChange={(e) => handleInput(e)}/><br/>
       {
        errors.city && (
        <p className={styles.textError} >{errors.city}</p>)
      }
      <label htmlFor='country'>Pais</label>
      <input className={styles.formInput} required={true} type="text"
      name='country' value={input.country} 
      placeholder='Pais' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.country && (
        <p className={styles.textError} >{errors.country}</p>)
      }

      <label htmlFor='CP'>C.P.</label>
      <input className={styles.formInput} required={true} type="number"
      name='CP' value={input.CP} 
      placeholder='Codigo Postal' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.CP && (
        <p className={styles.textError} >{errors.CP}</p>)
      }

      <label htmlFor='telephone'>Telefono</label>
      <input className={styles.formInput} required={true} type="number"
      name='telephone' value={input.telephone}
      placeholder='Telefono' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.telephone && (
        <p className={styles.textError}>{errors.telephone}</p>)
      }



      
      <input type={'submit'} value={'Confirmar'} />
      
      
      </form>
{/* 
      <NavLink to={'/resumeOrder'}>
      <button>Regresar</button>
      </NavLink> */}


      <div>

      </div>
    </div>
  )
}

export default AdminNewUser