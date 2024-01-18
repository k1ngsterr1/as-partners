import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { openMenu } from "@redux/menuSlice";

interface BurgerButtonProps {
  color: string;
  margin?: string;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ color }) => {
  const dispatch = useDispatch();

  function OpenMenu() {
    dispatch(openMenu());
  }

  return (
    <button className={styles.custom_burger_button} onClick={OpenMenu}>
      <div className={`${styles.custom_burger_button__line} ${color}`} />
      <div className={`${styles.custom_burger_button__line_middle} ${color}`} />
      <div className={`${styles.custom_burger_button__line_bottom} ${color}`} />
    </button>
  );
};
