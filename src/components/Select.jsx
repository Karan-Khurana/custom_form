// src/components/Select.js
import React from 'react';

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
