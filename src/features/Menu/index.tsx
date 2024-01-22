import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { useMenuAnimation } from "@shared/lib/hooks/animations/useMenuAnimation";
import { closeMenu } from "@redux/menuSlice";
import { RootState } from "@redux/store";
import {
  faInstagram,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SmallAutoSlider } from "@features/SmallAutoSlider/ui";
import { smallGalleryContent } from "@shared/lib/data/smallGalleryContent";

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
      <div className={styles.menu__content_pc}>
        <figure className={styles.menu__content_pc__line_left} />
        <figure className={styles.menu__content_pc__line_right} />
        <figure className={styles.menu__content_pc__line_center} />
        <div className={styles.menu__content_pc__header}>
          <img
            src={logo}
            className={`${styles.menu__content_pc__header__logo}`}
            alt="logo"
          />
          <button className={styles.menu__content_pc__header__cross_btn}>
            <img
              src={plus}
              className={styles.menu__content_pc__header__cross_btn__image}
              alt="plus"
              onClick={() => handleClose()}
              ref={crossRef}
            />
          </button>
        </div>
        <div className={styles.menu__content_pc__container}>
          <div className={styles.menu__content_pc__container__section_one}>
            <Link
              className={`${styles.menu__content_pc__container__section_one__link}`}
              to="/home"
            >
              Главная
            </Link>
            <Link
              className={`${styles.menu__content_pc__container__section_one__link} mt-5`}
              to="/about"
            >
              О Нас
            </Link>
            <Link
              className={`${styles.menu__content_pc__container__section_one__link} mt-5`}
              to="/services"
            >
              Наши Услуги
            </Link>
            <Link
              className={`${styles.menu__content_pc__container__section_one__link} mt-5`}
              to="/portfolio"
            >
              Наше Портфолио
            </Link>
            <Link
              className={`${styles.menu__content_pc__container__section_one__link} mt-5`}
              to="/contacts"
            >
              Контакты
            </Link>
            <div className="flex items-center justify-between w-[24%] mt-8 ml-8">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white cursor-pointer text-5xl transition-all hover:text-custom-blue"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white cursor-pointer text-5xl transition-all hover:text-custom-blue"
              />
              <FontAwesomeIcon
                icon={faVk}
                className="text-white cursor-pointer text-5xl transition-all hover:text-custom-blue"
              />
            </div>
            <a
              href="tel:+77017812956"
              className="text-white mt-8 ml-8 text-2xl underline font-[Montserrat] transition-all hover:text-custom-blue"
            >
              +7 701 781 29 56
            </a>
            <address className="!not-italic text-2xl font-[Montserrat] ml-8 w-[60%] text-white mt-8">
              ул. Маметова 54, 4 этаж
              <br />
              <br />
              Время работы: с 08:00 до 17:00 Выходные: суббота, воскресенье
            </address>
          </div>
          <div className={styles.menu__content_pc__container__section_two}>
            <span
              className={`${styles.menu__content_pc__container__section_two__text} text-2xl text-gray-500 ml-8 opacity-60 font-[Noto Sans]`}
            >
              Услуги
            </span>
            <div className="flex flex-col ml-8">
              <div className="flex items-center mt-4">
                <span className="text-3xl text-white font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
                <span className="ml-8 text-3xl text-white  font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-3xl text-white font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
                <span className="ml-8 text-3xl text-white  font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-3xl text-white font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
                <span className="ml-8 text-3xl text-white  font-normal noto cursor-pointer transition-all hover:text-custom-blue">
                  Пример Услуги
                </span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-3xl text-white font-normal noto">
                  Пример Услуги
                </span>
                <span className="ml-8 text-3xl text-white  font-normal noto">
                  Пример Услуги
                </span>
              </div>
            </div>
            <span
              className={`${styles.menu__content_pc__container__section_two__text} text-2xl text-gray-500 ml-8 mt-8 mb-8 opacity-60 font-[Noto Sans]`}
            >
              Наши Работы
            </span>
            <div className="w-[65%] flex justify-start ml-8">
              <SmallAutoSlider
                photos={smallGalleryContent.first.photos}
                name={smallGalleryContent.first.name}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
