import React, { useState } from 'react'
import styles from "../SearchBar/SearchBar.module.css"

function SearchBar() {

  const [search, setSearch] = useState({name:""})
  
  const onChange = (e) => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      
      <form>
    <input className={styles.searchBar} type="text" name="name" value={search.name} onChange={onChange}></input>
    <button className={styles.searchButton} type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
    
    </div>
  )
}

export default SearchBar