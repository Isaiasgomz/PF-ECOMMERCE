import React from 'react'
import { useSelector} from "react-redux";
import style from './AdminProfile.module.css';




function AdminProfile() {
 

  const { adminProfile } = useSelector((state) => state);

  

  return (
    <div className={style.profileContainer}>
      {
        Object.keys(adminProfile).length  > 0 && (
          <ul className={style.options}>
            <h4>Mi Perfil</h4>

        {/* <img  className={style.imagen} src={userDetail.PersonalDatum.profile} alt='profile'/> */}

        <img  className={style.imagen} src={adminProfile.profile} alt='profile'/>

  
        <li> Nombre: </li>
        <li>{adminProfile.fullname.split(' ').slice(0,1).join(' ')}</li>

        <li>Apellidos: </li>
        <li>{adminProfile.fullname.split(' ').slice(1).join(' ')} </li>

        <li>Email: </li>
        <li>{adminProfile.email}</li>

        </ul>
        )
      }
        
    </div>
  )
}

export default AdminProfile