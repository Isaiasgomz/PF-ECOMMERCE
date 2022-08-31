import React, { useContext, useState } from 'react'
import style from "./BuildPerif.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { buildPerif } from '../../Actions';

import { createCont } from "../contexto/contextProvider";
import { Link } from 'react-router-dom';
import img1 from "../../imagenes/paso1.png"
import img2 from "../../imagenes/paso2.png"
import img3 from "../../imagenes/paso3.png"
import img4 from "../../imagenes/paso4.png"
import img5 from "../../imagenes/paso5.png"
import img6 from "../../imagenes/paso6.png"
import img7 from "../../imagenes/paso7.png"
import toast, { Toaster } from 'react-hot-toast';
import agotado from "../../imagenes/agotado.png"
import BuildCard from '../BranchSelector/BuildCard';
import ConfirmBuild from '../BranchSelector/ConfirmBuild';

function BuildPerif(props) {

    const { AllProducts } = useSelector(state => state)
    const { buildPerifState } = useSelector(state => state)
    const dispatch = useDispatch()
    const {stringLocalStorage} = useContext(createCont)
    
    let productos = AllProducts?.filter(e => e.compatible === "false" )
    let sinlaptop = productos.filter( e => e.category !== "Laptops")
    let categorias = new Set(sinlaptop?.map(e => e.category))
    const category = [...categorias]
    const [cat, setCat] = useState(0)
    

  
    let productCategory = sinlaptop.filter(e => e.category === category[cat])
    
    
  
    const nextCategory = async (e) => {
      dispatch(buildPerif(e))
      setCat(cat + 1)
  
    }

    const notify = () => toast.success('Agregado al carrito!',{style:{
        background: "rgb(67, 160, 71)",
        color:"white"
      }});
  
      const addProductCartStorage = (o) => {
        
        notify()
        let a = JSON.parse(localStorage.getItem(stringLocalStorage));
          
        if(a && a.length){
          let totalArr = a?.concat(o)
        
          let ids = new Set(totalArr?.map(e => e.idProduct))
          const carroComp = [...ids]
          let carroPost = []
      
          for (let i = 0; i < carroComp.length; i++) {
            
            carroPost.push(AllProducts?.find( e => e.idProduct === carroComp[i] ))
            
          }
          
          localStorage.setItem(stringLocalStorage, JSON.stringify(carroPost));
          
          return;
        }
    
        
        localStorage.setItem(stringLocalStorage, JSON.stringify(o));
    
      };
    
    return (
      <div className={style.containerTotal}>
  
  
        <div className={style.containerBuild}>
          <div className={style.build}>
            <div className={style.imgLabel}>
              {buildPerifState?.length > 0 ? <span className={style.buildImg}><i className="fa-solid fa-keyboard"></i></span> : <span className={style.buildImg2}><i className="fa-solid fa-keyboard"></i> </span>}
              {buildPerifState?.length > 0 ? <label className={style.labelBuild}> {buildPerifState[0].productName}</label> : <label> - Teclado</label>}
            </div>
            <div className={style.imgLabel}>
              {buildPerifState?.length > 1 ? <span className={style.buildImg}><i className="fa-solid fa-desktop"></i></span> : <span className={style.buildImg2}><i className="fa-solid fa-desktop"></i> </span>}
              {buildPerifState?.length > 1 ? <label className={style.labelBuild}>{buildPerifState[1].productName}</label> : <label> - Monitor</label>}
            </div>
            <div className={style.imgLabel}>
              {buildPerifState?.length > 2 ? <span className={style.buildImg3}><i className="fa-solid fa-mouse"></i></span> : <span className={style.buildImg4}><i className="fa-solid fa-mouse"></i> </span>}
              {buildPerifState?.length > 2 ? <label className={style.labelBuild}>{buildPerifState[2].productName}</label> : <label> - Mouse</label>}
            </div>
            <div className={style.imgLabel}>
              {buildPerifState?.length > 3 ? <span className={style.buildImg}><i className="fa-solid fa-headset"></i></span> : <span className={style.buildImg2}><i className="fa-solid fa-headset"></i> </span>}
              {buildPerifState?.length > 3 ? <label className={style.labelBuild}>{buildPerifState[3].productName}</label> : <label> - Auricular</label>}
            </div>
           
            
          
          </div>
          {buildPerifState?.length > 3? 
  
          <div className={style.contLink}>
          
          <Link className={style.Link} to="/cart">
          <button onClick={() => addProductCartStorage(buildPerifState)} className={style.button}> Agregar al carrito </button>
          </Link>        
        </div>
    
        
        :<label></label>}
  
        </div>
            
   
        <div className={style.containerProducts}>
  
          {buildPerifState?.length === 4 ? <ConfirmBuild components={buildPerifState} /> :
  
            productCategory?.map((e, index) => (
  
              
              <button key={index} className={style.buttonBuild} name={e.idProduct} disabled={ e.stock <= 0} onClick={() => nextCategory(e)}>
                <BuildCard
                  ob={e}
                  price={e.price}
                  name={e.productName}
                  img={e.image}
                  id={e.idProduct}
                  key={index}
                />
              </button>
  
  
            ))
          }
        </div>
        <Toaster
      position="bottom-left"
      reverseOrder={false}
       />
      </div>
    )
}

export default BuildPerif