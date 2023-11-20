import { useEffect } from "react";
import { fetchProductDetail } from "../actions";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import SortOptions from "../components/SortOptions";
import { Spinner } from "@blueprintjs/core";
import Pagination from "../components/Pagination";
import ToggleFilter from "../components/ToggleFilter";

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
