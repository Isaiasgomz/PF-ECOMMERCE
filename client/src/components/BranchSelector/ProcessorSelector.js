import React, { useState,useContext } from 'react'
import style from "./BrandSelector.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { buildPC } from '../../Actions';
import ConfirmBuild from './ConfirmBuild';
import { createCont } from "../contexto/contextProvider";
import { Link, useParams } from 'react-router-dom';
import img1 from "../../imagenes/paso1.png"
import img2 from "../../imagenes/paso2.png"
import img3 from "../../imagenes/paso3.png"
import img4 from "../../imagenes/paso4.png"
import img5 from "../../imagenes/paso5.png"
import img6 from "../../imagenes/paso6.png"
import img7 from "../../imagenes/paso7.png"
import BuildCard from './BuildCard';
import toast, { Toaster } from 'react-hot-toast';



function ProcessorSelector(props) {

  const [disable, setDisable] = useState(false)
  const { AllProducts } = useSelector(state => state)
  const { buildPCState } = useSelector(state => state)
  const dispatch = useDispatch()
  const {stringLocalStorage} = useContext(createCont)
  
  let productos = AllProducts?.filter(e => e.compatible !== false )
  
  let categorias = new Set(productos?.map(e => e.category))
  const category = [...categorias]
  const [cat, setCat] = useState(0)
  let brand = useParams().brand

  let brandProduct = productos.filter(e => e.compatible === brand || e.compatible === "All")
  

  let cats = ["Processor","Mother","VGA","Memory","Disk","Fuente","Gabinete"]

  let productCategory = brandProduct.filter(e => e.category === cats[cat])
  
  

  const nextCategory = async (e) => {
    dispatch(buildPC(e))
    setCat(cat + 1)

  }

  const notify = () => toast.success('Agregado al carrito!',{style:{
    background: "rgb(67, 160, 71)",
    color:"white"
  }});



  const addProductCartStorage = (o) => {
    setDisable(!disable)
    notify()
    let a = JSON.parse(localStorage.getItem(stringLocalStorage));
      
    if(a && a.length){
      let totalArr = a?.concat(o)
    
      let ids = new Set(totalArr?.map(e => e.idProduct))
      const carroComp = [...ids]
      let carroPost = []
  
      for (let i = 0; i < carroComp.length; i++) {
        
        carroPost.push(productos.find( e => e.idProduct === carroComp[i] ))
        
      }
      
      localStorage.setItem(stringLocalStorage, JSON.stringify(carroPost));
      
      return;
    }

    
    localStorage.setItem(stringLocalStorage, JSON.stringify(o));

  };
  
  return (
    <div
      className={
        brand === "AMD" ? style.containerTotalAMD : style.containerTotalIntel
      }
    >
      <div className={style.containerBuild}>
        <div className={style.build}>
          <div className={style.imgLabel}>

            {buildPCState?.length > 0 ? (
              <img alt="1" className={style.buildImg} src={img1} />
            ) : (
              <img
                alt="1"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso2.png"
              />
            )}
            {buildPCState?.length > 0 ? (
              <label className={style.labelBuild}>
                {" "}
                {buildPCState[0].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Procesador</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 1 ? (
              <img alt="2" className={style.buildImg} src={img2} />
            ) : (
              <img
                alt="2"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso1.png"
              />
            )}
            {buildPCState?.length > 1 ? (
              <label className={style.labelBuild}>
                {buildPCState[1].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Mother</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 2 ? (
              <img alt="3" className={style.buildImg} src={img3} />
            ) : (
              <img
                alt="3"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso5.png"
              />
            )}
            {buildPCState?.length > 2 ? (
              <label className={style.labelBuild}>
                {buildPCState[2].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Placa de Video</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 3 ? (
              <img alt="4" className={style.buildImg} src={img4} />
            ) : (
              <img
                alt="4"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso4.png"
              />
            )}
            {buildPCState?.length > 3 ? (
              <label className={style.labelBuild}>
                {buildPCState[3].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Memoria RAM</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 4 ? (
              <img alt="5" className={style.buildImg} src={img5} />
            ) : (
              <img
                alt="5"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso6.png"
              />
            )}
            {buildPCState?.length > 4 ? (
              <label className={style.labelBuild}>
                {buildPCState[4].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Almacenamiento</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 5 ? (
              <img alt="6" className={style.buildImg} src={img6} />
            ) : (
              <img
                alt="6"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso11.png"
              />
            )}
            {buildPCState?.length > 5 ? (
              <label className={style.labelBuild}>
                {buildPCState[5].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Fuente</label>
            )}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 6 ? (
              <img alt="7" className={style.buildImg} src={img7} />
            ) : (
              <img
                alt="7"
                className={style.buildImg}
                src="https://compragamer.net/img_armado/paso10.png"
              />
            )}
            {buildPCState?.length > 6 ? (
              <label className={style.labelBuild}>
                {buildPCState[6].productName}
              </label>
            ) : (
              <label className={style.labelBuild2}>- Gabinete</label>
            )}

          </div>
        </div>
        {buildPCState?.length > 6 ? (
          <div className={style.contLink}>
            <div>
              <button
                onClick={() => addProductCartStorage(buildPCState)}
                disabled={disable}
                className={style.button}
              >
                {" "}
               
                <span className={style.textButton}>Agregar al carrito</span>
                  <span className={style.iconButton}><i className="fa-solid fa-cart-plus"></i></span>
              </button>
            </div>
            <div>
              <Link className={style.Link} to={`/perif`}>
                <button
                  onClick={() => addProductCartStorage(buildPCState)}
                  disabled={!disable}
                  className={style.button}
                >
                  {" "}

                  
                  <span className={style.textButton}>Agregar Perifericos</span>
                  <span className={style.iconButton}><i className="fa-solid fa-headset"></i></span>

                </button>
              </Link>
            </div>
          </div>
        ) : (
          <label></label>
        )}
      </div>

      <div className={style.containerProducts}>
        {buildPCState?.length === 7 ? (
          <ConfirmBuild components={buildPCState} />
        ) : (
          productCategory?.map((e, index) => (
            <button
              key={index}
              className={style.buttonBuild}
              name={e.idProduct}
              disabled={e.stock <= 0}
              onClick={() => nextCategory(e)}
            >
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
        )}
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default ProcessorSelector