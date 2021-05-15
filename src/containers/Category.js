import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import { fetchItemsByCategory, CHANGE_FILTER, CHANGE_BRAND } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import BrandFilter from '../components/BrandFilter';
import ProductCard from '../components/ProductCard';
import {
  FilterBrands,
  FilterCats,
  getBrandOptions,
  getCatOptions,
} from '../Helpers';

const Products = () => {
  const category = useParams(':category');
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.category);
  const brand = useSelector((state) => state.filter.brand);

  useEffect(() => {
    dispatch(fetchItemsByCategory(category.category));
  }, [dispatch, category]);

  const makeup = useSelector((state) => state.makeup.category);

  const makeupToFilter = FilterCats(filter, makeup);
  const makeupToView = FilterBrands(brand, makeupToFilter);

  const handleBrand = (e) => {
    dispatch(CHANGE_BRAND(e.target.value));
  };
  const handleCategory = (e) => {
    dispatch(CHANGE_FILTER(e.target.value));
  };

  const cats = getCatOptions(makeup);
  const brands = getBrandOptions(makeup);

  return (
    <>
      <div className="top-products">
        <hr />
        <br />
        <h2>
          {category.category}
          s
        </h2>
      </div>

      {cats && (
        <div className="filter flex">
          <CategoryFilter handleChange={handleCategory} options={cats} />
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
        {makeupToView
          && makeupToView.map((item) => <ProductCard key={item} item={item} />)}
      </div>
    </>
  );
};

export default Products;
