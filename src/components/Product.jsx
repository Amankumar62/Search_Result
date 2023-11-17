import "./Product.css";
import { Card, Elevation } from "@blueprintjs/core";

const Product = ({
  image_url,
  name,
  price,
  link,
  shopify_tags,
  available,
  discount_amount,
  discount_percentage,
}) => {
  return (
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      className="product-container"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <img src={image_url} alt={name} loading="lazy" />
      <div className="product-content">
        <p className="product-content-name">{name}</p>
        <p className="product-content-price-container">
          <span className="product-content-price">&#36;{price}</span>
          <span className="product-content-discount-price">
            &#36;{price - discount_amount}
          </span>
          <span className="product-content-discount-percentage">
            ({Math.round(discount_percentage)}% off)
          </span>
        </p>
        <span
          className={`product-content-available ${
            available ? "" : "out-of-stock"
          }`}
        >
          {available ? "In Stock" : "Out of Stock"}
        </span>
        <div className="product-tag-container">
          {shopify_tags.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Product;
