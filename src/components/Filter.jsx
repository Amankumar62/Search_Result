import React from "react";
import "./Filter.css";

const Filter = ({ name, type, items, selectedFilter, setFilter }) => {
  return (
    <div className="filter-container">
      <h4
        className={name === selectedFilter ? "selected-filter" : ""}
        onClick={() => setFilter((prev) => (prev === name ? null : name))}
      >
        {name}
      </h4>
      {selectedFilter !== name ? null : (
        <div className="filter-item-list">
          {items.map((item) => (
            <label key={item.id}>
              <input type={type} checked={item.selected} name={name} />{" "}
              {item.name} <b>({item.count})</b>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
