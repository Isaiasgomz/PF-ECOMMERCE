import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setCart, sortProductByPrice } from "../../Actions";
import ReactPaginate from "react-paginate";
import "./Cards.css";
import { useHistory } from "react-router-dom";

const Cards = (props) => {
  const { Products } = useSelector((state) => state);
  const { productsByName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory()

  let x = [];
  const addProductCartStorage = (o) => {
    let a = JSON.parse(localStorage.getItem("ProductCartLocalStoragev3"));
    

    if (a) {
      let filtered = a.filter((e) => e.idProduct === o.idProduct);
      if (filtered.length) return;
      x = [...a, o];
      console.log(x);
      localStorage.setItem("ProductCartLocalStoragev3", JSON.stringify(x));
      console.log(x);
      return;
    }

    x = [...x, o];
    localStorage.setItem("ProductCartLocalStoragev3", JSON.stringify(x));
    console.log(x);
  };
  useEffect(() => {
    return () => {
      dispatch(setCart(x));
    };
  }, []);

  //Paginado.
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = Products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  ).map((e, index) => {
    return (
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
    );
  });

  const pageCount = Math.ceil(Products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //------------
  return (
    <div className="containerCardsComponent">
      <div className="containerCardProducts">
      {displayProducts}
      </div>
      <div className="paginate">

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagBottons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        activeClassName={"paginationActive"}
      />
      </div>
    </div>
  );
};

export default Cards;

//// .map( (e,index) => <Card price={e.price} name={e.productName} calification={e.qualification} img={e.image} id={e.idProduct} key={index}/>)
