import React, { useState } from 'react'
import { createContext } from 'react';

export const createCont = createContext();

function ContextProvider({children}) {
    const [currentPage, setCurrentPage] = useState(1);
  
    let productCart = []

    const addToCart = (o, quantity)=>{

        let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"))
        if(!x.length) return
        productCart = [...x]
        let found = x.find(e=> e.idProduct === o.idProduct)
        if(found){
          found.quantity = quantity + 1
          localStorage.setItem("ProductCartLocalStoragev3",JSON.stringify(productCart))

        }
        
  
    }

    const removeToCart = (o,quantity)=>{
      let x = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"))
        if(!x.length) return
        productCart = [...x]
        let found = x.find(e=> e.idProduct === o.idProduct)
        if(found){
          found.quantity = quantity - 1
          localStorage.setItem("ProductCartLocalStoragev3",JSON.stringify(productCart))

        }
    }



  return (
    <createCont.Provider value={{currentPage ,setCurrentPage,addToCart,productCart,removeToCart}}> {children} </createCont.Provider>
  )
}

export default ContextProvider