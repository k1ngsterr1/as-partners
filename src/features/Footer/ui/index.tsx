import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@shared/ui/Separator";
import {
  faInstagram,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SmallAutoSlider } from "@features/SmallAutoSlider/ui";
import { smallGalleryContent } from "@shared/lib/data/smallGalleryContent";
import { ButtonWhite } from "@shared/ui/Button";

import logo from "@assets/main/logo_white.svg";
import spark_logo from "@assets/main/spark_logo.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
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
          © 2024 | ТОО "AS & Partners Architects"
        </span>
        <img
          className={styles.spark_logo}
          src={spark_logo}
          onClick={() => window.open("https://sparkstudio.kz/home")}
        />
      </footer>
      <footer className={styles.footer_pc}>
        <div className={styles.footer_pc__container}>
          <div className={styles.footer_pc__container__section_one}>
            <img
              src={logo}
              className={styles.footer_pc__container__section_one__logo}
              alt="logo"
            />
            <Separator marginTop="mt-7 mb-5" />
            <strong className="text-white text-xl font-[Montserrat] max-[1024px]:!inline-flex w-fit">
              Алматы
            </strong>
            <address className="!not-italic w-[70%] text-white text-lg  mt-5 mb-5 font-light font-[Montserrat]">
              ул. Маметова 54, 4 этаж
              <br />
              <br />
              Время работы: с 08:00 до 17:00 Выходные: суббота, воскресенье
            </address>
            <a
              href="tel:+77017812956"
              className="!w-[52%] underline font-[Montserrat] text-white text-xl font-light transition-all hover:text-custom-blue"
            >
              +7 705 181 5330
            </a>
            <span className="text-white font-[Montserrat] text-lg font-light mt-5 mb-10  max-[1024px]:!inline-flex w-fit ">
              © 2024 | ТОО "AS & Partners Architects"
            </span>
          </div>
          <div className={styles.footer_pc__container__section_two}>
            <SmallAutoSlider photos={smallGalleryContent.first.photos} />
            <ButtonWhite text="Вверх" margin="mt-8" to={"upper"} />
          </div>
        </div>
      </footer>
    </>
  );
};
