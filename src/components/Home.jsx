import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import FilterList from "./FilterList";
import ProductList from "./ProductList";
import SortOptions from "./SortOptions";
import { Button } from "@blueprintjs/core";
import Pagination from "./Pagination";

import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCT_DETAIL" });
  }, []);
  return (
    <div className="home-container">
      <Header />

      <div className="toggle-filter-container">
        <Button
          intent="success"
          large={true}
          onClick={() =>
            dispatch({ type: "SET_FILTER_TYPE", payload: "filter" })
          }
        >
          Filters
        </Button>
        <Button
          intent="success"
          large={true}
          onClick={() => dispatch({ type: "SET_FILTER_TYPE", payload: "sort" })}
        >
          Sort Options
        </Button>
      </div>
      <FilterList />
      <SortOptions />
      <ProductList />
      <Pagination />
    </div>
  );
};

export default Home;
