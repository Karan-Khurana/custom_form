import React from 'react';

const DateInput = ({ value, onChange }) => (
    <div className="input_container">
  <input
    type="date"
    value={value}
    onChange={onChange}
  />
  </div>
);

export default DateInput;
