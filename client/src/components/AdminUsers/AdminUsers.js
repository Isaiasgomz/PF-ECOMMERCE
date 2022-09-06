import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUsersAdmin, userDisabled } from "../../Actions";
import style from "./AdminUsers.module.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminProfile from "../AdminProfile/AdminProfile";
import PaginadoUsers from "./Paginado";

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



  let [currentPage, setCurrentPage] = useState(1);
  let [usersPerPage, setUsersPerPage] = useState(5);
  let indexOfLastUser = currentPage * usersPerPage;
  let indexOfFirstUser = indexOfLastUser - usersPerPage;
  let currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return (
    <div className={style.containerAll}>


      <div className={style.productContainer}>
        <div className={style.infoConteiner}>
          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{users.length}</h3>
              <p>Usuarios Activos</p>
            </div>
            <div className={style.icon}>
            <div className={style.containerCheckv}>
                <i class="fa-solid fa-check"></i>
              </div>
              </div>
          </div>

          <div className={style.infoProduct}>
            <div className={style.info}>
              <h3>{usersBanned}</h3>
              <p>Usuarios Desabilitados</p>
            </div>
            <div className={style.icon}>
              <div className={style.containerCheckx}>
              <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={style.containerInfoTable}>
          <ul className={style.ul}>

            <div className={style.headerMove}>
              <li className={style.headerItem}>Nombre</li>
            </div>
            <div className={style.headerMove}>
              <li className={style.headerItem}>Apellidos</li>
            </div>
            <div className={style.headerMoveEmail}>
              <li className={style.headerItem}>Correo</li>
            </div>
            <div className={style.headerMove}>
              <li className={style.headerItem}>Role</li>
            </div>
            <div className={style.headerMove}>
              <li className={style.headerItem}>Estatus</li>
            </div>
            <div className={style.headerMove}>
              <li className={style.headerItem}>Creado</li>
            </div>
            <div className={style.headerMove}>
              <li className={style.headerItem}>Acciones</li>
            </div>
          </ul>

          {currentUsers &&
            currentUsers.map((item) => (
              <div className={style.containerc}>
                <div className={style.containCardInfo}>
                  <p>
                    {" "}
                    {item.PersonalDatum?.fullname
                      ?.split(" ")
                      .slice(0, 1)
                      .join(" ")}
                  </p>
                </div>

                <div className={style.containCardInfo}>
                  <p>
                    {" "}
                    {item.PersonalDatum?.fullname?.split(" ").slice(1).join(" ")}
                  </p>
                </div>

                <div className={style.containCardInfo}>
                  <p> {item.email}</p>
                </div>

                <div className={style.containCardInfo}>
                  <p> {item.admin === false ? "Customer" : "Admin"}</p>
                </div>

                <div className={style.containCardInfo}>
                  <p> {item.status}</p>
                </div>

                <div className={style.containCardInfo}>
                  <p> {item.createdAt}</p>
                </div>
                <div className={style.containCardInfo}>
                  {item.status === "Autorizado" ? (
                    <i
                      onClick={() => handleDisabled(item.email, item.status)}
                      className="fa-solid fa-user-slash"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleDisabled(item.email, item.status)}
                      className="fa-solid fa-user"
                    ></i>
                  )}
                </div>
              </div>
            ))}
            
        </div>
        <div className={style.containerCreated}>
          <NavLink className={style.link} to={`/admin/createAdmin`}>
            <div className={style.containerCreate}>

              <i class="fa-solid fa-plus"></i>

            </div>
            
          </NavLink>
          </div>
        <div className={style.containerPaginate}>
          <PaginadoUsers
            usersPerPage={usersPerPage}
            allUsers={users.length}
            paginado={setCurrentPage} />
        </div>
      </div>

    </div>
  );
}

export default AdminUsers;
