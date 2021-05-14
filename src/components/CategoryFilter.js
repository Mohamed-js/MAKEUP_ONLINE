import React from 'react';
import { useSelector } from 'react-redux';
import Option from './Option';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const filter = useSelector((state) => state.filter.category);
  const { options, handleChange } = props;
  const optionsAll = ['All', ...options];
  return (
    <div className="filter-select">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={filter}>
        {optionsAll.map((option) => (
          <Option option={option} />
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  options: PropTypes.array,
  handleBrand: PropTypes.func,
};

CategoryFilter.defaultProps = {
  options: ['All'],
  handleBrand: () => 0,
};
