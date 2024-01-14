import React from "react";
import styles from "./styles.module.scss";

export const BurgerButton = () => {
  return (
    <button className={styles.burger_button}>
      <span className={styles.burger_button__line}></span>
      <span className={styles.burger_button__line__middle}></span>
      <span className={styles.burger_button__line}></span>
    </button>
  );
};
