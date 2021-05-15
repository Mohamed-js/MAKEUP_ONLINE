import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ option }) => (
  <option key={Math.random()} value={option}>
    {option}
  </option>
);

Option.propTypes = {
  option: PropTypes.string,
};

Option.defaultProps = {
  option: 'All',
};

export default Option;
