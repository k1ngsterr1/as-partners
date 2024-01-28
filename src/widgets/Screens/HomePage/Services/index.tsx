import { ServiceTab } from "@entities/ServiceTab";
import { Separator } from "@shared/ui/Separator";
import { Button, ButtonNavigation } from "@shared/ui/Button";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Arrow, BlueArrow } from "@shared/ui/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import image from "@assets/main/about_block_image.webp";

import styles from "./styles.module.scss";

export const ServicesScreen = () => {
  return (
    <div className="w-full bg-white">
      <section className="container">
        <h3 className={styles.heading}>Наши Услуги</h3>
        <Separator marginTop="mt-4" />
        <p className="paragraph_black text-center mt-4 ">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна. Мы специализируемся
          на создании инновационных, функциональных и эстетически
          привлекательных архитектурных решений, которые отражают последние
          тенденции в области урбанистики и дизайна интерьеров.
        </p>
        <ServiceTab text="Пример проекта" margin="mt-8" />
        <ServiceTab text="Пример проекта" margin="mt-8" />
        <ServiceTab text="Пример проекта" margin="mt-8" />
        <Button text="Все услуги" margin="mt-8 mb-8" />
      </section>
      <section className="container-pc">
        <div className={`${styles.section_one} scrollable_section relative`}>
          <Fade
            cascade
            damping={0.2}
            className="w-[100%] flex flex-col items-center relative"
          >
            <ServiceTab text="Услуга" margin="mt-8" />
            <ServiceTab text="Услуга" margin="mt-8" />
            <ServiceTab text="Услуга" margin="mt-8" />
            <ServiceTab text="Услуга" margin="mt-8" />
            <ServiceTab text="Услуга" margin="mt-8 mb-8" />
          </Fade>
        </div>
        <div className={`${styles.section_two} unscrollable_section`}>
          <Fade delay={100}>
            <h3 className={styles.heading}>Наши Услуги</h3>
          </Fade>
          <Fade delay={150}>
            <Separator marginTop="mt-5 mr-8" />
          </Fade>
          <Fade delay={200} className="w-full flex justify-end">
            <p className="paragraph black !text-right  mt-8 mr-8">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
          </Fade>
          <Fade delay={250}>
            <ButtonNavigation
              to={"/services"}
              text="Все услуги"
              margin="mt-8 mr-8"
            />
          </Fade>
        </div>
      </section>
    </div>
  );
};
