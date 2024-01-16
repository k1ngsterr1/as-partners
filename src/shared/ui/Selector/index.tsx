import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface SelectorProps {
  placeholder: string;
  value: string;
  margin: string;
  onChange: () => void;
  onOpen: () => void;
  options: any;
}

export const Selector: React.FC<SelectorProps> = ({
  placeholder,
  value,
  margin,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex flex-col items-center">
      <div className={`${styles.selector} ${margin}`} onClick={toggleDropdown}>
        <span className={styles.selector__placeholder}>{placeholder}</span>
        <FontAwesomeIcon
          className={styles.selector__chevron}
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option: any) => (
            <li key={option.value} className={styles.list__item}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
