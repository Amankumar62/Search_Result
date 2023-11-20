import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Button } from "@blueprintjs/core";
const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchBtnRef = useRef(null);

  const searchHandler = () => {
    dispatch({ type: "SET_QUERY", payload: query });
    dispatch({ type: "FETCH_PRODUCT_DETAIL" });
  };

  const debounceClick = (func, delay) => {
    if (typeof func !== "function") {
      return;
    }

    clearTimeout(searchBtnRef.current);

    searchBtnRef.current = setTimeout(() => {
      func();
    }, delay);
  };

  return (
    <div className="header-container">
      <InputGroup
        type="text"
        large={true}
        value={query}
        className="search-input"
        placeholder="Search product"
        onChange={(e) => setQuery(e.target.value.replace(/[^a-zA-Z\s]/, ""))}
      ></InputGroup>
      <Button
        intent="success"
        onClick={() => debounceClick(searchHandler, 300)}
      >
        Search
      </Button>
    </div>
  );
};

export default Header;
