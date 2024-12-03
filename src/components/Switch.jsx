import React from "react";

const Switch = ({ value, onChange }) => {
  console.log(value);
  return (
    <div className="switch_container">
      <label className="switch">
        <input
          type="checkbox"
          value={value}
          onChange={(e) => onChange(e, value)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
