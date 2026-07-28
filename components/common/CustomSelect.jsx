"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * CustomSelect Component
 * Replaces native HTML <select> with a fully customizable, rounded dropdown menu popover.
 */
export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select Option",
  icon: Icon,
  error,
  className = "",
  roundedClassName = "rounded-xl",
  disabled = false,
  ariaDescribedBy,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle escape & keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === "Escape" || e.key === "Tab") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else if (focusedIndex >= 0 && focusedIndex < options.length) {
        handleSelect(options[focusedIndex].value);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(options.length - 1);
      } else {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
      }
    }
  };

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: optionValue,
        },
      });
    }
    setIsOpen(false);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`w-full h-12 ${Icon ? "pl-12" : "pl-4"} pr-10 text-left text-sm sm:text-[15px] bg-slate-50/50 border transition-all duration-200 outline-none font-medium flex items-center justify-between cursor-pointer ${roundedClassName} ${
          isOpen
            ? "border-[#00aeee] ring-2 ring-[#00aeee]/20 shadow-sm bg-white"
            : error
            ? "border-red-500 focus:border-red-500"
            : "border-slate-300 hover:border-slate-400 focus:border-[#00aeee]"
        } ${className}`}
      >
        {Icon && (
          <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}

        <span className={`block truncate ${selectedOption ? "text-slate-800 font-semibold" : "text-slate-500 font-normal"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <div className="absolute right-4 pointer-events-none text-slate-400 z-10">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#00aeee]" : ""}`}
            aria-hidden="true"
          />
        </div>
      </button>

      {/* Rounded Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-white border border-slate-200 shadow-xl ${roundedClassName} overflow-hidden py-1.5 max-h-64 overflow-y-auto animate-in fade-in-50 zoom-in-95 duration-150`}
        >
          {/* Header Placeholder Option matching screenshot style */}
          <div
            onClick={() => handleSelect("")}
            className="px-4 py-2.5 text-slate-400 font-medium text-sm sm:text-[15px] bg-slate-100/70 border-b border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors flex items-center justify-between"
          >
            <span>{placeholder}</span>
          </div>

          <ul role="listbox" tabIndex={-1} className="py-1">
            {options.map((option, index) => {
              const isSelected = value === option.value;
              const isFocused = focusedIndex === index;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={`px-4 py-2.5 text-sm sm:text-[15px] font-medium cursor-pointer transition-colors duration-150 flex items-center justify-between ${
                    isSelected
                      ? "bg-[#00aeee]/10 text-[#00aeee] font-semibold"
                      : isFocused
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#00aeee]" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Hidden input for HTML form accessibility / native state tracking */}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
