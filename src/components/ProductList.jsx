import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "../styles/ProductList.css";
const ProductList = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <Product key={product.__id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
