import React from 'react'
import style from "./BrandSelector.module.css"
import ResumeOrderCard from "../ResumeOrder/ResumeOrderCard";

function ConfirmBuild({components}) {

  return (
    <div className={style.productos}>

    {components?.map((e, index) => (
        
        <ResumeOrderCard key={index} obj={e} />
             
      ))}
    </div>
  )
}

export default ConfirmBuild