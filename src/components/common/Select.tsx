"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { SelectOption } from "@/types";
import React, { useState } from "react";

interface SelectProps {
  value: any;
  onChange: (value: any) => void;
  options: SelectOption[];
  label: string;
  labelIcon?: string;
  className?: string;
}

const Select = ({
  value,
  onChange,
  options,
  label,
  labelIcon,
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const SelectRef = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div
      ref={SelectRef}
      className={`relative flex flex-col gap-1 ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 bg-space-slate border border-deep-navy rounded-sm p-2.5 flex items-center justify-between gap-2.5 cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          {labelIcon && <img src={labelIcon} alt={label} />}
          <span className="text-sm font-bold text-pastel-blue">{label}</span>
        </div>

        <div className="w-6 h-6 flex items-center justify-center border border-dark-slate rounded-sm">
          <img
            src="/icons/arrow-down.svg"
            alt="arrow"
            className="w-2.5 h-2.5 object-contain"
          />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute top-full mt-1 z-20 w-full rounded-md bg-deep-navy border border-dark-slate shadow-lg max-h-60 overflow-y-auto py-1">
          {options.map((option) => {
            const isSelected = value === option.value;
            return (
              <li
                key={option.id}
                className={`px-4 py-2.5 text-pastel-blue text-sm font-medium cursor-pointer flex items-center gap-2.5 hover:bg-space-blue hover:border-l-4 hover:border-bright-blue transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-space-blue border-l-4 border-bright-blue"
                    : ""
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {!!option.icon && (
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="w-5 h-5 object-contain"
                  />
                )}
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
