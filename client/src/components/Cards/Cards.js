import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import {useSelector } from "react-redux";
import "./Cards.css";
import { createCont } from "../contexto/contextProvider";


const Cards = (props) => {


  const { Products } = useSelector((state) => state);



    
  
  const {currentPage, setCurrentPage, stringLocalStorage} = useContext(createCont)
  
  


  let x = [];
  const addProductCartStorage = (o) => {
    let fromLocalStorage = JSON.parse(localStorage.getItem(stringLocalStorage));

    

    if (fromLocalStorage) {
      let filtered = fromLocalStorage.filter((e) => e.idProduct === o.idProduct);
      if (filtered.length) return;
      x = [...fromLocalStorage, o];
      console.log(x);
      localStorage.setItem(stringLocalStorage, JSON.stringify(x));
      console.log(x);
      return;
    }
    x = [...x, o];
    localStorage.setItem(stringLocalStorage, JSON.stringify(x));
    console.log(x);
  };

  //Paginado.
  const [itemsPerPage, setItemsPerPage] = useState(9); //cantidad de elementos por pagina 

  //Definimos 3 estados mas para limitar los numeros de las paginas
  const [pageNumberLimit, setPageNumberLimit] = useState(5); //cuantos numeros queremos mostrar
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5); //cantidad maxima de numeros
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); //cantidad minima de numeros

  const handleClick = (event) => {
    //handle para funcionamiento de botones
    setCurrentPage(Number(event.target.id)); //id es el numero de la pagina
  };

  const pages = []; //array que contiene los numeros de las paginas

  for (let i = 1; i <= Math.ceil(Products.length / itemsPerPage); i++) {
    //dividimos la cantidad de productos por la cantidad de elementos que queremos por pagina
    pages.push(i); //pusheamos la cantidad de numeros en el array
  }

  const indexOfLastItem = currentPage * itemsPerPage; //numero del ultimo producto
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //numero(indice) del primer producto
  const currentItems = Products.slice(indexOfFirstItem, indexOfLastItem); //cantidad de productos actuales: hacemos un slice a Products con el indice del primer producto y el indice del segundo producto

  const renderPageNumbers = pages.map((number) => {
    //creamos una funcion para renderizar los numeros
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      //si el numero de paginas es menos al maximo de numero de paginas mas uno y el numero de paginas es mayor  al minimo,
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {" "}
          {/*hacemos una clase para cuando el numero esta activo: si currentePage es igual a un numero, que sea la clase active, sino null*/}
          {number}
        </li>
      );
    } else {
      return null; //sino q no haga nada
    }
  });

//handle next


  const handleNext = () => {
    setCurrentPage(currentPage + 1); //que pase a la siguiente
    if (currentPage + 1 > maxPageNumberLimit) {//si la pagina mas 1 es mayor que el limite de numero de paginas
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);//q el num maximo de paginas sea el num maximo de paginas mas el limite les niumero de paginas
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1 ) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //funciones para puntos suspensivos
  // onClick={handleNext}
  let pageIncrementBtn = null;
  if(pages.length > maxPageNumberLimit){ //si la cantidad de paginas es mayor al limite que se agregen los puntos
    pageIncrementBtn = <li > &hellip; </li>
  }
  // onClick={handlePrev} 
  let pageDecrementBtn = null;
  if(pages.length > maxPageNumberLimit){ //si la cantidad de paginas es mayor al limite que se agregen los puntos
    pageDecrementBtn = <li > &hellip; </li>
  }

  return (
    <div>
      <div className="mapeoCards">
      {currentItems?.map((e, index) => (
        <Card
          localStor={addProductCartStorage}
          ob={e}
          price={e.price}
          name={e.productName}
          calification={e.qualification}
          img={e.image}
          id={e.idProduct}
          key={index}
        />
      ))}
      </div>
      <div className="divPaginado"> 
<ul className="pageNumbers">
        <li>
          <button onClick={handlePrev} disabled={currentPage === pages[0] ? true : false}>Prev</button>
        </li>
    
        {renderPageNumbers}

        <li>
          <button onClick={handleNext} disabled={currentPage === pages[pages.length -1] ? true : false}>Next</button>
        </li>
      </ul>
      </div>
    </div>
  );
};
  //  {pageIncrementBtn}
  //        {pageDecrementBtn}
export default Cards;

//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)
