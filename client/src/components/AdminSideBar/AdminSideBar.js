import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from "react-redux";
import style from './SideBar.module.css'

function AdminSideBar() {

  const { adminProfile } = useSelector((state) => state);

  return (
  <div>

        {
        Object.keys(adminProfile).length  > 0 && (
            <div className={style.containerSideBar}>
                  

                      <div className={style.containerTitleInfo}>
                      <img className={style.imagen} src={adminProfile.profile} alt={'profile'} />
                      <h3>{adminProfile.fullname}</h3>
                      <h2>Administrador</h2>
                      </div>
                      <div className={style.containerOptions}>

                      <NavLink className={style.li} to={'/adminDashboard'} ><div  className={style.items}><p >DASHBOARD</p></div>  </NavLink>
                      <NavLink className={style.li} to={'/adminProducts'} ><div className={style.items}><p>PRODUCTOS</p></div>  </NavLink>
                      <NavLink className={style.li} to={'/adminUsers'} ><div className={style.items}><p>USUARIOS</p></div>  </NavLink>
                      <NavLink className={style.li} to={'/adminOrders'} ><div className={style.items}><p>CATEGORIAS</p></div>  </NavLink>
                      <NavLink className={style.li} to={'/adminOrders'} ><div className={style.items}><p>ORDENES</p></div>  </NavLink>
                      
                      </div>
            </div>
          )
        }
  </div>



  )
}

export default AdminSideBar