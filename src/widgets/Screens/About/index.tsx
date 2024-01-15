import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <div className={`w-full bg-custom-black ${styles.circle}`}>
      <div className="container">
        <h2 className={styles.heading}>AS & Partners Architect</h2>
        <Separator marginTop="mt-4" />
        <span className={styles.small_text}>Информация о нас</span>
      </div>
    </div>
  );
};
