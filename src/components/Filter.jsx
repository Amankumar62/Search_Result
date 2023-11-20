import React from "react";

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
          {items.map(({ id, selected, count, name }) => (
            <label key={id}>
              <input type={type} checked={selected} name={name} /> {name}
              <b>({count})</b>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
