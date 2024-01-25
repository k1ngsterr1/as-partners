import React from "react";

import styles from "./styles.module.scss";

export const Lines = () => {
  return (
    <>
      <figure className={styles.line__left} />
      <figure className={styles.line__right} />
      <figure className={styles.line__center} />
    </>
  );
};
