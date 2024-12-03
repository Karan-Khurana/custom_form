import React from 'react';

const RadioGroup = ({ value, onChange, options }) => {
return  <>
    {options.map((option, index) => (
      <div className="radio_btn"  key={index}>
        <input
          type="radio"
          value={option.value}
          id={option.label+index}
          checked={value === option.value}
          onChange={(e) => onChange(e,option.value)}
        />
        <label for={option.label+index}>{option.label}</label>
      </div>
    ))}
  </>
};

export default RadioGroup;
