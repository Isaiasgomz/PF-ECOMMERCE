import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearSearch, getProducts, sortProductByCategory } from "../../Actions";
import { createCont } from "../contexto/contextProvider";
import styles from "./Menu.module.css"


function Menu() {

  const {AllProducts} = useSelector(state => state)
  
   const dispatch = useDispatch()

   const {setCurrentPage,trueorfalse,setTrueorFalse} = useContext(createCont)
  const clear = (e) =>{
    
    dispatch(getProducts())
    setCurrentPage(1);
    trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortByCategory = (e) => {
    
    if(e === "componentes"){
      let productSorted = AllProducts?.filter(g => g.compatible !== "false")
      dispatch(sortProductByCategory(productSorted))
      dispatch(clearSearch())
      setCurrentPage(1);
      trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
      return
    }
    if(e === "perifericos"){
      let productSorted = AllProducts?.filter(g => g.compatible === "false")
      
      let moreSort = productSorted?.filter(f => f.category !== "Laptops")
      
      dispatch(sortProductByCategory(moreSort))
      dispatch(clearSearch())
      setCurrentPage(1);
      trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
      return
    }
    let productSorted = AllProducts?.filter(g => g.category === e)
    dispatch(sortProductByCategory(productSorted))
    dispatch(clearSearch())
    setCurrentPage(1);
    trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
}


  
  return <div className={styles.categories}>
    

    <Link to="/home"><button  className={styles.buttons} onClick={clear}>  <span className={styles.spanMenu}>Productos</span> <i className="fa-solid fa-database"></i></button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("perifericos")}> <span className={styles.spanMenu}>Perifericos</span> <i className="fa-solid fa-keyboard"></i> </button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("Laptops")}> <span className={styles.spanMenu}>Notebooks</span> <i className="fa-solid fa-laptop"></i> </button></Link>

    <Link to="/home"><button className={styles.buttons} onClick={()=>sortByCategory("componentes")}> <span className={styles.spanMenu}>Componentes</span> <i className="fa-solid fa-screwdriver-wrench"></i> </button></Link>

    <Link to="/build"><button  className={styles.buttons} onClick={clear}> <span className={styles.spanMenu}>Armar tu PC</span> <i className="fa-solid fa-computer"></i></button></Link>

  </div>;
}

export default Menu;
