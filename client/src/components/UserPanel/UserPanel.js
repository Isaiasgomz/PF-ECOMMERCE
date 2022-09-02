import React, { useEffect, useState } from "react";
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

export default function UserPanel() {
  const dispatch = useDispatch();


  const userAdm = useSelector(state => state.user.admin)
  const personalData = useSelector(state => state.userDetail.PersonalDatum)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, setState] = useState({
    isVisible: true
  })


  useEffect(() => {
    if (user?.email?.length > 0) dispatch(getUserDetail(user.email));
  }, [user]);

  const clear = (e) => {
    dispatch(clearAddress());
  }

  const [dropDown, setDropDown] = useState(false)

  const openCloseDropDown = () => {
    setDropDown(!dropDown);
  }

  return (
    <>
{!userAdm?
<SideNav className={styles.conteiner} expanded={state.isVisible}>
<div className={styles.buttonCont}>
  {state.isVisible ? <button className={styles.butonX} onClick={() => {
    setState({ isVisible: !state.isVisible });
  }}> <i class="fa-solid fa-xmark"></i> </button>
    : <button className={styles.buton} onClick={() => {
      setState({ isVisible: !state.isVisible });
    }}> <i class="fa-solid fa-bars"></i> </button>}

  
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
      <Link to={"/updateUserData"} className={styles.link}><i className="fa-solid fa-address-card" style={{ fontSize: "1.75em" }}></i></Link>
    </NavIcon>
    <NavText >{
      personalData ?
        <Link to={"/updateUserData"} className={styles.link}>  Datos Personales</Link>
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
      <Link to={"/notfound"} className={styles.link}><i className="fa-solid fa-heart" style={{ fontSize: "1.75em" }}></i> </Link>
    </NavIcon>
    <NavText>
      <Link to={"/notfound"} className={styles.link}>Favoritos</Link>
    </NavText>
  </NavItem>
</SideNav.Nav>
</SideNav>:

<SideNav className={styles.conteiner} expanded={state.isVisible}>
<div className={styles.buttonCont}>
  {state.isVisible ? <button className={styles.butonX} onClick={() => {
    setState({ isVisible: !state.isVisible });
  }}> <i class="fa-solid fa-xmark"></i> </button>
    : <button className={styles.buton} onClick={() => {
      setState({ isVisible: !state.isVisible });
    }}> <i class="fa-solid fa-bars"></i> </button>}

  
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
</SideNav.Nav>
</SideNav>}
    
</>


  )
}

