/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Style.css";


const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};

function Pagination() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pages.push(i);
  }

  const indexOflastItems = currentPage * itemPerPage;
  const indexOfFirstItems = indexOflastItems - itemPerPage;
  const currentItems = data.slice(indexOfFirstItems, indexOflastItems);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncreamentBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncreamentBtn = <li onClick={handleNextbtn}>&hellip;</li>;
  }

  let pageDecreamentBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecreamentBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
  }

  const handleLoadMore = () => {
    setitemPerPage(itemPerPage + 5);
  };

  return (
    <>
      <div style={{ margin: "20px 30%" }}>
        <h1>Pagination</h1> <br />
        {renderData(currentItems)}
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageDecreamentBtn}
          {renderPageNumbers}
          {pageIncreamentBtn}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
        <button onClick={handleLoadMore} className="loadmore">
          Load More
        </button>
      </div>
    </>
  );
}

export default Pagination;