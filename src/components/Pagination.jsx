import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Pagination.css";
const Pagination = () => {
  const pageNumber = useSelector((state) => state.pageNumber);
  return (
    <div className="pagination-container">
      <button>Prev</button>
      <span>{pageNumber}</span>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
