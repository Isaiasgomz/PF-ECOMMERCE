import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProductSold} from "../../Actions";
import { Chart } from "./Chart";
import style from './Dashboard.module.css'

function DashboardSold() {
     const dispatch = useDispatch()

     useEffect(() => {
        dispatch(getAllProductSold())
     },[])

    const {allProductSold} =  useSelector(state => state)


    const allProducts = allProductSold.map(product => product.Product.productName.split(' ').slice(0,2).join(' '))


    const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
    const data = {
      datasets: [
        {
          label: "Ventas",
          data: countOcurrences(allProducts),
          borderWidth: "2",
          backgroundColor: [
            "#ffbb11",
            "#c0c0c0",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
        },
      ],
    };
  
  return (
    <div className={style.container}>
      <Chart className={style.chart} chartData={data} />
    </div>
  )
}

export default DashboardSold