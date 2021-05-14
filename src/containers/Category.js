import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchItemsByCategory, CHANGE_FILTER, CHANGE_BRAND } from '../actions';
import DotLoader from 'react-spinners/DotLoader';
import CategoryFilter from '../components/CategoryFilter';
import BrandFilter from '../components/BrandFilter';

const Products = () => {
  const category = useParams(':category');
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.category);
  const brand = useSelector((state) => state.filter.brand);

  useEffect(() => {
    dispatch(fetchItemsByCategory(category.category));
  }, []);

  const makeup = useSelector((state) => state.makeup.category);
  let makeupToFilter;
  let makeupToView;
  if (filter !== 'All') {
    makeupToFilter = makeup.filter((item) => item.category === filter);
  } else {
    makeupToFilter = makeup;
  }

  if (brand !== 'All') {
    makeupToView = makeupToFilter.filter((item) => item.brand === brand);
  } else {
    makeupToView = makeupToFilter;
  }

  const handleChange = (e) => {
    dispatch(CHANGE_FILTER(e.target.value));
  };

  const handleBrand = (e) => {
    dispatch(CHANGE_BRAND(e.target.value));
  };

  const getCatOptions = (makeup) => {
    if (makeup) {
      const allOptions = [];
      makeup.forEach((item) => allOptions.push(item.category));
      const filtered = allOptions.filter(Boolean).sort();
      const filterCatOptions = new Set(filtered);
      return filterCatOptions;
    }
  };

  const getBrandOptions = (makeup) => {
    if (makeup) {
      const allOptions = [];
      makeup.forEach((item) => allOptions.push(item.brand));
      const filtered = allOptions.filter(Boolean).sort();
      const filterBrandOptions = new Set(filtered);
      return filterBrandOptions;
    }
  };

  const cats = getCatOptions(makeup);
  const brands = getBrandOptions(makeup);

  return (
    <>
      <div className="top-products">
        <hr />
        <br />
        <h2>{category.category}s</h2>
      </div>

      {cats && (
        <div className="filter flex">
          <CategoryFilter handleChange={handleChange} options={cats} />
          <BrandFilter handleBrand={handleBrand} options={brands} />
        </div>
      )}
      <div className="items">
        <DotLoader
          color="#a572ff"
          loading={!makeupToView}
          css={`
            display: block;
            margin: 0 auto;
            border-color: #fff;
          `}
          size={150}
        />

        {makeupToView &&
          makeupToView.map((item) => {
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
