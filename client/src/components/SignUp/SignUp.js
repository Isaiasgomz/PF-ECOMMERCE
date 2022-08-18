import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

function validate (input){
  const errors ={}
  if(!input.name){
    errors.name = 'El nombre es requerido'
  }
  if(!input.email){
    errors.email = 'El email es requerido'
  }
  if(!input.password){
    errors.password = 'El password es requerido'
  }
  return errors
}

function SignUp() {

  const dispatch = useDispatch()
  
  const [customer,setCustomer] = useState({
    name: '',
    email: '',
    password:'',
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


  const  handleSubmit = (e)=>{
    e.preventDefault()

    setCustomer({
    name: '',
    email: '',
    password:'',
    })
  }
  
  return (
    <div className="login">
    <div className="form-container">
      <h1 className="title">My account</h1>

      <form  className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>

          <label for="name" className="label">Name</label>
          <input type="text" 
          name='name' 
          value={customer.name} 
          id="name"
          placeholder="Name" 
          className="input input-name"
          onChange={(e) => handleInput(e)}/>


          <label for="email" className="label">Email</label>
          <input type="email"
          name='email'
          id="email" 
          value={customer.email}
          placeholder="user@example.com" 
          className="input input-email"
          onChange={(e) => handleInput(e)}/>


          <label for="password" className="label">Password</label>
          <input type="password" 
          name='password' 
          id="password" 
          value={customer.password}
          placeholder="*********" 
          className="input input-password"
           onChange={(e) => handleInput(e)}/>
        </div>


        <input type="submit" value="Create" className="primary-button login-button"/>
      </form>
    </div>
  </div>
    
  )
}

export default SignUp