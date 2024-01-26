import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  margin: string;
  size?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, margin, size }) => {
  return (
    <button className={`${styles.button}  ${margin} ${size}`}>{text}</button>
  );
};

export const ButtonWhite: React.FC<ButtonProps> = ({ text, margin, size }) => {
  return (
    <button className={`${styles.white}  ${margin} ${size}`}>{text}</button>
  );
};
