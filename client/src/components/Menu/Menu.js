import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAllFilters, clearSearch, getProducts, sortProductByCategory } from "../../Actions";
import { createCont } from "../contexto/contextProvider";
import styles from "./Menu.module.css"


function Menu() {

  const {AllProducts} = useSelector(state => state)
  const {productsByName} = useSelector(state => state)
   const dispatch = useDispatch()

   const {setCurrentPage} = useContext(createCont)
  const clear = (e) =>{
    
    dispatch(getProducts())
    
  }

  const sortByCategory = (e) => {
    console.log(e)
    if(e === "componentes"){
      let productSorted = AllProducts?.filter(g => g.compatible !== "false")
      dispatch(sortProductByCategory(productSorted))
      dispatch(clearSearch())
      setCurrentPage(1);
      return
    }
    if(e === "perifericos"){
      let productSorted = AllProducts?.filter(g => g.compatible === "false")
      console.log(productSorted)
      let moreSort = productSorted?.filter(f => f.category !== "Laptops")
      console.log(moreSort)
      dispatch(sortProductByCategory(moreSort))
      dispatch(clearSearch())
      setCurrentPage(1);
      return
    }
    let productSorted = AllProducts?.filter(g => g.category === e)
    dispatch(sortProductByCategory(productSorted))
    dispatch(clearSearch())
    setCurrentPage(1);
}

let categorias = new Set(AllProducts?.map(e => e.category))
const category = [...categorias]
  console.log(category)
  return <div className={styles.categories}>
    

    <Link to="/home"><button  className={styles.buttons} onClick={clear}> Productos <i className="fa-solid fa-database"></i></button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("perifericos")}> Perifericos <i className="fa-solid fa-keyboard"></i> </button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("Laptops")}> Laptops <i className="fa-solid fa-laptop"></i> </button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("componentes")}> Componentes <i className="fa-solid fa-screwdriver-wrench"></i> </button></Link>

    <Link to="/build"><button  className={styles.buttons} onClick={clear}> Arma tu PC <i className="fa-solid fa-computer"></i></button></Link>

  </div>;
}

export default Menu;
