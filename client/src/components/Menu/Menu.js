import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearSearch } from "../../Actions";
import styles from "./Menu.module.css"


function Menu() {

  
  const {productsByName} = useSelector(state => state)
  const dispatch = useDispatch()

  const clear = () =>{
    if(productsByName?.length === 0){return}
    dispatch(clearSearch())
  }

  return <div className={styles.categories}>

    <Link to="/home"><button className={styles.buttons} onClick={clear} ><i className="fa-solid fa-toolbox"></i></button></Link>
    <Link to="/category/monitor"><button className={styles.buttons} onClick={clear}><i className="fa-solid fa-desktop"></i> </button></Link>
    <Link to="/category/laptop"><button className={styles.buttons} onClick={clear}><i className="fa-solid fa-laptop"></i> </button></Link>
    <Link to="/category/mouse"><button className={styles.buttons} onClick={clear}><i className="fa-solid fa-computer-mouse"></i> </button></Link>
    <Link to="/category/keyboard"><button className={styles.buttons} onClick={clear}><i className="fa-solid fa-keyboard"></i> </button></Link>
    <Link to="/category/headset"><button className={styles.buttons} onClick={clear}><i className="fa-solid fa-headset"></i> </button></Link>
{
    <select className={styles.selector}>
      <option>All products</option>
      <option>monitor</option>
      <option>laptop</option>
      <option>mouse</option>
      <option>keyboard</option>
      <option>headset</option>
    </select>}

  </div>;
}

export default Menu;
