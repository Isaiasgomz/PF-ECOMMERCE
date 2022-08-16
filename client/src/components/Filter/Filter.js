import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortProductByPrice } from '../../Actions'
import styles from "./Filter.module.css"


function Filter() {
    
    const {productsByName} = useSelector(state => state)
    const { Products } = useSelector(state => state)
    const dispatch = useDispatch()

    function sortByPrice(e) {
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

    let brands = (productsByName.length === 0 ? Products : productsByName)?.map( e => e.brand)
    let unique = new Set(brands)
    let final = [...unique]

    console.log(final)


  
  return (
    <div className={styles.filterContainer}> 

      <select className={styles.selector} onChange={sortByPrice}>
        <option>Order by Price</option>
        <option value="cheaper">cheaper</option>
        <option value="expensive">expensive</option>
      </select>

      <select>
        <option>Select a Brand</option>
        {final?.map((e,index) => <option key={index} value={e}>{e}</option>)}
      </select>

    </div>
  )
}

export default Filter