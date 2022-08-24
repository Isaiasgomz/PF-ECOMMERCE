
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './SideBar.module.css'

function AdminSideBar() {
  return (
    <div className={style.containerSideBar}>

        <ul className={style.options}>
        <img className={style.imagen} src= 'https://avatars.githubusercontent.com/u/99367244?v=4' />
        <h3>Isaias Gomez</h3>
        <h2>Administrador</h2>
        <NavLink className={style.items} to={'/'} > <li >DASHBOARD</li> </NavLink>
        <NavLink className={style.items} to={'/adminProducts'} > <li>PRODUCTOS</li> </NavLink>
        <NavLink className={style.items} to={'/adminUsers'} > <li>USERS</li> </NavLink>
        <NavLink className={style.items} to={'/'} > <li>CATEGORIAS</li> </NavLink>
        </ul>
    </div>
  )
}

export default AdminSideBar