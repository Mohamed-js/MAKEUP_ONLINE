import React from 'react';
import { useSelector } from 'react-redux';

const BrandFilter = (props) => {
  const filter = useSelector((state) => state.filter.brand);
  const { options, handleBrand } = props;
  const optionsAll = ['All', ...options];
  return (
    <div className="filter-select">
      <label htmlFor="category">Brand</label>
      <select
        id="category"
        name="category"
        onChange={handleBrand}
        value={filter}>
        {optionsAll.map((option) => (
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
