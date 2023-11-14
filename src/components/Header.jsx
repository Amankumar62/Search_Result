import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  return (
    <div className="header-container">
      <input
        type="search"
        value={query}
        className="search-input"
        placeholder="Search product"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "SET_QUERY", payload: query });
          dispatch({ type: "FETCH_PRODUCT_DETAIL" });
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Header;
