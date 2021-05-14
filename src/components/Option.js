import React from 'react';

const Option = ({ option }) => {
  return (
    <option key={Math.random()} value={option}>
      {option}
    </option>
  );
};

export default Option;
