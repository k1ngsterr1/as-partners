import { Counter } from "@shared/ui/Counter";
import { Separator } from "@shared/ui/Separator";
import styles from "./styles.module.scss";

export const StatsScreen = () => {
  return (
    <div className={`w-full bg-custom-black ${styles.circle}`}>
      <section className="container">
        <h2 className={styles.heading}>Немного Статистики</h2>
        <Separator marginTop="mt-5 mb-5" />
        <p className={styles.paragraph_heading}>
          Архитектурная студия AS Partners
        </p>
        <Counter
          end={150}
          duration={3}
          text="Проектов всего"
          marginTop="mt-8"
        />
        <Counter
          end={150}
          duration={3}
          text="Проектов всего"
          marginTop="mt-8"
        />
        <Counter
          end={150}
          duration={3}
          text="Проектов всего"
          marginTop="mt-8"
        />
        <Counter
          end={150}
          duration={3}
          text="Проектов всего"
          marginTop="mt-8"
        />
      </section>
    </div>
  );
};
