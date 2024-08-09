import React, { ChangeEvent } from "react";

interface BaseSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label: string;
}

const BaseSelect: React.FC<BaseSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  label,
}) => {
  return (
    <div>
      <div>{label}</div>
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline ${className}`}
      >
        <option value="label" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelect;
