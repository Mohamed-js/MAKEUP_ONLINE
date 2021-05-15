import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Option from './Option';

const BrandFilter = (props) => {
  const filter = useSelector((state) => state.filter.brand);
  const { options, handleBrand } = props;
  const optionsAll = ['All', ...options];
  return (
    <div className="filter-select">
      {/* eslint-disable-next-line */}
      <label htmlFor="category">Brand</label>
      <select
        id="category"
        name="category"
        onChange={handleBrand}
        value={filter}
      >
        {optionsAll.map((option) => (
          <Option key={option} option={option} />
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;

BrandFilter.propTypes = {
  options: PropTypes.instanceOf(Array),
  handleBrand: PropTypes.func,
};

BrandFilter.defaultProps = {
  options: ['All'],
  handleBrand: 0,
};
