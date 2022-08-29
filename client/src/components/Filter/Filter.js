
import React, { useContext, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { clearAllFilters, getProducts, sortProductByBrand, sortProductByCategory, sortProductByPrice } from '../../Actions'
import { createCont } from '../contexto/contextProvider'
import styles from "./Filter.module.css"


function Filter() {

    const { AllProducts } = useSelector(state => state)
    const { productsByCategory } = useSelector(state => state)
    const { productsByBrand } = useSelector(state => state)
    const { productsByName } = useSelector(state => state)
    const { Products } = useSelector(state => state)
    const dispatch = useDispatch()

    
    const {setCurrentPage,trueorfalse, setTrueorFalse} = useContext(createCont)


    const [dropDown, setDropDown] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState(false)
    
    const openCloseDropDown = () =>{
        setDropDown(!dropDown);
    }
    const openCloseDropDown2 = () =>{
        setDropDown2(!dropDown2);
    }
    const openCloseDropDown3 = () =>{
        setDropDown3(!dropDown3);
    }

    function sortByPrice(e) {
        if (e.target.value === "default") { return }
        if (e.target.textContent.slice(2) === "Menor precio") {
            let productSorted = (productsByName.length === 0 ? Products : productsByName).sort((product1, product2) => {
                if (product1.price < product2.price) {
                    return -1
                } else if (product1.price > product2.price) {
                    return 1
                } else {
                    return 0
                }
            })
            dispatch(sortProductByPrice(productSorted))
            setCurrentPage(1);
            trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
        }

        if (e.target.textContent.slice(2) === "Mayor precio") {
            let productSorted = (productsByName.length === 0 ? Products : productsByName).sort((product1, product2) => {
                if (product1.price < product2.price) {
                    return 1
                } else if (product1.price > product2.price) {
                    return -1
                } else {
                    return 0
                }
            })

            dispatch(sortProductByPrice(productSorted))
            setCurrentPage(1);
            trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
        }
    }

    const sortByBrand = (e) => {
        console.log(e.target.textContent.slice(2))
        if (e.target.textContent.slice(2) === "Todas las marcas") { dispatch(getProducts()); dispatch(clearAllFilters()) }
        let productSorted = (
            !!productsByName?.length
                ?
                productsByName
                :
                !!productsByCategory?.length
                    ?
                    productsByCategory
                    :
                    AllProducts).filter(g => g.brand === e.target.textContent.slice(2))
        dispatch(sortProductByBrand(productSorted))
        setCurrentPage(1);
        trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
    }

    const sortByCategory = (e) => {
        console.log(e.target.textContent.slice(2))
        if (e.target.textContent.slice(2) === "Todas las categorias") { dispatch(getProducts()); dispatch(clearAllFilters()) }
        let productSorted = (
            !!productsByName?.length
                ?
                productsByName
                :
                !!productsByBrand?.length
                    ?
                    productsByBrand
                    :
                    AllProducts).filter(g => g.category === e.target.textContent.slice(2))
        dispatch(sortProductByCategory(productSorted))
        setCurrentPage(1);
        trueorfalse===true?setTrueorFalse(false):setTrueorFalse(true)
        
    }

    const clearFilters = (e) =>{
        setDropDown(false)
        setDropDown2(false)
        dispatch(clearAllFilters())
        dispatch(getProducts())
    }

    ////////////// aca estan todas con las categorias //////////////
    let arrCat =

        !!productsByName?.length ? productsByName?.map(e => e.category)
            :
            !!productsByBrand?.length
                ?
                productsByBrand?.map(e => e.category)

                :
                AllProducts?.map(e => e.category)

    let categorias = new Set(arrCat)
    const category = [...categorias]


    ///////////// aca estan todas las marcas //////////////////////

    let arrMarca =

        !!productsByName?.length ? productsByName?.map(e => e.brand)
            :
            !!productsByCategory?.length
                ?
                productsByCategory?.map(e => e.brand)

                :
                AllProducts?.map(e => e.brand)

    let marcas = new Set(arrMarca)

    const brands = [...marcas]



    return (
        <div className={styles.filterContainer}>
           
           <div className={styles.tituloDiv}>
            <span className={styles.titulo}>Filtros</span>
           <button className={styles.buttonClear}onClick={clearFilters}>Borrar filtros</button>
           </div>


            <div className={styles.toggle} onClick={openCloseDropDown3}><span>Precio</span><span className={styles.span}><i className="fa-solid fa-chevron-down"></i></span></div>
            {dropDown3? 
            <div>
            <div className={styles.toggleItem} value="Menor precio" onClick={sortByPrice}><span>- Menor precio</span></div>
            <div className={styles.toggleItem} value="Mayor precio" onClick={sortByPrice}><span>- Mayor precio</span></div>
            </div>
            :null}
        
            <div className={styles.toggle} onClick={openCloseDropDown}><span>Categorias</span><span className={styles.span}><i className="fa-solid fa-chevron-down"></i></span></div>
            {dropDown? 
            <div>
            {category?.map((e, index) => <div className={styles.toggleItem} key={index} value={e} onClick={sortByCategory}><span>- {e}</span></div>)}
            <div className={styles.toggleItem} value="Todas las categorias" onClick={sortByCategory}><span>- Todas las categorias</span></div>
            </div>
            :null}

            <div className={styles.toggle} onClick={openCloseDropDown2}><span >Marcas </span><span className={styles.span}><i className="fa-solid fa-chevron-down"></i></span></div>
            {dropDown2? 
            <div>
            {brands?.map((e, index) => <div className={styles.toggleItem} key={index} value={e} onClick={sortByBrand}><span>- {e}</span></div>) }
            <div className={styles.toggleItem} value="Todas las marcas" onClick={sortByBrand}><span>- Todas las marcas</span></div>
            </div>
            :null}

         {/*    <select className={styles.selector} onChange={sortByBrand}>
                <option value="default">All Brands</option>
                {brands?.map((e, index) => <option key={index} value={e}>{e}</option>)}
            </select>

            <select className={styles.selector} onChange={sortByCategory}>
                <option value="default">All Categories</option>
                {category?.map((e, index) => <option key={index} value={e}>{e}</option>)}
            </select> 
            
             <select className={styles.selector} onChange={sortByPrice}>
                <option value="default">Order by Price</option>
                <option value="cheaper">cheaper</option>
                <option value="expensive">expensive</option>
            </select>

            */}

            

        </div>
    )
}

export default Filter