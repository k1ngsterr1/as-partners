import { Separator } from "@shared/ui/Separator";

import about from "@assets/main/about_block_image.webp";

import styles from "./styles.module.scss";
import { Counter } from "@shared/ui/Counter";

export const AboutScreen = () => {
  return (
    <div className={`w-full bg-custom-black ${styles.circle}`}>
      <section className="container">
        <h2 className={styles.heading}>AS & Partners Architect</h2>
        <Separator marginTop="mt-4" />
        <span className={styles.small_text}>Информация о нас</span>
        <p className={styles.paragraph_heading}>
          Архитектурная студия AS Partners
        </p>
        <p className="paragraph mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна. <br /> <br />
        </p>
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
