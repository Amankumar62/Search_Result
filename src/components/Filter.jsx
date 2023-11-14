import React from "react";

const Filter = ({ name, type, items }) => {
  return (
    <div>
      <h4>{name}</h4>
      <div>
        {items.map((item) => (
          <label key={item.id}>
            <input type={type} checked={item.selected} name={name} />{" "}
            {item.name} <b>({item.count})</b>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
