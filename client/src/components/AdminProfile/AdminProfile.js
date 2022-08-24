import React, { useEffect } from 'react'
import style from './AdminProfile.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetail} from "../../Actions";


function AdminProfile() { 

  const dispatch = useDispatch();

  const emailUser = useSelector(state => state.user.email)
    
  useEffect(() => {
    dispatch(getUserDetail(emailUser));
  }, []);

  const { userDetail } = useSelector((state) => state);
  console.log(userDetail);


  return (
    <div className={style.profileContainer}>
        <ul className={style.options}>
            <h4>Mi Perfil</h4>
        <img  className={style.imagen} src= 'https://avatars.githubusercontent.com/u/99367244?v=4' alt='profile'/>
  
        <li> Nombre: </li>
        {/* <li>{userDetail.fullname.split(' ').slice(0,1).join(' ')}</li> */}

        <li>Apellidos: </li>
        {/* <li>{userDetail.fullname.split(' ').slice(1).join(' ')} </li> */}

        <li>Email: </li>
        {/* <li>{userDetail.email}</li> */}

        </ul>
    </div>
  )
}

export default AdminProfile