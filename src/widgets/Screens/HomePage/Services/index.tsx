import { ServiceTab } from "@entities/ServiceTab";
import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";
import { Button } from "@shared/ui/Button";

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
    </div>
  );
};
