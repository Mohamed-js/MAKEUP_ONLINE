import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Option from './Option';

const CategoryFilter = (props) => {
  const filter = useSelector((state) => state.filter.category);
  const { options, handleChange } = props;
  const optionsAll = ['All', ...options];
  return (
    <div className="filter-select">
      {/* eslint-disable-next-line */}
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={filter}
      >
        {optionsAll.map((option) => (
          <Option key={option} option={option} />
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  options: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  options: ['All'],
  handleChange: 0,
};
