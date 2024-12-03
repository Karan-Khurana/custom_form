// src/components/TextInput.js
import React from 'react';

const TextInput = ({ value, onChange, placeholder,maxlength }) => {
    console.log(maxlength)
  return <input
    type="text"
    value={value}
    maxlength={maxlength}
    onChange={onChange}
    placeholder={placeholder}
  />
};

export default TextInput;
