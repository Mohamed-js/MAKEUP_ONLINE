import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchItemsByCategory } from '../actions';

const Products = () => {
  const category = useParams(':category');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsByCategory(category.category));
  }, []);

  const makeup = useSelector((state) => state.makeup.category);

  return (
    <>
      <div className="top-products">
        <hr />
        <br />
        <h2>TOP PRODUCTS</h2>
      </div>
      <div className="items">
        {makeup &&
          makeup.map((item) => {
            return (
              <div className="card">
                <Link to={`/product/${item.id}`}>
                  <div className="img-holder">
                    <img alt={item.name} src={item.image_link}></img>
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
          })}
      </div>
    </>
  );
};

export default Products;
