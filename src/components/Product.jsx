import "./Product.css";

const Product = ({
  image_url,
  name,
  price,
  shopify_tags,
  available,
  _vendor,
  discount_amount,
  discount_percentage,
}) => {
  return (
    <div className="product-container">
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
    </div>
  );
};

export default Product;
