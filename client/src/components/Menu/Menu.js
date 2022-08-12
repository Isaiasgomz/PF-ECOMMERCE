import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css"


function Menu() {
  return <div className={styles.categories}>

    <Link to="/allProducts"><button className={styles.buttons}><i class="fa-solid fa-toolbox"></i></button></Link>
    <Link to="/monitor"><button className={styles.buttons}><i className="fa-solid fa-desktop"></i> </button></Link>
    <Link to="/laptop"><button className={styles.buttons}><i className="fa-solid fa-laptop"></i> </button></Link>
    <Link to="/mouse"><button className={styles.buttons}><i className="fa-solid fa-computer-mouse"></i> </button></Link>
    <Link to="/keyboard"><button className={styles.buttons}><i className="fa-solid fa-keyboard"></i> </button></Link>
    <Link to="/headset"><button className={styles.buttons}><i className="fa-solid fa-headset"></i> </button></Link>

    <select className={styles.selector}>
      <option>All products</option>
      <option>monitor</option>
      <option>laptop</option>
      <option>mouse</option>
      <option>keyboard</option>
      <option>headset</option>
    </select>

  </div>;
}

export default Menu;
