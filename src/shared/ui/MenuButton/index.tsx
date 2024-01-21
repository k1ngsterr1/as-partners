import React from "react";

import styles from "./styles.module.scss";

export const MenuButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.button__text}>Меню</span>
      <div className={styles.button__burger}>
        <span className={styles.button__burger__line_top} />
        <span className={styles.button__burger__line_middle} />
        <span className={styles.button__burger__line_bottom} />
      </div>
    </button>
  );
};
