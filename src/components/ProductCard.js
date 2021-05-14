import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <div className="img-holder">
          <img alt={item.name} src={item.api_featured_image}></img>
        </div>
        <h5 className="card-name">{item.name}</h5>
        <p>
          <strong>Brand</strong>: {item.brand}
        </p>
        <p>
          <strong>Category</strong>: {item.category}
        </p>
        <p>
          <strong>$ {item.price}</strong>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
