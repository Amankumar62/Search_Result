import React from "react";
import { useSelector } from "react-redux";
const SortOptions = () => {
  const filterType = useSelector((state) => state.filterType);
  const sortOptions = useSelector((state) => state.sortOptions);
  if (filterType !== "sort") {
    return null;
  }
  return (
    <div className="sort-option-container">
      {sortOptions.map((option) => {
        if (!option.directions) {
          return (
            <section>
              <h3>{option.label}</h3>
              <label key={option.id}>
                <input
                  type="radio"
                  checked={option.selected}
                  name={option.id}
                />{" "}
                {option.label}
              </label>
            </section>
          );
        } else {
          return (
            <section>
              <h3>{option.label}</h3>
              {option.directions.map((direction) => {
                return (
                  <label key={direction.id}>
                    <input
                      type="radio"
                      checked={direction.selected}
                      name={option.id}
                    />{" "}
                    {direction.label}
                  </label>
                );
              })}
            </section>
          );
        }
      })}
    </div>
  );
};

export default SortOptions;
