import { ProjectTab } from "@entities/ProjectTab";
import { Button, ButtonWhite } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";

export const ProjectsScreen = () => {
  return (
    <div className="w-full bg-custom-black">
      <section className="container">
        <div className={styles.button_row}>
          <ButtonWhite text="Архитектурные решения" margin="mt-0" />
          <ButtonWhite text="Дизайн Интерьера" margin="mt-0" />
        </div>
        <h4 className={styles.heading}>Проекты</h4>
        <Separator marginTop="mt-4" />
        <p className="paragraph mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна. Мы специализируемся
          на создании инновационных, функциональных и эстетически
          привлекательных архитектурных решений, которые отражают последние
          тенденции в области урбанистики и дизайна интерьеров.
        </p>
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <ProjectTab text="Пример проекта" margin="mt-8" />
        <Button text="Все проекты" margin="mt-4" />
      </section>
    </div>
  );
};
