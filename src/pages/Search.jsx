import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import SortOptions from "../components/SortOptions";
import { Button, Spinner } from "@blueprintjs/core";
import Pagination from "../components/Pagination";

const Search = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCT_DETAIL" });
  }, []);

  return error ? (
    <p>{error}</p>
  ) : (
    <div>
      <Header />
      {products.length === 0 ? (
        <p className="empty-list">No Products Found</p>
      ) : (
        <>
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
              onClick={() =>
                dispatch({ type: "SET_FILTER_TYPE", payload: "sort" })
              }
            >
              Sort Options
            </Button>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <FilterList />
              <SortOptions />
              <ProductList />
              <Pagination />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
