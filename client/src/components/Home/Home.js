import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.js";
import Filter from "../Filter/Filter.js";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Actions/index.js";
import ScrollToTop from "react-scroll-to-top";
import loadingLogo from "../../imagenes/loading.png"

function Home(props) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  const { Products } = useSelector((state) => state);

  /*   useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); */

  if(!Products.length){
    return (
      <div className={styles.contenedorLoading}>
        <div className={styles.loading}>
          <img className={styles.imgload} alt="loading" src={loadingLogo} />
        </div>
      </div>
    )
  }
  else{
  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}>
        <Filter setCurrentPage={setCurrentPage} filter={{}} />
      </div>
      <div className={styles.cardsContainer}>
        {" "}
        <Cards
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filter={{}}
        />{" "}
      </div>
      <ScrollToTop
        smooth={true}
        color="white"
        className={styles.scrolltotop1}
        style={{
          backgroundColor: "#91C612",
          marginBottom: "30px",
        }}
      />
    </div>
  )};
}

export default Home;
