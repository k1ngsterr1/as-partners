import { Separator } from "@shared/ui/Separator";
import Marquee from "react-fast-marquee";

import logo01 from "@assets/clients/31.svg";
import logo02 from "@assets/clients/apple_city.svg";
import logo03 from "@assets/clients/burger_king.svg";
import logo04 from "@assets/clients/freedom.svg";
import logo05 from "@assets/clients/kaspi.svg";
import logo06 from "@assets/clients/lampadario.svg";
import logo07 from "@assets/clients/lenovo.svg";
import logo08 from "@assets/clients/siemes.svg";
import logo09 from "@assets/clients/syngenta.svg";

import styles from "./styles.module.scss";

export const ClientsScreen = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="container-no-height">
        <h5 className={styles.heading}>Клиенты</h5>
        <Separator marginTop="mt-4" />
        <p className="paragraph_black mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна. Мы специализируемся
          на создании инновационных, функциональных и эстетически
          привлекательных архитектурных решений, которые отражают последние
          тенденции в области урбанистики и дизайна интерьеров.
        </p>
        <Marquee speed={100}>
          <img className={`${styles.logo} ml-8 mr-8`} src={logo01} alt="logo" />
          <img src={logo02} className={`${styles.logo} ml-8 mr-8`} alt="logo" />
          <img
            src={logo03}
            className={`${styles.logo} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo04}
            className={`${styles.freedom} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo05}
            className={`${styles.logo} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo06}
            className={`${styles.freedom} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo07}
            className={`${styles.freedom} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo08}
            className={`${styles.freedom} ml-8 mr-8 `}
            alt="logo"
          />
          <img
            src={logo09}
            className={`${styles.freedom} ml-8 mr-8 `}
            alt="logo"
          />
        </Marquee>
      </section>
    </div>
  );
};
