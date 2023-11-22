import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@blueprintjs/core";

import { fetchSearchResults } from "../actions";
import Header from "../components/Header";
import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import SortOptions from "../components/SortOptions";
import Pagination from "../components/Pagination";
import ToggleFilter from "../components/ToggleFilter";

const Search = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const hasProducts = useSelector((state) => state.products.length > 0);

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, []);

  return error ? (
    <p>{error}</p>
  ) : (
    <div>
      <Header />
      {!loading && !hasProducts ? (
        <p className="empty-list">No Products Found</p>
      ) : (
        <>
          <ToggleFilter />
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
