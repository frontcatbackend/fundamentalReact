import React from "react";

//ротнемает несколько пропсов:массив опций и дефолтное значение
const MySeclect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value}
     onChange={event => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySeclect;
