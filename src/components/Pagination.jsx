import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@blueprintjs/core";
import "./Pagination.css";
const Pagination = () => {
  const pageNumber = useSelector((state) => state.pageNumber);
  const per_page = useSelector((state) => state.per_page);
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();
  if (!total) {
    return null;
  }
  const pageHandler = (pageNo) => {
    if (pageNo <= 0 || pageNo > Math.ceil(total / per_page)) {
      return;
    }

    dispatch({ type: "SET_PAGENO", payload: pageNo });
    dispatch({ type: "FETCH_PRODUCT_DETAIL" });
  };
  return (
    <div className="pagination-container">
      <Button intent="success" onClick={() => pageHandler(pageNumber - 1)}>
        &lt;
      </Button>
      <span>
        {pageNumber} of {Math.ceil(total / per_page)}
      </span>
      <Button intent="success" onClick={() => pageHandler(pageNumber + 1)}>
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
