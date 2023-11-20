import { useEffect } from "react";
import { setFilterType, fetchProductDetail } from "../actions";
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
    dispatch(fetchProductDetail());
  }, []);

  return error ? (
    <p>{error}</p>
  ) : (
    <div>
      <Header />
      {!loading && products.length === 0 ? (
        <p className="empty-list">No Products Found</p>
      ) : (
        <>
          <div className="toggle-filter-container">
            <Button
              intent="success"
              large={true}
              onClick={() => dispatch(setFilterType("filter"))}
            >
              Filters
            </Button>
            <Button
              intent="success"
              large={true}
              onClick={() => dispatch(setFilterType("sort"))}
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
