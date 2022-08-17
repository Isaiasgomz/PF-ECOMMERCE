import React, { useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { sortProductByPrice } from "../../Actions";

import ReactPaginate from "react-paginate";
import "./Cards.css"

const Cards = (props) => {
  const { Products } = useSelector((state) => state);
  const { productsByName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [storageP, setStorageP] = useState([]);

  const storageProducts = (o) => {
    let x = storageP.filter((e) => e.idProduct === o.idProduct);
    if (x.length) {
      return;
    }
    setStorageP([...storageP, o]);
    console.log(storageP);
    localStorage.setItem("productsCart", JSON.stringify(storageP));
  };

  //Paginado.
  const [pageNumber, setPageNumber] = useState(0); 

  const productsPerPage = 10; 
  const pagesVisited = pageNumber * productsPerPage; 

  const displayProducts = Products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  ).map((e, index) => {
    return (
      <Card
        price={e.price}
        name={e.productName}
        calification={e.qualification}
        img={e.image}
        id={e.idProduct}
        key={index}
      />
    );
  });

 const pageCount = Math.ceil(Products.length / productsPerPage)
 const changePage = ({selected}) => {
  setPageNumber(selected)
 }
//------------
  return (
    <div>
      {displayProducts}
      <ReactPaginate 
      previousLabel = {"Previous"}
      nextLabel = {"Next"}
      pageCount = {pageCount}
      onPageChange = {changePage}
      containerClassName = {"pagBottons"}
      previousLinkClassName = {"previousButton"}
      nextLinkClassName = {"nextButton"}
      activeClassName = {"paginationActive"}
      />
    </div>
  );
};

export default Cards;

//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)
