import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductsByName } from "../../Actions";
import { createCont } from "../contexto/contextProvider";
import styles from "../SearchBar/SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState({ name: "" });
  const history = useHistory()
  const {setCurrentPage} = useContext(createCont)

  const onChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.name === "") {
      return;
    } else {
      dispatch(getProductsByName(search.name));
      setCurrentPage(1)
      history.push("/home")

    }
    setSearch({ name: "" });
  };

  let products = useSelector((state) => state.AllProducts)
  products = products.filter((e) => e.productName);
  return (
    <div className={styles.search}>
      <form onSubmit={onSubmit}>
        <input
          className={styles.searchBar}
          type="text"
          name="name"
          value={search.name}
          onChange={onChange}
          placeholder="Buscar producto..."
          list="products"
        ></input>
        <datalist className={styles.dataResults} id="products">
            {products.map((value, key) => {
              return (
                <option value={value.productName}></option>
              );
            })}
        </datalist>
        <button
          className={styles.searchButton}
          type="submit"
          onSubmit={onSubmit}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
    
  );
}

export default SearchBar;
