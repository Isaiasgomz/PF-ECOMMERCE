import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.js";
import Filter from "../Filter/Filter.js";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Actions/index.js";

function Home(props) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const category = props.match.params;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}>
        <Filter setCurrentPage={setCurrentPage} filter={category} />
      </div>
      <div className={styles.cardsContainer}>
        {" "}
        <Cards currentPage={currentPage} setCurrentPage={setCurrentPage} filter={category} />{" "}
      </div>
    </div>
  );
}

export default Home;
