import React from 'react';
import { useSelector } from 'react-redux';

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
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
