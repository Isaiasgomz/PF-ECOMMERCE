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
    let productSorted = AllProducts?.filter(g => g.category === e)
    dispatch(sortProductByCategory(productSorted))
    dispatch(clearSearch())
    setCurrentPage(1);
}

let categorias = new Set(AllProducts?.map(e => e.category))
const category = [...categorias]

  return <div className={styles.categories}>
    

    <Link to="/home"><button className={styles.buttons} onClick={clear}> All products <i className="fa-solid fa-home"></i></button></Link>

    
    {category?.map( (e,index) => {
    
      if(e === "Monitors"){

        return (<Link to="/home"><button key={e} className={styles.buttons} name={e} onClick={()=>sortByCategory(e)}>{e} <i className={`fa-solid fa-desktop`}></i></button></Link>)

      }
      return (<Link to="/home"><button key={e} className={styles.buttons} name={e} onClick={()=>sortByCategory(e)}>{e} <i className={`fa-solid fa-${e.toLowerCase().slice(0,-1)}`}></i> </button></Link>)

    })}

  </div>;
}

export default Menu;
