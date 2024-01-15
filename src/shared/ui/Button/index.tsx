import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  margin: string;
  size?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, margin, size }) => {
  return (
    <button className={`${styles.button} ${margin} ${size}`}>{text}</button>
  );
};
