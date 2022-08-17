import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllFilters, getProducts, sortProductByBrand, sortProductByCategory, sortProductByPrice } from '../../Actions'
import styles from "./Filter.module.css"


function Filter(props) {

    const { AllProducts } = useSelector(state => state)
    const { productsByCategory } = useSelector(state => state)
    const { productsByBrand } = useSelector(state => state)
    const { productsByName } = useSelector(state => state)
    const { Products } = useSelector(state => state)
    const dispatch = useDispatch()

    

    function sortByPrice(e) {
        if (e.target.value === "default") { return }
        if (e.target.value === "cheaper") {
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
        }

        if (e.target.value === "expensive") {
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
        }
    }

    const sortByBrand = (e) => {
        
        if (e.target.value === "default") { dispatch(getProducts()); dispatch(clearAllFilters()) }
        let productSorted = (
            !!productsByName?.length
                ?
                productsByName
                :
                !!productsByCategory?.length
                    ?
                    productsByCategory
                    :
                    AllProducts).filter(g => g.brand === e.target.value)
        dispatch(sortProductByBrand(productSorted))
    }

    const sortByCategory = (e) => {
        
        if (e.target.value === "default") { dispatch(getProducts()); dispatch(clearAllFilters()) }
        let productSorted = (
            !!productsByName?.length
                ?
                productsByName
                :
                !!productsByBrand?.length
                    ?
                    productsByBrand
                    :
                    AllProducts).filter(g => g.category === e.target.value)
        dispatch(sortProductByCategory(productSorted))
    }

    const clearFilters = (e) =>{
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

            <select className={styles.selector} onChange={sortByPrice}>
                <option value="default">Order by Price</option>
                <option value="cheaper">cheaper</option>
                <option value="expensive">expensive</option>
            </select>

            <select className={styles.selector} onChange={sortByBrand}>
                <option value="default">All Brands</option>
                {brands?.map((e, index) => <option key={index} value={e}>{e}</option>)}
            </select>

            <select className={styles.selector} onChange={sortByCategory}>
                <option value="default">All Categories</option>
                {category?.map((e, index) => <option key={index} value={e}>{e}</option>)}
            </select>

            <button onClick={clearFilters}>clear</button>

        </div>
    )
}

export default Filter