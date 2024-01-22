import { ProjectTab } from "@entities/ProjectTab";
import { ButtonWhite } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";

import image from "@assets/services/services.webp";

import styles from "./styles.module.scss";

export const ProjectsScreen = () => {
  return (
    <div className="w-full bg-custom-black">
      <section className="container">
        <div className={styles.button_row}>
          <ButtonWhite text="Архитектурные решения" margin="mt-8 mb-4" />
          <ButtonWhite text="Дизайн Интерьера" margin="mt-5 mb-4" />
        </div>
        <h4 className={styles.heading}>Проекты</h4>
        <Separator marginTop="mt-4" />
        <p className="paragraph mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна.
        </p>
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <ButtonWhite text="Все проекты" margin="mt-8 mb-8" />
      </section>
      <section className="container-pc">
        <div className={styles.section_one}>
          <h4 className={`${styles.heading} ml-8`}>Проекты</h4>
          <Separator marginTop="mt-5 ml-8" />
          <p className="paragraph white mt-7 ml-8">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна. Мы
            специализируемся на создании инновационных, функциональных и
            эстетически привлекательных архитектурных решений, которые отражают
            последние тенденции в области урбанистики и дизайна интерьеров.
          </p>
          <ButtonWhite text="Все проекты" margin="ml-8" />
        </div>
        <div className={styles.section_two}>
          <img
            className={`${styles.image} mt-8`}
            src={image}
            alt="service_image"
          />
          <img
            className={`${styles.image} mt-8`}
            src={image}
            alt="service_image"
          />
          <img
            className={`${styles.image} mt-8 mb-8`}
            src={image}
            alt="service_image"
          />
        </div>
      </section>
    </div>
  );
};
