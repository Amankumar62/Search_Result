import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import FilterList from "./FilterList";
import ProductList from "./ProductList";
import SortOptions from "./SortOptions";
import "./Home.css";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCT_DETAIL" });
  }, []);
  return (
    <div className="home-container">
      <Header />
      <div className="toggle-filter-container">
        <button
          onClick={() =>
            dispatch({ type: "SET_FILTER_TYPE", payload: "filter" })
          }
        >
          Filters
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER_TYPE", payload: "sort" })}
        >
          Sort Options
        </button>
      </div>
      <FilterList />
      <SortOptions />
      <ProductList />
      <Pagination />
    </div>
  );
};

export default Home;
