import styles from "./styles.module.scss";

export const BurgerButton = () => {
  return (
    <button className={styles.custom_burger_button}>
      <div className={styles.custom_burger_button__line}></div>
      <div className={styles.custom_burger_button__line_middle}></div>
      <div className={styles.custom_burger_button__line_bottom}></div>
    </button>
  );
};
