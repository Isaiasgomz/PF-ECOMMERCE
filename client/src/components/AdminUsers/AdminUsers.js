import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUsersAdmin, userDisabled } from "../../Actions";
import style from "./AdminUsers.module.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminProfile from "../AdminProfile/AdminProfile";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAdmin());
  }, []);

  const users = useSelector((state) => state.usersAdmin);

  const usersBanned = users.filter(
    (user) => user.status !== "Autorizado"
  ).length;

  const handleDisabled = async (id, status) => {
    // setCurrentPage(1)
    // const updatingProuduct = allProducts.find(p => p.id === id);
    let disabledUser;
    if (status === "Autorizado") {
      disabledUser = {
        status: "Disabled",
      };
    } else {
      disabledUser = {
        status: "Autorizado",
      };
    }
    await dispatch(userDisabled(id, disabledUser));
    await dispatch(getUsersAdmin());
  };

  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        <AdminSideBar></AdminSideBar>
      </div>
      <div className={style.containerAdminProfile}>
        <AdminProfile></AdminProfile>
      </div>

      <div className={style.productContainer}>
        <div className={style.infoConteiner}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{users.length}</h3>
              <p>Usuarios Activos</p>
            </div>
            <div className={style.icon}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>

          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{usersBanned}</h3>
              <p>Usuarios Desabilitados</p>
            </div>
            <div className={style.icon}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>

        <div className={style.headerContainer}>
        <div className={style.divHeader}>
          
            <p className={style.header}>Nombre</p>
        </div>
        <div className={style.divHeader}>
            <p className={style.header}>Apellidos</p>

        </div>
        <div className={style.divHeader}>

            <p className={style.header}>Correo</p>
        </div>
        <div className={style.divHeader}>

            <p className={style.header}>Role</p>
        </div>
        <div className={style.divHeader}>
            <p className={style.header}>Estatus</p>

        </div>
        <div className={style.divHeader}>

            <p className={style.header}>Creado</p>
        </div>
        <div className={style.divHeader}>

            <p className={style.header}>Acciones</p>
        </div>
        </div>
        {users.length > 0 &&
          users.map((item) => (
            <div className={style.containerItems}>
              <div className={style.items}>
                {/* <li > {item.PersonalDatum.fullname.split(' ').slice(0,1).join(' ')}</li> */}
                <p>Marcos</p>
              </div>

              <div className={style.items}>
                {/* <li >  {item.PersonalDatum.fullname.split(' ').slice(1).join(' ')}</li> */}
                <p>Laurens</p>
              </div>

              <div className={style.items}>
                <p> {item.email}</p>
              </div>

              <div className={style.items}>
                <p> {item.admin === false ? "Customer" : "Admin"}</p>
              </div>

              <div className={style.items}>
                <p> {item.status}</p>
              </div>

              <div className={style.items}>
                <p> {item.createdAt}</p>
              </div>
              <div className={style.items}>
                <ul>
                  <NavLink to={`/admin/createAdmin`}>
                    <i className="fa-solid fa-trash-can"></i>
                  </NavLink>
                  <i
                    onClick={() => handleDisabled(item.email, item.status)}
                    className="fa-solid fa-trash-can"
                  ></i>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminUsers;
