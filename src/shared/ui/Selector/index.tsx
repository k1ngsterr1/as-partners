import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface SelectorProps {
  placeholder: string;
  value: string;
  margin: string;
  onChange: (value: string) => void; // Adjusted to accept a string parameter
  options: { label: string; value: string }[]; // Assuming options is an array of objects with label and value
}

export const Selector: React.FC<SelectorProps> = ({
  placeholder,
  value,
  margin,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`${styles.selector} ${margin}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selector__placeholder}>
          {value || placeholder}
        </span>
        <FontAwesomeIcon
          className={styles.selector__chevron}
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={styles.list__item}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
