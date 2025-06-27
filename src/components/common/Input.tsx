import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (arg: string) => void;
  leftIcon?: string;
  className?: string;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  leftIcon,
  className = "",
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm text-white font-medium capitalize">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {leftIcon && (
          <img
            src={leftIcon}
            alt="icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none"
          />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-deep-navy text-sm text-white placeholder:text-pastel-blue border border-dark-slate rounded-[3px] p-2.5 focus:outline-none ${
            leftIcon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
