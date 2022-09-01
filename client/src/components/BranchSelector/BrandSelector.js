import React, { useEffect, useState } from 'react'
import style from "./BrandSelector.module.css"
import { Link } from "react-router-dom";
import intel from "../../imagenes/intel.png"
import AMD from "../../imagenes/AMD.png"
import { useDispatch } from 'react-redux';
import { clearPC } from '../../Actions';


function BrandSelector() {

  const dispatch = useDispatch()

  useEffect(()=>{ dispatch(clearPC())},[dispatch])

  const [fondo, setFondo] = useState(0)

  const setBackWhite = () =>{
    setFondo(0)
  }
  const setBackBlue = () =>{
    setFondo(1)
  }
  const setBackRed = () =>{
    setFondo(2)
  }

  return (
    <div /* onMouseOver={setBackWhite} */ className={ fondo === 0? style.containerBrand0 : fondo === 1? style.containerBrand1 : style.containerBrand2 }>

      <div >
        <Link to={`/build/Intel`}>
          <img className={style.brandButton} onMouseOver={setBackBlue} src={intel} />
        </Link>
      </div>

      <div >
        <Link to={`/build/AMD`}>
          <img className={style.brandButton} onMouseOver={setBackRed}  src={AMD} />
        </Link>
      </div>

    </div>
  )
}

export default BrandSelector