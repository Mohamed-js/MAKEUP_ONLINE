import React from 'react';
import { useSelector } from 'react-redux';
import Option from './Option';
import PropTypes from 'prop-types';

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
          <Option option={option} />
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;

BrandFilter.propTypes = {
  options: PropTypes.array,
  handleBrand: PropTypes.func,
};

BrandFilter.defaultProps = {
  options: ['All'],
  handleBrand: () => 0,
};
