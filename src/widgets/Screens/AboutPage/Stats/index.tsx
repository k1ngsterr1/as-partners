import { Counter } from "@shared/ui/Counter";
import { UnderText } from "@shared/ui/UnderText";
import { Separator } from "@shared/ui/Separator";
import { Fade } from "react-awesome-reveal";
import map from "@assets/main/map_mobile.webp";

import styles from "./styles.module.scss";

export const StatsScreen = () => {
  return (
    <>
      <div className={`w-full bg-custom-black ${styles.circle}`}>
        <section className="container" id="more-mob">
          <Fade delay={150} className="flex items-center justify-center">
            <h2 className={styles.heading}>Немного Статистики</h2>
          </Fade>
          <Fade delay={200}>
            <Separator marginTop="mt-5 mb-5" />
          </Fade>
          <Fade delay={250} className="flex items-center justify-center">
            <p className={styles.paragraph_heading}>
              Архитектурная студия AS Partners
            </p>
          </Fade>
          <Fade delay={250}>
            <Counter
              end={10}
              duration={3}
              text="Лет опыт работы компании"
              marginTop="mt-8"
            />
          </Fade>
          <Fade delay={250}>
            <Counter
              end={400}
              duration={3}
              text="Проектов всего"
              marginTop="mt-8"
            />
          </Fade>
          <Fade delay={250}>
            <Counter
              end={50}
              duration={3}
              text="Выполненных проектов"
              marginTop="mt-8"
            />
          </Fade>
        </section>
      </div>
      <div className="w-full bg-custom-black circle">
        <div className="container-pc" id="more-pc">
          <section className={styles.section_one}>
            <Fade delay={100}>
              <h2 className={`${styles.heading} text-white text-left`}>
                Немного Статистики
              </h2>
            </Fade>
            <Fade delay={150}>
              <Separator marginTop="mt-2" />
            </Fade>
            <Fade delay={200} className="mt-4">
              <UnderText
                label="Данные в цифрах"
                color="text-white"
                marginTop="mt-8"
              />
            </Fade>
            <div className="w-[100%] flex items-center justify-between mt-10">
              <Fade delay={250}>
                <Counter
                  end={10}
                  duration={3}
                  text="Лет Опыта"
                  marginTop="mt-0"
                />
              </Fade>
              <Fade delay={300}>
                <Counter
                  end={50}
                  duration={3}
                  text="Выполненных проектов"
                  marginTop="mt-0"
                />
              </Fade>
            </div>
          </section>
          <section className={styles.section_two}>
            <Fade delay={450}>
              <span className="text-white text-2xl font-bold">
                Архитектурная студия AS Partners
              </span>
            </Fade>
            <Fade delay={500}>
              <p className="paragraph white Noto mt-4 font-light min-[1024px]:w-[80%]">
                Добро пожаловать на сайт AS Partners Architect, вашего надежного
                партнера в мире современной архитектуры и дизайна. Мы
                специализируемся на создании инновационных, функциональных и
                эстетически привлекательных архитектурных решений, которые
                отражают последние тенденции в области урбанистики и дизайна
                интерьеров.
              </p>
            </Fade>
            <Fade delay={250}>
              <img src={map} className="mt-10 mb-20 w-[90%]" alt="map_mobile" />
            </Fade>
          </section>
        </div>
      </div>
    </>
  );
};
