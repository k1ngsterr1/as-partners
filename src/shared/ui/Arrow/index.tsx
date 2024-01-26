import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

export const Arrow = () => {
  return (
    <>
      <FontAwesomeIcon icon={faChevronDown} className={styles.arrow_icon} />
    </>
  );
};

export const BlueArrow = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={styles.arrow_icon_blue}
      />
    </>
  );
};
