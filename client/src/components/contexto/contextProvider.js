import React, { useState } from 'react'
import { createContext } from 'react';

export const createCont = createContext();

function ContextProvider({children}) {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <createCont.Provider value={{currentPage, setCurrentPage}}> {children} </createCont.Provider>
  )
}

export default ContextProvider