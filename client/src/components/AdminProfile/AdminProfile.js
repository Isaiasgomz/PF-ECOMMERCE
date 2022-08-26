import React, { useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux";
import style from './AdminProfile.module.css'
import { getUserDetail } from "../../Actions";




function AdminProfile() {
  
  const dispatch = useDispatch()

  const { userDetail } = useSelector((state) => state);

  return (
    <div className={style.profileContainer}>
        <ul className={style.options}>
            <h4>Mi Perfil</h4>
        {/* <img  className={style.imagen} src={userDetail.PersonalDatum.profile} alt='profile'/> */}
  
        <li> Nombre: </li>
        <li>{userDetail.PersonalDatum.fullname.split(' ').slice(0,1).join(' ')}</li>

        <li>Apellidos: </li>
        <li>{userDetail.PersonalDatum.fullname.split(' ').slice(1).join(' ')} </li>

        <li>Email: </li>
        <li>{userDetail.email}</li>

        </ul>
    </div>
  )
}

export default AdminProfile