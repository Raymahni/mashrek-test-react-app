import React, { ChangeEvent } from "react";

interface BaseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  isValid?: boolean;
  errorMessage?: string;
  successMessage?: string;
  iconPlacement?: "left" | "right";
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  isValid,
  errorMessage,
  successMessage,
  label,
  className,
}) => {
  return (
    <div className="w-full my-4">
      <label className="block text-gray-700 text-sm  mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      />
    </div>
  );
};

export default BaseInput;
