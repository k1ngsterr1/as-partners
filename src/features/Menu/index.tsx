import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BurgerButton } from "@features/BurgerButton/ui";
import { UseSelector, useDispatch } from "react-redux";
import { UseDispatch } from "react-redux";

import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "none";
  });

  return (
    <aside className={styles.menu}>
      <div className={styles.menu__content}>
        <img src={logo} className={styles.menu__content__logo} alt="logo" />
        <BurgerButton />
        <nav className={styles.menu__content__links}>
          <Link className={`${styles.menu__content__links__link}`}>
            Главная
          </Link>
          <Link className={`${styles.menu__content__links__link} mt-5`}>
            О Нас
          </Link>
          <Link className={`${styles.menu__content__links__link} mt-5`}>
            Наши Услуги
          </Link>
          <Link className={`${styles.menu__content__links__link} mt-5`}>
            Наше Портфолио
          </Link>
          <Link className={`${styles.menu__content__links__link} mt-5`}>
            Контакты
          </Link>
        </nav>
      </div>
    </aside>
  );
};
