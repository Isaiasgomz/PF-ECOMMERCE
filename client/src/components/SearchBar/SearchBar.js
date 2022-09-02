import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductsByName } from "../../Actions";
import { createCont } from "../contexto/contextProvider";
import styles from "../SearchBar/SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.AllProducts)
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState({ name: "" });
  const history = useHistory()
  const { setCurrentPage } = useContext(createCont)


  const handleClick = (e) => {
    e.preventDefault();
    console.log("e", e);
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("search.mane", search.name);
    dispatch(getProductsByName(search.name));
    setFilterData([])
    setSearch({
      name: ""
    });
    setCurrentPage(1)
    history.push("/home")
  }

  const handlefilter = (e) => {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("search.mane", search.name);
    const searchW = e.target.value;
    const newFilter = products.filter(e => {
      return e.productName.toLowerCase().includes(searchW.toLowerCase());
    });
    if (searchW === "") setFilterData([])
    else {
      setFilterData(newFilter);
    }
  }

  return (
    <div className={styles.searchs}>


      <form className={styles.search}>
        <div className={styles.input}>
          <input className={styles.searchBar} type="text" placeholder="Search a country" name="name" onChange={handlefilter} />
        </div>

        <div>
          <button className={styles.searchButton} type="submit" onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i> </button>
        </div>
        {filterData.length !== 0 && (
          
          <div className={styles.dropdownProdConteiner}>

            {filterData.slice(0, 5).map((e) => {
              return <a href={`/detail/${e.idProduct}`} type="button" className={styles.products} name="name" key={e.idProduct} value={e.productName} >
                {e.productName}
              </a>
            })}
          </div>)}
        <div></div>
      </form>

    </div>

  );
}

export default SearchBar;
