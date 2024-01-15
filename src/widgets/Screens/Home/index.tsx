import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const HomeScreen = () => {
  return (
    <div className="container">
      <BurgerButton />
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="mt-7">AS & Partners Architect</h1>
      <Separator marginTop="mt-2" />
    </div>
  );
};
