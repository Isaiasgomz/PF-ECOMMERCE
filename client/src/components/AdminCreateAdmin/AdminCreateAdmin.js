import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
 import  {postNewAdmin, postUserData}from '../../Actions'
 import {useHistory, UseHistory} from 'react-router-dom'
import style from './AdminCreateAdmin.module.css'

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

function AdminCreateAdmin() {
  const history = useHistory()

  const dispatch = useDispatch()
  
  const [customer,setCustomer] = useState({
    name: '',
    email: '',
    lastName:'',
    profile:'',
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

  const  handleSubmit =  async(e)=>{
    const input = {
    fullname:`${customer.name} ${customer.lastName}`,
    email:customer.email,
    address:'NO disponible',
    city:'NO disponible',
    country:'NO disponible',
    CP:'NO disponible',
    telephone:'NO disponible',
    }
    e.preventDefault()
    const newAdmin = {user:{
      email: customer.email,
      admin:true,
      profile: customer.profile
    }}

     await dispatch(postNewAdmin(newAdmin))

     await dispatch(postUserData(customer.email,input))


    setCustomer({
    name: '',
    email: '',
    lastName:'',
    profile:'',
    })
    history.push('/adminUsers')
  }
  
  return (
    <div className={style.login}>
    <div className={style.formContainer}>
      <h1 className={style.title}>Crear Admin</h1>

      <form  className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <div>

          <label for="name" className={style.label}>Name</label>
          <input type="text" 
          required= {true}
          name='name' 
          value={customer.name} 
          id="name"
          placeholder="Isaias" 
          className={style.input}
          onChange={(e) => handleInput(e)}/>
          

          <label for="lastName" className={style.label}>Apellidos</label>
          <input type="text" 
          required= {true}
          name='lastName' 
          id="password" 
          value={customer.lastName}
          placeholder="Gomez Robles" 
          className={style.input}
           onChange={(e) => handleInput(e)}/>

          <label for="email" className={style.label}>Email</label>
          <input type="email"
          required= {true}
          name='email'
          id="email" 
          value={customer.email}
          placeholder="user@example.com" 
          className={style.input}
          onChange={(e) => handleInput(e)}/>

          <label for="profile" className={style.label}>Perfil</label>
          <input type="text" 
          // required= {true}
          name='profile' 
          value={customer.profile} 
          id="profile"
          placeholder="Fotografia" 
          className={style.input}
          onChange={(e) => handleInput(e)}/>

          
        </div>


        <input type="submit" value="Crear" className={style.primaryButton}/>
      </form>
    </div>
  </div>
    
  )
}

export default AdminCreateAdmin