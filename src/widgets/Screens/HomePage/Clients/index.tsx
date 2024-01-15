import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";

export const ClientsScreen = () => {
  return (
    <div className="w-full bg-white">
      <section className="container">
        <h5 className={styles.heading}>Клиенты</h5>
        <Separator marginTop="mt-4" />
        <p className="paragraph_black mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна. Мы специализируемся
          на создании инновационных, функциональных и эстетически
          привлекательных архитектурных решений, которые отражают последние
          тенденции в области урбанистики и дизайна интерьеров.
        </p>
      </section>
    </div>
  );
};
