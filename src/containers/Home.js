import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMakeup } from '../actions';
import Cover from '../components/Cover';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakeup());
  }, []);

  const makeup = useSelector((state) => state.makeup);

  console.log(makeup.makeup);

  return (
    <>
      <div>
        <Cover />
      </div>

      <div className="categories-btn">
        <Link to="/categories">
          SHOW CATEGORIES
          <span>
            <FontAwesomeIcon icon={faArrowRight} />{' '}
          </span>
        </Link>
      </div>
      <div className="top-products">
        <hr />
        <br />
        <h2>TOP PRODUCTS</h2>
      </div>
      <div className="items">
        {makeup.makeup &&
          makeup.makeup.map((item) => {
            return (
              <div className="card">
                <Link to={`product/${item.id}`}>
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

export default Home;
