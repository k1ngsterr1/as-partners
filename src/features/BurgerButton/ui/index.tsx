import React from "react";
import styles from "./styles.module.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  margin?: string;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button className={styles.custom_burger_button} onClick={onClick}>
      <div className={styles.custom_burger_button__line}></div>
      <div className={styles.custom_burger_button__line_middle}></div>
      <div className={styles.custom_burger_button__line_bottom}></div>
    </button>
  );
};
