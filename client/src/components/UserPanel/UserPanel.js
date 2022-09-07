import React, { useContext, useEffect, useState } from "react";
import styles from './UserPanel.module.css';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAddress, getUserDetail } from "../../Actions";
import { useAuth0 } from "@auth0/auth0-react";
//import useState hook to create menu collapse state
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import logo from "../../imagenes/logo.png";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { createCont } from "../contexto/contextProvider";

export default function UserPanel() {

  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const { trueorfalse2} = useContext(createCont)

  const userAdm = useSelector(state => state.user.admin)
  const personalData = useSelector(state => state.userDetail.PersonalDatum)
  const userDetail = useSelector(state => state.userDetail)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, setState] = useState({
    isVisible: false
  })

  useEffect(() => {
    if (user?.email?.length > 0) dispatch(getUserDetail(user.email));
  }, [user,trueorfalse2]);

/* console.log("personaldata: ",personalData);
 */
  return (
    <>
{!userAdm && user?
<SideNav className={styles.conteiner} expanded={state.isVisible}>
<div className={styles.buttonCont}>
  {state.isVisible ? <button className={styles.butonX} onClick={() => {
    setState({ isVisible: !state.isVisible });
  }}> <i className="fa-solid fa-xmark"></i> </button>
    : <button className={styles.buton} onClick={() => {
      setState({ isVisible: !state.isVisible });
    }}> <i className="fa-solid fa-bars"></i> </button>}

  
</div>
<SideNav.Nav defaultSelected="home" className={styles.items}>
  <NavItem eventKey="home" className={styles.items}>
    <NavIcon >
      <i className="fa-solid fa-circle-user" style={{ fontSize: "1.75em" }}></i>
    </NavIcon>
    <NavText>
      {user?.email}
      </NavText>
  </NavItem>
  <NavItem eventKey="placed orders" className={styles.items}>
    <NavIcon >
    {
      personalData ?
      <Link to={"/presentationCard"} className={styles.link}><i className="fa-solid fa-address-card" style={{ fontSize: "1.75em" }}></i></Link>
        : 
        <Link to={"/userData"} className={styles.link}><i className="fa-solid fa-address-card" style={{ fontSize: "1.75em" }}></i></Link>
    }
      
    </NavIcon>
    <NavText >{
      personalData ?
        <Link to={"/presentationCard"} className={styles.link}>  Datos Personales</Link>
        : 
        <Link to={"/userData"} className={styles.link}>  Datos Personales</Link>
    }</NavText>
  </NavItem>
  <NavItem eventKey="placed ordersx" className={styles.items}>
    <NavIcon>

      <Link to={"/userAllAddresses"} className={styles.link}><i className="fa-solid fa-truck-arrow-right" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/userAllAddresses"} className={styles.link}> Direcciones de Envío </Link>

    </NavText>
  </NavItem>
  <NavItem eventKey="placed ordersx3" className={styles.items}>
    <NavIcon>
      <Link to={"/myOrders"} className={styles.link}><i className="fa-solid fa-bag-shopping" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/myOrders"} className={styles.link}> Mis Órdenes </Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="4" className={styles.items}>
    <NavIcon>
      <Link to={"/myReviews"} className={styles.link}><i className="fa-solid fa-gavel" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/myReviews"} className={styles.link}>  Mis Opiniones</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="5" className={styles.items}>
    <NavIcon>
      <Link to={"/Favourites"} className={styles.link}><i className="fa-solid fa-heart" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/Favourites"} className={styles.link}>Favoritos</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="6" className={styles.items}>
    <NavIcon>
      <Link to={"/cart"} className={styles.link}><i className="fa-sharp fa-solid fa-cart-shopping" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/cart"} className={styles.link}>Carrito</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="7" className={styles.items}>
    <NavIcon>
      <i className="fa-solid fa-power-off" onClick={() => logout({ returnTo: window.location.origin })} style={{ fontSize: "1.75em" }}></i>
    </NavIcon>
    <NavText>
      <Link onClick={() => logout({ returnTo: window.location.origin })} className={styles.link}>Cerrar Sesión</Link>
    </NavText>
  </NavItem>
</SideNav.Nav>
</SideNav>:
userAdm?
<SideNav className={styles.conteiner} expanded={state.isVisible}>
<div className={styles.buttonCont}>
  {state.isVisible ? <button className={styles.butonX} onClick={() => {
    setState({ isVisible: !state.isVisible });
  }}> <i className="fa-solid fa-xmark"></i> </button>
    : <button className={styles.buton} onClick={() => {
      setState({ isVisible: !state.isVisible });
    }}> <i className="fa-solid fa-bars"></i> </button>}

  
</div>
<SideNav.Nav defaultSelected="home" className={styles.items}>
  <NavItem eventKey="home" className={styles.items}>
    <NavIcon >
      <i className="fa-solid fa-circle-user" style={{ fontSize: "1.75em" }}></i>
    </NavIcon>
    <NavText>
      Administrador
      </NavText>
  </NavItem>
  
  <NavItem eventKey="placed orders" className={styles.items}>
    <NavIcon >
      <Link to={"/adminUsers"} className={styles.link}>
        <i className="fa-solid fa-address-card" style={{ fontSize: "1.75em" }}></i></Link>
    </NavIcon>
    <NavText >
        <Link to={"/adminUsers"} className={styles.link}>  Usuarios</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="placed ordersx" className={styles.items}>
    <NavIcon>
      <Link to={"/adminDashboard"} className={styles.link}>
        <i className="fa-sharp fa-solid fa-chart-simple" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/adminDashboard"} className={styles.link}> Dashboard </Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="placed ordersx3" className={styles.items}>
    <NavIcon>
      <Link to={"/adminProducts"} className={styles.link}><i className="fa-sharp fa-solid fa-box-open" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/adminProducts"} className={styles.link}> Productos </Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="4" className={styles.items}>
    <NavIcon>
      <Link to={"/adminOrders"} className={styles.link}><i className="fa-solid fa-bag-shopping" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/adminOrders"} className={styles.link}>  Ordenes</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="5" className={styles.items}>
    <NavIcon>
      <Link to={"/adminCategory"} className={styles.link}><i className="fa-solid fa-boxes-packing" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/adminCategory"} className={styles.link}>Categorias</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="6" className={styles.items}>
    <NavIcon>
      <Link to={"/adminPreguntas"} className={styles.link}><i className="fa-solid fa-users" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/adminPreguntas"} className={styles.link}>Preguntas</Link>
    </NavText>
  </NavItem>
  <NavItem eventKey="7" className={styles.items}>
    <NavIcon>
      <i className="fa-solid fa-power-off" onClick={() => logout({ returnTo: window.location.origin })} style={{ fontSize: "1.75em" }}></i>
    </NavIcon>
    <NavText>
      <Link onClick={() => logout({ returnTo: window.location.origin })} className={styles.link}>Cerrar Sesión</Link>
    </NavText>
  </NavItem>
</SideNav.Nav>
</SideNav>:null}
    
</>


  )
}


