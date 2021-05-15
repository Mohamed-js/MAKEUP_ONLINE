import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMakeup } from '../actions';
import Cover from '../components/Cover';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakeup());
  }, [dispatch]);

  const makeup = useSelector((state) => state.makeup);

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
            return <ProductCard key={item.id} item={item} />;
          })}
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
