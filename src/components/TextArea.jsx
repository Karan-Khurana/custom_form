// src/components/TextArea.js
import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default TextArea;
