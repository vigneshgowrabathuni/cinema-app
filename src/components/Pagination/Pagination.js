/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination({ getMovies }) {
  const [pageNumbers, setPageNumbers] = useState([
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
    { id: 6, isActive: false },
    { id: 7, isActive: false },
    { id: 8, isActive: false },
    { id: 9, isActive: false },
  ]);

  const handleClick = (e, selectedPageNumber) => {
    e.preventDefault();
    const pages = [];
    for (let i = 0; i < pageNumbers.length; i++) {
      if (pageNumbers[i].id === selectedPageNumber) {
        pages.push({ id: pageNumbers[i].id, isActive: true });
      } else {
        pages.push({ id: pageNumbers[i].id, isActive: false });
      }
    }
    setPageNumbers(pages);
    getMovies(selectedPageNumber);
    if (window.innerWidth < 768) {
      window.scrollTo(0, 350);
    } else {
      window.scrollTo(0, 700);
    }
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log("screenWidth", screenWidth);
    if (screenWidth < 768) {
      const pageNumbers = [
        { id: 1, isActive: true },
        { id: 2, isActive: false },
        { id: 3, isActive: false },
      ];
      setPageNumbers(pageNumbers);
    }
  }, []);

  return (
    <div class="pagination">
      <a href="#" onClick={(e) => handleClick(e, 1)}>
        First
      </a>
      {pageNumbers.map((pageNumber) => {
        return (
          <a
            href="#"
            key={pageNumber.id}
            className={pageNumber.isActive ? "active" : ""}
            onClick={(e) => handleClick(e, pageNumber.id)}
            style={{ fontSize: "16px" }}
          >
            {pageNumber.id}
          </a>
        );
      })}
      <a href="#" onClick={(e) => handleClick(e, 9)}>
        Last
      </a>
    </div>
  );
}

export default Pagination;
