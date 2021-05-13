import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMakeup } from '../actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakeup());
  }, []);

  const makeup = useSelector((state) => state.makeup);

  console.log(makeup);

  return (
    <div className="items">
      {makeup[0] &&
        makeup[0].map((item) => {
          return (
            <div className="card">
              <Link>
                <div className="img-holder">
                  <img alt={item.name} src={item.image_link}></img>
                </div>
                <h4 className="card-name">{item.name}</h4>
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
  );
};

export default Home;
