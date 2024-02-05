import { Separator } from "@shared/ui/Separator";
import { Counter } from "@shared/ui/Counter";
import { Fade, Slide } from "react-awesome-reveal";
import { UnderText } from "@shared/ui/UnderText";

import siemens from "@assets/projects/Siemens/Siemens01.webp";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <div className={`w-full bg-custom-black ${styles.circle}`}>
      <section className="container">
        <Slide direction="left">
          <h2 className={styles.heading}>AS & Partners Architect</h2>
        </Slide>
        <Slide direction="right" delay={150}>
          <Separator marginTop="mt-4" />
        </Slide>
        <Slide direction="left" delay={200} className="mt-5">
          <span className={styles.small_text}>Информация о нас</span>
        </Slide>
        <Slide
          direction="right"
          delay={250}
          className="w-full flex justify-center"
        >
          <p className={styles.paragraph_heading}>
            Архитектурная студия AS Partners
          </p>
        </Slide>
        <Slide
          direction="left"
          delay={300}
          className="w-full flex justify-center"
        >
          <p className="paragraph mt-4">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна. <br /> <br />
          </p>
        </Slide>
        <Counter
          end={150}
          duration={4}
          text="Проектов всего"
          marginTop="mt-0"
        />
        <Counter
          end={400}
          duration={4}
          text="Проектов всего"
          marginTop="mt-8 mb-8"
        />
        <img src={siemens} className={styles.about_image} alt="about_image" />
      </section>
      <section className="container-pc">
        <div className={styles.section_one}>
          <Fade>
            <h2 className={styles.heading}>AS & Partners Architect</h2>
          </Fade>
          <Fade delay={150}>
            <Separator marginTop="mt-5 ml-8" />
          </Fade>
          <Fade delay={200} className="mt-5">
            <UnderText
              label="Информация о нас"
              color="!text-white"
              marginTop="mt-5 ml-8"
            />
          </Fade>
        </div>
        <div className={styles.section_two}>
          <Fade delay={250} className="mt-16">
            <strong className={styles.text}>
              Архитектурная студия AS Partners
            </strong>
          </Fade>
          <Fade delay={300}>
            <p className="paragraph white ml-8 mt-5">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
          </Fade>
          <Fade delay={350}>
            <p className="paragraph white ml-8 mt-5">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных.
            </p>
          </Fade>
          <Fade delay={400}>
            <img src={siemens} className={styles.image} alt="image" />
          </Fade>
        </div>
      </section>
    </div>
  );
};
