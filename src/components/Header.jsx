import { useRef, useState } from "react";
import { setSearchQuery, fetchProductDetail } from "../actions";
import { useDispatch } from "react-redux";
import { InputGroup, Button } from "@blueprintjs/core";
const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchBtnRef = useRef(null);

  const searchHandler = () => {
    dispatch(setSearchQuery(query));
    dispatch(fetchProductDetail());
  };

  const debounceClick = (func, delay = 300) => {
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
