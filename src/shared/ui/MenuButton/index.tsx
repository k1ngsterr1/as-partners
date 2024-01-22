import { useDispatch } from "react-redux";
import { openMenu } from "@redux/menuSlice";

import styles from "./styles.module.scss";

export const MenuButton = () => {
  const dispatch = useDispatch();

  function OpenMenu() {
    dispatch(openMenu());
  }

  return (
    <button className={styles.button} onClick={() => OpenMenu()}>
      <span className={styles.button__text}>Меню</span>
      <div className={styles.button__burger}>
        <span className={styles.button__burger__line_top} />
        <span className={styles.button__burger__line_middle} />
        <span className={styles.button__burger__line_bottom} />
      </div>
    </button>
  );
};
