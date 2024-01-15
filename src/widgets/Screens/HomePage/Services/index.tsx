import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";

export const ServicesScreen = () => {
  return (
    <div className="w-full bg-white">
      <section className="container">
        <h3 className={styles.heading}>Наши Услуги</h3>
        <Separator marginTop="mt-4" />
      </section>
    </div>
  );
};
