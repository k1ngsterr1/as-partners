import { Separator } from "@shared/ui/Separator";

import map from "@assets/main/map_mobile.webp";
import styles from "./styles.module.scss";
import { UnderText } from "@shared/ui/UnderText";
import { Counter } from "@shared/ui/Counter";

export const MapScreen = () => {
  return (
    <>
      <div className="w-full bg-white">
        <section className="container-no-height">
          <h3 className={`${styles.heading}`}>
            География выполненных проектов
          </h3>
          <p className="paragraph_black mt-4">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна.
          </p>
          <img src={map} className="mt-10 mb-20" alt="map_mobile" />
        </section>
      </div>
      <div className="w-full bg-custom-black circle">
        <div className="container-pc">
          <section className={styles.section_one}>
            <h2 className={`${styles.heading} text-white text-left`}>
              Немного Статистики
            </h2>
            <Separator marginTop="mt-2" />
            <UnderText
              label="Данные в цифрах"
              color="text-white"
              marginTop="mt-8"
            />
            <div className="w-[85%] flex items-center justify-between mt-10">
              <Counter end="150" duration={3} text="Проектов всего" />
              <Counter end="400" duration={3} text="Проектов всего" />
            </div>
            <div className="w-[85%] flex items-center justify-between mt-10">
              <Counter end="150" duration={3} text="Проектов всего" />
              <Counter end="320" duration={3} text="Проектов всего" />
            </div>
          </section>
          <section className={styles.section_two}>
            <span className="text-white text-2xl font-bold">
              Архитектурная студия AS Partners
            </span>
            <p className="paragraph white Noto mt-4 font-light">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
            <p className="paragraph white Noto mt-4 font-light">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
