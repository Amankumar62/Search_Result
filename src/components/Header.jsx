import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Header.css";
import { InputGroup, Button } from "@blueprintjs/core";
const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  return (
    <div className="header-container">
      <InputGroup
        type="text"
        large={true}
        value={query}
        className="search-input"
        placeholder="Search product"
        onChange={(e) => setQuery(e.target.value)}
      ></InputGroup>
      <Button
        intent="success"
        onClick={() => {
          dispatch({ type: "SET_QUERY", payload: query });
          dispatch({ type: "SET_PAGENO", payload: 1 });
          dispatch({ type: "FETCH_PRODUCT_DETAIL" });
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Header;
