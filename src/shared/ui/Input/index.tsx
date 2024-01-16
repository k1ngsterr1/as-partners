import React from "react";
import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  margin,
  ...rest
}) => {
  return (
    <input
      className={`${styles.input} ${margin}`}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
};
