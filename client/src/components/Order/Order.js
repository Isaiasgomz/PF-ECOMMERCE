import React, { useState } from 'react'
// import useSelector from 'react-redux'
import {NavLink} from 'react-router-dom'
import styles from './Order.module.css'

function validate (input){
  const errors = {}

  if(!input.name){
    errors.name = 'El nombre es requerido'
  }
  if(!input.email){
    errors.name = 'El email es requerido'
  }
  if(!input.direction){
    errors.name = 'La direccion es requerida'
  }
  if(!input.departament){
    errors.name = 'El numero de departamento es requerido'
  }
  if(!input.city){
    errors.name = 'La ciudad es requerida'
  }
  if(!input.country){
    errors.name = 'El pais es requerido'
  }
  if(!input.state){
    errors.name = 'El nombre del estado es requerido'
  }
  if(!input.cp){
    errors.name = 'El codigo postal es requerido'
  }
  if(!input.telephone){
    errors.name = 'El numero de telefono es requerido'
  }

  return errors

}

function Order() {

  const [input, setInput] = useState({
    name:'',
    email:'',
    direction:'',
    departament:'',
    city:'',
    country:'',
    state:'',
    cp:'',
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

  return (
    <div className={styles.productContainer}>
      <h2>INOFRMACION DE CONTACTO</h2>
      <form>
      <label htmlFor='name'>Nombre</label>
      <input className={styles.formInput} required={true} type="text" 
      name='name' value={input.name}
      placeholder='Camila Yokoo' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.name && (
        <p className={styles.textError} >{errors.name}</p>)
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

      <label htmlFor='direction'>Direccion</label>
      <input className={styles.formInput} required={true} type="text" 
      name='direction' value={input.direction}
      placeholder='Direccion'
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.direction && (
        <p className={styles.textError} >{errors.direction}</p>)
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
      name='country' value={input.country}
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

      <label htmlFor='state'>Estado</label>
      <input className={styles.formInput} required={true} type="text"
      name='state' value={input.telephone}
      placeholder='Estado' 
      onChange={(e) => handleInput(e)}/><br/>
       {
        errors.state && (
        <p className={styles.textError} >{errors.state}</p>)
      }

      <label htmlFor='cp'>C.P.</label>
      <input className={styles.formInput} required={true} type="number"
      name='cp' value={input.cp} 
      placeholder='Codigo Postal' 
      onChange={(e) => handleInput(e)}/><br/>
      {
        errors.cp && (
        <p className={styles.textError} >{errors.cp}</p>)
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



      <NavLink to={'/checkout'}>
      <input type={'submit'} value={'Confirmar'} />
      </NavLink>
      
      </form>

      <NavLink to={'/home'}>
      <button>Regresar</button>
      </NavLink>


      <div>

      </div>
    </div>
  )
}

export default Order