import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";

const FilterList = () => {
  const filterOptions = useSelector((state) => state.filterOptions);
  const filterType = useSelector((state) => state.filterType);
  const [selectedFilter, setSelectedFilter] = useState(null);

  if (filterType !== "filter") {
    return null;
  }

  return (
    <div className="filter-list-container">
      {filterOptions.length === 0 ? (
        <p className="empty-list">No Filter Available</p>
      ) : (
        filterOptions.map((filter) => (
          <Filter
            key={filter.id}
            {...filter}
            selectedFilter={selectedFilter}
            setFilter={setSelectedFilter}
          />
        ))
      )}
    </div>
  );
};

export default FilterList;
