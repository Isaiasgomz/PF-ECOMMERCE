import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
 import  {postNewAdmin}from '../../Actions'
// import style from './SignUp.css'

function validate (input){
  const errors ={}
  if(!input.name){
    errors.name = 'El nombre es requerido'
  }
  if(!input.email){
    errors.email = 'El email es requerido'
  }
  if(!input.lastName){
    errors.lastName = 'Los Apellidos es requerido'
  }
  return errors
}

function SignUp() {

  const dispatch = useDispatch()
  
  const [customer,setCustomer] = useState({
    name: '',
    email: '',
    lastName:'',
  })

  const [errors,setErrors] = useState({})

 

  const handleInput = (e) =>{
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...customer,
      [e.target.name]: e.target.value
    }))
  }
  // {"user":{
  //   "email": "isaiasgomz@gmail.com",
  //   "admin":true
  //   }}

  const  handleSubmit = (e)=>{
    e.preventDefault()
    const newAdmin = {user:{
      email: customer.email,
      admin:true
    }}

    dispatch(postNewAdmin(newAdmin))


    setCustomer({
    name: '',
    email: '',
    lastName:'',
    })
  }
  
  return (
    <div className="login">
    <div className="form-container">
      <h1 className="title">Crear Admin</h1>

      <form  className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>

          <label for="name" className="label">Name</label>
          <input type="text" 
          required= {true}
          name='name' 
          value={customer.name} 
          id="name"
          placeholder="Isaias" 
          className="input input-name"
          onChange={(e) => handleInput(e)}/>
          

          <label for="lastName" className="label">Apellidos</label>
          <input type="text" 
          required= {true}
          name='lastName' 
          id="password" 
          value={customer.lastName}
          placeholder="Gomez Robles" 
          className="input input-password"
           onChange={(e) => handleInput(e)}/>

          <label for="email" className="label">Email</label>
          <input type="email"
          required= {true}
          name='email'
          id="email" 
          value={customer.email}
          placeholder="user@example.com" 
          className="input input-email"
          onChange={(e) => handleInput(e)}/>


          
        </div>


        <input type="submit" value="Crear" className="primary-button login-button"/>
      </form>
    </div>
  </div>
    
  )
}

export default SignUp