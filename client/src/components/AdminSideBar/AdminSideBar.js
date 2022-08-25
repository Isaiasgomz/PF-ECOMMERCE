import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from "react-redux";
import style from './SideBar.module.css'

function AdminSideBar() {
  const dispatch = useDispatch()

  const { userDetail } = useSelector((state) => state);
  return (
    <div className={style.containerSideBar}>

        <ul className={style.options}>
        {/* <img className={style.imagen} src={userDetail.PersonalDatum?.profile} /> */}
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