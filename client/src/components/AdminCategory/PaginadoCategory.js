import React from "react";
import style from "./Paginado.module.css";

function PaginadoCategory({ categoryPerPage, allCategory, paginado }) {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(allCategory / categoryPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.paginado}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={style.number} key={number}>
              <button
                className={style.paginadoA}
                onClick={() => paginado(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
export default PaginadoCategory;