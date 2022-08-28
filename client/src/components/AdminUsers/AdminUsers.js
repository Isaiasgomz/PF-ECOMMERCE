import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUsersAdmin, userDisabled } from '../../Actions'
import style from './AdminUsers.module.css'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import AdminProfile from '../AdminProfile/AdminProfile'


    // CP: "70760"
    // UserEmail: "isaiasrobles2003@gmail.com"
    // address: "cosjoesa, San Pablo, Tehuantepec, Oaxaca, Mexico, Casa amarilla de 2 plantas, frente a un porton azul"
    // city: "Tehuantepec"
    // country: "México"
    // departament: null
    // fullname: "Isaias Gómez"
    // id: 1
    // shippingAddress: null
    // telephone: "9711638564"
// [[Prototype]]: Object
// admin: false
// createdAt: "2022-08-23T19:13:59.777Z"
// email: "isaiasrobles2003@gmail.com"
// status: "Autorizado"
// updatedAt: "2022-08-23T19:13:59.777Z"

function AdminUsers() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersAdmin())
  },[])

  const users = useSelector(state => state.usersAdmin)

  console.log(users)
  const usersBanned = users.filter(user => user.status !== 'Autorizado').length

  const handleDisabled = async (id, status)=>{
    // setCurrentPage(1)
    // const updatingProuduct = allProducts.find(p => p.id === id);
    let disabledUser;
    if(status === 'Autorizado'){
      disabledUser = {
        status: 'Disabled',
     }
    }else{
      disabledUser = {
        status: 'Autorizado',
     }
    }
    await dispatch(userDisabled(id,disabledUser));
    await dispatch(getUsersAdmin())
  }
      



return (
  <React.Fragment>
    <AdminSideBar></AdminSideBar>
    
  
    <AdminProfile></AdminProfile>
  <div className={style.productContainer}>
    <div className={style.infoConteiner}>


    <div className={style.infoProduct}>
      <div className={style.info}>
        <h3>{users.length}</h3>
        <p>Usuarios Activos</p>
      </div>
      <div  className={style.icon}>
        <i  className="fa-solid fa-trash-can"></i>
      </div>
    </div>

    <div className={style.infoProduct}>
      <div className={style.info}>
        <h3>{usersBanned}</h3>
        <p>Usuarios Desabilitados</p> 
      </div>
      <div className={style.icon}>
        <i  className="fa-solid fa-trash-can"></i>
      </div>
    </div>

    </div>
    
 
  

    <div className={style.headerContainer}>

    <ul>
      <li className={style.headerName}>Nombre</li>
      <li className={style.headerDescription}>Apellidos</li>
      <li className={style.headerBrand}>Correo</li>
      <li className={style.headerPrice}>Role</li>
      <li className={style.headerCount}>Estatus</li>
      <li className={style.headerDisabled}>Creado</li>
      <li className={style.headerActions}>Acciones</li>
    </ul>
    </div>
      {
      
      users.length >= 1 && users.map(item => (
        <ul >

          <div className={style.itemName}>
            <li > {item.PersonalDatum.fullname.split(' ').slice(0,1).join(' ')}</li>
          </div>

          <div className={style.items}>
            <li >  {item.PersonalDatum.fullname.split(' ').slice(1).join(' ')}</li>
          </div>

          <div className={style.itemBrand}>
            <li >  {item.email}</li>
          </div>

          <div className={style.itemStock}>
            <li >  {item.admin === false ? 'Customer' : 'Admin'}</li>
          </div>

          <div className={style.itemStock}> 
            <li >  {item.status  }</li>
          </div>

          <div className={style.itemCreated}>
            <li> {item.createdAt}</li>
          </div>
          <div className={style.itemActions}>

          <ul>
            <NavLink to={`/admin/createAdmin`}><i  className="fa-solid fa-trash-can"></i></NavLink>
            <i onClick={()=> handleDisabled(item.email, item.status)} className="fa-solid fa-trash-can"></i>
          </ul>
          </div>
          
        </ul>
      ))
    }
    </div>
    </React.Fragment>
  )
}

export default AdminUsers