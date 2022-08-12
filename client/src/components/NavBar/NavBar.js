import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const [search, setSearch] = useState({name:""})

const onChange = (e) => {
  setSearch({
      ...search,
      [e.target.name]: e.target.value
  })
}

function NavBar() {
  return (

    <div>

      <Link to="/home"><button><i class="fa-solid fa-house"></i></button></Link>

      NavBar
      <form>
      <input type="text" name="name" value={search.name} onChange={onChange}></input>
      <button type='submit'>search</button>
      </form>

      </div>
  )
}

export default NavBar