import { ProjectTab } from "@entities/ProjectTab";
import { Button, ButtonWhite } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";

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
    </div>
  );
};
