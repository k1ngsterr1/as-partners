import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BurgerButton } from "@features/BurgerButton/ui";
import { useDispatch, useSelector } from "react-redux";
import { useMenuAnimation } from "@shared/lib/hooks/animations/useMenuAnimation";
import { closeMenu } from "@redux/menuSlice";
import { RootState } from "@redux/store";
import {
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import plus from "@assets/main/plus.svg";
import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);
  const { menuRef, linkRefs, logoRef, crossRef } = useMenuAnimation();

  const addToLinkRefs = (el: any) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  function handleClose() {
    dispatch(closeMenu());
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <aside className={styles.menu} ref={menuRef}>
      <div className={styles.menu__content}>
        <img
          src={logo}
          className={styles.menu__content__logo}
          alt="logo"
          ref={logoRef}
        />
        <img
          src={plus}
          className={styles.menu__content__plus}
          alt="plus"
          onClick={() => handleClose()}
          ref={crossRef}
        />
        <nav className={styles.menu__content__links}>
          <Link
            className={`${styles.menu__content__links__link}`}
            ref={addToLinkRefs}
            to="/home"
          >
            Главная
          </Link>
          <Link
            className={`${styles.menu__content__links__link} mt-5`}
            ref={addToLinkRefs}
            to="/about"
          >
            О Нас
          </Link>
          <Link
            className={`${styles.menu__content__links__link} mt-5`}
            ref={addToLinkRefs}
            to="/services"
          >
            Наши Услуги
          </Link>
          <Link
            className={`${styles.menu__content__links__link} mt-5`}
            ref={addToLinkRefs}
            to="/portfolio"
          >
            Наше Портфолио
          </Link>
          <Link
            className={`${styles.menu__content__links__link} mt-5`}
            ref={addToLinkRefs}
            to="/contacts"
          >
            Контакты
          </Link>
        </nav>
      </div>
    </aside>
  );
};
