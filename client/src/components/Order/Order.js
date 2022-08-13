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
      <label for='name'>Nombre</label>
      <input required='true' type="text" 
      name='name' value={input.name}
      placeholder='Camila Yokoo' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.name && (
        <p>{errors.name}</p>)
      }

      <label for='email'>Correo</label>
      <input required='true' type="email"
      name='email' value={input.email} 
      placeholder='user@email.com'
      onChange={(e) => handleInput(e)}></input>
      {
        errors.email && (
        <p>{errors.email}</p>)
      }

      <label for='direction'>Direccion</label>
      <input required='true' type="text" 
      name='direction' value={input.direction}
      placeholder='Direccion'
      onChange={(e) => handleInput(e)}></input>
      {
        errors.direction && (
        <p>{errors.direction}</p>)
      }

      <label for='departament'>Departamento</label>
      <input required='true' type="number" 
      name='departament' value={input.departament}
      placeholder='Departamento' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.departament && (
        <p>{errors.departament}</p>)
      }

      <label for='city'>Ciudad</label>
      <input required='true' type="text"
      name='country' value={input.country}
      placeholder='Ciudad' 
      onChange={(e) => handleInput(e)}></input>
       {
        errors.city && (
        <p>{errors.city}</p>)
      }
      <label for='country'>Pais</label>
      <input required='true' type="text"
      name='country' value={input.country} 
      placeholder='Pais' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.country && (
        <p>{errors.country}</p>)
      }

      <label for='state'>Estado</label>
      <input required='true' type="text"
      name='state' value={input.telephone}
      placeholder='Estado' 
      onChange={(e) => handleInput(e)}></input>
       {
        errors.state && (
        <p>{errors.state}</p>)
      }

      <label for='cp'>C.P.</label>
      <input required='true' type="number"
      name='cp' value={input.cp} 
      placeholder='Codigo Postal' 
      onChange={(e) => handleInput(e)}></input>
      {
        errors.cp && (
        <p>{errors.cp}</p>)
      }

      <label for='telephone'>Telefono</label>
      <input required='true' type="number"
      name='telephone' value={input.telephone}
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