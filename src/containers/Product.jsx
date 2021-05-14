import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../actions';

const Product = () => {
  const prod = useParams(':id');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemById(prod.id));
  }, []);

  const product = useSelector((state) => state.makeup.item);

  console.log(product);

  return (
    <div>
      {product && (
        <div className="product-container">
          <h2>{product.name}</h2>
          <div className="product-img-container">
            <img src={product.api_featured_image} alt="product.name" />
          </div>
          <h4>{product.product_type.toUpperCase()}</h4>
          <div className="colors">
            {product.product_colors.map((color) => {
              return (
                <span
                  className="color"
                  style={{
                    backgroundColor: color.hex_value,
                  }}></span>
              );
            })}
          </div>
          <h4>Price: ${product.price}</h4>
          <h4>Brand: {product.brand.toUpperCase()}</h4>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
