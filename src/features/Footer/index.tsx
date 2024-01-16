import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@shared/ui/Separator";

import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";
import {
  faInstagram,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="logotype" />
      <Separator marginTop="mt-6" />
      <span className={styles.footer__address}>Алматы</span>
      <span className={styles.footer__small_address}>
        ул. Маметова 54, 4 этаж <br /> <br />
        Время работы: с 08:00 до 17:00Выходные: суббота, воскресенье
      </span>
      <span className={styles.footer__phone}>+7 701 781 29 56</span>
      <div className={styles.footer__container_icon}>
        <FontAwesomeIcon
          className={`${styles.footer__container_icon__icon}`}
          icon={faYoutube}
        />
        <FontAwesomeIcon
          className={`${styles.footer__container_icon__icon}`}
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className={`${styles.footer__container_icon__icon}`}
          icon={faVk}
        />
      </div>
      <span className={styles.footer__info}>
        © 2023 | ООО "AS & Partners Architects"
      </span>
    </footer>
  );
};
