import React from 'react';

const Button = ({ type, label, onClick, isSubmitting }) => (
  <button type={type} onClick={onClick} disabled={isSubmitting}>
    {isSubmitting ? 'Submitted' : label}
  </button>
);

export default Button;
