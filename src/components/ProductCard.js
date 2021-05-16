import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => (
  <div className="card">
    <Link to={`/product/${item.id}`}>
      <div className="img-holder">
        <img alt={item.name} src={item.api_featured_image} />
      </div>
      <h5 className="card-name">{item.name}</h5>
      <p>
        <strong>Brand</strong>
        :
        {item.brand}
      </p>
      <p>
        <strong>Category</strong>
        :
        {item.category}
      </p>
      <p>
        <strong>
          $
          {item.price}
        </strong>
      </p>
    </Link>
  </div>
);

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.instanceOf(Object),
};

ProductCard.defaultProps = {
  item: {},
};
