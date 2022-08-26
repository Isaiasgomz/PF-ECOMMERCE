import React, { useEffect, useState } from 'react'
import style from "./BrandSelector.module.css"
import { Link } from "react-router-dom";
import intel from "../../imagenes/intel.png"
import AMD from "../../imagenes/AMD.png"
import { useDispatch } from 'react-redux';
import { clearPC } from '../../Actions';


function BrandSelector() {

  const dispatch = useDispatch()

  useEffect(()=>{ dispatch(clearPC())},[])

  return (
    <div className={style.containerBrand}>

      <div >
        <Link to={`/build/Intel`}>
          <img className={style.brandButton} src={intel} />
        </Link>
      </div>

      <div >
        <Link to={`/build/AMD`}>
          <img className={style.brandButton} src={AMD} />
        </Link>
      </div>

    </div>
  )
}

export default BrandSelector