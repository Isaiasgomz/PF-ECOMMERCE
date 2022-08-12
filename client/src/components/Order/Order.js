import React, { useState } from 'react'
// import useSelector from 'react-redux'
import {NavLink} from 'react-router-dom'

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
    <div>Order
      <h2>INOFRMACION DE CONTACTO</h2>
      <form>

      <input required='true' type="text" 
      placeholder='Name' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.name && (
        <p>{errors.name}</p>)
      }

      <input required='true' type="email" 
      placeholder='Email'
      onChange={(e) => handleInput(e)}></input>
      {
        errors.email && (
        <p>{errors.email}</p>)
      }

      <input required='true' type="text" 
      placeholder='Direccion'
      onChange={(e) => handleInput(e)}></input>
      {
        errors.direction && (
        <p>{errors.direction}</p>)
      }

      <input required='true' type="number" 
      placeholder='Departamento' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.departament && (
        <p>{errors.departament}</p>)
      }

      <input required='true' type="text"
       placeholder='Ciudad' 
       onChange={(e) => handleInput(e)}></input>
       {
        errors.city && (
        <p>{errors.city}</p>)
      }

      <input required='true' type="text" 
      placeholder='Pais' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.country && (
        <p>{errors.country}</p>)
      }

      <input required='true' type="text"
       placeholder='Estado' 
       onChange={(e) => handleInput(e)}></input>
       {
        errors.state && (
        <p>{errors.state}</p>)
      }

      <input required='true' type="number" 
      placeholder='Codigo Postal' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.cp && (
        <p>{errors.cp}</p>)
      }

      <input required='true' type="number" 
      placeholder='Telefono' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.telephone && (
        <p>{errors.telephone}</p>)
      }



      <NavLink to={'/checkout'}>

      <input type={'submit'}>Pagar</input>
      </NavLink>
      
      </form>

      <button>Regresar</button>


      <div>

      </div>
    </div>
  )
}

export default Order