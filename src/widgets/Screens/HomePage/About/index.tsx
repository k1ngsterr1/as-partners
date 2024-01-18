import { Separator } from "@shared/ui/Separator";
import { Counter } from "@shared/ui/Counter";
import { Slide } from "react-awesome-reveal";

import about from "@assets/main/about_block_image.webp";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <div className={`w-full bg-custom-black ${styles.circle}`}>
      <section className="container">
        <Slide direction="left" triggerOnce>
          <h2 className={styles.heading}>AS & Partners Architect</h2>
        </Slide>
        <Slide direction="right" triggerOnce delay={150}>
          <Separator marginTop="mt-4" />
        </Slide>
        <Slide direction="left" triggerOnce delay={200} className="mt-5">
          <span className={styles.small_text}>Информация о нас</span>
        </Slide>
        <Slide
          direction="right"
          delay={250}
          className="w-full flex justify-center"
          triggerOnce
        >
          <p className={styles.paragraph_heading}>
            Архитектурная студия AS Partners
          </p>
        </Slide>
        <Slide
          direction="left"
          delay={300}
          className="w-full flex justify-center"
          triggerOnce
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
        <img src={about} className={styles.about_image} alt="about_image" />
      </section>
    </div>
  );
};
