import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import "./FilterList.css";

const FilterList = () => {
  const filterOptions = useSelector((state) => state.filterOptions);
  const filterType = useSelector((state) => state.filterType);
  const [selectedFilter, setSelectedFilter] = useState(null);
  if (filterType !== "filter") {
    return null;
  }

  return (
    <div className="filter-list-container">
      {filterOptions.map((filter) => (
        <Filter
          key={filter.id}
          {...filter}
          selectedFilter={selectedFilter}
          setFilter={setSelectedFilter}
        />
      ))}
    </div>
  );
};

export default FilterList;
