import React, { useState } from 'react'
import { createContext } from 'react';
import { useSelector } from 'react-redux';

export const createCont = createContext();

function ContextProvider({children}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [trueorfalse, setTrueorFalse] = useState(true);

  const actualUser = useSelector(state=>state.user)
  let stringLocalStorage = actualUser ? actualUser.email : "defaultLocalStorage"
  
  let productCart = []
  
    const addToCart = (o, quantity)=>{

        let x = JSON.parse(localStorage.getItem(stringLocalStorage))
        if(!x.length) return
        productCart = [...x]
        let found = x.find(e=> e.idProduct === o.idProduct)
        if(found){
          found.quantity = quantity + 1
          localStorage.setItem(stringLocalStorage,JSON.stringify(productCart))

        }
        
  
    }

    const removeToCart = (o,quantity)=>{
      let x = JSON.parse(localStorage.getItem(stringLocalStorage))
        if(!x.length) return
        productCart = [...x]
        let found = x.find(e=> e.idProduct === o.idProduct)
        if(found){
          found.quantity = quantity - 1
          localStorage.setItem(stringLocalStorage,JSON.stringify(productCart))

        }
    }




  return (
    <createCont.Provider value={{stringLocalStorage,currentPage ,setCurrentPage,addToCart,productCart,removeToCart,trueorfalse,setTrueorFalse}}> {children} </createCont.Provider>
  )
}

export default ContextProvider