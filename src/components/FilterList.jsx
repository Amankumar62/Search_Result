import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";

const FilterList = () => {
  const filterOptions = useSelector((state) => state.filterOptions);
  const filterType = useSelector((state) => state.filterType);
  if (filterType !== "filter") {
    return null;
  }
  console.log(filterOptions);
  return (
    <div>
      {filterOptions.map((filter) => (
        <Filter key={filter.id} {...filter} />
      ))}
    </div>
  );
};

export default FilterList;
