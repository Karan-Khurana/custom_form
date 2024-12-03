import React from 'react';

const CheckboxGroup = ({ value, onChange, options }) => {
console.log(value)
return  <>
    {options.map((option, index) => (
      <div className="radio_btn" key={index}>
        <input
          type="checkbox"
          checked={value.includes(option.value)}
          id={option.value+index}
          onChange={(e) => onChange(e,option.value)}
        />
        <label for={option.value+index}>{option.label}</label>
      </div>
    ))}
  </>
};

export default CheckboxGroup;
