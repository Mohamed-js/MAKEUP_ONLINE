import React from 'react';
import PropTypes from 'prop-types';

const ProductShow = ({ product }) => (
  <div className="product-container">
    <h2>{product.name.toUpperCase()}</h2>
    <div className="product-img-container">
      <img src={product.api_featured_image} alt="product.name" />
    </div>
    <h4>{product.product_type.toUpperCase()}</h4>
    <div className="colors">
      {product.product_colors.map((color) => (
        <span
          key={color.hex_value}
          className="color"
          style={{
            backgroundColor: color.hex_value,
          }}
        />
      ))}
    </div>
    <h4>
      Price: $
      {product.price}
    </h4>
    <h4>
      Brand:
      {product.brand.toUpperCase()}
    </h4>
    <p>{product.description}</p>
  </div>
);

export default ProductShow;

ProductShow.propTypes = {
  product: PropTypes.instanceOf(Object),
};

ProductShow.defaultProps = {
  product: {},
};
